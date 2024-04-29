import { FaPlus } from "react-icons/fa6";

const Publish = () => {
    return (
        <div className="flex items-center justify-between mx-auto">
            <div className="flex items-center lg:gap-4 md:gap-4 gap-2 py-10">
                <button className="rounded-full lg:p-5 md:p-3 p-3" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}>
                    <img src="https://i.ibb.co/h7k89BR/logo.png" className="lg:w-7 md:w-7 w-5 lg:h-7 md:h-7 h-5" alt="logo" />
                </button>
                <div>
                    <h6 className="lg:text-xs md:text-xs text-[8px] font-semibold">Published by</h6>
                    <h1 className="flex lg:text-2xl md:text-xl text-sm text-[#06286E] font-semibold">Hygge<span className="font-extrabold text-[#06286E]">X</span></h1>
                </div>
            </div>
            <div className="flex items-center lg:gap-4 md:gap-2 gap-2">
                <button className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full lg:p-2 md:p-1 p-1 text-white lg:text-2xl md:text-xl text-sm font-black'><FaPlus /></button>
                <h1 className="lg:text-2xl md:text-xl text-sm font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">Create Flashcard</h1>
            </div>
        </div>
    );
};

export default Publish;