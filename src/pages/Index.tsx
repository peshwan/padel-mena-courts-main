import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourtCard from "@/components/CourtCard";
import CoachCard from "@/components/CoachCard";
import { Button } from "@/components/ui/button";
import { CircleDot, Map, List } from "lucide-react";

import { courts } from "@/data/courtsData";
import { coaches } from "@/data/coachesData";
import { convertGoogleCourtToCourt } from "@/types";
import { saudiArabiaCourts, kuwaitCourts, egyptCourts, qatarCourts, uaeCourts, omanCourts, bahrainCourts, tunisCourts } from "@/data/countries";

const Index = () => {
  const { isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState<"about" | "explore">("about");
  const featuredCourts = courts.slice(0, 3);
  const featuredCoaches = coaches.slice(0, 3);

  // TODO: Replace this with your actual handpicked featured courts
  // For example, pick one court from each country you want to feature
  const customFeaturedCourts = [
    saudiArabiaCourts.find(court => court.title === "Tik Padel"
),
    
    kuwaitCourts.find(court => court.title === "Padel IN"),
    egyptCourts.find(court => court.title === "Club 7 - Maadi"),
    uaeCourts.find(court => court.title === "Danube Sports World"),
    tunisCourts.find(court => court.title === "Olympysky Club"),
    qatarCourts.find(court => court.title === "Padel In - Aspire Zone"),
    bahrainCourts.find(court => court.title === "Lets Padel"),
  ].filter(court => court !== undefined).map(convertGoogleCourtToCourt);

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* New Featured Courts Section (Custom Selection) */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {isArabic ? "ملاعب مختارة من دول مختلفة" : "Handpicked Courts from MENA"}
                </h2>
                <p className="text-muted-foreground">
                  {isArabic ? "اكتشف ملاعب مميزة اخترناها لك من مختلف أنحاء المنطقة." : "Explore our selection of standout courts from across the region."}
                </p>
              </div>
              <Link to="/courts">
                <Button variant="outline" className="mt-4 md:mt-0">
                  {isArabic ? "عرض جميع الملاعب" : "View All Courts"}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {customFeaturedCourts.length > 0 ? (
                customFeaturedCourts.map((court) => (
                  court && <CourtCard key={court.id} court={court} />
                ))
              ) : (
                <p className="col-span-full text-center text-muted-foreground">
                  {isArabic ? "يتم الآن اختيار الملاعب المميزة. يرجى التحقق مرة أخرى قريبا!" : "Curating featured courts. Please check back soon!"}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Why Padel Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                    activeTab === "about" ? "bg-court text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("about")}
                >
                  {isArabic ? "عن البادل" : "About Padel"}
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                    activeTab === "explore" ? "bg-court text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("explore")}
                >
                  {isArabic ? "استكشف الشرق الأوسط وشمال إفريقيا" : "Explore MENA"}
                </button>
              </div>
            </div>

            {activeTab === "about" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {isArabic ? "ما هو البادل؟" : "What is Padel?"}
                  </h2>
                  <p className="text-lg mb-4">
                    {isArabic 
                      ? "البادل هي رياضة مضرب تجمع بين عناصر التنس والاسكواش. تُلعب في أزواج على ملعب مغلق بحجم يعادل تقريباً ثلث ملعب التنس."
                      : "Padel is a racquet sport that combines elements of tennis and squash. It's played in doubles on an enclosed court about 1/3 the size of a tennis court."}
                  </p>
                  <p className="text-lg mb-6">
                    {isArabic 
                      ? "تُستخدم الجدران كجزء من اللعبة، مما يجعلها أكثر سهولة ويضيف بُعداً استراتيجياً يجعلها ممتعة ومسلية للاعبين من جميع المستويات."
                      : "The walls are used as part of the game, making it more accessible and adding a strategic dimension that makes it addictive and fun for players of all levels."}
                  </p>
                  <Link to="/about">
                    <Button className="bg-teal hover:bg-teal-dark">
                      {isArabic ? "تعرف أكثر عن البادل" : "Learn More About Padel"}
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-court rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sand rounded-full opacity-30"></div>
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/1.png`}
                    alt={isArabic ? "ملعب بادل" : "Padel court"} 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-desert rounded-full opacity-30"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal rounded-full opacity-20"></div>
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/2.png`}
                    alt={isArabic ? "منطقة الشرق الأوسط وشمال إفريقيا" : "MENA region"} 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">
                    {isArabic ? "البادل في الشرق الأوسط وشمال إفريقيا" : "Padel in MENA"}
                  </h2>
                  <p className="text-lg mb-4">
                    {isArabic 
                      ? "شهدت رياضة البادل نمواً متسارعاً في منطقة الشرق الأوسط وشمال إفريقيا في السنوات الأخيرة، مع ريادة دول مثل الإمارات العربية المتحدة والمملكة العربية السعودية."
                      : "Padel has seen explosive growth across the Middle East and North Africa region in recent years, with countries like UAE and Saudi Arabia leading the way."}
                  </p>
              
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-court/10 flex items-center justify-center mr-3">
                        <Map className="h-5 w-5 text-court" />
                      </div>
                      <div>
                        <p className="font-semibold">{isArabic ? `+${1000} ملعب` : `${1000}+ Courts`}</p>
                        <p className="text-sm text-muted-foreground">{isArabic ? "وفي تزايد" : "And growing"}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center mr-3">
                        <List className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <p className="font-semibold">{isArabic ? "8 دول" : "8 Countries"}</p>
                        <p className="text-sm text-muted-foreground">{isArabic ? "في دليلنا" : "In our directory"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Featured Coaches Section - Hidden as per request */}
        {/*
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {isArabic ? "أفضل مدربي البادل" : "Top Padel Coaches"}
                </h2>
                <p className="text-muted-foreground">
                  {isArabic ? "تعلم من أفضل مدربي البادل في المنطقة." : "Learn from the best padel coaches in the region."}
                </p>
              </div>
              <Link to="/coaches">
                <Button variant="outline" className="mt-4 md:mt-0">
                  {isArabic ? "عرض جميع المدربين" : "View All Coaches"}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCoaches.map((coach) => (
                <CoachCard key={coach.id} coach={coach} />
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-16 bg-court text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "هل أنت مستعد للعب البادل؟" : "Ready to Play Padel?"}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {isArabic 
                ? "ابحث عن الملعب المثالي بالقرب منك وابدأ الاستمتاع بأسرع الرياضات نمواً في الشرق الأوسط وشمال إفريقيا."
                : "Find the perfect court near you and start enjoying the fastest growing sport in MENA."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courts">
                <Button size="lg" className="bg-white text-court hover:bg-sand hover:text-white">
                  {isArabic ? "ابحث عن الملاعب" : "Find Courts"}
                </Button>
              </Link>
              <Link to="/courts-near-me">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-court">
                  {isArabic ? "الملاعب القريبة مني" : "Courts Near Me"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
