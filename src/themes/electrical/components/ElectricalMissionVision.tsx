
import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';

const ElectricalMissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to providing safe, reliable electrical services while building lasting relationships with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mr-4">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide safe, reliable, and professional electrical services that exceed our customers' expectations. We are committed to delivering quality workmanship, outstanding customer service, and electrical solutions that protect homes and businesses in our community.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mr-4">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the most trusted electrical service provider in our region, known for our expertise, integrity, and commitment to electrical safety. We envision a community where every home and business has safe, efficient electrical systems maintained by qualified professionals.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
          <h3 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h3>
          <p className="text-xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
            Every electrical project we undertake is backed by our commitment to safety, quality, and customer satisfaction. We stay current with electrical codes, use premium materials, and provide ongoing support to ensure your electrical systems operate safely and efficiently for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElectricalMissionVision;
