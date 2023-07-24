import PreviousSearches from "../components/PreviousSearches"
import RecipesCard from "../components/RecipesCard"
export default function Recipes(){
    const recipes = [
        {
            title: "Pomfret Fish Curry",
            image: "/images/img1.jpg",
            authorImg: "/Chefs/img_3.jpg",
        },
        {
            title: "Spaghetti",
            image: "/images/img10.jpg",
            authorImg: "/Chefs/img_5.jpg",
        },
        {
            title: "Sushi Platter",
            image: "/images/img6.jpg",
            authorImg: "/Chefs/img_1.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/img7.jpg",
            authorImg: "/Chefs/img_6.jpg",
        },
        {
            title: "Shrimp Tempura",
            image: "/images/img2.jpg",
            authorImg: "/Chefs/img_4.jpg",
        },
        {
            title: "Chicken Tandoori",
            image: "/images/img5.jpg",
            authorImg: "/Chefs/img_3.jpg",
        },
        {
            title: "Gajar Halwa",
            image: "/images/img4.jpg",
            authorImg: "/Chefs/img_3.jpg",
        },
        {
            title: "Chicken Momos",
            image: "/images/img3.jpg",
            authorImg: "/Chefs/img_6.jpg",
        }, 
        {
            title: "Dango",
            image: "/images/img9.jpg",
            authorImg: "/Chefs/img_1.jpg",
        },
        {
            title: "Paneer Pakoda",
            image: "/images/img12.jpg",
            authorImg: "/Chefs/img_6.jpg",
        },
        {
            title: "Cauliflower Roast",
            image: "/images/img13.jpg",
            authorImg: "/Chefs/img_3.jpg",
        },
        {
            title: "Bhetki Paturi",
            image: "/images/img15.jpg",
            authorImg: "/Chefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return(
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipesCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipesCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}