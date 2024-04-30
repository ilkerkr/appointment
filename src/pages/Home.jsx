import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { useState } from "react";
import { appointmentData } from "../helpers/data";

const Home = () => {
  const [appo, setAppo] = useState(JSON.parse(localStorage.getItem("appointments")) ||[]);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">RAYZ HOSPITAL</h1>
      <Doctors setAppo={setAppo} apps={appo} />
      <AppointmentList appo={appo} setAppo={setAppo} />
    </main>
  );
};

export default Home;
