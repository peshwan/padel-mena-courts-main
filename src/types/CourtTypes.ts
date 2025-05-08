
// New court type based on the Google Places JSON format
export interface GoogleCourt {
  address: string;
  categoryName: string;
  city: string;
  countryCode: string;
  imageUrl: string;
  "openingHours/6/hours": string;
  phone: string;
  reviewsCount: number;
  title: string;
  totalScore: number;
  locationurl: string;
  website: string;
}

// Function to convert GoogleCourt to our Court format
export const convertGoogleCourtToCourt = (googleCourt: GoogleCourt) => {
  const coords = parseCoordinatesFromUrl(googleCourt.locationurl);

  return {
    id: googleCourt.title.toLowerCase().replace(/\s+/g, '-'),
    name: googleCourt.title,
    nameAr: googleCourt.title, // Using same title for Arabic
    type: googleCourt.categoryName,
    typeAr: googleCourt.categoryName === "Sports club" ? "نادي رياضي" : googleCourt.categoryName,
    location: {
      city: googleCourt.city,
      country: getCountryName(googleCourt.countryCode),
      address: googleCourt.address,
      lat: coords?.latitude,
      lng: coords?.longitude,
    },
    locationAr: googleCourt.city,
    description: `${googleCourt.title} is a ${googleCourt.categoryName.toLowerCase()} located in ${googleCourt.city}.`,
    descriptionAr: `${googleCourt.title} هو ${googleCourt.categoryName === "Sports club" ? "نادي رياضي" : googleCourt.categoryName} يقع في ${googleCourt.city}.`,
    address: googleCourt.address,
    rating: googleCourt.totalScore,
    reviews: googleCourt.reviewsCount,
    price: {
      hour: 0, // Not provided in the data
      currency: "SAR",
    },
    amenities: [],
    images: [googleCourt.imageUrl],
    hours: {
      open: extractOpenHours(googleCourt["openingHours/6/hours"]),
      close: extractCloseHours(googleCourt["openingHours/6/hours"]),
      openAr: extractOpenHours(googleCourt["openingHours/6/hours"]),
      closeAr: extractCloseHours(googleCourt["openingHours/6/hours"]),
    },
    contact: {
      phone: googleCourt.phone,
      email: "",
      website: googleCourt.website,
    },
    mapUrl: googleCourt["locationurl"],
  };
};

// Helper function to parse coordinates from Google Maps URL
const parseCoordinatesFromUrl = (url: string): { latitude: number; longitude: number } | null => {
  if (!url) return null;
  // Regex to find patterns like q=24.12345,46.54321 or @24.12345,46.54321
  const regex = /[?&@](?:q=)?([0-9.-]+),([0-9.-]+)/;
  const match = url.match(regex);
  if (match && match[1] && match[2]) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);
    if (!isNaN(lat) && !isNaN(lng)) {
      return { latitude: lat, longitude: lng };
    }
  }
  return null;
};

// Helper function to extract opening hours
const extractOpenHours = (hoursString: string): string => {
  if (!hoursString) return "";
  const match = hoursString.match(/(\d+(?::\d+)?\s*[AP]M)\s+to/i);
  return match ? match[1] : "";
};

// Helper function to extract closing hours
const extractCloseHours = (hoursString: string): string => {
  if (!hoursString) return "";
  const match = hoursString.match(/to\s+(\d+(?::\d+)?\s*[AP]M)/i);
  return match ? match[1] : "";
};

// Helper function to convert country code to name
const getCountryName = (countryCode: string): string => {
  const countryMap: Record<string, string> = {
    SA: "Saudi Arabia",
    AE: "UAE",
    KW: "Kuwait",
    QA: "Qatar",
    OM: "Oman",
    EG: "Egypt",
    TN: "Tunisia",
    BH: "Bahrain",
  };
  
  return countryMap[countryCode] || countryCode;
};
