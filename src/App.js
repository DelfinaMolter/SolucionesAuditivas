import './App.css';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
import GoogleSection from './components/GoogleSection';
import Header from './components/Header';
import NosotrosSection from './components/NosotrosSection';
import SloganSection from './components/SloganSection';



function App() {
  return (
    <>
      <Header/>
      <main>
        <SloganSection/>
        <NosotrosSection/>
        <CarouselSection/>
        <GoogleSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
