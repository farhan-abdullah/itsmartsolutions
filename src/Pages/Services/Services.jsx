import React from 'react';
import front from './../../assets/front-end.svg';
import server from './../../assets/server.svg';
import ui from './../../assets//ux.svg';
import svg1 from './../../assets/webpages.svg';
import svg2 from './../../assets/seo.svg';
import socialmedia from './../../assets/social-media.svg';
const Services = () => {
	return (
		<div className='relative overflow-hidden'>
			<div className='absolute overflow-hidden  top-0 md:-right-[200px] 2xl:-right-5 my-5'>
				<img
					className='bg-cover'
					src='https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/2022/09/dot-pattern-2.png'
					alt=''
				/>
			</div>
			<div className='md:w-[80%]  relative p-5  mx-auto text-[#FFFFFF99] mt-5'>
				<div className='mb-5'>
					<div className='space-y-5 mb-8  max-w-[600px]'>
						<p className='text-mezenda tracking-wider	'>SERVICES</p>
						<h1 className='text-[white] text-3xl font-semibold'>Our Services</h1>
						<p>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
					</div>
				</div>
				<div className='grid md:grid-cols-2 gap-0'>
					<div className=' bg-tertiary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10'>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]'>
								Front End Development
							</h1>
							<img className='w-20 md:w-[80px]' src={front} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
					<div className=' bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10  '>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]'>
								UI/UX <br /> Design
							</h1>
							<img className='w-20 md:w-[80px]' src={ui} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
					<div className=' bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10'>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]'>
								Back End Development
							</h1>
							<img className='w-20 md:w-[80px]' src={server} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
					<div className=' bg-pink p-5 md:px-10 md:py-20 2xl:px-16 space-y-10'>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]'>
								CMS
							</h1>
							<img className='w-20 md:w-[80px]' src={svg1} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
					<div className=' bg-tertiary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10'>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]'>
								SEO
							</h1>
							<img className='w-20 md:w-[80px]' src={svg2} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
					<div className=' bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10'>
						<div className='flex justify-between'>
							<h1 className='md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]'>
								Digital Marketing
							</h1>
							<img className='w-20 md:w-[80px]' src={socialmedia} alt='' />
						</div>
						<p className='text-[#FFFFFF99]'>
							Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
							enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
						</p>
						<button className='btn-primary'>Discover more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
