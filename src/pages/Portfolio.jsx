import { useState } from 'react';
import { Button, Col, Modal, ModalBody, Row } from 'reactstrap';
import { portfolio1, portfolio2, portfolio3, portfolio4 } from '../assets/img';

const Portfolio = () => {
	const [tab, setTab] = useState('all');
	const [isOpenImage, setIsOpenImage] = useState(false);
	const [image, setImage] = useState('');
	const [index, setIndex] = useState('');

	const portfolioView = (image, i) => {
		setImage(image);
		setIndex(i);
		setIsOpenImage(true);
	};

	return (
		<>
			<Modal
				size='lg'
				isOpen={isOpenImage}
				toggle={() => setIsOpenImage(!isOpenImage)}>
				<ModalBody className='bg-secondary'>
					<img src={image} alt={'Portfolio' + index} width='100%' />
				</ModalBody>
			</Modal>
			<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
				<h2 className='title pb-3 mb-5 text-start'>Portfolio</h2>
				<Row>
					<Col xs='12'>
						<Row>
							<Col className='text-center mb-2'>
								<ul className='list-inline mb-4' id='portfolio-flters'>
									<Button
										color='secondary'
										className={tab === 'all' ? 'active' : ''}
										onClick={() => setTab('all')}>
										<i className='fa fa-star me-2'></i>All
									</Button>
									<Button
										color='secondary'
										className={tab === 'design' ? 'active' : ''}
										onClick={() => setTab('design')}>
										<i className='fa fa-laptop-code me-2'></i>Design
									</Button>
									<Button
										color='secondary'
										className={tab === 'dev' ? 'active' : ''}
										onClick={() => setTab('dev')}>
										<i className='fa fa-mobile-alt me-2'></i>Development
									</Button>
								</ul>
							</Col>
						</Row>
						<Row className='portfolio-container'>
							<Col
								md='6'
								className='mb-4 portfolio-item'
								style={{ display: tab === 'dev' ? 'none' : '' }}>
								<div className='position-relative overflow-hidden mb-2'>
									<img className='img-fluid w-100' src={portfolio1} alt='' />
									<div
										className='portfolio-btn d-flex align-items-center justify-content-center'
										onClick={() => portfolioView(portfolio1, 1)}>
										<i className='fa fa-plus text-light'></i>
									</div>
								</div>
							</Col>
							<Col
								md='6'
								className='mb-4 portfolio-item'
								style={{ display: tab === 'dev' ? 'none' : '' }}>
								<div className='position-relative overflow-hidden mb-2'>
									<img className='img-fluid w-100' src={portfolio2} alt='' />
									<div
										className='portfolio-btn d-flex align-items-center justify-content-center'
										onClick={() => portfolioView(portfolio2, 2)}>
										<i className='fa fa-plus text-light'></i>
									</div>
								</div>
							</Col>
							<Col
								md='6'
								className='mb-4 portfolio-item'
								style={{ display: tab === 'design' ? 'none' : '' }}>
								<div className='position-relative overflow-hidden mb-2'>
									<img className='img-fluid w-100' src={portfolio3} alt='' />
									<div
										className='portfolio-btn d-flex align-items-center justify-content-center'
										onClick={() => portfolioView(portfolio3, 3)}>
										<i className='fa fa-plus text-light'></i>
									</div>
								</div>
							</Col>
							<Col
								md='6'
								className='mb-4 portfolio-item'
								style={{ display: tab === 'design' ? 'none' : '' }}>
								<div className='position-relative overflow-hidden mb-2'>
									<img className='img-fluid w-100' src={portfolio4} alt='' />
									<div
										className='portfolio-btn d-flex align-items-center justify-content-center'
										onClick={() => portfolioView(portfolio4, 4)}>
										<i className='fa fa-plus text-light'></i>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Portfolio;
