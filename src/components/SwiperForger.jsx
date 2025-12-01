import React from 'react'

import slide1 from '../assets/slides/Снимок экрана 2025-11-30 205507.png'
import slide2 from '../assets/slides/Снимок экрана 2025-11-30 205446.png'
import slide3 from '../assets/slides/Снимок экрана 2025-11-30 205438.png'
import slide4 from '../assets/slides/Снимок экрана 2025-11-30 205526.png'
import slide5 from '../assets/slides/Снимок экрана 2025-11-30 205545.png'

export default function SwiperForger() {

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className='mt-30 mb-30'>

                <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
                <div className="flex items-center gap-2 h-[400px] w-full max-w-7xl mt-10 mx-auto ">
                    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={slide1}
                            alt="image" />
                    </div>
                    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={slide2}
                            alt="image" />
                    </div>
                    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={slide3}
                            alt="image" />
                    </div>
                    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={slide4}
                            alt="image" />
                    </div>
                    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={slide5}
                            alt="image" />
                    </div>
                </div>

            </div>
        </>
    );
};
