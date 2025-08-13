import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export function CompanyInfo() {
  const companyDetails = {
    name: 'Zenith Logistics Limited',
    established: '2020',
    registration: 'Ghana Registrar of Companies',
    license: 'Minerals Commission Licensed',
    headquarters: 'Tarkwa, Western Region, Ghana',
    branchOffice: 'North Legon, Greater Accra Region, Ghana',
    phone: '+233 123 456 789',
    email: 'info@zenithlogistics.com.gh',
    employees: '25+',
    fleetSize: '15+',
    industries: ['Mining', 'Construction', 'Manufacturing'],
    certifications: ['ISO 9001:2015', 'Ghana Health & Safety Standards', 'Mining Industry Compliance']
  };

  const keyStats = [
    { icon: Users, label: 'Team Members', value: '25+' },
    { icon: Shield, label: 'Years in Business', value: '4+' },
    { icon: Award, label: 'Fleet Vehicles', value: '15+' }
  ];

  return (
    <div className="space-y-8">
      {/* Company Overview */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span>Company Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-slate-900 mb-2">Business Details</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li><strong>Company Name:</strong> {companyDetails.name}</li>
                <li><strong>Established:</strong> {companyDetails.established}</li>
                <li><strong>Registration:</strong> {companyDetails.registration}</li>
                <li><strong>License:</strong> {companyDetails.license}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 mb-2">Contact Information</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>{companyDetails.phone}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>{companyDetails.email}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-3 w-3 mt-1" />
                  <div>
                    <div>{companyDetails.headquarters}</div>
                    <div>{companyDetails.branchOffice}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        {keyStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-700">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications & Compliance */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Certifications & Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {companyDetails.certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-slate-700">
                <Award className="h-4 w-4 text-green-600" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}