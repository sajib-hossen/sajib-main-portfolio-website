import React from "react";
import "./About.css";
import me from "../../images/man.png";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 aboutImage">
          <div className="">
            <img className="img-fluid" src={me} alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="about-text">
            <h1>Hi There</h1>
            <p className="w-75">
              This Sajib Hossen, You can call me Sajib, I,m a full-stack
              developer. Specially MERN Developer. What you know about me, I put
              the some answer below, You may like it.
            </p>
          </div>
          <div className="row">
            <div className=" col-sm-6 col-md-6  my-3">
              <h3>Name : -</h3>
              <h4>Sajib Hossen</h4>
            </div>
            <div className=" col-sm-6 col-md-6  my-3">
              <h3>Email :-</h3>
              <p>sajibhossensa90@gmail.com</p>
            </div>
            <div className="col-sm-6 col-md-6  my-3">
              <h3>Phone :- </h3>
              <p> +8801715-676974 </p>
            </div>
            <div className="col-sm-6 col-md-6  my-3">
              <h3>Git-Hub :- </h3>
              <p>
                <a
                  href="https://github.com/sajib-hossen"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/sajib-hossen{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="about">
    //       {/* <Container>
    //         <Row>

    //         </Row>
    //       </Container> */}

    //       <div className="col-12 col-sm-12 col-md-6 col-lg-6">
    //         <div>
    //           <img src={me} alt="" />
    //         </div>
    //       </div>
    //       <div className="col-12 col-sm-12 col-md-6 col-lg-6">
    //         <div className="about-container">
    //           <div className="about-text">
    //             <h1>Hi There</h1>
    //             <p>
    //               This Sajib Hossen, You can call me Sajib, I,m a full-stack
    //               developer. Specially MERN Developer. What you know about me, I
    //               put the some answer below, You may like it.
    //             </p>
    //           </div>
    //           <div className="row rowText">
    //             <div className="col-md-6 col-sm-6 my-3">
    //               <h3>Name : -</h3>
    //               <h4>Sajib Hossen</h4>
    //             </div>
    //             <div className="col-md-6 col-sm-6 my-3">
    //               <h3>Email :-</h3>
    //               <h4>sajibhossensa90@gmail.com</h4>
    //             </div>
    //             <div className="col-md-6 col-sm-6 my-3">
    //               <h3>Phone :- </h3>
    //               <p> +8801715-676974 </p>
    //             </div>
    //             <div className="col-md-6 col-sm-6 my-3">
    //               <h3>Git-Hub :- </h3>
    //               <p>
    //                 <a
    //                   href="https://github.com/sajib-hossen"
    //                   target="_blank"
    //                   rel="noreferrer"
    //                 >
    //                   https://github.com/sajib-hossen{" "}
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
