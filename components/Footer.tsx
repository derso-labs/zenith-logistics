import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="text-lg">ZL</span>
              </div>
              <div>
                <div className="text-lg">Zenith Logistics</div>
                <div className="text-sm text-slate-400">Limited</div>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Revolutionizing logistics in Ghana's mining sector with safety, reliability, and innovation.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2 hover:bg-blue-600 hover:text-white transition-colors"
                asChild
              >
                <a 
                  href="https://facebook.com/zenithlogisticsgh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2 hover:bg-blue-600 hover:text-white transition-colors"
                asChild
              >
                <a 
                  href="https://twitter.com/zenithlogisticsgh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2 hover:bg-blue-600 hover:text-white transition-colors"
                asChild
              >
                <a 
                  href="https://linkedin.com/company/zenithlogisticsgh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-lg mb-4">Quick Links</div>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-lg mb-4">Contact Info</div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-slate-400">
                  <div>Tarkwa Headquarters</div>
                  <div>North Legon Office</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">+233 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">info@zenithlogistics.com.gh</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-lg mb-4">Newsletter</div>
            <p className="text-slate-400 mb-4 text-sm">
              Stay updated with our latest news and industry insights.
            </p>
            <form 
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email');
                if (email) {
                  // In a real app, this would call an API
                  alert('Thank you for subscribing! We will send you updates about our services and industry news.');
                  (e.target as HTMLFormElement).reset();
                }
              }}
            >
              <Input 
                name="email"
                type="email" 
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                required
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Zenith Logistics Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <div className="text-slate-400">
                Licensed by Ghana Registrar | Minerals Commission Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}