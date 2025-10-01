import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, FolderOpen, FileText, TrendingUp } from "lucide-react";

const Resources = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Free Study Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Online Notes & Study Materials
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Access comprehensive study notes that I actively update and upload to help you succeed.
            </p>
          </div>

          {/* Main Resource Card */}
          <Card className="gradient-card border-border shadow-elegant hover:shadow-glow transition-smooth p-8 sm:p-10 animate-scale-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FolderOpen className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Complete Study Drive
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Get instant access to organized notes, study guides, and resources for all your subjects. I'm continuously adding new materials to ensure you have everything you need to excel.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-muted/50">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Regularly Updated</span>
                </div>
                <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-muted/50">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">All Subjects</span>
                </div>
                <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-muted/50">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Well Organized</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-elegant transition-smooth hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/u/2/folders/14nkJlpF1w7CKZNhhvV567uQN8nKQXjVG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center"
                >
                  Access Study Materials
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              📚 Bookmark this drive for easy access anytime. New materials added weekly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
