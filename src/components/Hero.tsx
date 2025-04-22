
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Ashi Gupta
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
              Computer Science Engineer & Data Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              A dedicated computer science professional with expertise in data visualization, 
              regression analysis, and route optimization. Skilled in Python, Java, SQL, and various 
              data analysis tools like Tableau and NLTK.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  View Projects <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src="/lovable-uploads/0672b2b0-926e-472d-af66-d8e167561b95.png" 
                alt="Ashi Gupta" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
