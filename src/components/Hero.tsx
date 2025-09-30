import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent-glow/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm shadow-card mb-6 animate-scale-in">
            <span className="text-sm font-semibold text-primary">Running for CEO</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Muhammad Aeyan Saeed
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 font-semibold mb-4 max-w-3xl mx-auto">
            Making School Life Better, Making things easier for you.
          </p>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Transforming how we study, collaborate, and succeed together
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 text-lg px-8 py-6 font-bold"
              onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Vision
            </Button>
            <Button
              size="lg"
              className="bg-card text-card-foreground border-2 border-card-foreground/20 hover:bg-card-foreground hover:text-card transition-smooth hover:scale-105 text-lg px-8 py-6 font-semibold"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Vote Now
            </Button>
          </div>

          {/* Proof of Dedication */}
          <div className="max-w-2xl mx-auto bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Proof of Dedication</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I ran <span className="font-bold text-primary">23 kilometers</span> to show you how committed I am to making a difference. This is not just a campaign—it's a promise.
            </p>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card transition-smooth hover:scale-105"
              asChild
            >
              <a
                href="https://www.youtube.com/shorts/NIVE2tTimK4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Watch My 23km Run
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
