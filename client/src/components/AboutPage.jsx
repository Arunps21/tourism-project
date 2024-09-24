import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function AboutPage() {
  const nav = useNavigate();
  let navFun = () => {
    nav("/");
  };
  return (
    <>
      <h1 className="text-center my-4 text-primary">About Us</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>
              <strong>Welcome to Kerala Tourism</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            Kerala, often referred to as "God's Own Country," is one of the most
            picturesque states in India, known for its stunning landscapes, rich
            culture, and vibrant traditions. Kerala Tourism is dedicated to
            offering travelers an unforgettable experience of exploring the
            beauty and heritage of Kerala. From serene backwaters and pristine
            beaches to lush hill stations and diverse wildlife, we showcase the
            best of what Kerala has to offer.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>
              <strong>Our Mission</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            At Kerala Tourism, our mission is to promote sustainable and
            responsible tourism while providing travelers with unique and
            authentic experiences. We believe in preserving the natural beauty
            and cultural heritage of Kerala while creating opportunities for
            local communities. Our goal is to create memorable journeys that
            connect you with the heart and soul of this incredible state.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>
              <strong>Why Choose Us?</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Personalized Travel Experiences: Whether you're an adventure
              seeker, a nature lover, or someone who loves to relax and unwind,
              we offer personalized travel experiences tailored to your
              preferences.
            </p>
            <p>
              • Local Expertise: Our team of local guides and experts ensures
              that you get a deeper understanding of the places you visit, going
              beyond the typical tourist spots to reveal hidden gems.
            </p>
            <p>
              • Commitment to Sustainability: We are committed to promoting
              eco-friendly practices and supporting local communities. Our tours
              and activities are designed to have minimal environmental impact
              while contributing to the growth of the region.
            </p>
            <p>
              • Customer Satisfaction: Your satisfaction is our priority. We
              strive to provide top-notch service from the moment you book your
              trip until the time you leave, ensuring a seamless and enjoyable
              experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4>
              <strong>What We Offer</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Backwater Cruises: Experience the tranquility of Kerala's famous
              backwaters in houseboats, and witness the scenic beauty of lush
              greenery, paddy fields, and traditional village life.
            </p>
            <p>
              • Hill Stations & Wildlife: Explore the misty hill stations like
              Munnar and Wayanad, where you can enjoy trekking, wildlife
              safaris, and tea plantation tours.
            </p>
            <p>
              • Cultural Tours: Dive into Kerala's rich cultural heritage
              through Kathakali performances, traditional martial arts
              (Kalaripayattu), and visits to ancient temples and palaces.
            </p>
            <p>
              • Ayurvedic Wellness: Rejuvenate your body and mind with authentic
              Ayurvedic treatments, known for their healing properties, at some
              of the best wellness resorts in Kerala.
            </p>
            <p>
              • Beaches & Adventure: Unwind on Kerala’s golden beaches or get
              your adrenaline pumping with water sports, trekking, and adventure
              activities.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4>
              <strong>Our Values</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Respect for Nature: We believe in protecting the natural
              environment and its biodiversity for future generations.
            </p>
            <p>
              • Cultural Integrity: We celebrate Kerala’s diverse culture and
              traditions and promote responsible interactions with local
              communities.
            </p>
            <p>
              • Customer-Centric: Our focus is always on providing the highest
              level of service to ensure an enriching and enjoyable travel
              experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4>
              <strong>Get in Touch</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            We'd love to hear from you! Whether you’re planning your next trip
            to Kerala or have any questions, feel free to reach out to us. Our
            friendly team is here to assist you in making your Kerala journey an
            experience of a lifetime.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="danger" onClick={navFun} className="mt-4 ms-3">
        Back
      </Button>
    </>
  );
}

export default AboutPage;
