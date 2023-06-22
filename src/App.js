import './App.css';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
import GoogleSection from './components/GoogleSection';
import Header from './components/Header';



function App() {
  return (
    <>
      <Header/>
      <main>
        <CarouselSection/>
        <GoogleSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
