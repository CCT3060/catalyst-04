import React from 'react';

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
            <img 
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
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="hover-translate">
                <div className="text-sm font-semibold text-gray-700 dark:text-zinc-200">{role}</div>
              </div>
            </div>
            <button 
              onClick={onConnect}
              className="bg-[#191919] text-white rounded-lg px-4 py-2 text-sm font-medium
                       transition-all duration-500 ease-out transform hover:scale-105 
                       hover:bg-[#0373ff]
                       active:scale-95 hover:shadow-md whitespace-nowrap"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
