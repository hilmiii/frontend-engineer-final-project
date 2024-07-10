import Header from "../components/Header/Header";
import Regions from "../components/Regions/Regions";
import Globals from "../components/Globals/Globals";

function Home() {
    return(
        <div>
            <main>
                <Header />
                <Globals />
                <Regions />
            </main>
        </div>
    );
}

export default Home;

