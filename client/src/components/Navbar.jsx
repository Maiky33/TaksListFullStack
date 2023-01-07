import { Link } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'
import { AiFillHome } from "react-icons/ai";
import {
  BsFillFilePostFill,
  BsClipboardPlus,
  BsFillMoonFill,
  BsPersonCircle,
  BsFillBrightnessHighFill,
} from "react-icons/bs";
import "./css/Navbar.css";


const Navbar = () => {

  const [Active, setActive] = useLocalStorage('darkTheme', true)
  const [Search, setSearch] = useLocalStorage('Search', '')


  const toggleTheme = () => {
    setActive((prevValue) => !prevValue)
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }



  return (
    <div className={Active ? "Nav" : "NavDarth"}>
      
      <Link className="Nav_link" to="/">
        <AiFillHome className="Nav_icon" />
      </Link>
      
      <input onChange={onChange} value={Search} className="Nav_input" placeholder="Search" />

      <p className="Nav_greeting">Good evening, Maiky</p>

      <ul className="Nav_ul">
        <li>
          <Link className="Nav_link" to="/">
            <BsFillFilePostFill />
          </Link>
        </li>
        <li>
          <Link className="Nav_link" to="form">
            <BsClipboardPlus />
          </Link>
        </li>
        <li>
          {Active? (
            <BsFillMoonFill
              className="Nav_link" onClick={()=>toggleTheme()}
            />
          ) : (
            <BsFillBrightnessHighFill
              className="Nav_link" onClick={()=>toggleTheme()}
            />
          )}
        </li>
        <li>
          <BsPersonCircle />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
