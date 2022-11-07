import { Col, Progress, Row } from 'reactstrap';

const Skill = () => {
	return (
		<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>Skills</h2>
			<Row>
				<Col sm='6'>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>Javascript</p>
							<p className='mb-2'>98%</p>
						</div>
						<Progress color='primary' value={98} className='progress' />
					</div>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>Typescript</p>
							<p className='mb-2'>95%</p>
						</div>
						<Progress color='primary' value={95} className='progress' />
					</div>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>React</p>
							<p className='mb-2'>90%</p>
						</div>
						<Progress color='primary' value={0} className='progress' />
					</div>
				</Col>
				<Col sm='6'>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>Node JS</p>
							<p className='mb-2'>70%</p>
						</div>
						<Progress color='primary' value={70} className='progress' />
					</div>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>Express JS</p>
							<p className='mb-2'>60%</p>
						</div>
						<Progress color='primary' value={60} className='progress' />
					</div>
					<div className='skill mb-4'>
						<div className='d-flex justify-content-between'>
							<p className='mb-2'>Wordpress</p>
							<p className='mb-2'>80%</p>
						</div>
						<Progress color='primary' value={80} className='progress' />
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default Skill;
