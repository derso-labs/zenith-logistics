import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Truck, Package, Warehouse, MapPin, Clock, 
  CheckCircle, ArrowRight, Zap, BarChart3, Users,
  Radio, HardHat, Gauge, Brain, TrendingDown, Target, Lightbulb, Shield
} from 'lucide-react';

export function Services() {
  const haulageFeatures = [
    { icon: Radio, title: 'Real-time GPS Tracking', description: 'Monitor your shipments 24/7 with advanced tracking systems' },
    { icon: Users, title: 'Skilled Professional Drivers', description: 'Certified drivers with mining sector expertise' },
    { icon: Shield, title: 'Safety-First Operations', description: 'Comprehensive safety protocols and insurance coverage' },
    { icon: HardHat, title: 'Hazardous Material Handling', description: 'Specialized equipment for dangerous goods transport' }
  ];

  const supplyChainBenefits = [
    'Reduced operational costs by up to 25%',
    'Improved inventory turnover rates',
    'Streamlined procurement processes',
    'Enhanced supplier relationship management',
    'Real-time supply chain visibility'
  ];

  const warehouseFeatures = [
    'Climate-controlled storage environments',
    'Advanced inventory management systems',
    'Barcode and RFID tracking',
    '24/7 security monitoring',
    'Flexible storage solutions',
    'Easy access for mining sites'
  ];

  const techFeatures = [
    {
      icon: MapPin,
      title: 'Advanced GPS Tracking',
      description: 'Real-time location monitoring with geofencing capabilities'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Reporting',
      description: 'Detailed analytics and performance reports for decision making'
    },
    {
      icon: Gauge,
      title: 'Dashboard Analytics',
      description: 'User-friendly dashboards for clients to monitor operations'
    },
    {
      icon: Zap,
      title: 'Automated Alerts',
      description: 'Instant notifications for delivery updates and exceptions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Logistics operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive logistics solutions powered by technology and delivered with the highest safety standards for Ghana's mining sector.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="haulage" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="haulage">Haulage Services</TabsTrigger>
              <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
              <TabsTrigger value="warehousing">Warehousing</TabsTrigger>
              <TabsTrigger value="consultancy">Consultancy</TabsTrigger>
            </TabsList>

            {/* Haulage Services */}
            <TabsContent value="haulage" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                      <Truck className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl text-slate-900">Haulage Services</h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6">
                    Specialized transportation solutions for the mining industry, handling everything from 
                    precious ores to heavy machinery and hazardous materials with precision and care.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl text-slate-900">What We Transport:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Gold, diamond, and other precious ores
                      </li>
                      <li className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Heavy mining machinery and equipment
                      </li>
                      <li className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Hazardous materials and chemicals
                      </li>
                      <li className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        Construction materials and supplies
                      </li>
                    </ul>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/contact">Get Haulage Quote</Link>
                  </Button>
                </div>
                
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Mining truck operations"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {haulageFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardHeader>
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Supply Chain Management */}
            <TabsContent value="supply-chain" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Supply chain management"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                      <Package className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl text-slate-900">Supply Chain Management</h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6">
                    End-to-end supply chain optimization that ensures your mining operations have the right 
                    materials, at the right time, in the right quantities.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl text-slate-900">How It Works:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 text-sm">1</div>
                        <div>
                          <div className="text-slate-900">Assessment & Planning</div>
                          <div className="text-sm text-slate-600">Analyze your supply chain needs and create optimization strategies</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 text-sm">2</div>
                        <div>
                          <div className="text-slate-900">Procurement & Sourcing</div>
                          <div className="text-sm text-slate-600">Strategic sourcing of materials and vendor management</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 text-sm">3</div>
                        <div>
                          <div className="text-slate-900">Delivery & Monitoring</div>
                          <div className="text-sm text-slate-600">Timely delivery with real-time tracking and reporting</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h4 className="text-lg text-slate-900 mb-4">Client Benefits:</h4>
                    <ul className="space-y-2">
                      {supplyChainBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/contact">Contact for Pricing</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Warehousing & Storage */}
            <TabsContent value="warehousing" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                      <Warehouse className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl text-slate-900">Warehousing & Storage</h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6">
                    Secure, modern storage facilities strategically located to serve Ghana's mining corridor, 
                    equipped with advanced inventory management systems.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {warehouseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="text-lg text-slate-900 mb-2">Strategic Locations:</h4>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                        <span>Tarkwa - Main mining corridor access</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                        <span>North Legon - Accra port connectivity</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/contact">Request Storage Quote</Link>
                  </Button>
                </div>
                
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Modern warehouse facility"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Logistics Consultancy */}
            <TabsContent value="consultancy" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                      <Brain className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl text-slate-900">Logistics Consultancy</h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6">
                    Expert advisory services to optimize your supply chain operations, reduce costs, and improve 
                    efficiency across your mining logistics network.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-lg text-slate-900 mb-3">Consultation Areas:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                          <Target className="h-5 w-5 text-blue-600 mr-3" />
                          <div className="text-sm text-slate-900">Supply Chain Optimization</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                          <TrendingDown className="h-5 w-5 text-blue-600 mr-3" />
                          <div className="text-sm text-slate-900">Cost Reduction Strategies</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                          <Lightbulb className="h-5 w-5 text-blue-600 mr-3" />
                          <div className="text-sm text-slate-900">Process Innovation</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                          <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                          <div className="text-sm text-slate-900">Performance Analytics</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg text-slate-900 mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                          Comprehensive supply chain assessment
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                          Customized optimization roadmap
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                          Implementation support and guidance
                        </li>
                        <li className="flex items-center text-slate-700">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                          Ongoing performance monitoring
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <div className="text-2xl text-green-600 mb-2">30%</div>
                      <div className="text-slate-900">Average Cost Reduction</div>
                      <div className="text-sm text-slate-600 mt-1">For our consulting clients</div>
                    </div>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
                
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Logistics consulting and strategy"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Technology Integration</h2>
            <p className="text-lg text-slate-600">Advanced technology solutions that give you complete visibility and control</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl mb-4 text-slate-900">Client Dashboard Benefits</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  Real-time shipment tracking and status updates
                </li>
                <li className="flex items-center text-slate-700">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                  Detailed performance analytics and reporting
                </li>
                <li className="flex items-center text-slate-700">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  Automated alerts for delivery exceptions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Digital documentation and invoice management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a customized logistics solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}