import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="tel:+233123456789" 
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
                aria-label="Call Zenith Logistics"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+233 123 456 789</span>
              </a>
              <a 
                href="mailto:info@zenithlogistics.com.gh" 
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
                aria-label="Email Zenith Logistics"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@zenithlogistics.com.gh</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Tarkwa HQ | North Legon Office</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="text-xl">ZL</span>
            </div>
            <div>
              <div className="text-xl text-slate-900">Zenith Logistics</div>
              <div className="text-sm text-slate-600">Limited</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="outline" 
                size="sm"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}