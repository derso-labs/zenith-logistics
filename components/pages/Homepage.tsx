import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Truck, Package, Warehouse, Users, TrendingUp, ChevronRight, Star, Quote, Brain } from 'lucide-react';

export function Homepage() {
  const stats = [
    { label: 'Fleet Vehicles', value: '15+', icon: Truck, description: 'Modern haulage trucks and logistics vehicles' },
    { label: 'Years Experience', value: '4+', icon: TrendingUp, description: 'In Ghana\'s mining logistics sector' },
    { label: 'Expert Team', value: '25+', icon: Users, description: 'Skilled logistics and safety professionals' },
  ];

  const services = [
    {
      icon: Truck,
      title: 'Haulage Services',
      description: 'Specialized transportation of ores, machinery, and hazardous materials with real-time tracking.',
      features: ['GPS Tracking', 'Skilled Drivers', 'Safety First']
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end procurement, inventory management, and timely delivery solutions.',
      features: ['Procurement', 'Inventory Control', 'Timely Delivery']
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Secure storage facilities with advanced inventory management systems.',
      features: ['Secure Storage', 'Inventory Systems', 'Easy Access']
    },
    {
      icon: Brain,
      title: 'Logistics Consultancy',
      description: 'Expert advisory services to optimize your supply chain operations and reduce costs.',
      features: ['Process Optimization', 'Cost Reduction', 'Strategic Planning']
    }
  ];

  const testimonials = [
    {
      name: 'Kwame Asante',
      position: 'Operations Manager, GoldMine Corp',
      content: 'Zenith Logistics has transformed our supply chain efficiency. Their real-time tracking and reliable service keep our operations running smoothly.',
      rating: 5
    },
    {
      name: 'Sarah Mensah',
      position: 'Procurement Director, Mining Solutions Ltd',
      content: 'Their logistics consultancy helped us reduce operational costs by 30% while improving delivery times.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              Revolutionizing Logistics in Ghana's Mining Sector
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Zenith Logistics delivers comprehensive supply chain solutions with advanced technology, 
              unmatched safety standards, and dedicated expertise for Ghana's mining industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/about">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mining truck background image */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Mining logistics"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-900">
              Leading Logistics Partner for Ghana's Mining Excellence
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Established with a vision to transform logistics in Ghana's mining sector, Zenith Logistics combines 
              cutting-edge technology with deep industry expertise to deliver unparalleled supply chain solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Our Impact</h2>
            <p className="text-lg text-slate-600">Driving excellence in Ghana's logistics sector</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg text-slate-700 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Our Core Services</h2>
            <p className="text-lg text-slate-600">Comprehensive logistics solutions powered by technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by leading mining companies across Ghana</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join Ghana's leading mining companies who trust Zenith Logistics for their supply chain success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Request a Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}