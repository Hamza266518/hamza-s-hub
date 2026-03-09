import { Instagram, Globe, Mail, Languages } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";
import mylistIcon from "@/assets/mylist-icon.png";
import LinkButton from "@/components/LinkButton";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Language = "en" | "fr" | "ar";

const translations = {
  en: {
    title: "Hamza Yechaoui",
    subtitle: "Creator · Developer · Building cool things ✨",
    instagram: "Instagram",
    download: "Download Mylist App",
    website: "My Website",
    contact: "Contact Me",
    footer: "© 2026 All rights reserved to Hamza",
    langName: "English",
  },
  fr: {
    title: "Hamza Yechaoui",
    subtitle: "Créateur · Développeur · Construction de trucs cools ✨",
    instagram: "Instagram",
    download: "Télécharger l'application Mylist",
    website: "Mon Site Web",
    contact: "Contactez-moi",
    footer: "© 2026 All rights reserved to Hamza",
    langName: "Français",
  },
  ar: {
    title: "حمزة يشاوي",
    subtitle: "منشئ محتوى · مطور · بناء أشياء رائعة ✨",
    instagram: "إنستغرام",
    download: "تحميل تطبيق Mylist",
    website: "موقعي الإلكتروني",
    contact: "تواصل معي",
    footer: "© 2026 All rights reserved to Hamza",
    langName: "العربية",
  },
};

const Index = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("app-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-background relative overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Languages size={16} />
              {t.langName}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("fr")}>Français</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("ar")}>العربية</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Subtle gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-[480px] flex flex-col items-center gap-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl shadow-primary/10">
              <img
                src={profileAvatar}
                alt="hamza_9_49 profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-display font-bold text-foreground">
                {t.title}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="w-full flex flex-col gap-3">
            {/* Instagram - Featured */}
            <LinkButton
              href="https://instagram.com/hamza_9_49"
              icon={<Instagram size={22} />}
              variant="primary"
            >
              {t.instagram}
            </LinkButton>

            {/* Mylist App Download - Gradient CTA */}
            <LinkButton
              href="/public/Mylist.apk"
              icon={
                <img src={mylistIcon} alt="Mylist" className="w-7 h-7 rounded-lg" />
              }
              variant="gradient"
            >
              {t.download}
            </LinkButton>

            {/* My Website - Redirect to Coming Soon */}
            <LinkButton
              href="/coming-soon"
              icon={<Globe size={20} />}
              isInternal={true}
            >
              {t.website}
            </LinkButton>

            <LinkButton href="mailto:hamzayechaoui@gmail.com" icon={<Mail size={20} />}>
              {t.contact}
            </LinkButton>
          </div>

          {/* Footer */}
          <p className="text-xs text-muted-foreground/60 mt-4">
            {t.footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
