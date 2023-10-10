import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Function to handle scrolling and change navbar background

	return (
		<>
			<div
				className={`cursor-pointer md:hidden flex items-center justify-between p-5 `}
				onClick={() => setIsOpen(!isOpen)}>
				<img className='w-[140px]' src='https://i.ibb.co/88NpLqP/m12.png' alt='' />
				<div>
					{isOpen ? (
						<FaTimes className='text-4xl text-gray-200'></FaTimes>
					) : (
						<FaBars className='text-4xl text-gray-200'></FaBars>
					)}
				</div>
			</div>
			<nav
				className={`md:flex md:w-[75%] mx-auto md:justify-between z-40 md:h-[70px] absolute md:fixed md:p-10 md:px-20 left-0 right-0 duration-700 md:items-center ${
					isOpen ? 'pt-10 pb-3 md:p-0 bg-white' : '-mt-80 md:mt-0'
				} `}>
				<div className=''>
					<img className='w-[370px] mt-32' src={logo} alt='' />
				</div>
				<div className='uppercase text-[white] text-[18px] md:space-x-4 flex justify-between flex-col space-y-3 md:space-y-0 items-center md:flex-row'>
					<span className='cursor-pointer font-semibold hover:text-secondary duration-700 delay-100'>
						About
					</span>

					<span className='cursor-pointer font-semibold hover:text-secondary duration-700 delay-100'>
						Works
					</span>
					<span className='cursor-pointer font-semibold hover:text-secondary duration-700 delay-100'>
						Contact
					</span>
				</div>
			</nav>
		</>
	);
};

export default Header;
