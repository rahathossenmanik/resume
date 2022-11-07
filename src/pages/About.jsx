import { Col, Row } from 'reactstrap';

const About = () => {
	return (
		<section className='py-5 border-bottom wow' data-wow-delay='0.1s'>
			<h2 className='title pb-3 mb-5 text-start'>About Me</h2>
			<p className='text-justify'>
				I am a MERN stack web developer. I work basically on React JS. I am well
				experienced in MongoDB, Node JS, Bootstrap, jQuery and all basics of web
				development.
				<br />I have worked on front-end in a project basically on React.
				Alongside of React I have worked some well known technologies of react
				like reactstrap, react-bootstrap, JSX, redux, react-redux. I have also
				worked with Bootstrap Chart JS, Video JS, PDFjs in the project.
				Signature-Pad was another great adaption in the project.
			</p>
			<Row className='mb-4 text-start'>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Name: </span>Manik Hosen
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Birthday:</span>16 September
					1998
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Degree: </span>
					B.Engineering
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Experience: </span>4 Years
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Phone: </span>+880 1743
					612180
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Email: </span>
					rahathossenmanik@gmail.com
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Address: </span>
					Dhaka, 1205
				</Col>
				<Col sm='6' className='py-1'>
					<span className='fw-medium text-primary'>Status: </span>
					Available for Work
				</Col>
			</Row>
			<Row className='g-4'>
				<Col md='4'>
					<div className='d-flex bg-secondary p-4'>
						<h2
							className='flex-shrink-0 display-5 text-primary mb-0'
							data-toggle='counter-up'>
							04
						</h2>
						<div className='ps-3'>
							<p className='mb-0'>Years of</p>
							<h5 className='mb-0'>Experience</h5>
						</div>
					</div>
				</Col>
				<Col md='4'>
					<div className='d-flex bg-secondary p-4'>
						<h2
							className='flex-shrink-0 display-5 text-primary mb-0'
							data-toggle='counter-up'>
							07
						</h2>
						<div className='ps-3'>
							<p className='mb-0'>Happy</p>
							<h5 className='mb-0'>Clients</h5>
						</div>
					</div>
				</Col>
				<Col md='4'>
					<div className='d-flex bg-secondary p-4'>
						<h2
							className='flex-shrink-0 display-5 text-primary mb-0'
							data-toggle='counter-up'>
							05
						</h2>
						<div className='ps-3'>
							<p className='mb-0'>Complete</p>
							<h5 className='mb-0'>Projects</h5>
						</div>
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default About;
