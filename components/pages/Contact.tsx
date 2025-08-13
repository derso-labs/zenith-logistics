import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  MapPin, Phone, Mail, Clock, 
  MessageSquare, Calculator, Calendar,
  Building, Users, Truck, CheckCircle
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    origin: '',
    destination: '',
    materialType: '',
    quantity: '',
    timeline: '',
    additionalInfo: ''
  });

  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    objectives: ''
  });

  const offices = [
    {
      name: 'Tarkwa Headquarters',
      address: 'Mining District, Tarkwa, Western Region, Ghana',
      phone: '+233 123 456 789',
      email: 'tarkwa@zenithlogistics.com.gh',
      hours: 'Mon - Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 2:00 PM',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: ['Haulage Operations', 'Fleet Maintenance', 'Safety Training', 'Mining Logistics']
    },
    {
      name: 'North Legon Office',
      address: 'North Legon, Greater Accra Region, Ghana',
      phone: '+233 123 456 790',
      email: 'accra@zenithlogistics.com.gh',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: ['Business Development', 'Client Relations', 'Supply Chain Planning', 'Administration']
    }
  ];

  const serviceTypes = [
    'Haulage Services',
    'Supply Chain Management',
    'Warehousing & Storage',
    'Custom HV Clothing',
    'Technology Integration',
    'Consultation Services'
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Thank you for your inquiry! We will respond within 24 hours.');
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!quoteForm.name.trim() || !quoteForm.email.trim() || !quoteForm.phone.trim() || !quoteForm.company.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(quoteForm.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Quote request submitted! Our team will prepare a detailed proposal and contact you within 48 hours.');
      setQuoteForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        origin: '',
        destination: '',
        materialType: '',
        quantity: '',
        timeline: '',
        additionalInfo: ''
      });
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!consultationForm.name.trim() || !consultationForm.email.trim() || !consultationForm.phone.trim() || !consultationForm.preferredDate) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(consultationForm.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    // Check if date is in the future
    const selectedDate = new Date(consultationForm.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      toast.error('Please select a future date for your consultation.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      toast.success('Consultation booked! We will confirm your appointment within 24 hours.');
      setConsultationForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: '',
        objectives: ''
      });
    } catch (error) {
      toast.error('Failed to book consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Ready to transform your logistics operations? Get in touch with our team for 
            quotes, consultations, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">How Can We Help You?</h2>
            <p className="text-lg text-slate-600">Choose the best way to connect with our team</p>
          </div>
          
          <Tabs defaultValue="general" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="general" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>General Inquiry</span>
              </TabsTrigger>
              <TabsTrigger value="quote" className="flex items-center space-x-2">
                <Calculator className="h-4 w-4" />
                <span>Get a Quote</span>
              </TabsTrigger>
              <TabsTrigger value="consultation" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book Consultation</span>
              </TabsTrigger>
            </TabsList>

            {/* General Inquiry */}
            <TabsContent value="general">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>General Inquiry</span>
                  </CardTitle>
                  <CardDescription>
                    Have questions about our services or want to learn more about Zenith Logistics?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input
                          id="contact-phone"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-company">Company Name</Label>
                        <Input
                          id="contact-company"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select value={contactForm.inquiryType} onValueChange={(value) => setContactForm({...contactForm, inquiryType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="careers">Career Inquiries</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Please describe your inquiry in detail..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Quote Request */}
            <TabsContent value="quote">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span>Request a Quote</span>
                  </CardTitle>
                  <CardDescription>
                    Get a detailed quote for your logistics needs. Our team will respond within 48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleQuoteSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quote-name">Full Name *</Label>
                        <Input
                          id="quote-name"
                          value={quoteForm.name}
                          onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="quote-email">Email Address *</Label>
                        <Input
                          id="quote-email"
                          type="email"
                          value={quoteForm.email}
                          onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quote-phone">Phone Number *</Label>
                        <Input
                          id="quote-phone"
                          value={quoteForm.phone}
                          onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="quote-company">Company Name *</Label>
                        <Input
                          id="quote-company"
                          value={quoteForm.company}
                          onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service-type">Service Type *</Label>
                      <Select value={quoteForm.serviceType} onValueChange={(value) => setQuoteForm({...quoteForm, serviceType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="origin">Origin Location</Label>
                        <Input
                          id="origin"
                          placeholder="e.g. Tarkwa Mine Site"
                          value={quoteForm.origin}
                          onChange={(e) => setQuoteForm({...quoteForm, origin: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          id="destination"
                          placeholder="e.g. Tema Port"
                          value={quoteForm.destination}
                          onChange={(e) => setQuoteForm({...quoteForm, destination: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="material-type">Material/Cargo Type</Label>
                        <Input
                          id="material-type"
                          placeholder="e.g. Gold ore, Mining equipment"
                          value={quoteForm.materialType}
                          onChange={(e) => setQuoteForm({...quoteForm, materialType: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity/Volume</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g. 50 tons, 10 containers"
                          value={quoteForm.quantity}
                          onChange={(e) => setQuoteForm({...quoteForm, quantity: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">Timeline/Frequency</Label>
                      <Select value={quoteForm.timeline} onValueChange={(value) => setQuoteForm({...quoteForm, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (within 48 hours)</SelectItem>
                          <SelectItem value="weekly">Within 1 week</SelectItem>
                          <SelectItem value="monthly">Within 1 month</SelectItem>
                          <SelectItem value="ongoing">Ongoing/Regular</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="additional-info">Additional Information</Label>
                      <Textarea
                        id="additional-info"
                        placeholder="Any special requirements, handling instructions, or additional details..."
                        value={quoteForm.additionalInfo}
                        onChange={(e) => setQuoteForm({...quoteForm, additionalInfo: e.target.value})}
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Quote'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Consultation Booking */}
            <TabsContent value="consultation">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Book a Free Consultation</span>
                  </CardTitle>
                  <CardDescription>
                    Schedule a personalized consultation with our logistics experts to discuss your specific needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="consult-name">Full Name *</Label>
                        <Input
                          id="consult-name"
                          value={consultationForm.name}
                          onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="consult-email">Email Address *</Label>
                        <Input
                          id="consult-email"
                          type="email"
                          value={consultationForm.email}
                          onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="consult-phone">Phone Number *</Label>
                        <Input
                          id="consult-phone"
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="consult-company">Company Name</Label>
                        <Input
                          id="consult-company"
                          value={consultationForm.company}
                          onChange={(e) => setConsultationForm({...consultationForm, company: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferred-date">Preferred Date *</Label>
                        <Input
                          id="preferred-date"
                          type="date"
                          value={consultationForm.preferredDate}
                          onChange={(e) => setConsultationForm({...consultationForm, preferredDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferred-time">Preferred Time</Label>
                        <Select value={consultationForm.preferredTime} onValueChange={(value) => setConsultationForm({...consultationForm, preferredTime: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="consultation-type">Consultation Type</Label>
                      <Select value={consultationForm.consultationType} onValueChange={(value) => setConsultationForm({...consultationForm, consultationType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supply-chain">Supply Chain Optimization</SelectItem>
                          <SelectItem value="logistics">Logistics Strategy</SelectItem>
                          <SelectItem value="technology">Technology Integration</SelectItem>
                          <SelectItem value="cost-analysis">Cost Analysis</SelectItem>
                          <SelectItem value="general">General Discussion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="objectives">Consultation Objectives</Label>
                      <Textarea
                        id="objectives"
                        placeholder="What specific topics or challenges would you like to discuss during the consultation?"
                        value={consultationForm.objectives}
                        onChange={(e) => setConsultationForm({...consultationForm, objectives: e.target.value})}
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Booking...' : 'Book Consultation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Our Offices</h2>
            <p className="text-lg text-slate-600">Visit us at our strategic locations across Ghana</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span>{office.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-slate-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">{office.email}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div className="text-slate-700 whitespace-pre-line">{office.hours}</div>
                  </div>
                  
                  <div>
                    <h4 className="text-slate-900 mb-2">Services Available:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {office.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">24/7 Emergency Support</h2>
          <p className="text-xl mb-8 text-red-100">
            For urgent logistics needs or emergencies, our team is available around the clock.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span className="text-2xl">+233 123 456 999</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6" />
              <span className="text-xl">emergency@zenithlogistics.com.gh</span>
            </div>
            <p className="text-red-100">Available 24/7 for critical logistics support</p>
          </div>
        </div>
      </section>
    </div>
  );
}