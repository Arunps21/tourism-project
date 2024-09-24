import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <>
      <Container fluid className="bg-primary p-2 mt-4">
        <Row className="mt-2">
        <h1 className="text-center text-light fw-bold mb-4">Location</h1>
          <Col lg={6}>
            <Card.Footer className="text-muted">
              <h1 className="text-white">Kerala Tourism</h1>
              <h3 className="text-white">Kerala, India</h3>
              <p className="text-light">Phone: 0484 245632</p>
              <p className="text-light">Email: keralatourism@gmail.com</p>
              <p className="text-light">Website: <a href="" className="text-white text-decoration-none">www.keralatourism.com</a></p>
              <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faSquareFacebook} className="me-3" style={{color: "#000000",}} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="me-3" style={{color: "#f1346b",}} /></a>
              <a href="https://www.x.com/"><FontAwesomeIcon icon={faXTwitter} className="me-3" style={{color: "#050505",}} /></a>
              <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} className="me-3" style={{color: "#df1111",}} /></a>
            </Card.Footer>
          </Col>
          <Col lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2008292.2472240678!2d74.81898144314678!3d10.544245568929972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1726637378007!5m2!1sen!2sin"
              width="600"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <p className="text-center mt-3 mb-0 text-white">&copy; 2024 <strong>Kerala Tourism</strong>. &reg;All Rights Reserved.</p>
      </Container>
    </>
  );
}

export default Footer;
