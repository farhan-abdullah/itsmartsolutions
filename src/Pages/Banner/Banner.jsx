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
	return <div style={containerStyle} className='  opacity-30'></div>;
};

export default Banner;
