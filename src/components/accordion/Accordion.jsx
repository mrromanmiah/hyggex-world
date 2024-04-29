

const Accordion = () => {
    return (
        <div className="lg:mb-40 md:mb-28 mb-16">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text lg:mt-20 md:mt-10 mt-8 lg:mb-10 md:mb-7 mb-5">FAQ</h1>

            <div className="collapse collapse-arrow border border-[#06286E] lg:w-2/3 md:w-2/3 w-full mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title lg:text-lg md:text-xs text-[10px] font-semibold text-black flex items-center">
                    Can education flashcards be used for all age groups?
                </div>
                <div className="collapse-content">
                    <p className="lg:text-lg md:text-xs text-[10px]">hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border border-[#06286E] lg:w-2/3 md:w-2/3 w-full mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title lg:text-lg md:text-xs text-[10px] font-semibold text-black flex items-center">
                    How do education flashcards work?
                </div>
                <div className="collapse-content">
                    <p className="lg:text-lg md:text-xs text-[10px]">hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border border-[#06286E] lg:w-2/3 md:w-2/3 w-full mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title lg:text-lg md:text-xs text-[10px] font-semibold text-black flex items-center">
                    Can education flashcards be used for test preparation?
                </div>
                <div className="collapse-content">
                    <p className="lg:text-lg md:text-xs text-[10px]">hello</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;