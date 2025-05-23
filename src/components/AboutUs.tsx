
import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are your trusted local service provider, committed to delivering exceptional quality and reliable solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals with years of experience</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service</h3>
            <p className="text-gray-600">Guaranteed satisfaction with every project</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
            <p className="text-gray-600">Quick turnaround times for urgent needs</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted</h3>
            <p className="text-gray-600">Licensed, insured, and locally owned</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Your Local Service Experts
            </h3>
            <p className="text-gray-600 mb-6">
              With over a decade of experience serving our community, we understand the unique needs of local customers. Our team of certified professionals is dedicated to providing top-quality services that exceed expectations.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in our reputation for reliability, professionalism, and customer satisfaction. Whether it's an emergency call or a scheduled service, we're here to help 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Locally Owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <span className="text-gray-700">24/7 Available</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
              alt="Professional team at work"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
