import react, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">benet<i className="fa-solid fa-staff-snake"><span className="logo-span">Healthcare Consulting</span></i></h1>
                {/* <h5 className="navbar-logo">Healthcare Consulting</h5> */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map ((item, index) => {
                      return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                      )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar