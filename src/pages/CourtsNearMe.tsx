
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Loader, List } from "lucide-react"; // Added List
import { Button } from "@/components/ui/button";
import { loadAllCourts } from "@/utils/courtUtils"; // Changed import
import CourtCard from "@/components/CourtCard";
import { Court } from "@/types"; // Added Court type
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"; // Added Pagination

const COURTS_PER_PAGE = 12; // Added for pagination

const CourtsNearMe = () => {
  const { isArabic } = useLanguage();
  const [allCourts, setAllCourts] = useState<Court[]>([]); // Added to store all courts
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nearbyCourts, setNearbyCourts] = useState<Court[]>([]); // Typed as Court[]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [view, setView] = useState<"grid" | "list">("grid"); // Added for view toggle
  const [currentPage, setCurrentPage] = useState(1); // Added for pagination

  // Function to calculate distance between two points
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  };

  const getLocation = () => {
    setIsLoading(true);
    setStatus("loading");
    
    if (!navigator.geolocation) {
      setStatus("error");
      setIsLoading(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
        setStatus("success");
        setIsLoading(false);
      },
      () => {
        setStatus("error");
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    // Load all courts once on component mount
    setAllCourts(loadAllCourts());
  }, []);

  useEffect(() => {
    if (userLocation && allCourts.length > 0) {
      const courtsWithDistance = allCourts
        .filter(court => court.location.lat != null && court.location.lng != null)
        .map(court => {
          const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            court.location.lat!,
            court.location.lng!
          );
          return { ...court, distance };
        });

      const sortedByDistance = [...courtsWithDistance].sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
      const courtsWithoutCoords = allCourts.filter(court => court.location.lat == null || court.location.lng == null);
      
      // For CourtsNearMe, we might only want to show courts with distance.
      // Or, if we want to show all, they'd be appended after sorted ones.
      // Combine sorted courts with distance and courts without coordinates
      setNearbyCourts([...sortedByDistance, ...courtsWithoutCoords]);
      setCurrentPage(1); // Reset to first page when location changes
    } else {
      // If no user location, but we have allCourts, display all of them (or handle as per desired default state)
      // For now, keeping it empty if no location, to force user interaction.
      setNearbyCourts([]);
    }
  }, [userLocation, allCourts]);

  const totalPages = Math.ceil(nearbyCourts.length / COURTS_PER_PAGE);
  const currentCourtsToDisplay = nearbyCourts.slice(
    (currentPage - 1) * COURTS_PER_PAGE,
    currentPage * COURTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "الملاعب القريبة منك" : "Courts Near You"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isArabic
                ? "اكتشف ملاعب البادل الأقرب إلى موقعك الحالي. اسمح للتطبيق باستخدام موقعك للحصول على أفضل النتائج."
                : "Find padel courts closest to your current location. Allow the app to use your location for the best results."}
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button
                onClick={getLocation}
                disabled={isLoading}
                size="lg" // Keeps base large styles
                className="bg-court hover:bg-court/90 flex items-center gap-2 px-8 py-3 text-lg" // Added custom padding and slightly larger text
              >
                {isLoading ? (
                  <Loader className="h-5 w-5 animate-spin" />
                ) : (
                  <MapPin className="h-5 w-5" />
                )}
                {isArabic ? "اعثر على الملاعب القريبة" : "Find Courts Near Me"}
              </Button>
            </div>
          </div>
          
          {status === "loading" && (
            <div className="text-center p-6">
              <Loader className="h-8 w-8 animate-spin mx-auto text-court" />
              <p className="mt-2 text-muted-foreground">{isArabic ? "جاري البحث عن الملاعب..." : "Searching for courts..."}</p>
            </div>
          )}

          {status === "error" && (
            <div className="text-center p-6 bg-red-50 rounded-lg mb-8">
              <p className="text-red-600">
                {isArabic
                  ? "عذرًا، لم نتمكن من الوصول إلى موقعك. يرجى التأكد من تفعيل خدمة الموقع والمحاولة مرة أخرى."
                  : "Sorry, we couldn't access your location. Please make sure location services are enabled and try again."}
              </p>
            </div>
          )}
          
          {status === "success" && nearbyCourts.length > 0 && (
            <>
              <div className="mb-8 p-4 bg-green-50 rounded-lg text-center">
                <p className="text-green-700">
                  {isArabic
                    ? `تم العثور على ${nearbyCourts.length} ملعب بالقرب منك!`
                    : `Found ${nearbyCourts.length} courts near you!`}
                </p>
              </div>

              {/* View Toggle Buttons */}
              <div className="flex justify-end items-center mb-6 gap-2">
                 <p className="text-sm text-muted-foreground">
                    {isArabic ? `عرض ${currentCourtsToDisplay.length} من ${nearbyCourts.length} ملعب` : `Showing ${currentCourtsToDisplay.length} of ${nearbyCourts.length} courts`}
                  </p>
                <Button
                  variant={view === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setView("grid")}
                  className={view === "grid" ? "bg-court hover:bg-court-dark" : ""}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid-2x2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
                </Button>
                <Button
                  variant={view === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setView("list")}
                  className={view === "list" ? "bg-court hover:bg-court-dark" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCourtsToDisplay.map((court) => (
                    <CourtCard key={court.id} court={court} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4 mb-8">
                  {currentCourtsToDisplay.map((court) => (
                    // Simplified List Item for brevity - can be expanded like in Courts.tsx
                    <div key={court.id} className="bg-white rounded-lg shadow-sm border p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">{isArabic ? court.nameAr : court.name}</h3>
                        <p className="text-sm text-muted-foreground">{isArabic ? court.locationAr : `${court.location.city}, ${court.location.country}`}</p>
                        {court.distance && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{court.distance.toFixed(1)} {isArabic ? "كم" : "km"}</span>
                        )}
                      </div>
                       <Button
                          size="sm"
                          className="bg-court hover:bg-court-dark"
                          onClick={() => {
                            const mapUrl = court.mapUrl || `https://maps.google.com/?q=${court.location.lat},${court.location.lng}`;
                            window.open(mapUrl, '_blank');
                          }}
                        >
                          {isArabic ? "عرض الخريطة" : "Map"}
                        </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="my-8">
                  <PaginationContent isArabic={isArabic}>
                    <PaginationItem>
                      <PaginationPrevious
                        isArabic={isArabic}
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {/* First page */}
                    {currentPage > 3 && totalPages > 5 && (
                      <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                      </PaginationItem>
                    )}
                    
                    {/* Ellipsis before current page */}
                    {currentPage > 4 && totalPages > 5 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    
                    {/* Pages around current page */}
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      if (pageNum <= 0 || pageNum > totalPages) return null;
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            isActive={currentPage === pageNum}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    {/* Ellipsis after current page */}
                    {currentPage < totalPages - 3 && totalPages > 5 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && totalPages > 5 && (
                       <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
                      </PaginationItem>
                    )}

                    <PaginationItem>
                      <PaginationNext
                        isArabic={isArabic}
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
          
          {status === "success" && nearbyCourts.length === 0 && (
            <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg">
              <p className="text-yellow-700">
                {isArabic
                  ? "لم يتم العثور على ملاعب قريبة من موقعك الحالي، أو أن الملاعب المتوفرة لا تحتوي على بيانات موقع دقيقة."
                  : "No courts found near your current location, or available courts do not have precise location data."}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourtsNearMe;
