
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">Ashi Gupta</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science Engineer & ML Engineer</p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/Ashi12218604" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashi-gupta-4895a0250/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:guptaashi655@gmail.com" 
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+91-8791379845" 
              aria-label="Phone"
              className="hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Ashi Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
