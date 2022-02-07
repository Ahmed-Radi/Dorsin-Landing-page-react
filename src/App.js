import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
                <Navs />
                <Home />
                <Footer />
        </div>
    );
}

export default App;
