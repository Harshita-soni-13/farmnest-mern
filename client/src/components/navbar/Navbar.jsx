import { useState } from 'react';
import logo from '../../assets/logo-white.svg.png';
import phone_img from '../../assets/phone.png';
import arrow from '../../assets/arrow.png';
import corner_img from '../../assets/corner_img.png';
import corner_img2 from '../../assets/corner_img2.png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container-fluid flex justify-between items-center  bg-transparent">
            {/* Logo and Navigation Links */}
            <div className='flex items-center space-x-8'>
                <div>
                    <img className='ml-1 h-8 sm:h-10' src={logo} alt="logo" />
                </div>
                <ul className='hidden md:flex space-x-4 items-center'>
                    <li className='text-white cursor-pointer'>HOME</li>
                    <li className='text-white cursor-pointer'>PAGES</li>
                    <li className='text-white cursor-pointer'>SERVICES</li>
                    <li className='text-white cursor-pointer'>PORTFOLIO</li>
                    <li className='text-white cursor-pointer'>BLOG</li>
                    <li className='text-white cursor-pointer'>CONTACT US</li>
                </ul>
            </div>

            {/* Phone and Button Section */}
            <div className='flex items-center space-x-2 sm:space-x-3 '>
                <img className='h-6 sm:h-8' src={phone_img} alt="phone_img" />
                <div className='text-white text-xs sm:text-sm lg:text-base'>
                    Call Us Now <br />
                    6267058448
                </div>
                <div className='relative flex flex-col bg-custum-gray rounded-bl-2xl pt-3  pb-3 '>
                    <img className='absolute top-0 left-[-39px] h-10' src={corner_img} alt="corner_img" />

                    <div
                        className='bg-custom-yellow rounded md:rounded-full px-4 py-3 ml-4 flex items-center gap-2'
                    >
                        <button className='text-xs sm:text-sm lg:text-base'>Get In Touch</button>
                        <img className='inline h-4' src={arrow} alt="arrow-icon" />
                    </div>

                    <img className='absolute bottom-[-40px] right-0 h-10' src={corner_img2} alt="corner_img2" />
                </div>

            </div>

            {/* Mobile Menu Icon */}
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {/* Hamburger Icon (three bars) */}
                    <div className="space-y-1">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                </button>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <div className='absolute top-16 left-0 w-full bg-header-bg-image md:hidden'>
                    <ul className='flex flex-col items-center space-y-4 py-6'>
                        <li className='text-white cursor-pointer'>HOME</li>
                        <li className='text-white cursor-pointer'>PAGES</li>
                        <li className='text-white cursor-pointer'>SERVICES</li>
                        <li className='text-white cursor-pointer'>PORTFOLIO</li>
                        <li className='text-white cursor-pointer'>BLOG</li>
                        <li className='text-white cursor-pointer'>CONTACT US</li>
                    </ul>
                </div>
            )}
        </div>
    );
};
