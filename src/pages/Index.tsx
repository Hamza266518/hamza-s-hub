import { Instagram, Download, Globe, Music, Mail } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";
import mylistIcon from "@/assets/mylist-icon.png";
import LinkButton from "@/components/LinkButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
                hamza_9_49
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Creator · Developer · Building cool things ✨
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
              Instagram
            </LinkButton>

            {/* Mylist App Download - Gradient CTA */}
            <LinkButton
              href="#"
              icon={
                <img src={mylistIcon} alt="Mylist" className="w-7 h-7 rounded-lg" />
              }
              variant="gradient"
            >
              Download Mylist App
            </LinkButton>

            {/* Placeholder links */}
            <LinkButton href="#" icon={<Globe size={20} />}>
              My Website
            </LinkButton>

            <LinkButton href="mailto:hamzayechaoui@gmail.com" icon={<Mail size={20} />}>
              Contact Me
            </LinkButton>
          </div>

          {/* Footer */}
          <p className="text-xs text-muted-foreground/60 mt-4">
            © 2026 hamza_9_49 · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
