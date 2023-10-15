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
			<div className='absolute text-[white] top-[14rem] left-[26rem]   '>
				<h1
					data-aos='fade-up'
					data-aos-delay='300'
					data-aos-duration='2000'
					className='text-7xl w-[45rem] font-extrabold'>
					Quality Digital <br /> Services You Really Need!
				</h1>
				<p className='text-2xl mt-5'>
					We build and transform businesses by launching market-leading digital products,
					and <br /> experiences that fuel their growth.
				</p>
			</div>
		</>
	);
};

export default Banner;
