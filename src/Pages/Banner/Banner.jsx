import React from 'react';
import banner from '../../assets/banner.jpg';
const Banner = () => {
	const containerStyle = {
		backgroundImage: `url(${banner})`,
		backgroundSize: 'cover', // You can adjust this property as needed
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		// Other CSS properties for the container
		width: '100%',
		height: '70vh',
		display: 'relative',
	};
	return (
		<>
			<div style={containerStyle} className='opacity-30'></div>
			<div className='absolute text-[white] md:top-[14rem] md:left-[26rem] top-56 md:text-left text-center'>
				<h1
					data-aos='fade-up'
					data-aos-delay='300'
					data-aos-duration='2000'
					className='md:text-7xl md:w-[45rem] font-extrabold text-3xl'>
					Quality Digital <br /> Services You Really Need!
				</h1>
				<p className='md:text-2xl mt-5 md:text-left text-center'>
					We build and transform businesses by launching market-leading digital products,
					and <br /> experiences that fuel their growth.
				</p>
			</div>
		</>
	);
};

export default Banner;
