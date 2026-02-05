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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/90" />
        </div>
      ))}

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-3">
          <div className="h-14 md:h-16 w-14 md:w-16 rounded-full glass flex items-center justify-center p-2 border-2 border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/images/logo.png" alt="Alumni Connect Logo" className="w-full h-full object-contain rounded-full bg-white/90" />
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-white font-serif tracking-wide drop-shadow-md">Alumni Connect</h1>
            <p className="text-xs text-purple-200 font-medium tracking-wider uppercase">Vignan's Lara</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth/login">
            <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button variant="hero" size="sm" className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 shadow-lg shadow-primary/20">
              Register
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[75vh] px-6 text-center mt-[-40px]">
        {currentSlide === 0 && (
          <div className="animate-scale-in mb-10">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full glass flex items-center justify-center mx-auto border-[6px] border-white/10 animate-float overflow-hidden p-6 shadow-2xl shadow-primary/20">
              <img src="/images/logo.png" alt="Alumni Connect Logo" className="w-full h-full object-contain rounded-full bg-white/95" />
            </div>
          </div>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif animate-fade-in tracking-tight drop-shadow-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200 animate-text-shimmer bg-[length:200%_auto]">
            Alumni Connect Hub
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-purple-100/90 max-w-3xl mb-12 animate-fade-in font-light leading-relaxed drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Network. Engage. Reunite. Connect with fellow alumni from <br className="hidden md:block" />
          <span className="font-semibold text-white">Vignan's Lara Institute of Technology and Science</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/auth/register">
            <Button variant="hero" size="xl" className="gap-3 h-14 px-8 text-lg bg-gradient-to-r from-primary to-indigo-600 border-none shadow-xl shadow-primary/30 hover:scale-105">
              <Users className="w-6 h-6" />
              Join as Alumni
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="heroOutline" size="xl" className="gap-3 h-14 px-8 text-lg hover:bg-white/10 hover:scale-105 border-2">
              <Building className="w-6 h-6" />
              Explore Community
            </Button>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {[
            { name: "About", path: "/about" },
            { name: "Legacy Hall", path: "/legacy-hall" },
            { name: "Campus Location", path: "/campus-location" },
            { name: "Hall of Fame", path: "/hall-of-fame" }
          ].map((item, index) => (
            <Link key={item.name} to={item.path} style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
              <div className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-primary/80 to-indigo-600/80 hover:from-primary hover:to-indigo-600 transition-all duration-300 cursor-pointer border border-white/20 shadow-lg shadow-purple-900/20 hover:scale-105 hover:shadow-purple-500/30 backdrop-blur-md">
                {item.name}
              </div>
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
