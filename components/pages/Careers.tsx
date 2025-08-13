import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Users, GraduationCap, TrendingUp, Shield, 
  Heart, Globe, MapPin, Clock, Briefcase,
  Upload, CheckCircle, ExternalLink
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Careers() {
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: ''
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare coverage for you and your family, plus wellness programs.'
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Continuous learning opportunities, professional certifications, and skill development programs.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship and leadership development opportunities.'
    },
    {
      icon: Users,
      title: 'Diversity & Inclusion',
      description: 'An inclusive workplace that celebrates diversity and promotes equal opportunities for all.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Industry-leading safety protocols and comprehensive safety training for all employees.'
    },
    {
      icon: Globe,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and paid time off to maintain healthy work-life balance.'
    }
  ];

  const openRoles = [
    {
      title: 'Senior Truck Driver',
      department: 'Operations',
      location: 'Tarkwa',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Experienced driver for heavy-duty trucks transporting mining materials across Ghana.',
      requirements: [
        'Valid commercial driving license (Class C)',
        '5+ years of heavy truck driving experience',
        'Experience in mining or industrial transportation',
        'Clean driving record',
        'Knowledge of safety protocols'
      ]
    },
    {
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'North Legon',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Coordinate logistics operations, manage schedules, and ensure timely delivery of services.',
      requirements: [
        'Bachelor\'s degree in Logistics, Supply Chain, or related field',
        '3+ years of logistics coordination experience',
        'Proficiency in logistics software and MS Office',
        'Strong organizational and communication skills',
        'Knowledge of Ghana\'s transportation networks'
      ]
    },
    {
      title: 'Fleet Maintenance Technician',
      department: 'Technical',
      location: 'Tarkwa',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Maintain and repair fleet vehicles to ensure optimal performance and safety standards.',
      requirements: [
        'Technical certification in automotive/heavy machinery repair',
        '4+ years of fleet maintenance experience',
        'Knowledge of heavy truck systems',
        'Ability to work with diagnostic equipment',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Business Development Associate',
      department: 'Sales',
      location: 'North Legon',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Identify new business opportunities and build relationships with mining companies.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        '2+ years of B2B sales experience',
        'Knowledge of Ghana\'s mining sector preferred',
        'Excellent communication and presentation skills',
        'Valid driver\'s license and willingness to travel'
      ]
    },
    {
      title: 'Safety Officer',
      department: 'Safety & Compliance',
      location: 'Tarkwa',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and implement safety protocols, conduct training, and ensure regulatory compliance.',
      requirements: [
        'Degree in Occupational Health & Safety or related field',
        '3+ years of safety management experience',
        'Knowledge of mining safety regulations',
        'Safety certifications (NEBOSH preferred)',
        'Strong training and communication skills'
      ]
    },
    {
      title: 'Warehouse Supervisor',
      department: 'Operations',
      location: 'Tarkwa',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Oversee warehouse operations, manage inventory, and supervise warehouse staff.',
      requirements: [
        'Diploma in Warehouse Management or related field',
        '3+ years of warehouse supervision experience',
        'Knowledge of inventory management systems',
        'Leadership and team management skills',
        'Forklift operation certification preferred'
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Application submitted successfully! We will review your application and contact you within 5 business days.');
    
    // Reset form
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      education: '',
      coverLetter: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build your career with Ghana's leading logistics company. We're looking for talented, 
            passionate individuals to help revolutionize the mining sector's supply chain.
          </p>
        </div>
      </section>

      {/* Why Work at Zenith */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Why Work at Zenith Logistics?</h2>
            <p className="text-lg text-slate-600">Join a company that values growth, innovation, and your professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-slate-900">Our Culture</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-slate-900 mb-3">Diversity & Growth</h3>
                  <p className="text-slate-700">
                    We believe that diverse teams drive innovation. Our inclusive environment welcomes 
                    people from all backgrounds and provides equal opportunities for career advancement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-slate-900 mb-3">Training & Development</h3>
                  <p className="text-slate-700">
                    Continuous learning is at the heart of our culture. We invest in our employees through 
                    professional training, certifications, and leadership development programs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-slate-900 mb-3">Innovation & Excellence</h3>
                  <p className="text-slate-700">
                    We encourage creative thinking and innovative solutions. Our team members are empowered 
                    to contribute ideas that drive the company forward and improve our services.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1">12+</div>
                  <div className="text-sm text-slate-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1">4</div>
                  <div className="text-sm text-slate-600">Years Growing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-slate-600">Employee Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team working together"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Open Positions</h2>
            <p className="text-lg text-slate-600">Explore current opportunities to join our growing team</p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{role.title}</CardTitle>
                      <CardDescription className="text-blue-600">{role.department}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        <MapPin className="h-3 w-3 mr-1" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        <Clock className="h-3 w-3 mr-1" />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {role.experience}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{role.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-slate-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <Button 
                      asChild 
                      className="w-full"
                      onClick={() => {
                        // Track application click for analytics
                        console.log(`Application started for: ${role.title}`);
                      }}
                    >
                      <a 
                        href="https://successfactors.com/zenithlogistics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        Apply Now on Success Factors
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 text-slate-900">Apply Now</h2>
              <p className="text-lg text-slate-600">
                Ready to join our team? Submit your application and we'll get back to you within 5 business days.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Online Application Form</CardTitle>
                <CardDescription>
                  Please fill out all required fields. Attach your resume and cover letter for best consideration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={applicationData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={applicationData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Select value={applicationData.position} onValueChange={(value) => handleInputChange('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {openRoles.map((role, index) => (
                            <SelectItem key={index} value={role.title}>
                              {role.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select value={applicationData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="education">Education Level</Label>
                      <Select value={applicationData.education} onValueChange={(value) => handleInputChange('education', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you want to join Zenith Logistics and what makes you a great fit for this role..."
                      value={applicationData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600 mb-2">Click to upload or drag and drop your resume</p>
                      <p className="text-xs text-slate-500">PDF, DOC, or DOCX (max 5MB)</p>
                      <Button type="button" variant="outline" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Questions About Working With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our HR team is here to help answer any questions about careers at Zenith Logistics.
          </p>
          <div className="space-y-4">
            <div>
              <div className="text-lg">Human Resources</div>
              <div className="text-blue-100">hr@zenithlogistics.com.gh</div>
              <div className="text-blue-100">+233 123 456 789 ext. 102</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}