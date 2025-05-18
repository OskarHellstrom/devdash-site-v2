import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/dd-light.svg" alt="devdash logo" className="h-8 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" active={isActive("/")}>Home</NavLink>
          <NavLink to="/collaborate" active={isActive("/collaborate")}>Collaborate</NavLink>
          <NavLink to="/about" active={isActive("/about")}>About Us</NavLink>
          <Button asChild variant="secondary" className="ml-4">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "relative text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm",
        active ? "text-white" : ""
      )}
    >
      {children}
      <span className={cn(
        "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300",
        active ? "w-full" : ""
      )} />
    </Link>
  );
};

export default Navbar;
