import "./style.css";
import Popup from "../Popup";

const Header = () => (
  <header className="header">
    <h1 className="header__title--green">gn<strong className="header__title--black">News</strong> i wiesz więcej!</h1>
    <Popup />
  </header>
);

export default Header