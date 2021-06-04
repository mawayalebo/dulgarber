import Navbar from "./Navbar";
import Slide from "./Slide";
import { ads } from "./assets/data";
import Products from "./Products";
import Category from "./Category";
import Banner from "./Banner";

const Home = () => {
    return ( 
        <div className="home">
            <Category/>
            <Banner/>
            <Products/>
        </div>
     );
}
 
export default Home;