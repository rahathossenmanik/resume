import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Service from './Service';
import Skill from './Skill';
import Testimonial from './Testimonial';

const Content = () => {
	return (
		<>
			<Container>
				<Row className='g-5'>
					<Col lg='4' className='sticky-lg-top vh-100'>
						<Profile />
					</Col>
					<Col lg='8'>
						{/* <!-- About --> */}
						<About />

						{/* <!-- Skill --> */}
						<Skill />

						{/* <!-- Experience --> */}
						<Experience />

						{/* <!-- Subscribe --> */}
						<Newsletter />

						{/* <!-- Service --> */}
						<Service />

						{/* <!-- Portfolio --> */}
						<Portfolio />

						{/* <!-- Testimonial --> */}
						<Testimonial />

						{/* <!-- Contact --> */}
						<Contact />

						{/* <!-- Footer --> */}
						<Footer />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Content;
