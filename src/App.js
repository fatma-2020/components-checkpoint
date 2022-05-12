import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileImage } from "./Component/Profile/ProfilePhoto";
import { FullName } from "./Component/Profile/FullName";
import { Adress } from "./Component/Profile/Address";
import { Card } from "react-bootstrap";

function App() {
  return (
    <Card className="card" border="info" style={{ width: "18rem" }}>
      <Card.Header className="title">Personal Card </Card.Header>
      <Card.Body>
        <ProfileImage />
        <FullName />
        <Adress />
        <p>I'm a Desney Pixar caracter from film "Luca" </p>
      </Card.Body>
    </Card>
  );
}

export default App;
