import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar({links, close}){
    const location = useLocation();
    return (
        <div className="sidebar" onClick={close}>
            <Link className={location.pathname == "/"? "sidebar-link active": "sidbar-link"} to="/" key="Home"><FontAwesomeIcon icon={faHome} />Home</Link>
            <Link className={location.pathname == "/recipes"? "sidebar-link active": "sidbar-link"} to="/recipes" key="Recipes"><FontAwesomeIcon icon={faList} />Recipes</Link>
            <Link className={location.pathname == "/settings"? "sidebar-link active": "sidbar-link"} to="/settings" key="Settings"><FontAwesomeIcon icon={faCog} />Settings</Link>
        </div>
    );
}

/*
{
    links.map(link => (
        <a href="#!" key={link.name}>{link.name}</a>
    ))
}
*/