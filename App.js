import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useEffect,useState } from 'react';
import CompanyAndDateInfo from './components/CompanyAndDateInfo';
import StockContainer from './container/StockContainer.js';
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  //set state for name and code remove in container
  const [companyCode, setCompCode] = useState([]);
  const [companyName,setCompName]=useState([]);
  return (
    <div className="App">
      <header>
<Navbar bg="primary" expand="lg" variant="dark">
<span className="material-icons">
trending_up
</span>
  <Navbar.Brand href="#">E-Stock Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Nav.Link href="#" className="text-light w-25">Add Company</Nav.Link>
  <StockContainer
setCompCode ={setCompCode}
setCompName={setCompName}
 companyCode={companyCode}
 companyName={companyName}/>
</Navbar>
</header>
      
 <CompanyAndDateInfo companyCode={companyCode} companyName={companyName}/>
     <Footer/>
    </div>
  );
}

export default App;
