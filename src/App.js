import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <section className="App/ md:w-8/12 md:m-auto ">
        <Navbar />
      </section>
      <section className="container flex flex-col items-center m-auto gap-3 pb-10 / md:grid md:grid-cols-2 md:flex-row md:gap-16 md:w-8/12 md:mx-auto md:pt-5 / xl:mt-6">
        <Carousel />
        <ProductInfo />
      </section>
    </>
  );
}


export default App;