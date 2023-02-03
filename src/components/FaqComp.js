import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FaqComp = () => {
	return (
		<div className="faq" id="faq">
			<Container>
				<Row className="mb-5">
					<Col>
						<h2 className="text-center fw-bold">Pertanyaan yang sering diajukan, dijawab di sini</h2>
						<p className="text-center">Pilih kami untuk solusi desain luar biasa</p>
					</Col>
				</Row>
				<Row className="row-cols-lg-2 row-cols-1 g-4 align-items-center">
					<Col>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header>Bagaimana cara pemesanan jasa di InteriorLand?</Accordion.Header>
								<Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam. consequat.</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="1">
								<Accordion.Header>Apa syarat dan ketentuan untuk pemesanan jasa InteriorLand?</Accordion.Header>
								<Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Berapa lama pengerjaan proyek?</Accordion.Header>
								<Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="3">
								<Accordion.Header>Bagaimana cara klaim garansi di InteriorLand?</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="4">
								<Accordion.Header>Apa yang harus di pertimbangkan saat mendesain sebuah ruangan?</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="5">
								<Accordion.Header>Berapa biaya proyek desain di InteriorLand?</Accordion.Header>
								<Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="6">
								<Accordion.Header>Bagaimana regulasi revisi untuk proyek di InteriorLand?</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat. Duis aute
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="7">
								<Accordion.Header>Apa saja interior style yang bisa dikerjakan oleh InteriorLand?</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FaqComp;
