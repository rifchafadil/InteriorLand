import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ServicesComp = () => {
	return (
		<div className="services min-vh-100 d-flex align-items-center py-5" id="services">
			<Container>
				<Row className="mb-5">
					<Col>
						<h1 className="text-center fw-bold">Pilih kami untuk solusi desain luar biasa anda</h1>
						<p className="text-center">Solusi interior rumah dengan servis lengkap, hanya disini</p>
					</Col>
				</Row>
				<Row className="row-cols-lg-3 row-cols-md-2 row-cols-2 justify-content-center">
					<Col className="text-center py-5 px-3">
						<i className="fa-solid fa-coins fs-2 mb-2"></i>
						<h5 className="fw-bold">Harga Terjangkau</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Col>
					<Col className="text-center py-5 px-3">
						<i class="fa-solid fa-shield-halved fs-2 mb-2"></i>
						<h5 className="fw-bold">Tersertifikasi</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Col>
					<Col className="text-center py-5 px-3">
						<i class="fa-solid fa-thumbs-up fs-2 mb-2"></i>
						<h5 className="fw-bold">Fasilitas Terbaik</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Col>
					<Col className="text-center py-5 px-3">
						<i class="fa-solid fa-hat-hard fs-2 mb-2"></i>
						<h5 className="fw-bold">Tim Profesional</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Col>
					<Col className="text-center py-5 px-3">
						<i class="fa-solid fa-desktop fs-2 mb-2"></i>
						<h5 className="fw-bold">Gratis Gambar Desain</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Col>
				</Row>
				{/* <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
					
				</Row> */}
			</Container>
		</div>
	);
};

export default ServicesComp;
