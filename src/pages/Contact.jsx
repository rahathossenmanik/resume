import { Col, Form, Row } from 'reactstrap';

const Contact = () => {
	return (
		<section className='py-5 wow' data-wow-delay='0.1s' id='contact'>
			<h2 className='title pb-3 mb-5 text-start'>Contact Me</h2>
			<Form>
				<Row className='g-3'>
					<Col md='6'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control border-0 bg-secondary'
								id='name'
								placeholder='Your Name'
							/>
							<label htmlFor='name'>Your Name</label>
						</div>
					</Col>
					<Col md='6'>
						<div className='form-floating'>
							<input
								type='email'
								className='form-control border-0 bg-secondary'
								id='email'
								placeholder='Your Email'
							/>
							<label htmlFor='email'>Your Email</label>
						</div>
					</Col>
					<Col xs='12'>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control border-0 bg-secondary'
								id='subject'
								placeholder='Subject'
							/>
							<label htmlFor='subject'>Subject</label>
						</div>
					</Col>
					<Col xs='12'>
						<div className='form-floating'>
							<textarea
								className='form-control border-0 bg-secondary'
								placeholder='Leave a message here'
								id='message'
								style={{ height: 200 }}></textarea>
							<label htmlFor='message'>Message</label>
						</div>
					</Col>
					<Col xs='12'>
						<button className='btn btn-primary w-100 py-3' type='submit'>
							Send Message
						</button>
					</Col>
				</Row>
			</Form>
		</section>
	);
};

export default Contact;
