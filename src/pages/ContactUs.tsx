import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic ? "يرجى ملء جميع الحقول." : "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'peshwan20@gmail.com', // Recipient email
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      toast({
        title: isArabic ? "تم الإرسال بنجاح" : "Submitted Successfully",
        description: isArabic ? "شكراً لتواصلك معنا. سنرد عليك قريباً." : "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic ? "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى." : "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </h1>

          {/* About Us Brief Section */}
          <section className="mb-12 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
              {isArabic ? "نبذة عنا" : "About Us"}
            </h2>
            {isArabic ? (
              <p className="text-muted-foreground">
             
                <br /><br />
                نحن نسعى جاهدين لتوفير أشمل وأحدث دليل لملاعب البادل في منطقة الشرق الأوسط وشمال أفريقيا. إذا كان لديك أي أسئلة أو اقتراحات أو ترغب في إدراج ملعبك، فلا تتردد في التواصل معنا!
              </p>
            ) : (
              <p className="text-muted-foreground">
                [Write a brief introduction about your Padel Courts Directory website here. Describe your mission, what you offer, and why users should contact you or use your site.]
                <br /><br />
                We strive to provide the most comprehensive and up-to-date directory for padel courts in the MENA region. If you have any questions, suggestions, or would like to list your court, feel free to reach out!
              </p>
            )}
          </section>

          {/* Contact Form Section */}
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{isArabic ? "الاسم" : "Name"}</Label>
                <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder={isArabic ? "اسمك الكامل" : "Your Full Name"} required />
              </div>
              <div>
                <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder={isArabic ? "عنوان بريدك الإلكتروني" : "Your Email Address"} required />
              </div>
              <div>
                <Label htmlFor="subject">{isArabic ? "الموضوع" : "Subject"}</Label>
                <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder={isArabic ? "موضوع رسالتك" : "Subject of your message"} required />
              </div>
              <div>
                <Label htmlFor="message">{isArabic ? "الرسالة" : "Message"}</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} rows={5} placeholder={isArabic ? "اكتب رسالتك هنا..." : "Type your message here..."} required />
              </div>
              <Button type="submit" className="w-full bg-court hover:bg-court/90">
                {isArabic ? "إرسال الرسالة" : "Send Message"}
              </Button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;