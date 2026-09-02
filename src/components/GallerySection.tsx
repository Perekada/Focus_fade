import React, { useState } from 'react';
import { ASSETS } from '../data/barbershopData';
import { Maximize2, X, Scissors, Award, Check } from 'lucide-react';

interface GallerySectionProps {
  onBookStyle?: (styleName: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookStyle }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fades' | 'beards' | 'master'>('all');

  const galleryStyles = [
    {
      id: 'style-1',
      name: 'High Skin Drop Fade',
      barber: 'Marcus (Master)',
      desc: 'Seamless zero blend with razor perimeter & textured matte finish.',
      tags: ['Fade', 'Precision', 'Zero Blend'],
    },
    {
      id: 'style-2',
      name: 'High Top Taper & Line-up',
      barber: 'Marcus (Master)',
      desc: 'Defined sharp geometry with dense crown volume & crisp temple taper.',
      tags: ['Taper', 'Artistry', 'Geometry'],
    },
    {
      id: 'style-3',
      name: 'Razor Blade Burst Fade',
      barber: 'David (Senior)',
      desc: 'Sleek ear curvature blend with custom clean hair tattoo incision.',
      tags: ['Burst Fade', 'Custom Line'],
    },
    {
      id: 'style-4',
      name: 'Classic Executive Pompadour',
      barber: 'David (Senior)',
      desc: 'Tailored shear graduation paired with sculpted, oiled full beard.',
      tags: ['Classic', 'Full Beard', 'Scissor Cut'],
    },
  ];

  return (
    <section className="py-24 bg-[#121212] border-y border-[#1A1A1A] relative" id="gallery">
      {/* Header */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D32F2F] mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Master Crafts Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] uppercase tracking-tight mb-2">
            Our Work
          </h2>
          <p className="text-sm sm:text-base text-[#C4C7C7]">The fade, perfected.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'fades', 'beards', 'master'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold border transition-all ${
                activeFilter === filter
                  ? 'bg-[#D32F2F] text-white border-[#D32F2F]'
                  : 'bg-[#1C1B1B] text-[#C4C7C7] border-[#2A2A2A] hover:border-[#D32F2F] hover:text-white'
              }`}
            >
              {filter === 'all' ? 'All Cuts' : filter === 'fades' ? 'Skin Fades' : filter === 'beards' ? 'Beards' : 'Master Series'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Gallery Container */}
      <div className="w-full px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto">
        <div className="relative border border-[#2A2A2A] bg-[#0A0A0A] p-2 sm:p-4 group">
          {/* Main Portfolio Grid Image */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden flex items-center justify-center bg-[#0E0E0E]">
            <img
              src={ASSETS.galleryMain}
              alt="Focus-Fade 4-Panel Cut Portfolio Showcase"
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />

            {/* Hover Overlay Button */}
            <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 p-4">
              <button
                onClick={() => setLightboxOpen(true)}
                className="px-6 py-3 bg-[#D32F2F] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Showcase</span>
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#8E9192] px-2 py-1">
            <span>Hover / tap image to toggle Noir to full detail</span>
            <span className="hidden sm:inline-block">Curated Studio Portfolio 2024</span>
          </div>
        </div>

        {/* Detailed Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {galleryStyles.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#181818] border border-[#262626] p-4 flex flex-col justify-between hover:border-[#D32F2F] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8E9192] mb-1.5">
                  <span className="font-mono text-[#D32F2F]">0{idx + 1}</span>
                  <span className="text-[11px] text-[#C4C7C7]">{item.barber}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#E5E2E1] mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-[#8E9192] leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#222] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider text-[#A1A1A1] bg-[#121212] px-1.5 py-0.5 border border-[#2A2A2A]">
                      {t}
                    </span>
                  ))}
                </div>
                {onBookStyle && (
                  <button
                    onClick={() => onBookStyle(item.name)}
                    className="text-[#D32F2F] hover:text-white text-xs font-semibold uppercase flex items-center gap-1"
                    title={`Book this style`}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D32F2F] p-2 bg-[#1C1B1B] border border-[#353534]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center">
            <img
              src={ASSETS.galleryMain}
              alt="Focus-Fade High Definition Gallery Showcase"
              className="max-h-[75vh] w-auto object-contain border border-[#2A2A2A]"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-2xl text-white font-bold">Focus-Fade Signature Portfolio</h3>
              <p className="text-sm text-[#C4C7C7] mt-1">Mastercrafted geometry, fade transitions, and razor finishes.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
