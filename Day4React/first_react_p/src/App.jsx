import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import { Car, Garage } from "./components/Car";
function App() {
  return (
    <div>
      <Header />
      <ListGroup />
      <Car brand="Ford"></Car>
      <Garage brand="Ford"></Garage>
    </div>
  );
}

export default App;
