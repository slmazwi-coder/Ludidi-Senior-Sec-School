import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const TikTokIcon = (props: { size?: number; className?: string }) => {
  const size = props.size ?? 20;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg" className={props.className} aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.372V2h-3.58v13.2a2.988 2.988 0 0 1-2.99 2.99 2.988 2.988 0 0 1-2.99-2.99 2.988 2.988 0 0 1 2.99-2.99c.304 0 .598.047.875.133V8.69a6.58 6.58 0 0 0-.875-.06A6.57 6.57 0 0 0 2.68 15.2a6.57 6.57 0 0 0 6.57 6.57 6.57 6.57 0 0 0 6.57-6.57V9.207a8.318 8.318 0 0 0 3.77.92V6.686Z" />
    </svg>
  );
};

export const Footer = () => {
  return (
    <footer className="pt-12 pb-8 w-full" style={ { background: '#1B2A4A', borderTop: '4px solid #C4A862' } }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Col 1 — Logo + Name + Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden shadow-lg"
                style={ { background: '#F5F0DC', border: '2px solid #C4A862' } }>
                <img src="/rslogo.png" alt="Ramafole SSS logo"
                  className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight" style={ { color: '#C4A862' } }>
                  Ramafole Senior Secondary School
                </h3>
                <p className="text-sm italic mt-0.5" style={ { color: 'rgba(196,168,98,0.65)' } }>
                  "Rational Co-operation Leads to Success"
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <a href="#" target="_blank" rel="noreferrer"
                className="p-2 rounded-full transition-colors"
                style={ { background: 'rgba(196,168,98,0.15)', color: '#C4A862' } }
                aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer"
                className="p-2 rounded-full transition-colors"
                style={ { background: 'rgba(196,168,98,0.15)', color: '#C4A862' } }
                aria-label="TikTok">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 pb-2 uppercase tracking-wide"
              style={ { color: '#C4A862', borderBottom: '1px solid rgba(196,168,98,0.25)' } }>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm" style={ { color: 'rgba(196,168,98,0.8)' } }>
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Umtumasi A/A, Ramafole, P.O. Box 230, Mount Fletcher, 4770 (Eastern Cape)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>083 240 6200 / 076 124 1782</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="shrink-0 mt-0.5" />
                <span className="break-all">200501058@ecschools.org.za</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — School Hours */}
          <div>
            <h4 className="text-sm font-bold mb-4 pb-2 uppercase tracking-wide"
              style={ { color: '#C4A862', borderBottom: '1px solid rgba(196,168,98,0.25)' } }>
              School Hours
            </h4>
            <ul className="space-y-2 text-sm" style={ { color: 'rgba(196,168,98,0.8)' } }>
              <li className="flex justify-between gap-4">
                <span>Mon – Thu</span>
                <span className="font-medium">07:30 – 15:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Friday</span>
                <span className="font-medium">07:30 – 13:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center text-xs" style={ { borderTop: '1px solid rgba(196,168,98,0.15)', color: 'rgba(196,168,98,0.5)' } }>
          <p>&copy; {new Date().getFullYear()} Ramafole Senior Secondary School. All Rights Reserved.</p>
          <Link to="/admin/login"
            className="text-xs mt-2 inline-block transition-colors hover:opacity-80"
            style={ { color: 'rgba(196,168,98,0.3)' } }>
            Staff Portal
          </Link>
        </div>

      </div>
    </footer>
  );
};
