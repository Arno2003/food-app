import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar({links}){
    return (
        <div className="sidebar">
            <a href="#!" key="Home">Home</a>
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