import {Link} from "react-router-dom";
import {useState} from "react";
import logo from "/public/logo.png";

import "./header.css"

function Header() {
    const [open, setOpen] = useState<boolean>(false)

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <div>
            <div className={"header"}>
                <a target={"_blank"} href="https://www.zoo.ch/de"><img src={logo} alt="logo" className={"logo"}/></a>
                <div className={`hamburger${open ? " open" : ""}`} onClick={() => toggleOpen()}>
                    <span className={"bar"} id={"top"}/>
                    <span className={"bar"} id={"middle"}/>
                    <span className={"bar"} id={"bottom"}/>
                    <div id={"hamburger_circle"}/>
                </div>
            </div>
            <nav className={`navDropdown${open ? " open" : ""}`}>
                <Link to={"/home"} onClick={toggleOpen}>Home</Link>
                <Link to={"/tickets"} onClick={toggleOpen}>Tickets</Link>
                <Link to={"/guides"} onClick={toggleOpen}>Guides</Link>
                <Link to={"https://youtu.be/dQw4w9WgXcQ?si=utjQSltq19_uwWLf"} onClick={toggleOpen}>Impressum</Link>
                <Link to={"https://youtu.be/dQw4w9WgXcQ?si=utjQSltq19_uwWLf"} onClick={toggleOpen}>Hilfe</Link>
                <div id={"navRoundBottom"}></div>
            </nav>
        </div>
    )
}

export default Header;