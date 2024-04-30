import { Col, Container, Image, Row } from "react-bootstrap";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({setAppo, apps}) => {
  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const addAppointments = (newAppo) => {
    setAppo([...apps, newAppo]);
    localStorage.setItem("appointments", JSON.stringify([...apps, newAppo]))
  }
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((doctor) => {
          const { id, name, img, dep } = doctor;
          return (
            <Col xs={6} sm={4} lg={3} key={id}>
              <Image
                className="img-thumbnail doctor-img"
                src={img}
                alt={name}
                onClick={() => {
                  setShow(true);
                  setDoctorName(name);
                }}
              />
              <h5>{name}</h5>
              <p>{dep}</p>
            </Col>
          );
        })}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        doctorName={doctorName}
        addAppointments={addAppointments}
      />
    </Container>
  );
};

export default Doctors;
