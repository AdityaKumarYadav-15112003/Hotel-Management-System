import logo from './logo.svg';
import headLogo from './headlogo.svg';
import heroImage from './heroImage.png';
import starIconFilled from './starIconFilled.svg';
import locationIcon from './locationIcon.svg';

export const assets = {
  logo,
  headLogo,
  heroImage,
  starIconFilled,
  locationIcon,
};

export const roomsDummyData = [
  {
    _id: "1",
    images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"],
    hotel: {
      name: "Hotel Paradise",
      address: "123 Beach Ave, Miami, FL"
    },
    pricePerNight: 120
  },
  {
    _id: "2",
    images: ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"],
    hotel: {
      name: "Mountain Retreat",
      address: "456 Mountain Rd, Denver, CO"
    },
    pricePerNight: 150
  },
  {
    _id: "3",
    images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"],
    hotel: {
      name: "City Lights Hotel",
      address: "789 Downtown St, New York, NY"
    },
    pricePerNight: 200
  },
  {
    _id: "4",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"],
    hotel: {
      name: "Desert Oasis",
      address: "321 Desert Dr, Phoenix, AZ"
    },
    pricePerNight: 110
  }
]; 