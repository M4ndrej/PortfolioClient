import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axios-client";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import parse from "html-react-parser";
import Loader from "../components/Loader";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/projects/${id}`);
        console.log(response);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Container>
        <Row className="p-4">
          <Col sm={12} md={12} lg={6}>
            {loading ? (
              <Col className="d-flex justify-content-center align-items-center py-5">
                <Loader />
              </Col>
            ) : project ? (
              project.description ? (
                parse(project.description)
              ) : (
                <div>Description not added yet.</div>
              )
            ) : null}
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div
              className="player-wrapper"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              {project ? (
                project.video ? (
                  <ReactPlayer
                    url={project.video}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <div>Video not added yet.</div>
                )
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
