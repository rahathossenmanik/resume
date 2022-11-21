import { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { toastValues } from '../common/toastValues';
import ToastBody from '../common/ToastBody';
import { emailValidation, isRequired } from '../common/validations';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = () => {
		const payload = {
			name: name,
			email: email,
			subject: subject,
			message: message,
		};
		try {
			emailjs.send(
				'service_9ee42r9',
				'template_2h7r0tr',
				payload,
				'8LIOno-C2q9CzUSdo'
			);
			toast.success('Request Submitted Successfully', toastValues);
		} catch (error) {
			toast.error(error.message, toastValues);
		}
	};

	return (
		<>
			<section className='py-5 wow' data-wow-delay='0.1s' id='contact'>
				<h2 className='title pb-3 mb-5 text-start'>Contact Me</h2>
				<Form>
					<Row className='g-3'>
						<Col md='6'>
							<div className='form-floating'>
								<Input
									className={`form-control border-0 bg-secondary ${
										isRequired(name) && 'is-invalid'
									}`}
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder='Your Name'
									required
								/>
								<label htmlFor='name'>Your Name</label>
							</div>
						</Col>
						<Col md='6'>
							<div className='form-floating'>
								<Input
									className={`form-control border-0 bg-secondary ${
										(!email || emailValidation(email)) && 'is-invalid'
									}`}
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='yourmail@example.com'
									required
								/>
								<label htmlFor='email'>Your Email</label>
							</div>
						</Col>
						<Col xs='12'>
							<div className='form-floating'>
								<Input
									className={`form-control border-0 bg-secondary ${
										isRequired(subject) && 'is-invalid'
									}`}
									type='text'
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									placeholder='Subject'
									required
								/>
								<label htmlFor='subject'>Subject</label>
							</div>
						</Col>
						<Col xs='12'>
							<div className='form-floating'>
								<textarea
									className='form-control border-0 bg-secondary'
									placeholder='Leave a message here'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									style={{ height: 200 }}></textarea>
								<label htmlFor='message'>Message</label>
							</div>
						</Col>
						<Col xs='12'>
							<Button
								color='primary'
								className='w-100 py-3'
								type='button'
								disabled={
									!email ||
									emailValidation(email) ||
									isRequired(name) ||
									isRequired(subject)
										? true
										: false
								}
								onClick={onSubmit}>
								Send Message
							</Button>
						</Col>
					</Row>
				</Form>
			</section>
			<ToastBody />
		</>
	);
};

export default Contact;
