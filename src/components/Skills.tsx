
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Github, BarChart, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Java", "Python", "SQL"],
    },
    {
      title: "Frameworks",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["Springboot", "Pandas","Tensorflow", "Keras"],
    },
    {
      title: "Tools & Platforms",
      icon: <Github className="h-6 w-6 text-primary" />,
      skills: ["IntelliJ", "Tableau", "MySQL", "GoogleColab", "Jupyter", "Git", "GitHub"],
    },
    {
      title: "Data Analysis",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: ["Data Visualization", "Regression Analysis", "Statistical Modeling","Faeture Engineering"],
    },
    {
      title: "Soft Skills",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["Adaptability", "Time Management", "Communication", "Self-Motivated", "Versatile", "Quick Learner"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired through education and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-accent px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
