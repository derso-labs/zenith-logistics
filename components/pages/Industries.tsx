import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Pickaxe, Building, Factory, Fuel, 
  CheckCircle, ArrowRight, TrendingUp,
  Users, MapPin, DollarSign
} from 'lucide-react';

export function Industries() {
  const industries = [
    {
      icon: Pickaxe,
      title: 'Mining & Extractives',
      description: 'Our primary specialization - comprehensive logistics support for gold, diamond, bauxite, and other mining operations across Ghana.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: [
        'Ore transportation and handling',
        'Mining equipment logistics',
        'Hazardous materials transport',
        'Mine-to-port logistics',
        'Custom safety clothing supply',
        'Equipment maintenance logistics'
      ],
      clients: 'Gold mining companies, Diamond operations, Bauxite mines',
      regions: 'Western Region, Ashanti Region, Eastern Region'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Supporting Ghana\'s infrastructure development with reliable logistics for construction materials and heavy equipment.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: [
        'Construction materials transport',
        'Heavy machinery logistics',
        'Just-in-time delivery',
        'Site storage solutions',
        'Project logistics coordination',
        'Safety equipment supply'
      ],
      clients: 'Construction companies, Real estate developers, Infrastructure projects',
      regions: 'Greater Accra, Kumasi, Regional capitals'
    },
    {
      icon: Factory,
      title: 'Industrial Manufacturing',
      description: 'Streamlined supply chain solutions for Ghana\'s growing manufacturing sector, ensuring efficient production workflows.',
      image: 'https://images.unsplash.com/photo-1565087030302-c56b89046f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: [
        'Raw materials procurement',
        'Finished goods distribution',
        'Inventory management',
        'Warehousing solutions',
        'Export logistics support',
        'Industrial safety supplies'
      ],
      clients: 'Manufacturing plants, Processing facilities, Export companies',
      regions: 'Tema Industrial Area, Kumasi, Takoradi'
    },
    {
      icon: Fuel,
      title: 'Oil & Gas (Future Expansion)',
      description: 'Preparing to serve Ghana\'s emerging oil and gas sector with specialized logistics solutions for offshore and onshore operations.',
      image: 'https://images.unsplash.com/photo-1516232809926-b8b5d4cac0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      services: [
        'Offshore logistics support',
        'Pipeline materials transport',
        'Specialized equipment handling',
        'Port logistics coordination',
        'Safety and compliance support',
        'Emergency response logistics'
      ],
      clients: 'Oil companies, Gas producers, Service providers',
      regions: 'Western Coast, Takoradi Port, Tema Port',
      upcoming: true
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Clients', value: '25+', description: 'Across all sectors' },
    { icon: MapPin, label: 'Service Areas', value: '6', description: 'Regions covered' },
    { icon: TrendingUp, label: 'Growth Rate', value: '45%', description: 'Year-over-year' },
    { icon: DollarSign, label: 'Value Delivered', value: '$2.8M', description: 'In logistics savings' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587039919103-3c9f00dfc9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Industrial operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Specialized logistics solutions tailored for Ghana's key industrial sectors, 
            driving economic growth and operational excellence.
          </p>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Our Industry Impact</h2>
            <p className="text-lg text-slate-600">Delivering measurable value across multiple sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-3xl text-blue-600">{stat.value}</CardTitle>
                  <CardDescription className="text-lg text-slate-900">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`${industry.upcoming ? 'bg-orange-600' : 'bg-blue-600'} text-white p-3 rounded-lg mr-4`}>
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-slate-900">{industry.title}</h2>
                      {industry.upcoming && (
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-1">
                          Future Expansion
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 mb-6">
                    {industry.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg text-slate-900 mb-3">Our Services:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {industry.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-slate-700">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="text-slate-900 mb-2">Target Clients:</h5>
                        <p className="text-sm text-slate-600">{industry.clients}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="text-slate-900 mb-2">Service Regions:</h5>
                        <p className="text-sm text-slate-600">{industry.regions}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" variant={industry.upcoming ? 'outline' : 'default'}>
                      <Link to="/contact">
                        {industry.upcoming ? 'Learn More' : 'Get Industry Quote'}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus - Mining */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6 text-slate-900">
              Our Primary Focus: Ghana's Mining Sector
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              As Ghana's leading gold producer in Africa and a major player in diamond and bauxite mining, 
              the country's mining sector represents tremendous opportunities for specialized logistics services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl text-slate-900 mb-3">Gold Mining</h3>
                <p className="text-slate-700 mb-4">
                  Ghana is Africa's largest gold producer, with major operations in the Western and Ashanti regions.
                </p>
                <div className="text-2xl text-yellow-600">2.8M oz</div>
                <div className="text-sm text-slate-600">Annual production</div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl text-slate-900 mb-3">Diamond Mining</h3>
                <p className="text-slate-700 mb-4">
                  Significant diamond deposits across multiple regions requiring specialized transport solutions.
                </p>
                <div className="text-2xl text-blue-600">125k ct</div>
                <div className="text-sm text-slate-600">Annual production</div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl text-slate-900 mb-3">Bauxite Mining</h3>
                <p className="text-slate-700 mb-4">
                  World's fifth-largest bauxite reserves with growing extraction operations.
                </p>
                <div className="text-2xl text-red-600">990M mt</div>
                <div className="text-sm text-slate-600">Proven reserves</div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl text-slate-900 mb-4">Why Mining Companies Choose Zenith Logistics</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-slate-900 mb-2">Specialized Expertise</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Deep understanding of mining operations</li>
                    <li>• Compliance with mining safety regulations</li>
                    <li>• Experience with precious materials handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-slate-900 mb-2">Strategic Advantages</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Headquarters in Tarkwa mining corridor</li>
                    <li>• 24/7 operations support</li>
                    <li>• Advanced security protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Partner with Ghana's Logistics Leader</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're in mining, construction, manufacturing, or planning for oil & gas operations, 
            we have the expertise and infrastructure to support your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Discuss Your Industry Needs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/about">Learn About Our Expertise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}