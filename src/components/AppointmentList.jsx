import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { TiTick } from "react-icons/ti";

const AppointmentList = ({ appo, setAppo }) => {
  const handleDelete = (id) => {
    const newAppo = appo.filter(appo => appo.id !== id);
    setAppo(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
  }

  const handleToggle = (id) => {
    const newAppo = appo.map(appo => appo.id === id ? {...appo, consulted : !appo.consulted,} : appo);
    setAppo(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
  }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appo.length ? (
        appo.map(({ id, patient, day, consulted, doctor }) => (
          <Row
            key={id}
            className={
              "appointments justify-content-between align-items-center mx-auto " +
              (consulted ? "consulted" : "")
            }
          >
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString()}</h5>
              <h5>Time: {new Date(day).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTick type="button" className="text-success display-2" onClick={()=> handleToggle(id)} />
              <TiDelete type="button" className="text-danger display-2" onClick={()=> handleDelete(id)} />
            </Col>
          </Row>
        ))
      ) : (
        <img src="./img/appointment.jpg" width="70%" />
      )}
    </Container>
  );
};

export default AppointmentList;
