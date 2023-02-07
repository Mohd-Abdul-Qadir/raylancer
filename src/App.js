import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import LaunchpadRecord from "./components/LaunchpadRecord/LaunchpadRecord";
import CreateLaunchpad from "./components/CreateLaunchpad/CreateLaunchpad";
import Cards from "./components/Cards/Cards";
import AnalyticalCards from "./components/AnalyticalCards/AnalyticalCards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <NavigationBar />
        <div className="container">
          <Header />
          <LaunchpadRecord />
          <CreateLaunchpad />
          <Cards />
          <AnalyticalCards />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
