import { FontAwesomeIcon } from "@fontawesome/@fontawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar({links}){
    return (
        <div className="sidebar">
            <a href="#!" key="Home"><FontAwesomeIcon icon={faHome} />Home</a>
            <a href="#!" key="Recipes">Recipes</a>
            <a href="#!" key="Settings">Settings</a>
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