
import React from 'react';
import CleaningHeader from '../components/CleaningHeader';
import CleaningFooter from '../components/CleaningFooter';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const CleaningPrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-green-500 mr-3" />
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-3">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Request a quote or schedule cleaning service</li>
                  <li>Contact us via phone, email, or website</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Provide feedback or reviews</li>
                  <li>Create an account on our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-green-500 mr-3" />
                  Types of Information
                </h2>
                <p className="leading-relaxed mb-3">Information we may collect includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Name and contact information (phone, email, address)</li>
                  <li>Property details and access instructions</li>
                  <li>Payment information (processed securely by third parties)</li>
                  <li>Service preferences and special requests</li>
                  <li>Communication history and service records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-green-500 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Provide and improve our cleaning services</li>
                  <li>Communicate about appointments and services</li>
                  <li>Process payments and billing</li>
                  <li>Send service reminders and updates</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  Information Sharing
                </h2>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Service providers who assist with business operations</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business successors in case of merger or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-green-500 mr-3" />
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. All sensitive 
                  data is encrypted and stored securely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-green-500 mr-3" />
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-green-500 mr-3" />
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about this privacy policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="mt-3 space-y-1 ml-6">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@sparklecleanpro.com</p>
                  <p>Address: Los Angeles, CA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <CleaningFooter />
    </div>
  );
};

export default CleaningPrivacyPolicy;
