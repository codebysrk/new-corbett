export interface Room {
  id: string;
  name: string;
  description: string;
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  pricePerNight: number;
  image: string;
  gallery: string[];
  amenities: string[];
  rating: number;
  features: string[];
  type: 'deluxe' | 'family-couple' | 'premium';
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  highlight: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  stayType: string; // e.g., 'Honeymoon Stay', 'Weekend Getaway'
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'breakfast' | 'lunch-dinner' | 'dessert' | 'wine-cellar';
  tag?: string;
}

export interface UpgradePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
  type: 'per-person' | 'per-stay' | 'per-day';
}

export interface Booking {
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomPrice: number;
  selectedPackages: string[];
  taxRate: number;
  subtotal: number;
  total: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  invoiceNumber: string;
  mealPlan?: string;
  kids?: number;
  kidsAges?: string[];
}
