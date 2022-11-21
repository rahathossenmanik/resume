const Footer = () => {
	return (
		<section className='wow' data-wow-delay='0.1s'>
			<div className='bg-secondary text-light text-center p-5'>
				<div className='d-flex justify-content-center mb-4'>
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

				<p className='m-0'>
					&copy; All Rights Reserved. React Application By
					<a href='https://rahathossenmanik.github.io'> Manik Hosen</a>
				</p>
			</div>
		</section>
	);
};

export default Footer;
