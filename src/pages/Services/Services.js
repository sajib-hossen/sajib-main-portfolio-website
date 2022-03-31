import React from "react";
import "./Services.css";
import psd from "../../images/photoshop.png";
import web from "../../images/web.png";
import respon from "../../images/responsive (1).png";
import design from "../../images/web-design.png";
import wordpress from "../../images/wordpress.png";
import Service from "../Service/Service";

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
    <div className="container text-center">
      <h1 className="mt-5">My Services</h1>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 mx-auto">
        {myService.map((service) => (
          <Service key={service.no} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
