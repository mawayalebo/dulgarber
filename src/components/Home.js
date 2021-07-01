import Navbar from "./Navbar";
import Slide from "./Slide";
import { ads } from "./assets/data";
import Products from "./Products";
import Category from "./Category";
import AdBanner from "./AdBanner";

const Home = () => {
    return ( 
        <div className="home">
            <AdBanner/>
            <Products/>
        </div>
     );
}
 
export default Home;