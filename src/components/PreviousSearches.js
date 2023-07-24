import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const searches = ["bhapa ilish", "sushi", "dango", "aam-panna", "mutton biriyani", "kulfi", "spagetti", "lasagna", "chicken soup", "litti", "alu-paratha", "chicken resala", "bhetki paturi", "prawn tempura", "white sauce pasta", "rogan josh"]
    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (<div key={index} style={{ animationDelay: index * 0.1 + "s" }} className="search-item">
                    {search}
                </div>))}
            </div>
            <div className="search-box">
                <input type="text" placeholder="search here" />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}