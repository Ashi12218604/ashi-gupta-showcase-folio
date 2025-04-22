
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "ashigupta5433@gmail.com",
      link: "mailto:ashigupta5433@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91-9781379948",
      link: "tel:+919781379948",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      title: "GitHub",
      value: "github.com/Ashi12218604",
      link: "https://github.com/Ashi12218604",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/ashi-gupta-4895a0250",
      link: "https://www.linkedin.com/in/ashi-gupta-4895a0250/",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Connect with me through various channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      target={item.title === "Email" || item.title === "Phone" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors"
                    >
                      {item.icon}
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 9:00 AM - 5:00 PM (IST)</p>
                <p className="mt-2">I'll respond to your message within 24-48 hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
