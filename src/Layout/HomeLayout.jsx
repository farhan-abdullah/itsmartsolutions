import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div className='bg-primary w-full h-[100dvh]'>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default HomeLayout;
