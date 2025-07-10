import React from 'react';
import { Heart, Users, Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-amber-50 border-t border-orange-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">HelpHive</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connecting hearts, building communities. Your neighbor's helping hand is just a click away.
            </p>
            <div className="flex items-center space-x-2 text-sm text-orange-600">
              <Users className="h-4 w-4" />
              <span className="font-medium">Building stronger communities across India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-200 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">About Us</a></li>
              <li><a href="/help" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Get Help</a></li>
              <li><a href="/offer" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Offer Help</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-200 pb-2">
              Community
            </h4>
            <ul className="space-y-2">
              <li><a href="/report" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Report Issues</a></li>
              <li><a href="/auth" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Become a Volunteer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-200 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>hello@helphive.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-2">
                <a href="#" className="bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors">
                  <Twitter className="h-4 w-4 text-orange-600" />
                </a>
                <a href="#" className="bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors">
                  <Instagram className="h-4 w-4 text-orange-600" />
                </a>
                <a href="#" className="bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition-colors">
                  <Linkedin className="h-4 w-4 text-orange-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Banner */}
        <div className="mt-12 pt-8 border-t border-orange-200">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6">
            <div className="text-center">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">
                🙏 Our Values - हमारे मूल्य
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-orange-600 font-medium">Seva</span>
                  <span className="text-gray-600">• Service with Love</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-orange-600 font-medium">Sahayata</span>
                  <span className="text-gray-600">• Help & Support</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-orange-600 font-medium">Sangam</span>
                  <span className="text-gray-600">• Unity in Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with love in India</span>
              <span className="text-orange-500">🇮🇳</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 HelpHive. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <a href="#privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-orange-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;