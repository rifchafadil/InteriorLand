import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroComp = () => {
	return (
		<div className="hero min-vh-100 w-100" id='home'>
			<Container>
				<Row>
					<Col>
						<div>
							<h1 className="text-white">Transforming spaces <span className='text-orange-500'>elevating</span> style.</h1>
							<p className="text-white-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam corrupti necessitatibus recusandae suscipit, consectetur facilis iure ab! Blanditiis, ex odio?</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeroComp;
