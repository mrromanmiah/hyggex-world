import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdQrScanner } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { MdOutlineLightbulb } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const Carousel = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex items-center justify-center text-center mx-auto mt-6">
            <div>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="rounded-3xl bg-gradient-to-bl from-[#051A91] to-[#1F80EB] lg:w-[600px] md:w-[400px] w-[300px]"
                        style={{
                            display: index === currentSlideIndex ? 'block' : 'none',

                        }}
                    >
                        <div>
                            <div className='text-white lg:text-2xl md:text-xl text-lg font-bold flex justify-between lg:px-10 md:px-6 px-3 lg:pt-10 md:pt-6 pt-3'>

                                <button><MdOutlineLightbulb /></button>
                                <button><HiMiniSpeakerWave /></button>
                            </div>
                            <h2 className='lg:pt-24 md:pt-12 pt-6 lg:pb-36 md:pb-16 pb-10 text-white lg:text-3xl md:text-xl text-lg font-semibold'>{slide.text}</h2>
                        </div>
                    </div>
                ))}
                <div className='flex items-center justify-between mt-6'>
                    <button className='text-[#06286E] font-bold lg:text-3xl md:text-xl text-lg lg:p-3 md:p-2 p-1 bg-white hover:bg-slate-300 rounded-full'><TbReload /></button>
                    <div className="flex justify-center lg:gap-8 md:gap-4 gap-2  items-center">
                        <button onClick={goToPrevSlide} className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full  text-white lg:text-3xl md:text-xl text-lg lg:p-3 md:p-2 p-1 font-black' ><IoIosArrowBack /></button>
                        <span className='text-[#06286E] font-bold lg:text-xl md:text-lg text-base'>{`${currentSlideIndex + 1} / ${slides.length}`}</span>
                        <button onClick={goToNextSlide} className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full  text-white lg:text-3xl md:text-xl text-lg lg:p-3 md:p-2 p-1 font-black'><IoIosArrowForward /></button>
                    </div>
                    <button className='text-[#06286E] font-bold lg:text-3xl md:text-xl text-lg lg:p-3 md:p-2 p-1 bg-white hover:bg-slate-300 rounded-full'><IoMdQrScanner /></button>
                </div>
            </div>
        </div >
    );
};

export default Carousel;
