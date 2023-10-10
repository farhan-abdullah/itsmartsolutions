import React from 'react';
import Banner from '../Banner/Banner';
import Story from '../Story/Story';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Story></Story>
			<div className='w-[300px] h-[200px] relative'>
				<div className='bg-element'></div>
			</div>
		</div>
	);
};

export default Home;
