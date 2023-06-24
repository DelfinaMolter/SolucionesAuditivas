import './App.css';

import Footer from './components/Footer';
import GoogleSection from './components/GoogleSection';
import Header from './components/Header';
import NosotrosSection from './components/NosotrosSection';
import ProductSection from './components/ProductSection';
import SloganSection from './components/SloganSection';



function App() {
  return (
    <>
      <Header/>
      <main>
        <SloganSection/>
        <NosotrosSection/>
        <ProductSection/>
        <GoogleSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
