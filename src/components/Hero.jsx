import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero_section hero_container">
            <div className="hero_details">
                <h1>your feet deserve the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="mng-btn">
                    <button className="shop-btn"><Link to="/shoes" className="shop-btnn">Shop Now</Link></button>
                    <button className="shop-btn"><Link to="/shoes" style={{color:"white" , textDecoration:"none"}}>Category</Link></button>
                </div>

                <div className="shoping_sec">
                    <p>Also Available On</p>
                    <div className="shoping_mng">
                    <img src="/Images/amazon.png"></img>
                    <img src="/Images/flipkart.png"></img>
                    </div>
                </div>

            </div>
            <div className="hero_img">
                <img src="/Images/shoe_image.png"></img>
            </div>
        </div>
    )
}

export default Hero