import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import shakib from './../../assets/sakib.jpg';
import wasim from './../../assets/wasim.jpg';
const Team = () => {
	const teams = [
		{
			name: 'Wasim Hoque',
			title: 'IT Consultant',
			imageUrl: wasim,
		},
		{
			name: 'Monsur Alam',
			title: 'Frontend developer',
			imageUrl: 'https://i.ibb.co/d0qJyBP/104.jpg',
		},
		{
			name: 'Najmus Shakib',
			title: 'PR & HR',
			imageUrl: shakib,
		},
		{
			name: 'Farhan Abdullah',
			title: 'Ceo & founder',
			imageUrl: ' https://i.ibb.co/BszK1zF/amir-seilsepour-5vg-Sar-Qim-A-unsplash.jpg',
		},
	];

	return (
		<div className='md:w-[80%] p-5 mx-auto text-white md:py-[80px]'>
			<div>
				<div className='flex  mb-10 md:mb-0 justify-between md:items-center items-start md:flex-row flex-col '>
					<div className='space-y-5 mb-8  max-w-[600px]'>
						<p className='text-mezenda uppercase tracking-wider'>Teams</p>
						<h1 className='text-[white] text-3xl font-semibold'>Our Teams</h1>
						<p>
							Smart solution is a dynamic, flexible & exclusive team. We're some young
							talented designers and developers who loves to meet new peoples around
							the world and offer quality service.
						</p>
					</div>
					<button className='btn-red'>See all</button>
				</div>
				<div className='grid md:grid-cols-4 gap-x-3 gap-y-4'>
					{teams.map((team, index) => (
						<div key={index}>
							<div className='card md:max-w-[300px] p-3 bg-secondary rounded-lg  border border-tertiary shadow-lg shadow-tertiary/40 h-[400px] '>
								<img
									className='w-full rounded-lg h-[220px]  bg-cover '
									src={team.imageUrl}
									alt=''
									loading='lazy'
								/>
								<div className='my-3'>
									<h2 className='text-[25px] font-bold'>{team.name}</h2>
									<p className='text-[16px] uppercase text-gray-300'>
										{team.title}
									</p>
								</div>

								<div className='space-x-3'>
									<a
										href='#'
										className='p-2 rounded-full border-2 border-mezenda/30 inline-block  hover:bg-mezenda/60 hover:text-black duration-500 '>
										<FaFacebookF className=''></FaFacebookF>
									</a>
									<a
										href='#'
										className='p-2 rounded-full border-2 border-mezenda/30 inline-block  hover:bg-mezenda/60 hover:text-black duration-500 '>
										<FaLinkedinIn className=''></FaLinkedinIn>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
