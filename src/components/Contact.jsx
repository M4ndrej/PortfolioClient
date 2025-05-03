import { Fragment, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const divRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 70%", // Kada vrh elementa dođe na 80% visine viewporta
          end: "top 50%", // Kada vrh elementa dođe na 50% visine viewporta
          toggleActions: "onEnter none none none",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <Fragment>
      <Container fluid className="contact-container" ref={divRef} id="contact">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
        <div
          className="contactCard"
          onClick={() =>
            (window.location.href = "mailto:andrejmax347@gmail.com")
          }
        >
          <div className="d-flex align-items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="m-0">andrejmax347@gmail.com</span>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
