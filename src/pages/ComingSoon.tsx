import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "fr" | "ar";

const translations = {
  en: {
    title: "Coming Soon",
    description: "I'm working hard to bring you something amazing. Stay tuned!",
    back: "Back to Home",
  },
  fr: {
    title: "Bientôt disponible",
    description: "Je travaille dur pour vous proposer quelque chose d'incroyable. Restez à l'écoute !",
    back: "Retour à l'accueil",
  },
  ar: {
    title: "قريباً",
    description: "أنا أعمل بجد لأقدم لكم شيئاً رائعاً. ابقوا متابعين!",
    back: "العودة إلى الصفحة الرئيسية",
  },
};

const ComingSoon = () => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-lang");
    if (saved) {
      setLang(saved as Language);
    }
  }, []);

  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-background flex flex-col items-center justify-center p-4 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-display font-bold text-foreground">{t.title}</h1>
        <p className="text-muted-foreground">
          {t.description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline transition-all"
        >
          {lang !== 'ar' && <ArrowLeft size={18} />}
          {t.back}
          {lang === 'ar' && <ArrowLeft size={18} className="rotate-180" />}
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
