import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Kochi from "./images/Kochi.jpeg";
import Alappuzha from "./images/Alappuzha.jpeg";
import Munnar from "./images/Munnar.jpeg";
import TVM from "./images/TVM.jpeg";
import Wayanad from "./images/Wayanad.jpeg";
import Kovalam from "./images/Kovalam.jpeg";
import Kozhikode from "./images/Kozhikode.jpeg";
import Varkala from "./images/Varkala.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import "./CardsKerala.css";
import { Link } from "react-router-dom";
import componentContext from "./ComponentProvider";

function CardsKerala() {

  const {component} = useContext(componentContext)

  const data = [
    {
      id: 1,
      title: "kochi",
      description:
        "Kochi, located in Kerala, India, is a vibrant port city known for its rich history and cultural diversity. It features a mix of colonial architecture, traditional spice markets, and modern infrastructure. Key attractions include Fort Kochi, Chinese fishing nets, and the serene backwaters of Kerala.",
      imageUrl: Kochi,
    },
    {
      id: 2,
      title: "Alappuzha",
      description:
        "Alappuzha, also known as Alleppey, is a picturesque town in Kerala, India, renowned for its serene backwaters, houseboat cruises, and vast network of canals. Often called the Venice of the East, it is famous for the annual Nehru Trophy Boat Race, lush paddy fields, and beautiful beaches.",
      imageUrl: Alappuzha,
    },
    {
      id: 3,
      title: "Munnar",
      description:
        " Munnar, a scenic hill station in Kerala, India, is famous for its lush tea plantations, rolling hills, and cool climate. Located in the Western Ghats, it offers stunning views, wildlife sanctuaries, and trekking opportunities. Key attractions include Eravikulam National Park etc.",
      imageUrl: Munnar,
    },
    {
      id: 4,
      title: "Thiruvananthapuram",
      description:
        "Thiruvananthapuram, also known as Trivandrum, is the capital of Kerala, India. A coastal city, it's known for its historic landmarks like the Padmanabhaswamy Temple,beaches like Kovalam. Trivandrum is also a hub for art and culture, home to museums, and cultural festivals.",
      imageUrl: TVM,
    },
    {
      id: 5,
      title: "Wayanad",
      description:
        "Wayanad, a serene district in Kerala, India, is known for its lush green landscapes, misty mountains, and rich wildlife. A popular eco-tourism destination, it offers attractions like Edakkal Caves, Banasura Sagar Dam, and Wayanad Wildlife Sanctuary. It's ideal for trekking, camping, and exploring ancient history and tribal culture.",
      imageUrl: Wayanad,
    },
    {
      id: 6,
      title: "Kovalam",
      description:
        "Kovalam, a renowned beach town in Kerala, India, is famous for its crescent-shaped coastline, golden sands, and clear blue waters. Known for its iconic Lighthouse Beach, it attracts tourists for sunbathing, swimming, and Ayurvedic treatments. Kovalam is a perfect destination for relaxation, water sports, and scenic sunset views.",
      imageUrl: Kovalam,
    },
    {
      id: 7,
      title: "Kozhikode",
      description:
        "Kozhikode, also known as Calicut, is a historic city in Kerala, India, known for its rich cultural heritage and trading history. Famous as the landing place of Vasco da Gama in 1498, it offers attractions like Kozhikode Beach, the centuries-old Mananchira Square, Famous as the landing place and delicious Malabar cuisine, including the iconic biryani.",
      imageUrl: Kozhikode,
    },
    {
      id: 8,
      title: "Varkala",
      description:
        "Varkala, a coastal town in Kerala, India, is famous for its stunning cliffs overlooking the Arabian Sea and pristine beaches. The Papanasam Beach is popular for its natural spring with believed healing properties. Varkala is also a spiritual destination,Varkala is also destination, home to the ancient Janardanaswamy Temple and peaceful surroundings.",
      imageUrl: Varkala,
    },
  ];

  return (
    <>
      <Container className="mt-4">

        {/* cards */}
        <h1 className="text-center mb-4 mt-3 text-primary fw-bold">
          The Beauty Of Gods Own Country
        </h1>
        <Row>
          {data.length > 0 && 
            data.filter((sear)=>{
              return(sear.title.toLocaleLowerCase().match(component.toLocaleLowerCase()))
            })
            .map((list) => {
                return (
                  <Col lg={3} className="mb-4 mt-2" key={list.id}>
                    <Link to={`/PlaceView/${list.id}`} className="text-decoration-none">
                      <Card
                        style={{ width: "100%" }}
                        className="border-1 border-info shadow"
                        id="card"
                      >
                        <Card.Img variant="top" src={list.imageUrl} />
                        <Card.Body align="center">
                          <Card.Title className="text-primary fw-bold">
                            {list.title}
                          </Card.Title>
                          <Card.Text>{list.description}</Card.Text>
                          <Button variant="primary">Know More</Button>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })
            }
        </Row>
      </Container>
    </>
  );
}

export default CardsKerala;
