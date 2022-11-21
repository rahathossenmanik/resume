import { testimonial1, testimonial2, testimonial3 } from '../assets/img';

const Testimonial = () => {
	return (
		<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>Testimonial</h2>
			<div className='owl-carousel testimonial-carousel'>
				<div className='text-start'>
					<i className='fa fa-quote-left fa-3x text-primary'></i>
					<span className='ms-3 fs-4 text-justify'>
						I have builded an e-commerce website from Manik Hosen. I want to
						refer him for building your wordpress site.
					</span>
					<div className='d-flex align-items-center mt-3'>
						<img
							className='img-fluid'
							src={testimonial1}
							style={{ width: 60, height: 60 }}
							alt=''
						/>
						<div className='ps-3'>
							<p className='text-primary fs-5 mb-1'>Shusan Raj</p>
							<i>Online Seller</i>
						</div>
					</div>
				</div>
				<div className='text-start mt-5'>
					<i className='fa fa-quote-left fa-3x text-primary'></i>
					<span className='ms-3 fs-4 text-justify'>
						I had some serious SEO issue. My website won't show on google at
						all. Then I have taken SEO service from Manik Hosen. Now my website
						is at first page of google.
					</span>
					<div className='d-flex align-items-center mt-3'>
						<img
							className='img-fluid'
							src={testimonial2}
							style={{ width: 60, height: 60 }}
							alt=''
						/>
						<div className='ps-3'>
							<p className='text-primary fs-5 mb-1'>Nikola Patel</p>
							<i>Blogger</i>
						</div>
					</div>
				</div>
				<div className='text-start mt-5'>
					<i className='fa fa-quote-left fa-3x text-primary'></i>
					<span className='ms-3 fs-4 text-justify'>
						I have builded an EMS software from Manik Hosen to manage my school,
						students and courses. Now I am happily managing everything in my
						school. Highly recommended.
					</span>
					<div className='d-flex align-items-center mt-3'>
						<img
							className='img-fluid'
							src={testimonial3}
							style={{ width: 60, height: 60 }}
							alt=''
						/>
						<div className='ps-3'>
							<p className='text-primary fs-5 mb-1'>Herbert Bene</p>
							<i>Teacher</i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
