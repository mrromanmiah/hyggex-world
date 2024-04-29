
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="drawer relative z-20">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar lg:px-20 md:px-6 px-2">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <img className="w-10" src="https://i.ibb.co/h7k89BR/logo.png" alt="logo" />
                    <div className="flex-1 mx-2 text-3xl text-[#06286E] font-semibold">Hygge<span className="font-extrabold text-[#06286E]">X</span></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal font-medium items-center">
                            <NavLink to='/'><li><a>Home</a></li></NavLink>
                            <NavLink to='/flashcard'><li><a>Flashcard</a></li></NavLink>
                            <NavLink to='/contact'><li><a>Contact</a></li></NavLink>
                            <NavLink to='/faq'><li><a>FAQ</a></li></NavLink>

                            <button className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-8 py-2 text-white font-medium rounded-full ml-6 hover:scale-105 hover:transition-all">Login</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    <NavLink to='/'><li><a>Home</a></li></NavLink>
                    <NavLink to='/flashcard'><li><a>Flashcard</a></li></NavLink>
                    <NavLink to='/contact'><li><a>Contact</a></li></NavLink>
                    <NavLink to='/faq'><li><a>FAQ</a></li></NavLink>

                    <button className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-8 py-2 text-white font-medium rounded-full mt-4 hover:scale-105 hover:transition-all">Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;