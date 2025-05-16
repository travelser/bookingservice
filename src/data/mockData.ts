import { HotelType, DestinationType, TestimonialType } from '../types';

export const hotels: HotelType[] = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Barcelona, Spain",
    description: "Stunning 5-star hotel with amazing sea views and excellent amenities.",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 199,
    currency: "EUR",
    rating: 9.2,
    reviewCount: 1243,
    amenities: ["Free WiFi", "Spa", "Pool", "Restaurant", "Gym"],
    discount: 15,
    specialOffer: "Free breakfast included"
  },
  {
    id: 2,
    name: "Urban Boutique Hotel",
    location: "Amsterdam, Netherlands",
    description: "Chic design hotel in the heart of Amsterdam's cultural district.",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 149,
    currency: "EUR",
    rating: 8.9,
    reviewCount: 932,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Bike Rental"],
  },
  {
    id: 3,
    name: "Mountain View Resort",
    location: "Interlaken, Switzerland",
    description: "Luxurious alpine resort with breathtaking mountain views.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 289,
    currency: "CHF",
    rating: 9.5,
    reviewCount: 782,
    amenities: ["Free WiFi", "Spa", "Pool", "Restaurant", "Ski Storage"],
    specialOffer: "Ski pass included"
  },
  {
    id: 4,
    name: "Seaside Resort & Spa",
    location: "Santorini, Greece",
    description: "Elegant beachfront resort with private pools and sunset views.",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 359,
    currency: "EUR",
    rating: 9.7,
    reviewCount: 1576,
    amenities: ["Free WiFi", "Private Pool", "Spa", "Restaurant", "Beach Access"],
    discount: 10
  },
  {
    id: 5,
    name: "City Lights Hotel",
    location: "Paris, France",
    description: "Modern hotel with Eiffel Tower views in the heart of Paris.",
    image: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 245,
    currency: "EUR",
    rating: 8.8,
    reviewCount: 1124,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Room Service"]
  },
  {
    id: 6,
    name: "Historic Palace Hotel",
    location: "Rome, Italy",
    description: "Elegant hotel in a restored historic building near major attractions.",
    image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 220,
    currency: "EUR",
    rating: 9.1,
    reviewCount: 867,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Concierge", "Terrace"]
  }
];

export const destinations: DestinationType[] = [
  {
    id: 1,
    name: "Barcelona",
    country: "Spain",
    image: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 4328
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 5942
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 6213
  },
  {
    id: 4,
    name: "Rome",
    country: "Italy",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 3842
  },
  {
    id: 5,
    name: "Cancún",
    country: "Mexico",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 2876
  },
  {
    id: 6,
    name: "Ciudad de México",
    country: "Mexico",
    image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 3542
  },
  {
    id: 7,
    name: "Puerto Vallarta",
    country: "Mexico",
    image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 1987
  },
  {
    id: 8,
    name: "Tulum",
    country: "Mexico",
    image: "https://images.pexels.com/photos/3601423/pexels-photo-3601423.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: 1245
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    comment: "Booking through this site made our trip so easy. We found an amazing hotel at a great price!"
  },
  {
    id: 2,
    name: "Miguel Fernandez",
    country: "Spain",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    comment: "Great selection of properties and the booking process was straightforward."
  },
  {
    id: 3,
    name: "Akiko Tanaka",
    country: "Japan",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    comment: "Found a perfect boutique hotel for our anniversary. The reviews were spot on!"
  }
];