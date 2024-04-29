import { GoHome } from "react-icons/go";

const Breadcrumbs = () => {
    return (
        <div className="lg:text-sm md:text-xs text-[10px] font-medium breadcrumbs mt-8">
            <ul>
                <li className="text-lg "><a><GoHome /></a></li>
                <li><a>Flashcard</a></li>
                <li><a>Mathematics</a></li>
                <li className="text-[#06286E] font-bold">Relation and Function</li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;