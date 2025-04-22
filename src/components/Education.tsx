
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Punjab, India",
      period: "2019 - 2023",
      grade: "CGPA: 7.76",
    },
    {
      institution: "DAV PG College",
      degree: "M.Sc.",
      location: "Dehradun, Uttarakhand",
      period: "2017 - 2019",
    },
    {
      institution: "Citizen Public School",
      degree: "12th Standard",
      location: "Dehradun, Uttarakhand",
      period: "2016 - 2017",
    },
  ];

  const certifications = [
    {
      name: "Programming Pathshala - Renaissance",
      issuer: "Programming Pathshala",
      period: "Nov '22 - Jan '23",
      description: "Learned advanced data structures and algorithms, enhancing troubleshooting skills"
    },
    {
      name: "Tableau Mastery",
      issuer: "Job Aid Learnings",
      period: "Jun '22 - Jul '23",
      description: "Advanced data visualization skills using Tableau, creating interactive and insightful dashboards for data analysis"
    },
    {
      name: "Natural Language Processing - Infosys Springboard",
      issuer: "Infosys",
      period: "Feb '22 - Mar '23",
      description: "NLP fundamentals and applications"
    },
    {
      name: "IBM SQL & DBMS - Coursera",
      issuer: "IBM via Coursera",
      period: "Jan '22 - Feb '23",
      description: "Database management and SQL fundamentals"
    },
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
                      {item.degree}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.location}</span>
                      <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" /> {item.period}
                      </span>
                    </div>
                    {item.grade && (
                      <div className="mt-2 font-medium text-primary">{item.grade}</div>
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
