import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Shield, Users, Lightbulb, Heart, Award, MapPin } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: 'Safety',
      description: 'We prioritize safety in every operation, ensuring our team and clients are protected at all times.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Our commitment to dependable service delivery has made us a trusted partner in Ghana\'s mining sector.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and innovative solutions to transform logistics operations.'
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: 'Our clients\' success is our priority, and we go above and beyond to exceed their expectations.'
    }
  ];

  const team = [
    {
      name: 'Kwaku Mensah',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 15 years of experience in logistics and mining operations, Kwaku leads Zenith Logistics with a vision for transforming Ghana\'s supply chain sector.'
    },
    {
      name: 'Akosua Darko',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Akosua brings expertise in project management and operational excellence, ensuring seamless execution of all logistics operations.'
    },
    {
      name: 'Samuel Osei',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Samuel oversees day-to-day operations, ensuring quality service delivery and maintaining our high safety standards.'
    },
    {
      name: 'Grace Asante',
      position: 'Business Development Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Grace drives business growth and client relationships, expanding Zenith\'s presence in Ghana\'s mining and industrial sectors.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Mining operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">About Zenith Logistics</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Leading the transformation of Ghana's logistics sector with innovation, safety, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-slate-900">Company Profile</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>Year Established:</strong> 2020
                </p>
                <p>
                  <strong>Legal Registration:</strong> Ghana Registrar of Companies
                </p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p><strong>Headquarters:</strong> Tarkwa, Western Region</p>
                    <p><strong>Branch Office:</strong> North Legon, Greater Accra</p>
                  </div>
                </div>
                <p>
                  <strong>Compliance:</strong> Minerals Commission Licensed
                </p>
                <p>
                  <strong>Specialization:</strong> Mining Sector Logistics & Supply Chain
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl mb-4 text-slate-900">Our Story</h3>
                <p className="text-slate-700">
                  Founded in 2020, Zenith Logistics Limited emerged from a vision to revolutionize 
                  logistics operations in Ghana's mining sector. Our founders recognized the critical 
                  need for specialized, technology-driven logistics solutions that could meet the 
                  unique demands of mining operations while maintaining the highest safety standards.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Modern logistics facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 text-center">
                  To be Ghana's premier logistics partner, driving sustainable growth in the mining 
                  sector through innovative solutions, exceptional service delivery, and unwavering 
                  commitment to safety and environmental responsibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center bg-slate-900 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 text-center">
                  To deliver comprehensive logistics and supply chain solutions that empower Ghana's 
                  mining companies to achieve operational excellence while contributing to the nation's 
                  economic development through job creation and skills development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide every aspect of our operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team & Organizational Structure */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Leadership Team & Organizational Structure</h2>
            <p className="text-lg text-slate-600">Meet our experienced professionals and understand our streamlined organization</p>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-slate-900 text-center">Our Leadership</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="text-center">
            <h3 className="text-2xl mb-8 text-slate-900">Organizational Structure</h3>
            <p className="text-lg text-slate-600 mb-8">
              Our streamlined organizational structure ensures efficient decision-making and optimal service delivery.
            </p>
            
            <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
              <div className="space-y-6">
                <div className="bg-blue-600 text-white p-4 rounded-lg">
                  <div>Chief Executive Officer</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <div className="text-sm">Project Manager</div>
                  </div>
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <div className="text-sm">Operations Director</div>
                  </div>
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <div className="text-sm">Business Development</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <div className="text-sm">Operations Team</div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <div className="text-sm">Support Staff</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}