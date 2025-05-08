
// Force recompile
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// Use the same utils as the Courts page
import { getCountries, getCitiesByCountry } from "@/utils/courtUtils";
import { Filter } from "lucide-react";
import { Country, City } from "@/types"; // Import the required types

interface LocationFilterProps {
  selectedCountry: string;
  selectedCity: string;
  onCountryChange: (country: string) => void;
  onCityChange: (city: string) => void;
  onFilterApply: () => void;
  isArabic?: boolean;
}

const LocationFilter = ({
  selectedCountry,
  selectedCity,
  onCountryChange,
  onCityChange,
  onFilterApply,
  isArabic = true,
}: LocationFilterProps) => {
  const [countries, setCountries] = useState<Country[]>([]); // Use Country type
  const [cities, setCities] = useState<City[]>([]); // Use City type
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setCountries(getCountries());
  }, []);

  useEffect(() => {
    // Ensure selectedCountry is a valid Country type before calling
    if (selectedCountry && getCountries().includes(selectedCountry as Country)) {
      const cities = getCitiesByCountry(selectedCountry as Country);
      console.log(`Cities for ${selectedCountry}:`, cities);
      setCities(cities);
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  // Ensure value is treated as Country type if valid
  const handleCountryChange = (value: string) => {
    const countryValue = value === "all" ? "" : value;
    onCountryChange(countryValue);
    onCityChange(""); // Reset city when country changes
  };

  const handleClearFilter = () => {
    onCountryChange("");
    onCityChange("");
    onFilterApply();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{isArabic ? "تصفية الملاعب" : "Filter Courts"}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          {isExpanded ? (isArabic ? "إخفاء الفلاتر" : "Hide Filters") : (isArabic ? "عرض الفلاتر" : "Show Filters")}
        </button>
      </div>
      
      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">{isArabic ? "الدولة" : "Country"}</Label>
            <Select value={selectedCountry} onValueChange={handleCountryChange}>
              <SelectTrigger id="country">
                <SelectValue placeholder={isArabic ? "اختر دولة" : "Select a country"} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">{isArabic ? "جميع الدول" : "All Countries"}</SelectItem>
                {countries.map((country) => {
                  const cities = getCitiesByCountry(country as Country);
                  const countryAr = cities[0]?.countryAr || country;
                  return (
                    <SelectItem key={country} value={country}>
                      {isArabic ? countryAr : country}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">{isArabic ? "المدينة" : "City"}</Label>
            {/* Pass city NAME to onCityChange */}
            <Select
              value={selectedCity}
              onValueChange={(cityName) => onCityChange(cityName === "all" ? "" : cityName)}
              disabled={!selectedCountry || cities.length === 0}
            >
              <SelectTrigger id="city">
                <SelectValue placeholder={selectedCountry ? (isArabic ? "اختر مدينة" : "Select a city") : (isArabic ? "اختر دولة أولاً" : "Select country first")} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">{isArabic ? "جميع المدن" : "All Cities"}</SelectItem>
                {/* Map over City objects, use name for value/display, id for key */}
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.name}>
                    {isArabic ? (city.nameAr || city.name) : city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items- justify-around space-x-2">
          <Button onClick={handleClearFilter} variant="outline" className="text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400">
            {isArabic ? "إعادة تعيين" : "Clear"}
          </Button>
          <Button onClick={onFilterApply} className="bg-court hover:bg-court-dark">
            {isArabic ? "تطبيق" : "Apply"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationFilter;
