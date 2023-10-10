import React from 'react';

const Story = () => {
	return (
		<div>
			<div className=' md:h-[117px] w-full bg-[#00B9C5] text-[white] text-center'>
				<div className=' flex md:flex-row flex-col items-center justify-center pt-8 md:gap-0 gap-8'>
					<div className='flex md:flex-row flex-col gap-4  items-center'>
						<h1 className='font-extrabold text-5xl'>99%</h1>
						<p className='text-1xl font-semibold w-1/2'>Success in getting customer</p>
					</div>
					{/* <div className='flex md:flex-row flex-col gap-4  items-center'>
						<h1 className='font-extrabold text-5xl'>25k</h1>
						<p className='text-1xl font-semibold w-1/2'>
							Thousands of successful business
						</p>
					</div> */}
					{/* <div className='flex md:flex-row flex-col gap-4  items-center'>
						<h1 className='font-extrabold text-5xl'>120+</h1>
						<p className='text-1xl font-semibold w-1/2'>
							Total client who love Solvero
						</p>
					</div> */}
					<div className='flex md:flex-row flex-col gap-4 items-center'>
						<h1 className='font-extrabold text-5xl'>4.9</h1>
						<p className='text-1xl font-semibold w-1/2'>
							Reviews are very satisfied with us
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
