const Experience = () => {
	return (
		<section className='py-5 wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>Expericence</h2>
			<div className='border-start border-2 border-light pt-2 ps-5'>
				<div className='position-relative mb-4'>
					<span
						className='fas fa-arrow-right fs-4 text-light position-absolute'
						style={{ top: -5, left: -50 }}></span>
					<h5 className='mb-1 text-start'>Wordpress Developer</h5>
					<p className='mb-2 text-start'>
						Wordpress | <small>2017 - 2021</small>
					</p>
					<p className='text-justify'>
						I have worked 4 years with Wordpress. I can build any types of
						website with wordpress. I have experience of building EMS, RMS,
						E-commerce, Portfolio and Blog Website. I can also customize theme
						and plugin from core.
					</p>
				</div>
				<div className='position-relative mb-4'>
					<span
						className='fas fa-arrow-right fs-4 text-light position-absolute'
						style={{ top: -5, left: -50 }}></span>
					<h5 className='mb-1 text-start'>Software Engineer</h5>
					<p className='mb-2 text-start'>
						Bizzntek Ltd. | <small>2021 - Current</small>
					</p>
					<p className='text-justify'>
						I work at Bizzntek Ltd. as a Front-end Developer. Here my basic
						responsibility is to handle all front-end UI/UX and Operation with
						back-end. I am working here for 1 year almost. Here I have worked
						with React, Redux, Saga, Reactstrap, Bootstrap, SignaturePad, Video
						JS, Chart JS, Evo Calendar, Gantt Chart, Fusion Chart and many other
						technologies.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Experience;
