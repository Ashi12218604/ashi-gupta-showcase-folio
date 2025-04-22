
import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">Ashi Gupta</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Ashi12218604" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/ashi-gupta-4895a0250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <a 
              href="#about" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#education" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#contact" 
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com/Ashi12218604" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/ashi-gupta-4895a0250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
