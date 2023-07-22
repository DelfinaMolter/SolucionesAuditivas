import './App.css';
import Footer from './components/Footer';
import GoogleSection from './components/GoogleSection';
import Header from './components/Header';
import ModalTemplate from './components/Modal';
import NosotrosSection from './components/NosotrosSection';
import ProductSection from './components/ProductSection';
import SloganSection from './components/SloganSection';
import { LanguageProvider } from './utils/language.context';
import Form from './components/Form';
import Gracias from './components/Gracias';
import useModal from './Hooks/ContextModal';
import useGracias from './Hooks/ContextGracias';

function App() {
  const { modal , setModal } = useModal();
  const { gracias , setGracias } = useGracias();

  return (
    
      <LanguageProvider>
        <Header/>
        <main>
          <SloganSection/>
          <NosotrosSection/>
          <ProductSection/>
          <GoogleSection/>
          <ModalTemplate
            show={modal}
            onHide={() => setModal(false)}>
              <Form/>
          </ModalTemplate>
          <ModalTemplate
                show={gracias}
                onHide={() => setGracias(false)}
                >
                <Gracias/>
            </ModalTemplate>
        </main>
        <Footer/>
        </LanguageProvider>
        
  );
}

export default App;
