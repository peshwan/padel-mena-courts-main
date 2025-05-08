
import { City, Country, Court } from "@/types";
import { convertGoogleCourtToCourt } from "@/types/CourtTypes";
import { allCourts, saudiArabiaCourts, egyptCourts, qatarCourts, kuwaitCourts, uaeCourts, tunisCourts, bahrainCourts, omanCourts } from "@/data/countries";

export const loadAllCourts = (): Court[] => {
  // Convert courts from all countries
  const convertedCourts = [
    ...saudiArabiaCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...egyptCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...qatarCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...kuwaitCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...uaeCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...tunisCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...bahrainCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    })),
    ...omanCourts.map(court => ({
      ...convertGoogleCourtToCourt(court),
      address: court.address
    }))
  ];
  
  return convertedCourts as Court[];
};

export const loadCountryCourts = (country: Country): Court[] => {
  // Get courts for specific country and convert them
  const countryCourts = allCourts[country] || [];
  return countryCourts.map(court => convertGoogleCourtToCourt(court));
};

export const getCountries = (): Country[] => {
  // Update to include Bahrain
  return ['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Oman', 'Egypt', 'Tunisia', 'Bahrain'];
};

export const getCitiesByCountry = (country: Country): City[] => {
  const cities: Record<Country, City[]> = {
    'Saudi Arabia': [
      { id: 'jeddah', name: 'Jeddah', nameAr: 'جدة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'dhahran', name: 'Dhahran', nameAr: 'الظهران', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'dammam', name: 'Dammam', nameAr: 'الدمام', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-khobar', name: 'Al Khobar', nameAr: 'الخبر', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'madinah', name: 'Madinah', nameAr: 'المدينة المنورة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-hofuf', name: 'Al Hofuf', nameAr: 'الهفوف', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'kaec', name: 'King Abdullah Economic City', nameAr: 'مدينة الملك عبدالله الاقتصادية', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'makkah', name: 'Makkah', nameAr: 'مكة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'abha', name: 'Abha', nameAr: 'أبها', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-jubail', name: 'Al Jubail', nameAr: 'الجبيل', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-kharj', name: 'Al-Kharj', nameAr: 'الخرج', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'ras-tanura', name: 'Ras Tanura', nameAr: 'رأس تنورة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-qatif', name: 'Al Qatif', nameAr: 'القطيف', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'saihat', name: 'Saihat', nameAr: 'سيهات', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-uyaynah', name: 'Al Uyaynah', nameAr: 'العيينة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'hail', name: 'Hail', nameAr: 'حائل', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'tabuk', name: 'Tabuk', nameAr: 'تبوك', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-mubarraz', name: 'Al Mubarraz', nameAr: 'المبرز', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'anak', name: 'Anak', nameAr: 'عنك', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'taif', name: 'Taif', nameAr: 'الطائف', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-wajh', name: 'Al Wajh', nameAr: 'الوجه', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-duwadimi', name: 'Al Duwadimi', nameAr: 'الدوادمي', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-amaaria', name: 'Al Amaaria', nameAr: 'العماريه', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'khafji', name: 'Khafji', nameAr: 'الخفجي', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-oyun', name: 'Al Oyun', nameAr: 'العيون', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'diriyah', name: 'Diriyah', nameAr: 'الدرعية', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'unaizah', name: 'Unaizah', nameAr: 'عنيزة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'buraydah', name: 'Buraydah', nameAr: 'بريدة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'udhailiyah', name: 'Udhailiyah', nameAr: 'عضيلية', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'kaust', name: 'King Abdullah University Of Science And Technology', nameAr: 'جامعة الملك عبدالله للعلوم والتقنية', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'jazan', name: 'Jazan', nameAr: 'جازان', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'abu-arish', name: 'Abu Arish', nameAr: 'أبو عريش', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'baish', name: 'Baish', nameAr: 'بيش', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'addayer', name: 'Addayer', nameAr: 'الداير', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'sabt-al-alah', name: 'Sabt Al Alayah', nameAr: 'سبت العلاية', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'al-qunfudhah', name: 'Al Qunfudhah', nameAr: 'القنفذة', country: 'Saudi Arabia', countryAr: 'السعودية' },
      { id: 'qatif', name: 'Qatif', nameAr: 'القطيف', country: 'Saudi Arabia', countryAr: 'السعودية' }
    ],
    'UAE': [
      { id: 'dubai', name: 'Dubai', nameAr: 'دبي', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'sharjah', name: 'Sharjah', nameAr: 'الشارقة', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'abu-dhabi', name: 'Abu Dhabi', nameAr: 'أبو ظبي', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'ajman', name: 'Ajman', nameAr: 'عجمان', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'fujairah', name: 'Fujairah', nameAr: 'الفجيرة', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'ras-al-khaimah', name: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', country: 'UAE', countryAr: 'الإمارات' },
      { id: 'umm-al-quwain', name: 'Emirate of Umm Al Quwain', nameAr: 'أم القيوين', country: 'UAE', countryAr: 'الإمارات' }
    ],
'Kuwait': [
  { id: 'al-funaytis', name: 'Al Funaytis', nameAr: 'الفنيطيس', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'hawally', name: 'Hawally', nameAr: 'حولي', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'shuwaikh-industrial', name: 'Shuwaikh Industrial', nameAr: 'الشويخ الصناعية', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'kuwait-city', name: 'Kuwait City', nameAr: 'مدينة الكويت', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'salmiya', name: 'Salmiya', nameAr: 'السالمية', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'sabah-al-salem', name: 'Sabah Al Salem', nameAr: 'صباح السالم', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'abdullah-al-mubarak', name: 'Abdullah Al Mubarak Al Sabah', nameAr: 'عبدالله المبارك الصباح', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-jahra', name: 'Al Jahra', nameAr: 'الجهراء', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-wafrah', name: 'Al Wafrah', nameAr: 'الوفرة', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-dajeej', name: 'Al-Dajeej', nameAr: 'الضجيج', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'fnaitees', name: 'Fnaitees', nameAr: 'فنيطيس', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'zahra', name: 'Zahra', nameAr: 'الزهراء', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'jabriya', name: 'Jabriya', nameAr: 'الجابرية', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-ahmadi', name: 'Al Ahmadi', nameAr: 'الأحمدي', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-khiran', name: 'Al Khiran', nameAr: 'الخيران', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'al-zour', name: 'Al Zour', nameAr: 'الزور', country: 'Kuwait', countryAr: 'الكويت' },
  { id: 'abdali', name: 'Abdali', nameAr: 'العبدلي', country: 'Kuwait', countryAr: 'الكويت' }
]
,
    'Qatar': [
      { id: 'doha', name: 'Doha', nameAr: 'الدوحة', country: 'Qatar', countryAr: 'قطر' },
  { id: 'ar-rayyan', name: 'Ar-Rayyan', nameAr: 'الريان', country: 'Qatar', countryAr: 'قطر' },
  { id: 'lusail', name: 'Lusail', nameAr: 'لوسيل', country: 'Qatar', countryAr: 'قطر' },
  { id: 'al-wakrah', name: 'Al Wakrah', nameAr: 'الوكرة', country: 'Qatar', countryAr: 'قطر' },
  { id: 'mesaieed', name: 'Mesaieed', nameAr: 'مسيعيد', country: 'Qatar', countryAr: 'قطر' },
  { id: 'al-khor', name: 'Al Khor', nameAr: 'الخور', country: 'Qatar', countryAr: 'قطر' },
  { id: 'umm-salal-muhammed', name: 'Umm Salal Muhammed', nameAr: 'أم صلال محمد', country: 'Qatar', countryAr: 'قطر' }
    ],
    'Oman': [
      { id: 'muscat', name: 'Muscat', nameAr: 'مسقط', country: 'Oman', countryAr: 'عمان' },
      { id: 'salalah', name: 'Salalah', nameAr: 'صلالة', country: 'Oman', countryAr: 'عمان' },
      { id: 'sohar', name: 'Sohar', nameAr: 'صحار', country: 'Oman', countryAr: 'عمان' },
      { id: 'nizwa', name: 'Nizwa', nameAr: 'نزوى', country: 'Oman', countryAr: 'عمان' },
      { id: 'al-buraimi', name: 'Al Buraimi', nameAr: 'البريمي', country: 'Oman', countryAr: 'عمان' },
      { id: 'shinas', name: 'Shinas', nameAr: 'شناص', country: 'Oman', countryAr: 'عمان' },
      { id: 'khasab', name: 'Khasab', nameAr: 'خصب', country: 'Oman', countryAr: 'عمان' },
      { id: 'al-suwayq', name: 'Al Suwayq', nameAr: 'السويق', country: 'Oman', countryAr: 'عمان' },
      { id: 'al-mudayq', name: 'Al Mudayq', nameAr: 'المديق', country: 'Oman', countryAr: 'عمان' },
      { id: 'hayy-at-turath', name: 'Hayy At-Turath', nameAr: 'حي التراث', country: 'Oman', countryAr: 'عمان' },
      { id: 'taqah', name: 'Taqah', nameAr: 'طاقة', country: 'Oman', countryAr: 'عمان' },
      { id: 'saham', name: 'Saham', nameAr: 'صحم', country: 'Oman', countryAr: 'عمان' }
    ],
    'Egypt': [
      { id: 'cairo', name: 'Cairo Governorate', nameAr: 'محافظة القاهرة', country: 'Egypt', countryAr: 'مصر' },
      { id: 'alexandria', name: 'Alexandria Governorate', nameAr: 'محافظة الإسكندرية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'giza', name: 'Giza Governorate', nameAr: 'محافظة الجيزة', country: 'Egypt', countryAr: 'مصر' },
      { id: 'port-said', name: 'Port Said Governorate', nameAr: 'محافظة بورسعيد', country: 'Egypt', countryAr: 'مصر' },
      { id: 'red-sea', name: 'Red Sea Governorate', nameAr: 'محافظة البحر الأحمر', country: 'Egypt', countryAr: 'مصر' },
      { id: 'ismailia', name: 'Ismailia Governorate', nameAr: 'محافظة الإسماعيلية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'menofia', name: 'Menofia Governorate', nameAr: 'محافظة المنوفية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'al-qalyubia', name: 'Al-Qalyubia Governorate', nameAr: 'محافظة القليوبية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'marsa-matrouh', name: 'Marsa Matrouh Governorate', nameAr: 'محافظة مطروح', country: 'Egypt', countryAr: 'مصر' },
      { id: 'suez', name: 'Suez Governorate', nameAr: 'محافظة السويس', country: 'Egypt', countryAr: 'مصر' },
      { id: 'assiut', name: 'Assiut Governorate', nameAr: 'محافظة أسيوط', country: 'Egypt', countryAr: 'مصر' },
      { id: 'dakahlia', name: 'Dakahlia Governorate', nameAr: 'محافظة الدقهلية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'gharbia', name: 'Gharbia Governorate', nameAr: 'محافظة الغربية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'al-sharqia', name: 'Al-Sharqia Governorate', nameAr: 'محافظة الشرقية', country: 'Egypt', countryAr: 'مصر' },
      { id: 'damietta', name: 'Damietta Governorate', nameAr: 'محافظة دمياط', country: 'Egypt', countryAr: 'مصر' },
      { id: 'south-sinai', name: 'South Sinai Governorate', nameAr: 'محافظة جنوب سيناء', country: 'Egypt', countryAr: 'مصر' }
    ],
    'Tunisia': [
      { id: 'nabeul', name: 'Nabeul‎', nameAr: 'نابل', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'megrine', name: 'Mégrine', nameAr: 'المقرين', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'mornag', name: 'Mornag', nameAr: 'مرناق', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'hammamet', name: 'Hammamet', nameAr: 'الحمامات', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'bir-bou-rekba', name: 'Bir Bou Rekba', nameAr: 'بئر بورقبة', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'houmt-souk', name: 'Houmt Souk', nameAr: 'حومة السوق', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'kelibia', name: 'Kelibia', nameAr: 'قليبية', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'manzil-bu-zalafah', name: 'Manzil Bu Zalafah', nameAr: 'منزل بوزلفة', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'metline', name: 'Metline', nameAr: 'متلين', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'bizerte', name: 'Bizerte', nameAr: 'بنزرت', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'mornaguia', name: 'Mornaguia', nameAr: 'المرناقية', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'djerba-midun', name: 'Djerba Midun', nameAr: 'جرجيس مدنين', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'el-menzah', name: 'El Menzah', nameAr: 'المنزه', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'hiboun', name: 'Hiboun', nameAr: 'هبوبن', country: 'Tunisia', countryAr: 'تونس' },
      { id: 'ben-arous', name: 'Ben Arous', nameAr: 'بن عروس', country: 'Tunisia', countryAr: 'تونس' }
    ],
    'Bahrain': [
      { id: 'al-hidd', name: 'Al Hidd', nameAr: 'الحد', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'seef', name: 'Seef', nameAr: 'السيف', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'manama', name: 'Manama', nameAr: 'المنامة', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'galali', name: 'Galali', nameAr: 'قلالي', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'al-sayh', name: 'Al Sayh', nameAr: 'السيه', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'muharraq', name: 'Muharraq', nameAr: 'المحرق', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'tubli', name: 'Tubli', nameAr: 'توبلي', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'sanabis', name: 'Sanabis', nameAr: 'سنابس', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'sanad', name: 'Sanad', nameAr: 'سند', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'karbabad', name: 'Karbabad', nameAr: 'كرباباد', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'salmabad', name: 'Salmabad', nameAr: 'سلماباد', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'riffa', name: 'Riffa', nameAr: 'الرفاع', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'nuwaidrat', name: 'Nuwaidrat', nameAr: 'نويدرات', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'janabiyah', name: 'Janabiyah', nameAr: 'الجنبية', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'aali', name: 'A\'ali', nameAr: 'عالي', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'saar', name: 'Saar', nameAr: 'سار', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'al-jasra', name: 'Al Jasra', nameAr: 'الجرّ', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'al-maqsha', name: 'Al Maqsha', nameAr: 'المقشع', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'arad', name: 'Arad', nameAr: 'عراد', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'isa-town', name: 'Isa Town', nameAr: 'مدينة عيسى', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'zallaq', name: 'Zallaq', nameAr: 'الزلاق', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'karzakkan', name: 'Karzakkan', nameAr: 'كرزكان', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'al-mazrowiah', name: 'Al Mazrowiah', nameAr: 'المزرّع', country: 'Bahrain', countryAr: 'البحرين' },
      { id: 'shakhurah', name: 'Shakhurah', nameAr: 'شاخورة', country: 'Bahrain', countryAr: 'البحرين' }
    ],
  };

  return cities[country] || [];
};
