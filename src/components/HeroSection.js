import CustomImage from "./CustomImage";

export default function HeroSection(){
    const images = [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
        "/images/img5.jpg",
        "/images/img6.jpg",
        "/images/img7.jpg",
        "/images/img8.jpg",
        "/images/img9.jpg",
    ];
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Foodhub is a place where you can please your soul and tummy with delicious food recipies of all cuisines. And our service is completely free. So, what are you waiting for?</p>
                <button className="btn">explore now!</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                <CustomImage imgSrc={src} key={index} pt={"95%"} />
                )) }
                
            </div>
        </div>
    );
}