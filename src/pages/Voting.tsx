import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10 max-w-3xl">
        {/* Back Button */}
        <Button
          variant="outline"
          className="mb-6 bg-card border-2 border-card-foreground/30 text-card-foreground hover:bg-card-foreground hover:text-card transition-smooth"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Main Card */}
        <Card className="bg-card/95 backdrop-blur-sm border-2 border-primary-foreground/10 shadow-glow p-8 sm:p-12 animate-scale-in">
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 mb-6 animate-pulse-glow">
              <Calendar className="w-12 h-12 text-accent" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-card-foreground mb-6">
              Voting Information
            </h1>

            {/* Voting Details */}
            <div className="space-y-6 mb-10">
              <div className="p-6 rounded-xl bg-primary/5 border-2 border-primary/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Thursday, 2nd October
                  </h2>
                </div>
                <p className="text-muted-foreground">Mark your calendar!</p>
              </div>

              <div className="p-6 rounded-xl bg-accent/5 border-2 border-accent/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    During School Timings
                  </h2>
                </div>
                <p className="text-muted-foreground">Voting will take place throughout the school day</p>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border-2 border-primary/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">
                    At School
                  </h2>
                </div>
                <p className="text-muted-foreground">Check with your teachers for exact location</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 shadow-elegant">
              <h3 className="text-3xl font-extrabold mb-3 text-primary-foreground">
                Make Sure to Vote for
              </h3>
              <p className="text-4xl sm:text-5xl font-black mb-4 text-primary-foreground">
                Muhammad Aeyan Saeed
              </p>
              <p className="text-lg text-primary-foreground/90">
                Together, we'll make our school better! 🚀
              </p>
            </div>
          </div>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center text-primary-foreground/90 animate-fade-in-up">
          <p className="text-lg font-medium">
            See you on voting day! Your support means everything. 🙏
          </p>
        </div>
      </div>
    </div>
  );
};

export default Voting;
