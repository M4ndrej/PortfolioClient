import { Fragment, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axiosClient from "./../api/axios-client";
import Loader from "../components/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref1 = useRef();
  const ref2 = useRef();
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading && ref1.current && ref2.current) {
      gsap.fromTo(
        ref1.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref1.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        }
      );
  
      gsap.fromTo(
        ref2.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref2.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            markers: false,
          },
        }
      );
    }
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/experiences");
        console.log(response.data);
        setExperiences(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  return (
    <Fragment>
      <Container fluid className="w-75 exp-container" id="experience">
        <Row className="text-center py-5">
          <p>Explore My</p>
          <h1>Experience</h1>
        </Row>
        <Row>
          {loading ? (
            <Col className="d-flex justify-content-center align-items-center py-5">
              <Loader />
            </Col>
          ) : experiences && experiences.length > 0 ? (
            <>
              <Col sm={12} md={12} lg={6}>
                <div className="expCard" ref={ref1}>
                  <h2>Frontend Development</h2>
                  <div className="expCardDetails">
                    {experiences
                      .filter((e) => e.technology === "frontend")
                      .map((e, index) => (
                        <div
                          className="d-flex align-items-center gap-3"
                          key={index}
                        >
                          <FontAwesomeIcon icon={faCircleCheck} />
                          <h5 className="m-0">{e.name}</h5>
                        </div>
                      ))}
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <div className="expCard" ref={ref2}>
                  <h2>Backend Development</h2>
                  <div className="expCardDetails">
                    {experiences
                      .filter((e) => e.technology === "backend")
                      .map((e, index) => (
                        <div
                          className="d-flex align-items-center gap-3"
                          key={index}
                        >
                          <FontAwesomeIcon icon={faCircleCheck} />
                          <h5 className="m-0">{e.name}</h5>
                        </div>
                      ))}
                  </div>
                </div>
              </Col>
            </>
          ) : (
            <Col className="text-center py-5">
              <h3>No Experiences Added</h3>
            </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}
