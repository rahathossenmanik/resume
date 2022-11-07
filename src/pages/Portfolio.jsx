import { Col, Row } from 'reactstrap';
import { portfolio1, portfolio2, portfolio3, portfolio4 } from '../assets/img';

const Portfolio = () => {
	return (
		<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>Portfolio</h2>
			<Row>
				<Col xs='12'>
					<Row>
						<Col className='text-center mb-2'>
							<ul className='list-inline mb-4' id='portfolio-flters'>
								<li className='btn btn-secondary active' data-filter='*'>
									<i className='fa fa-star me-2'></i>All
								</li>
								<li className='btn btn-secondary' data-filter='.first'>
									<i className='fa fa-laptop-code me-2'></i>Design
								</li>
								<li className='btn btn-secondary' data-filter='.second'>
									<i className='fa fa-mobile-alt me-2'></i>Development
								</li>
							</ul>
						</Col>
					</Row>
					<Row className='portfolio-container'>
						<Col md='6' className='mb-4 portfolio-item first'>
							<div className='position-relative overflow-hidden mb-2'>
								<img className='img-fluid w-100' src={portfolio1} alt='' />
								<div className='portfolio-btn d-flex align-items-center justify-content-center'>
									<a href={portfolio1} data-lightbox='portfolio'>
										<i className='fa fa-plus text-light'></i>
									</a>
								</div>
							</div>
						</Col>
						<Col md='6' className='mb-4 portfolio-item second'>
							<div className='position-relative overflow-hidden mb-2'>
								<img className='img-fluid w-100' src={portfolio2} alt='' />
								<div className='portfolio-btn d-flex align-items-center justify-content-center'>
									<a href={portfolio2} data-lightbox='portfolio'>
										<i className='fa fa-plus text-light'></i>
									</a>
								</div>
							</div>
						</Col>
						<Col md='6' className='mb-4 portfolio-item first'>
							<div className='position-relative overflow-hidden mb-2'>
								<img className='img-fluid w-100' src={portfolio3} alt='' />
								<div className='portfolio-btn d-flex align-items-center justify-content-center'>
									<a href={portfolio3} data-lightbox='portfolio'>
										<i className='fa fa-plus text-light'></i>
									</a>
								</div>
							</div>
						</Col>
						<Col md='6' className='mb-4 portfolio-item second'>
							<div className='position-relative overflow-hidden mb-2'>
								<img className='img-fluid w-100' src={portfolio4} alt='' />
								<div className='portfolio-btn d-flex align-items-center justify-content-center'>
									<a href={portfolio4} data-lightbox='portfolio'>
										<i className='fa fa-plus text-light'></i>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default Portfolio;
