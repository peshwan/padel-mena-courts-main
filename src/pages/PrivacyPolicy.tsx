import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPolicy = () => {
  const { isArabic } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <div className="prose max-w-none mx-auto bg-white p-6 rounded-lg shadow">
          {isArabic ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">سياسة الخصوصية</h2>
              <p className="mb-4">
                نحن في [example.online] نحترم خصوصية زوارنا ونلتزم بحماية معلوماتهم الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية معلوماتك.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">المعلومات التي نجمعها</h2>
              <p className="mb-4">
                قد نقوم بجمع معلومات غير شخصية مثل نوع المتصفح ونظام التشغيل وعنوان IP. هذه المعلومات تساعدنا على تحسين تجربة المستخدم.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">كيف نستخدم معلوماتك</h2>
              <p className="mb-4">
                نستخدم المعلومات التي نجمعها لتحسين موقعنا وتقديم تجربة أفضل للمستخدمين. نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">حماية معلوماتك</h2>
              <p className="mb-4">
                نحن نتخذ تدابير أمنية لحماية معلوماتك من الوصول غير المصرح به أو الاستخدام أو التغيير أو الإفشاء.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">تغييرات في سياسة الخصوصية</h2>
              <p className="mb-4">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
              </p>
              <div className="mt-8">
                <a href="/" className="text-blue-600 hover:underline">
                  ← العودة إلى الصفحة الرئيسية
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <p className="mb-4">
                At [example.online] we respect our visitors' privacy and are committed to protecting their personal information. This policy explains how we collect, use and protect your information.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
              <p className="mb-4">
                We may collect non-personal information like browser type, operating system, and IP address. This helps us improve user experience.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
              <p className="mb-4">
                We use collected information to improve our site and provide better user experience. We don't share personal information with third parties.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">Data Protection</h2>
              <p className="mb-4">
                We take security measures to protect your information from unauthorized access, use, alteration or disclosure.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-3">Privacy Policy Changes</h2>
              <p className="mb-4">
                We may update this policy occasionally. Any changes will be posted on this page.
              </p>
              <div className="mt-8">
                <a href="/" className="text-blue-600 hover:underline">
                  ← Back to Home
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;