import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { toastValues } from '../common/toastValues';
import ToastBody from '../common/ToastBody';
import { emailValidation } from '../common/validations';

const Newsletter = () => {
	const [email, setEmail] = useState('');

	const onSubmit = () => {
		const payload = { email: email };
		try {
			emailjs.send(
				'service_9ee42r9',
				'template_tu94acd',
				payload,
				'8LIOno-C2q9CzUSdo'
			);
			toast.success('Subscribed Successfully', toastValues);
		} catch (error) {
			toast.error(error.message, toastValues);
		}
	};

	return (
		<>
			<section className='wow' data-wow-delay='0.1s'>
				<div className='bg-secondary text-center p-5'>
					<h2 className='text-white font-weight-bold'>
						Subscribe My Newsletter
					</h2>
					<p className='text-white'>
						Subscribe and get my latest article in your inbox
					</p>
					<div className='position-relative w-100'>
						<Input
							className={`form-control bg-dark border-0 w-100 py-3 ps-4 pe-5 ${
								emailValidation(email) && 'is-invalid'
							}`}
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='yourmail@example.com'
							required
						/>
						<Button
							type='submit'
							color='primary'
							className='py-2 position-absolute top-0 end-0 mt-2 me-2'
							disabled={!email || emailValidation(email) ? true : false}
							onClick={onSubmit}>
							Subscribe
						</Button>
					</div>
				</div>
			</section>
			<ToastBody />
		</>
	);
};

export default Newsletter;
