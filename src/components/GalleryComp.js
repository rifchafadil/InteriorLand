import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gallery1 from '../assets/gallery/gallery-1.jpg';
import Gallery2 from '../assets/gallery/gallery-2.jpg';
import Gallery3 from '../assets/gallery/gallery-3.jpg';
import Gallery4 from '../assets/gallery/gallery-4.jpg';
import Gallery5 from '../assets/gallery/gallery-5.jpg';
import Gallery6 from '../assets/gallery/gallery-6.jpg';

const GalleryComp = () => {
	return (
		<div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
			<Container>
				<h1>Temukan kebutuhan desain anda</h1>
				<p className="text-black-50 text-center pb-5 ">Ubah Rumah Anda dengan Interior Kami</p>
				<Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 ">
					<Col className="ruang">
						<img src={Gallery1} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Ruang Keluarga</h5>
					</Col>
					<Col className="ruang">
						<img src={Gallery2} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Ruang Tamu</h5>
					</Col>
					<Col className="ruang">
						<img src={Gallery3} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Kamar Tidur</h5>
					</Col>
					<Col className="ruang">
						<img src={Gallery4} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Kamar Mandi</h5>
					</Col>
					<Col className="ruang">
						<img src={Gallery5} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Dapur</h5>
					</Col>
					<Col className="ruang">
						<img src={Gallery6} alt="pexels.com" className="img-fluid rounded-4" />
						<h5 className="fw-bold">Ruang Makan</h5>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default GalleryComp;
