import React, { useState, useEffect } from 'react';
import { ROOMS, UPGRADE_PACKAGES } from '../data';
import { Booking, Room } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Briefcase, ChevronRight, Check, Compass, Printer, ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import ResortLogo from './ResortLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  currency: string;
}

export default function BookingModal({ isOpen, onClose, preselectedRoomId, currency }: BookingModalProps) {
  // Booking status state
  const [step, setStep] = useState<1 | 2>(1); // 1: Formulation, 2: Receipt/Confirmed
  const [invoice, setInvoice] = useState<Booking | null>(null);

  // Form inputs
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const day = new Date();
    day.setDate(day.getDate() + 4);
    return day.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  const [kidsAges, setKidsAges] = useState<string[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Update room selection when prop triggers
  useEffect(() => {
    if (preselectedRoomId) {
      setSelectedRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId]);

  if (!isOpen) return null;

  const handleKidsChange = (count: number) => {
    setKids(count);
    setKidsAges((prev) => {
      const updated = [...prev];
      if (updated.length < count) {
        while (updated.length < count) {
          updated.push('Below 6'); // Default kid age is Below 6
        }
      } else {
        updated.splice(count);
      }
      return updated;
    });
  };

  // Selected Room entity
  const room = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Price conversion rules helper
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'EUR': return '€';
      case 'GBP': return '£';
      case 'USD':
      default: return '$';
    }
  };

  const getConvertedPriceValue = (valueInUSD: number) => {
    switch (currency) {
      case 'EUR': return Math.round(valueInUSD * 0.92);
      case 'GBP': return Math.round(valueInUSD * 0.79);
      case 'USD':
      default: return valueInUSD;
    }
  };

  // Date range nights counter
  const differenceInTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  const numNights = Math.max(1, Math.ceil(differenceInTime / (1000 * 3600 * 24)));

  // Package pricing adder
  const getPackagePrice = (pkgId: string) => {
    const pkg = UPGRADE_PACKAGES.find((p) => p.id === pkgId);
    if (!pkg) return 0;
    
    let price = pkg.price;
    if (pkg.type === 'per-day') {
      price = price * numNights;
    } else if (pkg.type === 'per-person') {
      price = price * (guests + kids);
    }
    return price;
  };

  const totalPackagesCost = selectedPackages.reduce((acc, curr) => acc + getPackagePrice(curr), 0);
  const totalRoomNightsCost = room.pricePerNight * numNights;
  const taxRate = 0.12; // 12% Luxury occupancy excise tax
  const subtotalUSD = totalRoomNightsCost + totalPackagesCost;
  const taxesUSD = subtotalUSD * taxRate;
  const grandTotalUSD = subtotalUSD + taxesUSD;

  const handlePackageToggle = (pkgId: string) => {
    setSelectedPackages((prev) =>
      prev.includes(pkgId) ? prev.filter((id) => id !== pkgId) : [...prev, pkgId]
    );
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const invoiceNum = `INV-CORBETT-${Math.floor(Math.random() * 900000 + 100000)}`;
    const newBooking: Booking = {
      roomId: room.id,
      roomName: room.name,
      checkIn,
      checkOut,
      guests,
      roomPrice: room.pricePerNight,
      selectedPackages,
      taxRate: 12,
      subtotal: subtotalUSD,
      total: grandTotalUSD,
      guestName,
      guestEmail,
      guestPhone,
      specialRequests,
      invoiceNumber: invoiceNum,
      kids,
      kidsAges
    };

    setInvoice(newBooking);
    setStep(2);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetAllAndClose = () => {
    setStep(1);
    setInvoice(null);
    setSelectedPackages([]);
    setGuestName('');
    setGuestEmail('');
    setGuestPhone('');
    setSpecialRequests('');
    setKids(0);
    setKidsAges([]);
    onClose();
  };

  return (
    <>
      {/* Premium Backdrop Overlay with Luxury Soft Blur */}
      <div className="fixed inset-0 bg-neutral-900/85 backdrop-blur-sm z-50 overflow-y-auto flex items-start justify-center p-3 sm:p-4">
        
        {/* Main Luxury Modal Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.99 }}
          className="relative bg-white rounded-none w-full max-w-2xl shadow-[0_25px_60px_-15px_rgba(180,142,72,0.25)] border border-gold-200 overflow-hidden my-6 sm:my-10"
        >
          {/* Accent Gold Ribbon at the very top */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 z-10" />

          {/* Header Panel with classic dark luxury board layout */}
          <div className="bg-[#1d1d1d] text-white p-6 sm:p-8 flex items-center justify-between border-b border-gold-500/20 relative">
            <div className="flex items-center space-x-4 sm:space-x-5">
              <div className="p-2 border border-gold-400/30 bg-neutral-900/50">
                <ResortLogo className="w-8 h-8 text-gold-400 shrink-0 opacity-95" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[9px] tracking-[0.3em] text-gold-400 font-bold uppercase leading-none">CORBETT TREAT RESORT</p>
                <h2 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mt-2">
                  {step === 1 ? 'Sanctuary Reservation Portal' : 'Exclusive Stay Memorandum'}
                </h2>
              </div>
            </div>

            <button
              onClick={resetAllAndClose}
              className="text-gold-300 hover:text-white transition-all bg-white/5 hover:bg-gold-500/20 rounded-none p-2 w-9 h-9 flex items-center justify-center border border-gold-400/20 hover:border-gold-400/40"
              title="Close portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              /* ================= STEP 1: RESORT DETAILS BUILDER ================= */
              <motion.form
                key="step-formulation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmitBooking}
                className="w-full"
              >
                {/* Main Content Area */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto w-full scrollbar">
                  
                  {/* Step Area 1: Sanctuary Choice */}
                  <div className="space-y-4 bg-gold-50/20 border border-gold-100 p-5 sm:p-6 shadow-xs">
                    <h3 className="font-serif text-md sm:text-lg font-light tracking-wide text-neutral-800 pb-2 border-b border-gold-200/60 flex items-center gap-2.5">
                      <span className="w-5 h-5 bg-[#232323] text-gold-300 text-[9px] rounded-none flex items-center justify-center font-sans font-extrabold border border-gold-400/20">1</span>
                      Select Sanctuary & Dates
                    </h3>
                    
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5">Lodge / Cottage Selection</label>
                      <div className="relative">
                        <select
                          value={selectedRoomId}
                          onChange={(e) => setSelectedRoomId(e.target.value)}
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none pl-4 pr-10 py-3 text-xs text-neutral-800 font-semibold focus:outline-none cursor-pointer appearance-none"
                        >
                          {ROOMS.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.name} — Room Max {r.maxGuests} Active Guests
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold-500">
                          <Compass className="w-4 h-4 animate-spin-slow" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-1">
                      {/* Arrival Calendar */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold-400" /> Check-In
                        </label>
                        <input
                          type="date"
                          required
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-3 py-2.5 text-xs text-neutral-800 focus:outline-none cursor-pointer"
                        />
                      </div>

                      {/* Departure Calendar */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold-400" /> Check-Out
                        </label>
                        <input
                          type="date"
                          required
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || new Date().toISOString().split('T')[0]}
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-3 py-2.5 text-xs text-neutral-800 focus:outline-none cursor-pointer"
                        />
                      </div>

                      {/* Active Adults */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5 flex items-center gap-1">
                          <Users className="w-3 h-3 text-gold-400" /> Adults
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-3 py-2.5 text-xs text-neutral-800 focus:outline-none cursor-pointer"
                        >
                          <option value={1}>1 Adult</option>
                          <option value={2}>2 Adults</option>
                          <option value={3}>3 Adults</option>
                          <option value={4}>4 Adults</option>
                          <option value={5}>5 Adults</option>
                          <option value={6}>6 Adults</option>
                        </select>
                      </div>

                      {/* Active Kids */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5 flex items-center gap-1">
                          <Users className="w-3 h-3 text-gold-400" /> Kids
                        </label>
                        <select
                          value={kids}
                          onChange={(e) => handleKidsChange(parseInt(e.target.value))}
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-3 py-2.5 text-xs text-neutral-800 focus:outline-none cursor-pointer"
                        >
                          <option value={0}>No Kids</option>
                          <option value={1}>1 Kid</option>
                          <option value={2}>2 Kids</option>
                          <option value={3}>3 Kids</option>
                          <option value={4}>4 Kids</option>
                        </select>
                      </div>
                    </div>

                    {/* Dynamic Kids Ages Input Panels */}
                    {kids > 0 && (
                      <div className="pt-3 border-t border-gold-200/40 mt-2 space-y-3 animate-fade-in bg-gold-50/50 p-4 border border-dashed border-gold-200">
                        <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                          Kid Age Filters (Bespoke Sizing Verification)
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {Array.from({ length: kids }).map((_, index) => (
                            <div key={index}>
                              <label className="block text-[8px] uppercase tracking-wider text-gold-600 font-semibold mb-1">Kid {index + 1} Sizing</label>
                              <select
                                required
                                value={kidsAges[index] || 'Below 6'}
                                onChange={(e) => {
                                  const updated = [...kidsAges];
                                  updated[index] = e.target.value;
                                  setKidsAges(updated);
                                }}
                                className="w-full bg-white border border-gold-200 focus:border-gold-400 rounded-none px-2 py-2 text-xs text-neutral-800 focus:ring-0 focus:outline-none cursor-pointer"
                              >
                                <option value="Below 6">Below 6 years</option>
                                <option value="Above 6">Above 6 years</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step Area 2: Guest Details */}
                  <div className="space-y-4 bg-gold-50/20 border border-gold-100 p-5 sm:p-6 shadow-xs">
                    <h3 className="font-serif text-md sm:text-lg font-light tracking-wide text-neutral-800 pb-2 border-b border-gold-200/60 flex items-center gap-2.5">
                      <span className="w-5 h-5 bg-[#232323] text-gold-300 text-[9px] rounded-none flex items-center justify-center font-sans font-extrabold border border-gold-400/20">2</span>
                      Primary Guest Profile
                    </h3>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5">Full Guest Name</label>
                        <input
                          type="text"
                          required
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          placeholder="e.g. Duke Arthur Sterling"
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-4 py-3 text-xs placeholder-gold-300/70 text-neutral-800 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Contact Line & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5">Email Registry</label>
                          <input
                            type="email"
                            required
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            placeholder="e.g. sterling@castle.com"
                            className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-4 py-3 text-xs placeholder-gold-300/70 text-neutral-800 focus:outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5">Contact/Mobile Line</label>
                          <input
                            type="tel"
                            required
                            value={guestPhone}
                            onChange={(e) => setGuestPhone(e.target.value)}
                            placeholder="e.g. +91 98765 43210"
                            className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-4 py-3 text-xs placeholder-gold-300/70 text-neutral-800 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Message Input */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.18em] text-gold-600 font-bold mb-1.5">Special Dietary / Safari Requests</label>
                        <textarea
                          rows={3}
                          required
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          placeholder="Your questions, custom bedding preferences, allergy alerts, or custom safari request details..."
                          className="w-full bg-white border border-gold-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300/20 rounded-none px-4 py-3 text-xs placeholder-gold-300/70 text-neutral-800 focus:outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resort Direct Reservation Booking Notice & Submit Button */}
                  <div className="pt-6 border-t border-gold-200/50 space-y-4">
                    <div className="bg-gold-50/50 border border-gold-200/60 p-4 rounded-none text-xs text-gold-800 leading-relaxed font-light">
                      <p className="text-[9px] uppercase font-bold text-gold-500 tracking-[0.15em] mb-1">Direct Verification Protocol</p>
                      Our resort operates on a bespoke direct-reservation system. No immediate payment is required. Once you submit this request, our hospitality representatives will verify real-time availability and email your customized stay quotation.
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1c1c1c] hover:bg-gold-500 text-white font-bold text-[10px] tracking-[0.3em] uppercase py-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md border border-transparent cursor-pointer"
                      id="btn-confirm-secure-booking"
                    >
                      <Briefcase className="w-4 h-4 text-gold-300" />
                      <span>Send Stay Enquiry Request</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <p className="text-[9px] text-center text-gold-600 font-light tracking-wide">
                      No charge applied. Corbett Treat Resort concierge desk handles final allocations directly.
                    </p>
                  </div>
                </div>
              </motion.form>
            ) : (
              /* ================= STEP 2: STRIKING COMMUNIQUE BILL RECEIPT ================= */
              <motion.div
                key="step-receipt"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto bg-neutral-50/30"
                id="invoice-receipt-panel"
              >
                {/* Visual success top banner */}
                <div className="text-center space-y-3 pb-8 border-b border-gold-200/80">
                  <div className="w-16 h-16 bg-white text-gold-500 rounded-none flex items-center justify-center mx-auto border border-gold-300 shadow-md">
                    <Check className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-neutral-800 tracking-wide font-light">Stay Request Communicated</h3>
                  <p className="text-xs text-neutral-600 max-w-lg mx-auto font-light leading-relaxed">
                    Thank you. Your luxury stay enquiry has been successfully logged with our Front Desk. A boutique reservation representative will reach out with customized tariff allocations shortly.
                  </p>
                </div>

                {/* Printable invoice card sheet */}
                <div className="bg-white border border-gold-200/85 p-6 sm:p-8 mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 relative shadow-md overflow-hidden media-print-white" id="invoice-sheet">
                  {/* Subtle Gold watermark */}
                  <div className="absolute right-6 top-6 opacity-[0.04] hidden sm:block">
                    <ResortLogo className="w-48 h-48" />
                  </div>

                  {/* Left Segment */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-1">
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold block">INQUIRY MEMORANDUM</span>
                      <p className="font-serif text-xl font-light text-neutral-900 leading-none">CORBETT TREAT RESORT</p>
                      <p className="text-[9px] text-gold-600 font-light mt-1">Coordinates: Village Dhela, Ramnagar, Uttarakhand (Near Dhela Zone)</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-neutral-700 font-light pt-2">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold">Proposed Tenant</p>
                        <p className="font-semibold text-neutral-800 mt-1">{invoice?.guestName}</p>
                        <p className="text-[11px] text-neutral-500 flex items-center gap-1.5 mt-2 overflow-hidden text-ellipsis">
                          <Mail className="w-3.5 h-3.5 shrink-0 text-gold-400" /> {invoice?.guestEmail}
                        </p>
                        <p className="text-[11px] text-neutral-500 flex items-center gap-1.5 mt-1">
                          <Phone className="w-3.5 h-3.5 shrink-0 text-gold-400" /> {invoice?.guestPhone}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold">Sanctuary Details</p>
                        <p className="font-semibold text-neutral-800 mt-1">{invoice?.roomName}</p>
                        <p className="text-[11px] text-neutral-500 mt-2">Adult Capacity: {invoice?.guests}</p>
                        {invoice?.kids && invoice.kids > 0 ? (
                          <p className="text-[11px] text-neutral-500 mt-0.5">Kids Sizing: {invoice.kids} (Ages: {invoice.kidsAges?.join(', ')})</p>
                        ) : null}
                        <p className="text-[11px] text-neutral-500 mt-0.5">Bed Type: {room.bedType}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-gold-200/60 py-4 text-xs text-neutral-700 font-light">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold block">Planned Arrival</span>
                        <p className="font-bold text-neutral-800 mt-1">{invoice?.checkIn}</p>
                        <p className="text-[9px] text-neutral-400">From 15:00 PM</p>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold block">Planned Departure</span>
                        <p className="font-bold text-neutral-800 mt-1">{invoice?.checkOut}</p>
                        <p className="text-[9px] text-neutral-400">By 11:00 AM</p>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold block">Stay Duration</span>
                        <p className="font-bold text-neutral-800 mt-1">{numNights} Night{numNights > 1 && 's'}</p>
                        <p className="text-[9px] text-neutral-400">Customized rate tier</p>
                      </div>
                    </div>

                    {invoice?.specialRequests && (
                      <div className="bg-gold-50/10 border border-gold-150 p-4 rounded-none text-xs space-y-1.5">
                        <span className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold block">Special Notes & Safari Logs</span>
                        <p className="text-neutral-600 italic font-light leading-relaxed">"{invoice.specialRequests}"</p>
                      </div>
                    )}
                  </div>

                  {/* Right Segment - Status Card */}
                  <div className="md:col-span-5 bg-neutral-50 border border-gold-100 rounded-none p-5 sm:p-6 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start border-b border-gold-200/50 pb-3">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.15em] text-gold-500 font-bold">Enquiry Ref</p>
                          <p className="font-mono text-xs font-bold text-neutral-800 mt-1">{invoice?.invoiceNumber?.replace('INV-', 'REQ-')}</p>
                        </div>
                        <span className="bg-gold-50 text-gold-600 text-[8px] tracking-wider uppercase font-bold px-2.5 py-1 border border-gold-300">SUBMITTED</span>
                      </div>

                      {/* Stay inclusions summary */}
                      <div className="space-y-3 text-xs text-neutral-600 font-light">
                        <p className="text-[9px] uppercase font-bold text-gold-600 tracking-wider">Stay Inclusions</p>
                        <div className="flex justify-between pl-1">
                          <span className="font-semibold text-neutral-800">↳ {room.name}</span>
                          <span className="font-semibold text-gold-600">Selected</span>
                        </div>

                        {selectedPackages.length > 0 && (
                          <div className="space-y-2 mt-3 pt-3 border-t border-gold-100">
                            <p className="text-[9px] uppercase font-bold text-gold-600 tracking-wider">Requested Upgrades</p>
                            {selectedPackages.map((pkgId) => {
                              const pkg = UPGRADE_PACKAGES.find((p) => p.id === pkgId);
                              return (
                                <div key={pkgId} className="flex justify-between text-[11px] pl-1 font-normal">
                                  <span>↳ {pkg?.name.split(' ').slice(1).join(' ') || 'Upgrade'}</span>
                                  <span className="text-gold-500 font-semibold">Enquired</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Simple follow up block */}
                    <div className="pt-4 border-t border-gold-200/50 mt-4 text-center space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" /> Concierge Dispatch
                      </span>
                      <p className="text-[10px] text-neutral-600 font-light leading-relaxed">
                        A boutique specialist will review this request and reply with custom pricing structures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Receipt Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gold-200/80">
                  <button
                    onClick={() => setStep(1)}
                    className="text-[9px] tracking-widest uppercase text-gold-500 hover:text-neutral-800 font-bold flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to details form</span>
                  </button>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={handlePrint}
                      className="flex-1 sm:flex-none border border-gold-300 hover:bg-gold-50/50 text-gold-600 text-[9px] tracking-[0.2em] uppercase font-bold px-6 py-3.5 rounded-none flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Voucher</span>
                    </button>
                    <button
                      onClick={resetAllAndClose}
                      className="flex-1 sm:flex-none bg-[#1d1d1d] hover:bg-gold-500 text-white transition-all text-[9px] tracking-[0.2em] uppercase font-bold px-8 py-3.5 rounded-none flex items-center justify-center cursor-pointer"
                    >
                      <span>Complete Session</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
