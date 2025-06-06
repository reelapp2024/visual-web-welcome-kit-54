
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningFooter from '../components/CleaningFooter';
import { Shield, CheckCircle, FileText } from 'lucide-react';

const CleaningTermsConditions = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Service Agreement
                </h2>
                <p className="leading-relaxed">
                  By hiring SparkleClean Pro for cleaning services, you agree to these terms and conditions. 
                  Our services include residential cleaning, commercial cleaning, deep cleaning, upholstery cleaning, 
                  and specialized cleaning services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Pricing and Payment
                </h2>
                <p className="leading-relaxed mb-3">
                  All pricing is based on the scope of work, property size, and frequency of service. 
                  Payment is due upon completion of service unless other arrangements have been made in advance.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>We accept cash, check, and major credit cards</li>
                  <li>Estimates are free and provided within 24 hours</li>
                  <li>Recurring service discounts available</li>
                  <li>Final pricing may vary based on actual conditions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  Liability and Insurance
                </h2>
                <p className="leading-relaxed">
                  SparkleClean Pro is fully licensed, bonded, and insured. We maintain comprehensive general 
                  liability insurance and workers' compensation coverage. Our liability is limited to the 
                  value of the service provided.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Service Standards
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>We use eco-friendly, non-toxic cleaning products</li>
                  <li>All staff are background checked and trained</li>
                  <li>100% satisfaction guarantee on all services</li>
                  <li>Same-day service available for emergencies</li>
                  <li>Flexible scheduling to fit your needs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Cancellation Policy
                </h2>
                <p className="leading-relaxed">
                  Services may be cancelled up to 24 hours before scheduled appointment time without penalty. 
                  Cancellations with less than 24 hours notice may be subject to a cancellation fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Environmental Responsibility
                </h2>
                <p className="leading-relaxed">
                  We are committed to environmentally responsible cleaning practices. All products used 
                  are eco-friendly and safe for families, pets, and the environment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at (555) 123-4567 or 
                  info@sparklecleanpro.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <CleaningFooter />
    </div>
  );
};

export default CleaningTermsConditions;
