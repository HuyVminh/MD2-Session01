import "./App.css";
import Banner from "./components/manager-product/Banner";
import Footer from "./components/manager-product/Footer";
import Header from "./components/manager-product/Header";
import List_Product from "./components/manager-product/List_Product";
import Navbar from "./components/manager-product/Navbar";

function App() {
    // đây là khu vực viết code javaScript
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <List_Product />
            <Footer />
        </>
    );
}

export default App;
