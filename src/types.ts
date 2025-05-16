export interface HotelType {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  discount?: number;
  specialOffer?: string;
}

export interface DestinationType {
  id: number;
  name: string;
  country: string;
  image: string;
  properties: number;
}

export interface TestimonialType {
  id: number;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  comment: string;
}