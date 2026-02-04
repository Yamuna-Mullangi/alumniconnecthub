import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Building } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Vignan's Lara campus images
  const carouselImages = [
    "/images/carousel1.jpg",
    "/images/achievement3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={image}
            alt={`Campus view ${index + 1}`}
            className={`w-full h-full object-cover scale-105 ${index === 0 || index === 1 ? "" : "blur-sm"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
      ))}

      {/* Navigation Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-3">
          <div className="h-14 md:h-16 w-14 md:w-16 rounded-full bg-indigo-600/10 backdrop-blur-lg flex items-center justify-center p-2 border-2 border-indigo-600/20">
            <img src="/images/logo.png" alt="Alumni Connect Logo" className="w-full h-full object-contain rounded-full bg-white" />
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-purple-50 font-serif">Alumni Connect</h1>
            <p className="text-xs text-purple-100/80">Vignan's Lara</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth/login">
            <Button variant="heroOutline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button variant="hero" size="sm">
              Register
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        {currentSlide === 0 && (
          <div className="animate-scale-in mb-8">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-indigo-600/10 backdrop-blur-lg flex items-center justify-center mx-auto border-4 border-indigo-600/20 animate-float overflow-hidden p-6">
              <img src="/images/logo.png" alt="Alumni Connect Logo" className="w-full h-full object-contain rounded-full bg-white" />
            </div>
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-50 mb-4 font-serif animate-fade-in">
          Alumni Connect Hub
        </h1>
        <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <em>Network. Engage. Reunite. Connect with fellow alumni from Vignan's Lara Institute of Technology and Science.</em>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/auth/register">
            <Button variant="hero" size="xl" className="gap-3">
              <Users className="w-5 h-5" />
              Join as Alumni
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="heroOutline" size="xl" className="gap-3">
              <Building className="w-5 h-5" />
              Explore Community
            </Button>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { name: "About", path: "/about" },
            { name: "Legacy Hall", path: "/legacy-hall" },
            { name: "Campus Location", path: "/campus-location" },
            { name: "Hall of Fame", path: "/hall-of-fame" }
          ].map((item) => (
            <Link key={item.name} to={item.path}>
              <Button variant="hero" size="lg" className="min-w-[140px]">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-card/50 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? "bg-primary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
                }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-card/50 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
