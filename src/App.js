import "./App.css";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";
import Header from "./Component/1-header/Header";
import Hero from "./Component/2-hero/Hero";
import Main from "./Component/3-main/Main";
import Background from "./Component/background/Background";

function App() {
  return (
    <div className="container">
      <Header />
      <Background />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
    </div>
  );
}

export default App;
