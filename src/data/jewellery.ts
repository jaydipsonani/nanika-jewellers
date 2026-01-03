export interface JewellerySpecs {
  metalType: string;
  metalPurity: string;
  metalWeight: number; // in grams
  diamondWeight?: number; // in carats
  diamondClarity?: string;
  diamondColor?: string;
  diamondCount?: number;
  size?: string;
  hallmark: boolean;
  certification?: string;
}

export interface JewelleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  gender: string;
  material: string;
  occasion: string;
  totalPrice: number;
  priceBreakup: {
    goldPrice: number;
    diamondPrice: number;
    makingCharges: number;
    gst: number;
  };
  specs: JewellerySpecs;
  inStock: boolean;
}

export const jewelleryItems: JewelleryItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    title: "Eternal Love Solitaire",
    description: "A stunning 18K gold ring featuring a brilliant round-cut diamond, perfect for proposals.",
    category: "ring",
    gender: "female",
    material: "diamond",
    occasion: "wedding",
    totalPrice: 185000,
    priceBreakup: {
      goldPrice: 45000,
      diamondPrice: 120000,
      makingCharges: 14620,
      gst: 5380,
    },
    specs: {
      metalType: "Gold",
      metalPurity: "18K",
      metalWeight: 4.5,
      diamondWeight: 0.75,
      diamondClarity: "VS1",
      diamondColor: "F",
      diamondCount: 1,
      size: "6-12 (Adjustable)",
      hallmark: true,
      certification: "IGI Certified",
    },
    inStock: true,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    title: "Royal Drop Earrings",
    description: "Elegant dangling earrings crafted with premium platinum and natural diamonds.",
    category: "earring",
    gender: "female",
    material: "platinum",
    occasion: "party",
    totalPrice: 245000,
    priceBreakup: {
      goldPrice: 0,
      diamondPrice: 180000,
      makingCharges: 57850,
      gst: 7150,
    },
    specs: {
      metalType: "Platinum",
      metalPurity: "950",
      metalWeight: 8.2,
      diamondWeight: 1.2,
      diamondClarity: "VVS2",
      diamondColor: "E",
      diamondCount: 14,
      hallmark: true,
      certification: "GIA Certified",
    },
    inStock: true,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    title: "Classic Gold Band",
    description: "A timeless 22K gold band with subtle engraving, ideal for everyday elegance.",
    category: "ring",
    gender: "male",
    material: "gold",
    occasion: "daily-wear",
    totalPrice: 48000,
    priceBreakup: {
      goldPrice: 42000,
      diamondPrice: 0,
      makingCharges: 4600,
      gst: 1400,
    },
    specs: {
      metalType: "Gold",
      metalPurity: "22K",
      metalWeight: 6.8,
      size: "8-14",
      hallmark: true,
      certification: "BIS Hallmarked",
    },
    inStock: true,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    title: "Celestial Pendant",
    description: "Star-shaped pendant in white gold adorned with brilliant-cut diamonds.",
    category: "pendant",
    gender: "unisex",
    material: "diamond",
    occasion: "party",
    totalPrice: 125000,
    priceBreakup: {
      goldPrice: 35000,
      diamondPrice: 75000,
      makingCharges: 11360,
      gst: 3640,
    },
    specs: {
      metalType: "White Gold",
      metalPurity: "18K",
      metalWeight: 3.8,
      diamondWeight: 0.45,
      diamondClarity: "VS2",
      diamondColor: "G",
      diamondCount: 7,
      hallmark: true,
      certification: "IGI Certified",
    },
    inStock: false,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    title: "Heritage Tennis Bracelet",
    description: "Luxurious platinum bracelet featuring a continuous line of perfectly matched diamonds.",
    category: "bracelet",
    gender: "female",
    material: "platinum",
    occasion: "wedding",
    totalPrice: 385000,
    priceBreakup: {
      goldPrice: 0,
      diamondPrice: 320000,
      makingCharges: 53770,
      gst: 11230,
    },
    specs: {
      metalType: "Platinum",
      metalPurity: "950",
      metalWeight: 15.5,
      diamondWeight: 3.2,
      diamondClarity: "VVS1",
      diamondColor: "D",
      diamondCount: 42,
      size: "7 inches",
      hallmark: true,
      certification: "GIA Certified",
    },
    inStock: true,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80",
    title: "Minimalist Studs",
    description: "Simple yet elegant gold studs perfect for daily wear and office settings.",
    category: "earring",
    gender: "female",
    material: "gold",
    occasion: "daily-wear",
    totalPrice: 28000,
    priceBreakup: {
      goldPrice: 22000,
      diamondPrice: 0,
      makingCharges: 5180,
      gst: 820,
    },
    specs: {
      metalType: "Gold",
      metalPurity: "18K",
      metalWeight: 2.4,
      hallmark: true,
      certification: "BIS Hallmarked",
    },
    inStock: true,
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80",
    title: "Men's Diamond Ring",
    description: "Bold platinum ring with embedded diamond accents, designed for the modern gentleman.",
    category: "ring",
    gender: "male",
    material: "diamond",
    occasion: "wedding",
    totalPrice: 165000,
    priceBreakup: {
      goldPrice: 55000,
      diamondPrice: 90000,
      makingCharges: 15190,
      gst: 4810,
    },
    specs: {
      metalType: "Platinum",
      metalPurity: "950",
      metalWeight: 9.5,
      diamondWeight: 0.5,
      diamondClarity: "VS1",
      diamondColor: "F",
      diamondCount: 5,
      size: "10-16",
      hallmark: true,
      certification: "IGI Certified",
    },
    inStock: true,
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&q=80",
    title: "Chain Link Bracelet",
    description: "Chunky 22K gold chain bracelet with a polished finish, perfect for statement looks.",
    category: "bracelet",
    gender: "unisex",
    material: "gold",
    occasion: "party",
    totalPrice: 95000,
    priceBreakup: {
      goldPrice: 82000,
      diamondPrice: 0,
      makingCharges: 10230,
      gst: 2770,
    },
    specs: {
      metalType: "Gold",
      metalPurity: "22K",
      metalWeight: 12.8,
      size: "8 inches",
      hallmark: true,
      certification: "BIS Hallmarked",
    },
    inStock: true,
  },
];
