import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";

export const NavigationSection = (): JSX.Element => {
  const [location, setLocation] = useLocation();
  const { login } = useAuth();

  // Navigation menu items data
  const navItems = [
    { name: "Home", width: "w-[42.98px]", href: "/" },
    { name: "Tools", width: "w-[38.66px]", href: "/tools" },
    { name: "Pricing", width: "w-[50.38px]", href: "/pricing" },
    { name: "About", width: "w-[42.98px]", href: "/about" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      setLocation(href);
    }
  };

  // Simulated login function (replace with real authentication)
  const handleLogin = () => {
    const mandaUser = {
      id: 'manda_onzale_001',
      name: 'Manda Onzale',
      email: 'manda@example.com',
      location: 'London, UK',
      initials: 'MO',
      plan: 'Pro Plan'
    };

    login(mandaUser);
    console.log('User logged in successfully');
  };

  const handleGetStarted = () => {
    // Redirect to signup page
    setLocation('/signup');
  };

  return (
    <header className="w-full h-[65px] bg-[#111726] border-b border-[#374050] shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]" role="banner">
      <div className="max-w-screen-xl mx-auto px-8 h-[65px]">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center h-7">
            <h1 className="[font-family:'Pacifico',Helvetica] font-normal text-white text-xl leading-7 whitespace-nowrap">
              <span role="img" aria-label="PDF Convert Master Logo">PDF Convert Master</span>
            </h1>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="flex justify-center" role="navigation" aria-label="Main navigation">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index} className={item.width}>
                  <NavigationMenuLink
                    className="[font-family:'Roboto',Helvetica] font-medium text-[#d0d5da] text-base leading-6 whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} page`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3" role="toolbar" aria-label="User account actions">
            <Button
              variant="outline"
              className="h-[42px] px-[17px] py-[9px] [font-family:'Roboto',Helvetica] font-medium text-base"
              onClick={() => setLocation('/signin')}
              aria-label="Sign in to your account"
            >
              Log In
            </Button>
            <Button
              className="h-10 px-6 py-2 [font-family:'Roboto',Helvetica] font-medium text-base"
              onClick={handleGetStarted}
              aria-label="Create new account and get started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
