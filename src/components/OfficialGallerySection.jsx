import React, { useState } from 'react';
import { OFFICIAL_GALLERY_IMAGES, OFFICIAL_VIDEOS } from '../data/projectData';
import { Play, Maximize2, X } from 'lucide-react';

export default function OfficialGallerySection() {
  const [activeTab, setActiveTab] = useState('images'); // 'images' | 'videos'
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-[#F5F2EB] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Title Column (Width ~250px pattern) */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
              GALLERY
            </h2>
            <div className="w-12 h-0.5 bg-amber-800 mt-2 mb-6"></div>

            {/* Official Sub-Tabs with icons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('images')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                  activeTab === 'images'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                <img
                  src="https://rohanbuilders.com/wp-content/uploads/2023/04/images-tile.png"
                  alt="Images"
                  className={`w-6 h-6 object-contain ${activeTab === 'images' ? 'brightness-0 invert' : ''}`}
                />
                <span className="text-xs font-bold uppercase tracking-wider font-sans">
                  IMAGES ({OFFICIAL_GALLERY_IMAGES.length})
                </span>
              </button>

              <button
                onClick={() => setActiveTab('videos')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                  activeTab === 'videos'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                <img
                  src="https://rohanbuilders.com/wp-content/uploads/2023/04/Video360-tile.png"
                  alt="Videos & 360"
                  className={`w-6 h-6 object-contain ${activeTab === 'videos' ? 'brightness-0 invert' : ''}`}
                />
                <span className="text-xs font-bold uppercase tracking-wider font-sans">
                  VIDEOS & 360 ({OFFICIAL_VIDEOS.length})
                </span>
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            {/* Sub-Tab 1: Images */}
            {activeTab === 'images' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {OFFICIAL_GALLERY_IMAGES.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(imgUrl)}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-200 cursor-pointer border border-stone-300 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={imgUrl}
                      alt={`Rohan Ekam ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 2: Videos & 360 */}
            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {OFFICIAL_VIDEOS.map((vid, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveVideo(vid)}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 cursor-pointer border border-stone-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-3"
                  >
                    <img
                      src={vid.thumb}
                      alt={vid.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/30 transition-colors" />

                    <div className="relative z-10 self-end">
                      <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono">
                        HD Walkthrough
                      </span>
                    </div>

                    <div className="relative z-10 my-auto self-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-stone-900 ml-0.5" />
                      </div>
                    </div>

                    <div className="relative z-10 bg-black/70 backdrop-blur-xs px-2.5 py-1.5 rounded-xl">
                      <span className="text-xs font-bold text-white block">
                        {vid.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-3xl p-4 shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[82vh] overflow-hidden rounded-2xl flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="Enlarged gallery view"
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 text-white">
              <span className="text-sm font-bold">{activeVideo.title}</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
