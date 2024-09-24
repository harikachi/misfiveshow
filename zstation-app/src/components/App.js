import '../css/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
