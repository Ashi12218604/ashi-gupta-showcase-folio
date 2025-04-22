
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
   
    {
      id: 1,
      title: "Polynomial Evaluator",
      description: "Developed a regression-based polynomial term representation model, reducing dimensionality while maintaining high accuracy. Applied feature selection techniques to represent polynomial terms and improved code reliability by 40% through TDD methodology and code duplication reduction.",
      image: "/lovable-uploads/a0e8c334-0e6f-419f-bba3-b377477e0dc9.png",
      techs: ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Pandas", "OOP", "TDD"],
      github: "https://github.com/Ashi12218604/Polynomial-Evaluator-using-Linkedlist",
    },
    {
      id: 2,
      title: "Weather Data Analysis",
      description: "Created detailed weather data visualizations, reducing data interpretation time by 30%. Implemented predictive models for seasonal trends, improving climate analysis efficiency by 25%, and analyzed temperature, humidity, and precipitation data to improve trend prediction accuracy.",
      image: "/lovable-uploads/422ab583-cd4f-47a7-8d97-73a665431fa8.png",
      techs: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Visualization"],
      github: "https://github.com/Ashi12218604/Weather-Forecasting-Time-series-Analysis-",
    },
     {
      id: 3,
      title: "Navy Analysis and Route Optimization",
      description: "Implemented advanced analytics for maritime routes, optimizing data coverage for route computation. Projected a 20% reduction in route completion time through graph-based algorithms and enhanced navigation efficiency through proximity analysis.",
      image: "/lovable-uploads/7b55d507-36cc-4ee8-a6c8-b5e18d7c8d43.png",
      techs: ["Python", "NumPy", "Matplotlib", "NetworkX", "Keras", "Folium", "Dijkstra's algorithm"],
      github: "https://github.com/Ashi12218604/MNIST-digital-classifier",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects showcasing my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techs.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-accent/50">
                      {tech}
                    </Badge>
                  ))}
                  {project.techs.length > 3 && (
                    <Badge variant="outline" className="bg-accent/50">
                      +{project.techs.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default" className="w-full">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" /> View on GitHub <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
