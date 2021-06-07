import "./navigation.scss";
import {ReactComponent as Logo} from "./netflix.svg";

function Navigation() {

  return (
    <div className="navigation flex">
      <div className="navigation__logo">
        <Logo />
      </div>

      <div className="navigation__links flex full-height">
        <a href="#" className="navigation__link navigation__link--active" >Home</a>
        <a href="#" className="navigation__link" >Today`s shown</a>
        <a href="#" className="navigation__link" >Movies</a>
        <a href="#" className="navigation__link" >Shedule</a>
      </div>
    </div>
  )
}

export default Navigation
