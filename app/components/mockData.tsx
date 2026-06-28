
export type Merchant = {
  name: string;
  description: string;
  cover_image_url: string | null;
  logo_url: null | string;
  rating: number;
  distance_km: number;
  category: string;
  members_count: number;
  opening_hours: string;
  phone: string;
};

export type Reward = {
  id: string;
  label: string;
  trigger_value: number;
  image_url: string | null;
};

export type PointsProgram = {
  brand: string;
  card_logo_url: string | null;
  earn_rule_text: React.ReactNode;
  userPoints: number;
  rewards: Reward[];
};

export type StampCard = {
  brand: string;
  card_logo_url: string | null;
  stamps_required: number;
  userStamps: number;
  earn_rule_text: string;
};

export type Offer = {
  id: string;
  brand: string;
  headline: string;
  code: string;
  expires_in: string;
  style: "point" | "featured" | "order";
  discount_label?: string;
  image_url: string | null;
};

export const merchant: Merchant = {
  name: "Al Mirqab Al Jadeed",
  description:
    'El pasaje estándar de lorem ipsum ha sido un aliado de los impresores durante siglos. Como las fotos de stock actuales, servía como marcador de posición para el contenido real. El texto original proviene de la obra filosófica de Cicerón "De Finibus Bonorum et Malorum", escrita en el año 45 a.C.',
  cover_image_url: "/cover.png",
  logo_url: "/startbuck.png",
  rating: 4.5,
  distance_km: 1.8,
  category: "Restaurants",
  members_count: 20,
  opening_hours: "Everyday 12:00 PM – 12:00 AM",
  phone: "+974 5080 4421",
};

export const pointsProgram: PointsProgram = {
  brand: "BURGER KING",
  card_logo_url: "/burgerking.png",
  earn_rule_text: <span>Earn 1 point for every < br /> QAR 5 spent </span>,
  userPoints: 120,
  rewards: [
    { id: "r1", label: "Free Coffee", trigger_value: 148, image_url: '/reward.png' },
    { id: "r2", label: "Free Burger", trigger_value: 250, image_url: '/reward.png' },
  ],
};

export const stampCard: StampCard = {
  brand: "STARBUKS",
  card_logo_url: "/startbuck.png",
  stamps_required: 8,
  userStamps: 6,
  earn_rule_text: "Earn a stamp for every purchase",
};

export const offers: Offer[] = [
  {
    id: "o1",
    brand: "Starbuks",
    headline: "-15% OFF available",
    code: "CAMP-1289SDR2",
    expires_in: "01:59",
    style: "featured",
    discount_label: "-15%",
    image_url: null,
  },
  {
    id: "o2",
    brand: "Starbuks",
    headline: "Buy 1 get 1 Free",
    code: "",
    expires_in: "01:59",
    style: "order",
    image_url: "/coffee.png",
  },
  {
    id: "o3",
    brand: "Starbuks",
    headline: "50 bonus points",
    code: "",
    expires_in: "01:59",
    style: "point",
    image_url: "/star-badge.png",
  },
];
