import React from 'react';

function LinkedinIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const ProfileCard = ({ name, role, image, onConnect }) => {
  return (
    <>
      <style>
        {`
          .hover-scale {
            transition: transform 700ms ease-out;
          }
          
          .hover-scale:hover {
            transform: scale(1.02);
          }
          
          .image-scale {
            transition: transform 700ms ease-out;
          }
          
          .image-container:hover .image-scale {
            transform: scale(1.03);
          }
          
          .hover-translate {
            transition: transform 500ms ease-out;
          }
          
          .hover-translate:hover {
            transform: translateX(4px);
          }
          
          .hover-scale-sm {
            transition: transform 500ms ease-out;
          }
          
          .hover-scale-sm:hover {
            transform: scale(1.1);
          }
        `}
      </style>
      
      <div className="w-full">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl dark:shadow-black/80 overflow-hidden hover-scale border border-gray-100">
          <div className="relative overflow-hidden image-container">
            <img loading="lazy" 
              src={image || "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"}
              alt={name} 
              className="w-full aspect-square object-cover image-scale"
              style={{ objectPosition: 'top' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-medium text-white drop-shadow-lg">{name}</h2>
            </div>
          </div>
          
          <div className="p-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="hover-translate">
                <div className="text-sm font-semibold text-gray-700 dark:text-zinc-200">{role}</div>
              </div>
            </div>
            <button 
              onClick={onConnect}
              aria-label={`Connect with ${name} on LinkedIn`}
              title="Connect on LinkedIn"
              className="bg-[#191919] text-white rounded-xl p-2.5 
                       transition-all duration-300 ease-out transform hover:scale-110 
                       hover:bg-[#0077b5]
                       active:scale-95 hover:shadow-md flex items-center justify-center shrink-0"
            >
              <LinkedinIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
