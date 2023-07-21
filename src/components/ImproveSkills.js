export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Get cooking tips",
        "Get ranked"
    ]
    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/images/img13.jpg" alt=""></img>
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Skills</h1>
                {list.map((item, index) =>(
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Signup now</button>
            </div>
            
        </div>
    );
}