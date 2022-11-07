import { TypeAnimation } from 'react-type-animation';
import { profile } from '../assets/img';

const Profile = () => {
	return (
		<div className='d-flex flex-column h-100 text-center overflow-auto shadow'>
			<img className='w-100 img-fluid mb-4' src={profile} alt='' />
			<h2 className='text-primary mt-2'>Manik Hosen</h2>
			<TypeAnimation
				sequence={[
					'Web Developer',
					1000,
					'MERN Developer',
					1000,
					'Front-end Developer',
					1000,
					'React Developer',
					1000,
					() => {
						//console.log('Done typing!');
					},
				]}
				wrapper='h3'
				cursor={true}
				repeat={Infinity}
			/>
			<div className='d-flex justify-content-center mt-auto mb-3'>
				<a
					className='btn btn-dark btn-square mx-1'
					href='https://twitter.com/rahathosenmanik'>
					<i className='fab fa-twitter'></i>
				</a>
				<a
					className='btn btn-dark btn-square mx-1'
					href='https://web.facebook.com/rahathosenmanik/'>
					<i className='fab fa-facebook-f'></i>
				</a>
				<a
					className='btn btn-dark btn-square mx-1'
					href='https://www.linkedin.com/in/rahathossenmanik/'>
					<i className='fab fa-linkedin-in'></i>
				</a>
				<a
					className='btn btn-dark btn-square mx-1'
					href='https://github.com/rahathossenmanik/'>
					<i className='fab fa-github'></i>
				</a>
			</div>
			<div className='d-flex align-items-end justify-content-between border-top'>
				<a href='/' className='btn w-50 border-end'>
					Download CV
				</a>
				<a href='#contact' className='btn w-50 btn-scroll'>
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Profile;
