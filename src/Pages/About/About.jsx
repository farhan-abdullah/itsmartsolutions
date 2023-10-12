import React from 'react';

const About = () => {
	return (
		<div className='my-[80px] flex justify-center items-center md:w-[80%] mx-auto p-4 md:p-0'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div>
					<img
						src='https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/about-sect-puhjksm2lu4f1zq1nmzjuocvg38aocc5vwetj6wfw8.jpg'
						alt=''
					/>
				</div>
				<div className='space-y-6 text-white my-auto'>
					<span className='text-mezenda tracking-wider uppercase'>about our mission</span>
					<h2 className='md:text-[52px] font-bold leading-none'>
						We’re On Mission To Help Business Grow Faster Thanever.
					</h2>
					<p className='text-gray-400'>
						Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim.
						Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi fermentum,
						euismod vitae. Porttitor sit tincidunt dictum facilisi eget orci velit.
						Nulla laoreet nunc gravida augue aenean sed elementum, in.
					</p>
					<button className='btn-secondary'>Learn more</button>
				</div>
			</div>
		</div>
	);
};

export default About;
