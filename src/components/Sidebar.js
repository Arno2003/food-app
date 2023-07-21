import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar({links, close}){
    return (
        <div className="sidebar" onClick={close}>
            <a className="sidebar-link" href="#!" key="Home"><FontAwesomeIcon icon={faHome} />Home</a>
            <a className="sidebar-link" href="#!" key="Recipes"><FontAwesomeIcon icon={faList} />Recipes</a>
            <a className="sidebar-link" href="#!" key="Settings"><FontAwesomeIcon icon={faCog} />Settings</a>
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