import Connect from "./Connect";
import Courses from "./Courses";
import Faq from "./Faq";
import Main from "./Main";
import Offers from "./Offers";
import Popular from "./Popular";

const Home = () => {
    return ( 
        <div className="home">
            <Main />
            <Courses />
            <Offers />
            <Popular />
            <Connect />
            <Faq />
        </div>
     );
}
 
export default Home;