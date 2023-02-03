import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterComp = () => {
	return (
		<div className="footer pb-3 pt-4">
			<Container>
				<Row>
					<Col>
						<h3 className="fw-bold text-white">InteriorLand.</h3>
					</Col>
					<Col className="text-end">
						<a href="https://www.linkedin.com/in/muhammad-rifcha/" target="_blank" rel="noreferrer">
							<i className="fa-brands fa-linkedin text-white fs-3 mx-lg-3 mx-2"></i>
						</a>
						<a href="https://github.com/rifchafadil/" target="_blank" rel="noreferrer">
							<i className="fa-brands fa-github text-white fs-3 mx-lg-3 mx-2"></i>
						</a>
						<a href="https://www.instagram.com/rifchafadil/" target="_blank" rel="noreferrer">
							<i className="fa-brands fa-instagram text-white fs-3 mx-lg-3 mx-2"></i>
						</a>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="text-center text-white-50">&copy; Copyright by Interior Land 2022, All Right Reserved.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComp;
