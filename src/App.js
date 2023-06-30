import './App.css';

import Footer from './components/Footer';
import GoogleSection from './components/GoogleSection';
import Header from './components/Header';
import NosotrosSection from './components/NosotrosSection';
import ProductSection from './components/ProductSection';
import SloganSection from './components/SloganSection';
import { LanguageProvider } from './utils/language.context';



function App() {
  return (
    <LanguageProvider>
      <Header/>
      <main>
        <SloganSection/>
        <NosotrosSection/>
        <ProductSection/>
        <GoogleSection/>
      </main>
      <Footer/>
      </LanguageProvider>
  );
}

export default App;
