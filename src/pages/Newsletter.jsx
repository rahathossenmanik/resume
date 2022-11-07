import { useState } from 'react';
import { Button, Input } from 'reactstrap';

const Newsletter = () => {
	const [email, setEmail] = useState('');

	return (
		<section className='wow' data-wow-delay='0.1s'>
			<div className='bg-secondary text-center p-5'>
				<h2 className='text-white font-weight-bold'>Subscribe My Newsletter</h2>
				<p className='text-white'>
					Subscribe and get my latest article in your inbox
				</p>
				<div className='position-relative w-100'>
					<Input
						className='form-control bg-dark border-0 w-100 py-3 ps-4 pe-5'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='yourmail@example.com'
						required
					/>
					<Button
						type='submit'
						color='primary'
						className='py-2 position-absolute top-0 end-0 mt-2 me-2'>
						Subscribe
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
