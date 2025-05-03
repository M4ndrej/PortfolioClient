import { Fragment, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import img1 from "../assets/images/portfolio1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const imageRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 }, // Početna pozicija sa leve strane
      {
        y: 0,                // Završna pozicija (na svom mestu)
        opacity: 1,          // Povećava se vidljivost
        duration: 1,       // Brzina animacije
      }
    );
    gsap.fromTo(
      divRef.current,
      { y: 100, opacity: 0 }, // Početna pozicija sa leve strane
      {
        y: 0,                // Završna pozicija (na svom mestu)
        opacity: 1,          // Povećava se vidljivost
        duration: 1,       // Brzina animacije
      }
    );
  }, []);

  return (
    <Fragment>
      <Container
        fluid
        className="d-flex justify-content-center w-75 hero align-items-center hero-container"
      >
        <Row className="w-100 h-100">
          <Col
            sm={12}
            md={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center py-5"
          >
            <img src={img1} className="heroImage" ref={imageRef} />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="d-flex flex-column justify-content-center text-center gap-2 py-5"
            ref={divRef}
          >
            <h5>Hello, I'm</h5>
            <h2>Andrej Maksimovic</h2>
            <h4>Full Stack Developer</h4>
            <div className="d-flex justify-content-center gap-3">
              <button className="heroButtonLight">Download CV</button>
              <button className="heroButtonDark">Contact Info</button>
            </div>
            <div className="d-flex justify-content-center gap-2 text-xl icon">
              <a href="" className="hero-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="" className="hero-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
