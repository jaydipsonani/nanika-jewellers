export interface Diamond {
  id: string;
  image: string;
  carat: number;
  color: string;
  clarity: string;
  cut: string;
  type: string;
  price: number;
}

export const diamonds: Diamond[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    carat: 1.5,
    color: "D",
    clarity: "VVS1",
    cut: "Round",
    type: "Natural",
    price: 450000,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    carat: 2.0,
    color: "E",
    clarity: "VS1",
    cut: "Oval",
    type: "Natural",
    price: 620000,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80",
    carat: 1.2,
    color: "F",
    clarity: "VVS2",
    cut: "Princess",
    type: "Lab Grown",
    price: 180000,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&q=80",
    carat: 1.8,
    color: "D",
    clarity: "IF",
    cut: "Cushion",
    type: "Natural",
    price: 780000,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80",
    carat: 2.5,
    color: "G",
    clarity: "VS2",
    cut: "Emerald",
    type: "Lab Grown",
    price: 295000,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    carat: 1.0,
    color: "E",
    clarity: "VVS1",
    cut: "Round",
    type: "Lab Grown",
    price: 150000,
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80",
    carat: 3.0,
    color: "D",
    clarity: "VVS2",
    cut: "Oval",
    type: "Natural",
    price: 1250000,
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    carat: 1.75,
    color: "F",
    clarity: "VS1",
    cut: "Princess",
    type: "Lab Grown",
    price: 220000,
  },
];
