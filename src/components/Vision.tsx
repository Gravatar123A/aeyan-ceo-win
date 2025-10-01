import { Card } from "@/components/ui/card";
import { MessageSquare, Users, BookOpen, Calendar, Lightbulb, Zap } from "lucide-react";

const Vision = () => {
  const features = [
    {
      icon: Users,
      title: "Group Study",
      description: "Collaborate with classmates in real-time study groups. Learn together, succeed together.",
    },
    {
      icon: MessageSquare,
      title: "Chat & Calls",
      description: "Seamless communication for quick questions, group discussions, and study sessions.",
    },
    {
      icon: BookOpen,
      title: "Shared Materials",
      description: "Access and share study materials, notes, and resources in one centralized place.",
    },
    {
      icon: Lightbulb,
      title: "Easy Notes & Flashcards",
      description: "Create, organize, and review notes and flashcards to make studying more effective.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Never miss deadlines, exams, or events with smart calendar integration.",
    },
    {
      icon: Zap,
      title: "Smart Dashboard",
      description: "All your academic tools in one place—organized, intuitive, and powerful.",
    },
  ];

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What I'll Do as CEO
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
            The project I am working on:
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm building a <span className="font-semibold text-primary">Student Dashboard and Communication Platform</span> that will revolutionize how we study, collaborate, and excel together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:shadow-elegant transition-smooth hover:scale-105 hover:-translate-y-2 p-6 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-start h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-primary/5 rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-card animate-fade-in-up mx-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Making Studies Collaborative, Fun, and Efficient
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This platform isn't just an idea—I'm actively developing it. When I become CEO, I'll have the resources and support to launch it for all students, making our school life more connected, productive, and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
