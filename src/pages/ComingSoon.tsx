import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-display font-bold text-foreground">Coming Soon</h1>
        <p className="text-muted-foreground">
          I'm working hard to bring you something amazing. Stay tuned!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
