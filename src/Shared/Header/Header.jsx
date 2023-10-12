import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import logo1 from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navLinks = (
		<div className='flex flex-col uppercase md:flex-row gap-2'>
			<NavLink
				className='text-lg cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100'
				to={'/'}
				style={({ isActive }) => {
					return { borderBottom: isActive ? 'solid #00B9C5' : '' };
				}}>
				Home
			</NavLink>

			<NavLink
				to={'/services'}
				className='md:ml-5 text-lg cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100'
				style={({ isActive }) => {
					return { borderBottom: isActive ? 'solid #00B9C5' : '' };
				}}>
				Services
			</NavLink>

			<NavLink
				to={'/works'}
				className=' md:ml-5  text-lg cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100'
				style={({ isActive }) => {
					return { borderBottom: isActive ? ' solid #00B9C5' : '' };
				}}>
				Contact
			</NavLink>
		</div>
	);
	return (
		<>
			<div
				className={`cursor-pointer md:hidden flex items-center justify-between bg-gray-500 p-5 `}
				onClick={() => setIsOpen(!isOpen)}>
				<img className='h-auto w-[200px]' src={logo1} alt='' />
				<div>
					{isOpen ? (
						<FaTimes className='text-4xl text-gray-200'></FaTimes>
					) : (
						<FaBars className='text-4xl text-gray-200'></FaBars>
					)}
				</div>
			</div>
			<nav
				className={`md:flex md:w-[75%] mx-auto  z-40 md:h-[70px] absolute md:p-10 md:px-20 left-0 right-0 duration-700 md:items-center ${
					isOpen ? 'pt-10 pb-3 md:p-0 bg-transparent' : '-mt-80 md:mt-0'
				} `}>
				<div className=''>
					<img className='w-[370px] hidden md:block mt-32' src={logo} alt='' />
				</div>
				<div className='uppercase text-[white] text-[18px] md:space-x-4 flex justify-between flex-col space-y-3 md:space-y-0 items-center md:flex-row'>
					{navLinks}
				</div>
			</nav>
		</>
	);
};

export default Header;
