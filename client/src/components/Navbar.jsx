import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="form">CREATE TASK</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
