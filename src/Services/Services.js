import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../pages/Service/Service";
import "./Services.css";
import psd from "../images/photoshop.png";
import web from "../images/web.png";
import respon from "../images/responsive (1).png";
import design from "../images/web-design.png";
import wordpress from "../images/wordpress.png";

const myService = [
  {
    no: 0,
    name: "Web Development",
    description:
      "A MERN Stack web application I provide. Every kind of website I can create",
    img: web,
  },
  {
    no: 1,
    name: "Responsive Development",
    description:
      "Responsive web development is most import cause user visit site PC,Mobile or Tab",
    img: respon,
  },
  {
    no: 2,
    name: "Web Design",
    description:
      "Web Design is the main part for an website,Its satisfy user experience and attract user.",
    img: design,
  },
  {
    no: 3,
    name: "PSD To HTML",
    description:
      "I will design and Convert PSD to HTML, Xd to HTML, Figma To HTML With Fully Responsive bootstrap 5",
    img: psd,
  },
  {
    no: 4,
    name: "Wordpress Development",
    description:
      "I will make beautiful wordpress website . Every kind of website I can create with wordprss specifically (Personal website, Blogs website,E-commerce Website) ",
    img: wordpress,
  },
];

const Services = () => {
  return (
    <div className="my-5">
      <div className="services">
        <h1>My Services</h1>
        <Container>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
            {myService.map((service) => (
              <Service key={service.no} service={service}></Service>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
