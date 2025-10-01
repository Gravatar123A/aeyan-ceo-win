import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Vote, CheckCircle, Sparkles, Heart } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary-foreground/10 shadow-glow p-8 sm:p-12 animate-scale-in">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6 animate-pulse-glow">
                <Vote className="w-10 h-10 text-accent" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-card-foreground mb-4">
                Your Vote Matters
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Together, we can transform our school experience and build a better future for all students.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-smooth">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <span className="font-semibold text-card-foreground">Real Solutions</span>
                  <span className="text-sm text-muted-foreground text-center">Not just promises, but actual tools and resources</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-smooth">
                  <Sparkles className="w-8 h-8 text-accent" />
                  <span className="font-semibold text-card-foreground">Proven Dedication</span>
                  <span className="text-sm text-muted-foreground text-center">23km run shows commitment to this cause</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-smooth">
                  <Heart className="w-8 h-8 text-primary" />
                  <span className="font-semibold text-card-foreground">For Students</span>
                  <span className="text-sm text-muted-foreground text-center">Built by students, for students</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-glow transition-smooth hover:scale-110 text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 font-bold w-full sm:w-auto"
                onClick={() => navigate('/voting')}
              >
                Vote for Muhammad Aeyan Saeed
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                Let's make our school better, together! 🚀
              </p>
            </div>
          </Card>

          {/* Final Message */}
          <div className="mt-12 text-center text-primary-foreground/90 animate-fade-in-up">
            <p className="text-lg font-medium mb-2">
              "A vote for me is a vote for innovation, collaboration, and a brighter school experience."
            </p>
            <p className="text-sm opacity-80">- Muhammad Aeyan Saeed, Candidate for Community Enrichment Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
