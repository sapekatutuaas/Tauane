import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

// Inline SVG for Google 'G' Logo to ensure it always loads
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Google Header Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-white p-1 rounded-full shadow-sm">
               <GoogleIcon />
             </div>
             <span className="text-slate-600 text-lg font-medium">Reviews</span>
          </div>
          <div className="flex items-center gap-1">
             <span className="text-2xl font-bold text-brand-navy">5.0</span>
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <span className="text-slate-500 text-sm ml-2">baseado em avaliações de clientes</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <span className="ml-auto text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-1.5">
                 <GoogleIcon />
                 <span className="text-xs text-slate-400 font-medium">Avaliação no Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};