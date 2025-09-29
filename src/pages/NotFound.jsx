import { ArrowLeft, Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarBackground from "@/components/StarBackground";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <StarBackground />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* 404 Number */}
          <div className="opacity-0 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="space-y-4 opacity-0 animate-fade-in-delay-1">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-primary/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-glow text-foreground">Page Not Found</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              the digital cosmos. Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 opacity-0 animate-fade-in-delay-2">
            <button
              onClick={handleGoHome}
              className="cosmic-button flex items-center gap-2"
            >
              <Home size={18} />
              Go Home
            </button>
            <button
              onClick={handleGoBack}
              className="px-6 py-2 rounded-full border border-primary/30 text-foreground font-medium 
                         transition-all duration-300 hover:border-primary hover:bg-primary/10
                         hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Fun Element */}
          <div className="pt-8 opacity-0 animate-fade-in-delay-3">
            <div className="inline-block animate-float">
              <div className="text-6xl">🚀</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Lost in space? Don't worry, even rockets need navigation!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse-subtle"></div>
      <div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse-subtle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse-subtle"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default NotFound;
