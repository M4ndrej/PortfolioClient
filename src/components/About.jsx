import { Fragment, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/images/portfolio2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 }, // Početna pozicija sa leve strane
      {
        x: 0, // Završna pozicija (na svom mestu)
        opacity: 1, // Povećava se vidljivost
        duration: 1,
        toggleAction: "onEnter none none none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Kada vrh slike dođe do 80% visine ekrana
          end: "top 30%", // Kada vrh slike dođe do 30% visine ekrana
          scrub: true, // Animacija prati skrol
          markers: false, // Možeš staviti `true` da vidiš linije za testiranje
        },
      }
    );

    gsap.fromTo(
      divRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        toggleAction: "onEnter none none none",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <Fragment>
      <Container fluid className="mx-5 w-75 mx-auto about-container" id="about">
        <Row className="text-center pt-5">
          <p>Get To Know More</p>
          <h1>About Me</h1>
        </Row>
        <Row className="pt-5 text-center">
          <Col sm={12} md={4} lg={4}>
            <img src={img1} className="aboutImage" ref={imageRef} />
          </Col>
          <Col
            sm={12}
            md={8}
            lg={8}
            className="d-flex flex-column justify-content-between pt-5 text-start"
            ref={divRef}
          >
            <Row  className="overflow-visible">
              <Col sm={12} md={6} lg={6} className="overflow-visible">
                <div className="aboutCard" >
                  <FontAwesomeIcon icon={faAward} />
                  <p>Experience</p>
                  <p>2+ years</p>
                  <p>Full Stack Development</p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className="overflow-visible">
                <div className="aboutCard">
                  <FontAwesomeIcon icon={faSchool} />
                  <p>Education</p>
                  <p>Faculty of Organisational Sciences</p>
                  <p>Final Year of Studies</p>
                </div>
              </Col>
            </Row>
            <p className="px-2">
              I am a final-year IT student at the University of Belgrade,
              passionate about technology and software development. I have
              experience working with web technologies, backend development, and
              databases. My primary goal is to expand my knowledge and gain
              further practical experience in the field.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
