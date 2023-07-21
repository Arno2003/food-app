import ChefsCard from "./ChefsCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/Chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican"
        },
        {
            name: "John Doe",
            img: "/Chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Erich Maria",
            img: "/Chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Chris Brown",
            img: "/Chefs/img_4.jpg",
            recipesCount: "13",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/Chefs/img_5.jpg",
            recipesCount: "10",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/Chefs/img_6.jpg",
            recipesCount: "10",
            cuisine: "Indian"
        },
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <ChefsCard />
                <ChefsCard />
                <ChefsCard />
                <ChefsCard />
                <ChefsCard />
                <ChefsCard /> */}
                {chefs.map(chef => <ChefsCard key={chef.name} chef={chef} />)}
            </div>
        </div>
    )
}