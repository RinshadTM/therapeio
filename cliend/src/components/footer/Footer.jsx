import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Heart, Shield, Lock, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-brand-500 to-skybrand-400 flex items-center justify-center shadow-lg shadow-brand-500/20">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2a10 10 0 0 0-7.5 16.6l.8.9a10 10 0 0 0 13.4 0l.8-.9A10 10 0 0 0 12 2z"/>
                  <path d="M12 7c-2 0-3.5 1.5-3.5 3.5 0 2.5 3.5 6.5 3.5 6.5s3.5-4 3.5-6.5c0-2-1.5-3.5-3.5-3.5z"/>
                  <circle cx="12" cy="10.5" r="1" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Ther<span className="text-brand-400">paeia</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Theraeia is an online healing and psychological wellness platform connecting you with licensed, compassionate mental health professionals in a confidential, comfortable environment.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700/80 text-brand-300">
                <Lock className="w-3 h-3 text-brand-400" />
                <span>100% Private & Encrypted</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700/80 text-sky-300">
                <Shield className="w-3 h-3 text-sky-400" />
                <span>RCI Licensed Experts</span>
              </div>
            </div>
          </div>

          {/* Column: Platform */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/doctors" className="hover:text-brand-400 transition-colors">
                  Find Therapist
                </Link>
              </li>
              <li>
                <Link to="/service/individual-therapy" className="hover:text-brand-400 transition-colors">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link to="/service/couple-therapy" className="hover:text-brand-400 transition-colors">
                  Couple Therapy
                </Link>
              </li>
              <li>
                <Link to="/service/sexual-health" className="hover:text-brand-400 transition-colors">
                  Sexual Health
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="hover:text-brand-400 transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Company & Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  About Theraeia
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Careers & Clinicians
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  Privacy Policy & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="mailto:care@theraeia.com" className="hover:text-brand-400 transition-colors truncate">
                  care@theraeia.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="tel:+919847012345" className="hover:text-brand-400 transition-colors">
                  +91 98470 12345
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a
                  href="https://wa.me/919847012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  WhatsApp Care Desk
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-2">
                Available Mon–Sat: 8:00 AM – 9:00 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Therapeia. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Clinical Guidelines</Link>
          </div>

          <p className="flex items-center gap-1 text-slate-400">
            Crafted for mental healing & emotional growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
