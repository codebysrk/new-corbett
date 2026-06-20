import { Room, Amenity, Review, MenuItem, UpgradePackage } from './types';

export const ROOMS: Room[] = [
  {
    id: 'room-deluxe',
    name: 'Deluxe Jungle Cottage',
    description: 'Designed with premium quality standards, our Deluxe Jungle Cottages offer a majestic jungle holiday experience. Nestled among towering trees, each cottage combines beautiful wooden elements, a spacious king-size maharaja bed, air-conditioning, custom forest-facing balconies, and state-of-the-art facilities.',
    size: '55 m² / 590 sqft',
    maxGuests: 3,
    bedType: 'Royal Maharaja Bed',
    view: 'Lush Forest Canopy & Garden',
    pricePerNight: 120,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['In-room Coffee Station', 'Premium Pillow Menu', 'Organic Ayurvedic Bath Amenities', 'Complimentary High-speed Wi-Fi', 'Private Verandah Lounge'],
    rating: 4.85,
    features: ['Private Outdoor Verandah', 'Spacious Forest-View Bathroom', 'Turn-down Service'],
    type: 'deluxe'
  },
  {
    id: 'room-family-couple',
    name: 'Family & Couple Wilderness Cottage',
    description: 'Designed specifically for unforgettable couple getaways and happy family gatherings, our luxurious Family & Couple Cottages showcase impressive wooden cathedral ceilings and massive panoramic glass panels. These suites come equipped with two comfy king beds, private outdoor decks, and direct paths to tiger tracking forest borders.',
    size: '95 m² / 1,020 sqft',
    maxGuests: 4,
    bedType: '2 Grand Emperor Beds',
    view: 'Scenic Jhirna Woodlands',
    pricePerNight: 190,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Botanical Tea Basket', 'Bose Surround Audio', 'Dedicated Travel Host', 'Turn-down Bonfire Service', 'Premium Fleece Robes'],
    rating: 4.95,
    features: ['Double-Decker Balcony', 'Himalayan Stone Fireplace', 'Direct Wilderness Path Access'],
    type: 'family-couple'
  },
  {
    id: 'room-premium',
    name: 'Premium Forest Pool Cottage',
    description: 'The absolute flagship sanctuary at Corbett Treat Resort. Features a gorgeous sun-drenched stone patio, a private heated dip pool, and a luxury thatch-roofed cabana surrounded by old-growth forest. Perfect for individuals wanting total wilderness privacy combined with ultra-premium amenities.',
    size: '150 m² / 1,610 sqft',
    maxGuests: 4,
    bedType: '2 Royal Canopy Beds',
    view: 'Lush Forest & Wild Brook',
    pricePerNight: 280,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['VIP Jungle Safari Escort', 'Privately Heated Dip Pool', 'Unlimited Spa & Massage Access', 'Premium Wildlife Binoculars', 'Custom Night-Sky Astronomy Guide'],
    rating: 5.0,
    features: ['Heated Pool & Thatch Cabana', 'Under-the-stars Fireplace', 'Floor-to-ceiling Forest Windows'],
    type: 'premium'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'amenity-safari',
    name: 'Authentic Jeep Safaris',
    description: 'Embark on thrilling jungle drives in open 4x4 gypsies through Jim Corbett Reserve zones for chance sightings of Royal Bengal Tigers, leopards, and Asiatic elephants.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80',
    highlight: 'Dhela & Jhirna Zone Access'
  },
  {
    id: 'amenity-pool',
    name: 'Wildwood Oasis Pool',
    description: 'Unwind inside our shimmering stone-lined swimming pool bordered by native sal canopies, absolute silence, and cozy poolside chaise lounges.',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    highlight: 'Bordering Lush Sal Forest Reserves'
  },
  {
    id: 'amenity-dining',
    name: 'The Shivalik Wild Bistro',
    description: 'Dine under towering wooden rafters or under the star-studded forest sky, enjoying local Kumaoni delicacies, smoky charcoal kebabs, and continental treats.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    highlight: 'Organic Farm-to-Table Kumaoni Plates'
  },
  {
    id: 'amenity-birding',
    name: 'Nature Walks & Birding Trails',
    description: 'Explore wilderness foot-trails along village farmlands and forested riverbeds with our expert resident naturalist, spotting exotic Himalayan bird species.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    highlight: 'Over 150 Spotted Avian Species'
  },
  {
    id: 'amenity-spa',
    name: 'AyurVeda Forest Spa',
    description: 'Restore your natural alignment with authentic Himalayan herbal massages, deep-tissue treatments, and steam chambers using homegrown organic jasmine and eucalyptus oils.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    highlight: 'Verandah Shanti Steam Therapies'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: 'Aditya & Riya Malhotra',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    date: 'May 2026',
    comment: 'An absolutely magical birthday holiday. Staying in the Luxury Jungle Cottage felt like we had crawled straight into a warm woodland nest, but with top-class five-star luxury. Spotting a beautiful tigress on our morning safari through the Jhirna Zone was a core memory, capped by a magical bonfire dinner prepared by the resort staff on our return. Unmatched hospitality!',
    stayType: 'Nature Escape'
  },
  {
    id: 'review-2',
    name: 'Dr. Evelyn Foster',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    date: 'April 2026',
    comment: 'The tranquility of Corbett Treat Resort is truly divine. I spent my days birdwatching in the orchards, cooling off in the sparkling pool, and being pampered with hot stone Ayurvedic massage at the forest spa. The Kumaoni traditional chicken curry and local mandua rotis were phenomenal. Already booking my autumn writing retreat here.',
    stayType: 'Solo Wellness Holiday'
  },
  {
    id: 'review-3',
    name: 'The Kapoor Family',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    date: 'June 2026',
    comment: 'Our corporate retreat of 24 delegates was flawlessly handled. The open-air lawn area served as spectacular venues for our strategic roundtables by day and musical bonfires under the Himalayan stars by night. The rooms are incredibly spacious, perfectly serviced, and set against absolute wild beauty. Highly recommended corporate destination.',
    stayType: 'Corporate Retreat'
  }
];

export const DINING_MENU: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Crisp Mandua Rotis & Gahat Ki Dal',
    price: 18,
    description: 'Rustic roasted nutrient-rich finger millet flatbreads served with slow-cooked organic black gram lentils, flavored with local jambu mountain herbs.',
    category: 'breakfast',
    tag: 'Kumaoni Special'
  },
  {
    id: 'm-2',
    name: 'Wild Honey & Spelt Pancakes',
    price: 16,
    description: 'Fresh heritage grain griddle cakes topped with wood-harvested wild Corbett forest honey, clean organic walnuts, and dollops of fresh churned white butter.',
    category: 'breakfast',
    tag: 'Forest Bounty'
  },
  {
    id: 'm-3',
    name: 'Bhura Organic Farm Egg Shakshuka',
    price: 20,
    description: 'Free-range country eggs gently poached in a rich reduction of direct orchard-fresh tomatoes, roasted wild cumin, fresh hot green peppers, and native coriander leaves.',
    category: 'breakfast'
  },
  {
    id: 'm-4',
    name: 'Kumaon Shikar Chicken Curry',
    price: 28,
    description: 'Tender country-farm chicken slow-simmered in a beautiful iron wok with black cardamoms, roasted bay leaves, stone-ground mountain-spices, and rich gravy.',
    category: 'lunch-dinner',
    tag: 'Heritage Signature'
  },
  {
    id: 'm-5',
    name: 'Charcoal Roasted Wild Forest Kebabs',
    price: 24,
    description: 'Slices of marinated cottage cheese or minced lean mutton cooked over embers of pine wood, seasoned with hand-rubbed mountain thyme and lime zest.',
    category: 'lunch-dinner',
    tag: 'Embers Grill'
  },
  {
    id: 'm-6',
    name: 'Himalayan River Trout with Herbs',
    price: 32,
    description: 'Freshly-caught mountain trout seasoned with native wild mint, pink salt, parched mustard seeds, baked in banana leaves for beautiful, delicate aromas.',
    category: 'lunch-dinner',
    tag: 'Fresh Catch'
  },
  {
    id: 'm-7',
    name: 'Organic Pahadi Jhangora Kheer',
    price: 14,
    description: 'A luxurious Indian dessert of wild barnyard millet slow-reduced in high cream milk, sweetened with native organic jaggery and loaded with pine-nuts and pistachios.',
    category: 'dessert',
    tag: 'Sweet Wilderness'
  },
  {
    id: 'm-8',
    name: 'Bhang Ki Chutney & Crispy Pahadi Aloo',
    price: 12,
    description: 'Gold baby potatoes roasted in local mustard oil and spiced with fenugreek seeds, served alongside tangy dip crafted from organic roasted hemp-seeds and lemons.',
    category: 'lunch-dinner'
  },
  {
    id: 'm-9',
    name: 'Caramelized Woodfire Apple Tartlet',
    price: 16,
    description: 'Fragrant butter pastry shell with sweet apple segments harvested from adjacent Ramgarh hillside orchards, baked until perfectly caramelized, topped with cold cream.',
    category: 'dessert'
  }
];

export const UPGRADE_PACKAGES: UpgradePackage[] = [
  {
    id: 'pack-safari',
    name: 'Exclusive 4x4 Private Jeep Safari Booking',
    price: 95,
    description: 'Upgrade to a completely private open-top 4x4 Gypsy with a senior certified naturalist guide, custom-tailored timings, and permit fees pre-cleared for prime Corbett zones.',
    iconName: 'Compass',
    type: 'per-stay'
  },
  {
    id: 'pack-bonfire',
    name: 'Private Orchard Candlelight & Bonfire Dinner',
    price: 120,
    description: 'A beautifully isolated table setup inside our mango orchards under fairy lights. Generates romantic ambiance with a personal chef, custom acoustic music, and a warm private bonfire.',
    iconName: 'Sparkles',
    type: 'per-stay'
  },
  {
    id: 'pack-naturalist',
    name: 'Personal Naturalist Escort (8 Hours)',
    price: 60,
    description: 'Have a veteran wildlife guide at your disposal for dedicated tracking, mountain bird-potting walks, village exploration history, and private evening wildlife slides/briefings.',
    iconName: 'User',
    type: 'per-day'
  },
  {
    id: 'pack-spa',
    name: 'Unlimited Ayurvedic Forest Massage package',
    price: 140,
    description: 'Indulge in absolute wellness with daily 90-minute couples or solo Ayurvedic full-body therapies with choice wild-botanical oils. Includes Private steam bath rituals.',
    iconName: 'Gem',
    type: 'per-day'
  }
];
