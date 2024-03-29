import React from 'react';
import banner from '../../assets/banner.jpg';
const Banner = () => {
	//    const containerStyle = {
	//       backgroundImage: `url(${banner})`,
	//       backgroundSize: "cover", // You can adjust this property as needed
	//       backgroundRepeat: "no-repeat",
	//       backgroundPosition: "center center",
	//       // Other CSS properties for the container
	//       width: "100%",
	//       height: "70vh",
	//       display: "relative",
	//    };
	const bgStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), #0E0F30), url(${banner})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	};

	return (
		<>
			<div
				className=' md:h-[80vh] py-20 md:py-0 pt-36 md:pt-0 mx-auto flex  items-center text-center md:text-start  text-white'
				style={bgStyle}>
				<div className=' w-[720px] md:mx-auto '>
					<h2 className='md:text-[50px] text-[40px] capitalize leading-none tracking-tight md:font-bold font-semibold'>
						Revolutionizing Your Online Landscape with Comprehensive Digital Solutions
					</h2>
					<p className='text-[16px] md:text-[18px]  mt-5'>
						We build and transform businesses by launching market-leading digital
						products, and experiences that fuel their growth.
					</p>
				</div>
			</div>
		</>
	);
};

export default Banner;
