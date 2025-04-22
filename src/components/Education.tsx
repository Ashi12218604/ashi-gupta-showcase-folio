import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Punjab, India",
      period: "2022 - 2026",
      grade: "CGPA: 7.96",
    },
    {
      institution: "Summer Valley School",
      class: "XII",
      percentage: "93%",
      location: "Dehradun, Uttarakhand",
      period: "2021 - 2022",
    },
    {
      institution: "Summer Valley School",
      class: "X",
      percentage: "93.8%",
      location: "Dehradun, Uttarakhand",
      period: "2019 - 2020",
    },
  ];

  const certifications = [
    {
      name: "Programming Pathshala - Renaissance",
      issuer: "Programming Pathshala",
      period: "Nov '22 - Jan '23",
      description: "Learned advanced data structures and algorithms, enhancing troubleshooting skills",
      link: "https://certificates.programmingpathshala.com/v1/doc?id=f23d75d9f375fda86b5cd25218da51d48828fe5d018d18ecf24c6c9712d823a1"
    },
    {
      name: "Tableau Mastery",
      issuer: "Job Aaj Learnings",
      period: "Jun '22 - Jul '23",
      description: "Advanced data visualization skills using Tableau, creating interactive and insightful dashboards for data analysis",
      link: "https://certificates.programmingpathshala.com/v1/doc?id=f23d75d9f375fda86b5cd25218da51d48828fe5d018d18ecf24c6c9712d823a1"
    },
    {
      name: "Natural Language Processing - Infosys Springboard",
      issuer: "Infosys",
      period: "Feb '22 - Mar '23",
      description: "NLP fundamentals and applications",
      link: "https://certificates.programmingpathshala.com/v1/doc?id=f23d75d9f375fda86b5cd25218da51d48828fe5d018d18ecf24c6c9712d823a1"
    },
    {
      name: "IBM SQL & DBMS - Coursera",
      issuer: "IBM via Coursera",
      period: "Jan '22 - Feb '23",
      description: "Database management and SQL fundamentals",
      link: "https://www.coursera.org/account/accomplishments/certificate/NIOODDFLNY6R"
    },
    {
      name: "Machine Learning - Coursera",
      issuer: "Coursera (Andrew Ng)",
      period: "Jan '22 - Feb '23",
      description: "Core concepts in machine learning, regression, classification, clustering, and more",
      link: "https://www.coursera.org/account/accomplishments/certificate/MA1QKY6HSBP4"
    },
    {
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      period: "Jan '22 - Feb '23",
      description: "Foundational skills in MongoDB, document databases, CRUD operations, and schema design",
      link: "https://learn.mongodb.com/c/hUUsZcLxQdO1uu6yPIa8UQ"
    }
  ];

  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.institution}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {item.degree || `Class ${item.class}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.location}</span>
                      <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" /> {item.period}
                      </span>
                    </div>
                    {(item.grade || item.percentage) && (
                      <div className="mt-2 font-medium text-primary">
                        {item.grade || `Percentage: ${item.percentage}`}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {item.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 inline mr-1" /> {item.period}
                      </span>
                      {item.link && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="ml-2 flex items-center gap-1 px-2 py-1 h-8"
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkIcon className="h-4 w-4" />
                            View Certificate
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
