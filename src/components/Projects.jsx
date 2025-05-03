import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosClient from "../api/axios-client";
import Loader from '../components/Loader';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await axiosClient.get("/projects");
        console.log(projects.data);
        setProjects(projects.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  var settings = {
    autoplay: true,
    autoPlaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 456,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Container className="projects-container" id="projects">
        <Row className="text-center">
          <p>Browse My Recent</p>
          <h1>Projects</h1>
        </Row>
        <Row className="project-slick">
          {loading ? (
            <div className="w-100 d-flex justify-content-center pt-5">
              <Loader />
            </div>
          ) : projects.length > 0 ? (
            <Slider {...settings} className="d-flex justify-content-center">
              {projects.map((e, index) => (
                <div key={index} className="projectCard">
                  <Row>
                    <Col className="d-flex flex-column align-items-center gap-3 p-0">
                      <img
                        src={e.image}
                        className="projectImage"
                        alt={e.title}
                      />
                      <h3 className="title">{e.title}</h3>
                      <div className="d-flex gap-2 w-100 justify-content-center">
                        <button
                          className="projectButton"
                          onClick={() =>
                            (window.location.href = `/project/${e.id}`)
                          }
                        >
                          See More
                        </button>
                        <button className="projectButton">GitHub</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center w-100">
              <h2>No projects added</h2>
            </div>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}
