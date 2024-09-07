import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/clockSlogan";
import CurrentTime from "./components/currentTime";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}
