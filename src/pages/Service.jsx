import { Col, Row } from 'reactstrap';

const Service = () => {
	return (
		<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>Services</h2>
			<Row className='g-4'>
				<Col md='6'>
					<div className='service-item'>
						<i className='fa fa-laptop-code fa-2x mx-auto mb-4'></i>
						<h5 className='mb-2'>Web Design</h5>
						<p className='mb-0'>
							You can build your dream website by me with very eligible cost.
							Your website will be one of the best websites in marketplace.
						</p>
					</div>
				</Col>
				<Col md='6'>
					<div className='service-item'>
						<i className='fab fa-wordpress fa-2x mx-auto mb-4'></i>
						<h5 className='mb-2'>Web Development</h5>
						<p className='mb-0'>
							I can develop your website from any mockup or wireframe. You can
							provide wireframe in figma, XD or PSD format. Note I can design
							and develop if you don't provide any design.
						</p>
					</div>
				</Col>
				<Col md='6'>
					<div className='service-item'>
						<i className='fa fa-search fa-2x mx-auto mb-4'></i>
						<h5 className='mb-2'>SEO</h5>
						<p className='mb-0'>
							I am a SEO expert. So you can optimize your website for search
							engine by me. Your site will be boosted by performance and view.
						</p>
					</div>
				</Col>
				<Col md='6'>
					<div className='service-item'>
						<i className='fa fa-edit fa-2x mx-auto mb-4'></i>
						<h5 className='mb-2'>Consulting</h5>
						<p className='mb-0'>
							I am always available to consult you about development or design
							related information. You can contact any time as need.
						</p>
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default Service;
