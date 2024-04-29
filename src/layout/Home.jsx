


import Accordion from "../components/accordion/Accordion";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Carousel from "../components/carousel/Carousel";
import Publish from "../components/publish/Publish";
import AllTabs from "../components/tabs/AllTabs";

const Home = () => {

    const slides = [
        { text: '9 + 6 + 7x - 2x - 3' },
        { text: '3x + 4 − 2x + 5' },
        { text: '2y − 3 + 8y − 5' },
        { text: '6a − 2b + 4a + 3b − 7' },
        { text: '9m + 2n − 5m + 3n + 1' },
        { text: '7p − 2q + 4p − 3q − 6' },
        { text: '5x − 2y + 3x + 4y − 1' },
        { text: '8a + 3b − 2a + 7b − 4' },
        { text: '4m − 2n + 6m − 3n + 2' },
        { text: '3p + 4q − 5p + 2q + 8' }
    ];
    return (
        <div className="lg:px-20 md:px-10 px-5">
            <Breadcrumbs></Breadcrumbs>
            <div>
                <h1 className="lg:text-3xl md:text-xl text-sm font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text mt-8">Relations and Functions ( Mathematics )</h1>
            </div>
            <AllTabs></AllTabs>
            <Carousel slides={slides}></Carousel>
            <Publish></Publish>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;