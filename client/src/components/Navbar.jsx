import {Link} from "react-router-dom";
import './css/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {BsFillFilePostFill,BsClipboardPlus,BsFillMoonFill,BsPersonCircle} from "react-icons/bs";  

const Navbar = () => {
  return (
    <div className="Nav">
      <GiHamburgerMenu className="Nav_icon" />
      
      <input className="Nav_input" placeholder="Search" />

      <p className="Nav_greeting">Good evening, Maiky</p>

      <ul className="Nav_ul">
        <li>
          <Link className="Nav_link" to="/"><BsFillFilePostFill/></Link>
        </li>
        <li>
          <Link className="Nav_link" to="form"><BsClipboardPlus/></Link>
        </li>
        <li>  
          <BsFillMoonFill/>
        </li>
        <li>  
          <BsPersonCircle/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
