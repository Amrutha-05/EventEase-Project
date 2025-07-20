import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Event Ease</Link>
      </div>
      <ul className="nav-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-events">Find Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
