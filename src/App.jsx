import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='container-fluid' >
    <NavBar />
    <ItemListContainer greeting={"<------------------ Pagina en contrucción!! ------------------>   Te invitamos a contactanos por nuestras redes ..." }/>
    <Footer />
    </div>
  );
}

export default App;
