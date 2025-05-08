
import { PadelCourt } from "@/types";

export const courts: PadelCourt[] = [
  {
    id: "1",
    name: "Riyadh Padel Center",
    description: "Premium padel facility in the heart of Riyadh with 8 professional courts.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Riyadh",
    address: "King Fahd Road, Al Olaya District",
    coordinates: {
      latitude: 24.7136,
      longitude: 46.6753
    },
    indoor: true,
    numberOfCourts: 8,
    amenities: ["Parking", "Showers", "Pro Shop", "Cafe", "Training Programs"],
    rating: 4.8,
    pricePerHour: 120,
    contactPhone: "+966 12 345 6789",
    contactEmail: "info@riyadhpadelcenter.com",
    website: "https://riyadhpadelcenter.com",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "2",
    name: "Dubai Padel Hub",
    description: "Luxury padel facility featuring panoramic views of Dubai skyline.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Dubai",
    address: "Jumeirah Beach Road",
    coordinates: {
      latitude: 25.2048,
      longitude: 55.2708
    },
    indoor: false,
    numberOfCourts: 12,
    amenities: ["VIP Lounge", "Restaurant", "Pro Shop", "Fitness Center", "Swimming Pool"],
    rating: 4.9,
    pricePerHour: 150,
    contactPhone: "+971 4 123 4567",
    contactEmail: "bookings@dubaipadelclub.ae",
    website: "https://dubaipadelclub.ae",
    openingHours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "7:00 AM - 12:00 AM"
    }
  },
  {
    id: "3",
    name: "Kuwait Padel Academy",
    description: "Modern padel facility with air-conditioned indoor courts.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Kuwait",
    city: "Kuwait City",
    address: "Salmiya District, Block 12",
    coordinates: {
      latitude: 29.3759,
      longitude: 47.9774
    },
    indoor: true,
    numberOfCourts: 6,
    amenities: ["Air Conditioning", "Pro Shop", "Cafe", "Coaching Services"],
    rating: 4.7,
    pricePerHour: 95,
    contactPhone: "+965 2222 3333",
    contactEmail: "info@kuwaitpadel.com",
    website: "https://kuwaitpadel.com",
    openingHours: {
      weekdays: "9:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM"
    }
  },
  
  {
    id: "4",
    name: "Doha Padel Club",
    description: "Qatar's premier padel destination with professional-grade courts.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Qatar",
    city: "Doha",
    address: "West Bay, Diplomatic Area",
    coordinates: {
      latitude: 25.3548,
      longitude: 51.5239
    },
    indoor: true,
    numberOfCourts: 10,
    amenities: ["Locker Rooms", "Sports Bar", "Pro Shop", "Private Coaching"],
    rating: 4.8,
    pricePerHour: 140,
    contactPhone: "+974 4444 5555",
    contactEmail: "play@dohapadelclub.qa",
    website: "https://dohapadelclub.qa",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "5",
    name: "Muscat Padel Center",
    description: "Oman's first professional padel facility with stunning mountain views.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "Oman",
    city: "Muscat",
    address: "Al Khuwair, Sultan Qaboos Street",
    coordinates: {
      latitude: 23.5859,
      longitude: 58.4059
    },
    indoor: false,
    numberOfCourts: 4,
    amenities: ["Mountain Views", "Cafe", "Equipment Rental", "Beginner Lessons"],
    rating: 4.6,
    pricePerHour: 85,
    contactPhone: "+968 9999 8888",
    contactEmail: "info@muscatpadel.om",
    website: "https://muscatpadel.om",
    openingHours: {
      weekdays: "4:00 PM - 10:00 PM",
      weekends: "3:00 PM - 11:00 PM"
    }
  },
  {
    id: "6",
    name: "Cairo Padel Academy",
    description: "Egypt's largest padel facility with professional training programs.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Egypt",
    city: "Cairo",
    address: "New Cairo, 5th Settlement",
    coordinates: {
      latitude: 30.0444,
      longitude: 31.2357
    },
    indoor: false,
    numberOfCourts: 8,
    amenities: ["Night Lighting", "Pro Shop", "Cafe", "Training Academy"],
    rating: 4.7,
    pricePerHour: 70,
    contactPhone: "+20 2 1234 5678",
    contactEmail: "info@cairopadel.eg",
    website: "https://cairopadel.eg",
    openingHours: {
      weekdays: "10:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "7",
    name: "Tunis Padel Club",
    description: "Tunisia's premier padel destination with Mediterranean views.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Tunisia",
    city: "Tunis",
    address: "La Marsa Beachfront",
    coordinates: {
      latitude: 36.8065,
      longitude: 10.1815
    },
    indoor: false,
    numberOfCourts: 6,
    amenities: ["Beachfront Location", "Bar", "Equipment Rental", "Group Lessons"],
    rating: 4.5,
    pricePerHour: 60,
    contactPhone: "+216 71 234 567",
    contactEmail: "play@tunispadel.tn",
    website: "https://tunispadel.tn",
    openingHours: {
      weekdays: "9:00 AM - 10:00 PM",
      weekends: "9:00 AM - 11:00 PM"
    }
  },
  {
    id: "8",
    name: "Jeddah Padel Elite",
    description: "Exclusive padel club with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Jeddah",
    address: "Red Sea Mall, King Abdulaziz Road",
    coordinates: {
      latitude: 21.5433,
      longitude: 39.1728
    },
    indoor: true,
    numberOfCourts: 6,
    amenities: ["VIP Lounge", "Pro Coach", "Equipment Store", "Fitness Area"],
    rating: 4.8,
    pricePerHour: 130,
    contactPhone: "+966 12 987 6543",
    contactEmail: "info@jeddahpadelelite.sa",
    website: "https://jeddahpadelelite.sa",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "8:00 AM - 12:00 AM"
    }
  },
  {
    id: "9",
    name: "Abu Dhabi Padel Zone",
    description: "Modern padel facility in the UAE capital with professional tournaments.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Abu Dhabi",
    address: "Yas Island Sports District",
    coordinates: {
      latitude: 24.4667,
      longitude: 54.3667
    },
    indoor: true,
    numberOfCourts: 8,
    amenities: ["Tournament Facilities", "Spectator Areas", "Sports Bar", "Pro Coaching"],
    rating: 4.9,
    pricePerHour: 145,
    contactPhone: "+971 2 765 4321",
    contactEmail: "play@abudhabi-padel.ae",
    website: "https://abudhabipadel.ae",
    openingHours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "8:00 AM - 12:00 AM"
    }
  },
  {
    id: "10",
    name: "Alexandria Padel Club",
    description: "Beachfront padel facility with Mediterranean views.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Egypt",
    city: "Alexandria Governorate",
    address: "Montaza Corniche",
    coordinates: {
      latitude: 31.2001,
      longitude: 29.9187
    },
    indoor: false,
    numberOfCourts: 4,
    amenities: ["Sea View", "Beach Access", "Cafe", "Equipment Rental"],
    rating: 4.6,
    pricePerHour: 65,
    contactPhone: "+20 3 456 7890",
    contactEmail: "info@alexpadel.eg",
    website: "https://alexpadel.eg",
    openingHours: {
      weekdays: "10:00 AM - 10:00 PM",
      weekends: "9:00 AM - 11:00 PM"
    }
  }
];

// Import country data
import { saudiArabiaCourts } from "./countries/saudiArabia";
import { uaeCourts } from "./countries/uae";
import { egyptCourts } from "./countries/egypt";
import { kuwaitCourts } from "./countries/kuwait";
import { qatarCourts } from "./countries/qatar";
import { tunisCourts } from "./countries/tunisia";
import { bahrainCourts } from "./countries/bahrain";
import { omanCourts } from "./countries/oman";

// Helper functions to get unique countries and cities
export const getCountries = (): string[] => {
  const hardcodedCountries = [...new Set(courts.map(court => court.country))];
  const googleCountries = ["Saudi Arabia", "UAE", "Egypt", "Kuwait", "Qatar", "Tunisia", "Bahrain", "Oman"];
  return [...new Set([...hardcodedCountries, ...googleCountries])].sort();
};

export const getCitiesByCountry = (country: string): string[] => {
  // Get cities from hardcoded courts
  const hardcodedCities = [...new Set(courts
    .filter(court => court.country === country)
    .map(court => court.city))];
  
  // Get cities from Google courts
  let googleCities: string[] = [];
  switch(country) {
    case "Saudi Arabia":
      googleCities = [...new Set(
        saudiArabiaCourts
          .filter(court => court.city && court.city.trim() !== '')
          .map(court => {
            // Standardize city names
            const city = court.city.trim();
            if (city.toLowerCase() === 'riyadh') return 'Riyadh';
            if (city.toLowerCase() === 'jeddah') return 'Jeddah';
            if (city.toLowerCase() === 'dammam') return 'Dammam';
            if (city.toLowerCase() === 'al khobar' || city.toLowerCase() === 'khobar') return 'Al Khobar';
            if (city.toLowerCase() === 'dhahran') return 'Dhahran';
            if (city.toLowerCase() === 'madinah') return 'Madinah';
            return city;
          })
      )];
      break;
    case "UAE":
      googleCities = [...new Set(uaeCourts.map(court => court.city as string))];
      break;
    case "Egypt":
      googleCities = [...new Set(egyptCourts.map(court => court.city as string))];
      break;
    case "Kuwait":
      googleCities = [...new Set(kuwaitCourts.map(court => court.city as string))];
      break;
    case "Qatar":
      googleCities = [...new Set(qatarCourts.map(court => court.city as string))];
      break;
    case "Tunisia":
      googleCities = [...new Set(tunisCourts.map(court => court.city as string))];
      break;
    case "Bahrain":
      googleCities = [...new Set(bahrainCourts.map(court => court.city?.toString() || ''))].filter(c => c);
      break;
    case "Oman":
      googleCities = [...new Set(omanCourts.map(court => court.city?.toString() || ''))].filter(c => c);
      break;
  }

  return [...new Set([...hardcodedCities, ...googleCities])].sort();
};

export const getAllCities = (): string[] => {
  const hardcodedCities = [...new Set(courts.map(court => court.city))];
  const googleCities = [
    ...saudiArabiaCourts.map(c => c.city as string),
    ...uaeCourts.map(c => c.city as string),
    ...egyptCourts.map(c => c.city as string),
    ...kuwaitCourts.map(c => c.city as string),
    ...qatarCourts.map(c => c.city as string),
    ...tunisCourts.map(c => c.city as string),
    ...bahrainCourts.map(c => c.city as string),
    ...omanCourts.map(c => c.city as string)
  ];
  return [...new Set([...hardcodedCities, ...googleCities])].sort();
};
