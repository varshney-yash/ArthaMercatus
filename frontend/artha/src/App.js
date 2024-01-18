import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Container>
          <h1>Welcome, this website is powered by DRF and React</h1>
        </Container>
        <Footer />
      </div>
    </>
  );
}
