import { useEffect, useState } from 'react';
import { getCompany, getAllCompany } from '../services/StockService';
import {NavDropdown,FormControl,Form,Button,Nav,Navbar} from 'react-bootstrap';

function StockContainer(props){
//const{setCompanyCode}=props;
const [companies, setCompanies] = useState([]);
const [companyDetails, setCompanyDetails] = useState({});
const [companySearch, setCompanySearch] = useState();

useEffect(() => {
    let mounted = true;
    getAllCompany().then(items => {
            if (mounted) {
                console.log("Get cal =>"+items.data);
                setCompanies(items.data)
            }
        })
    return () => mounted = false;
}, [])
const handleSubmit = () => {
    if (companySearch !== "") {
        getCompanyByCode(companySearch);
        console.log("COmpany Code");
    } else {
        alert("Enter Company Name to Search")
    }

}
const handleChange = (event) => {
    if (event.target && event.target.name === "company") {
        setCompanySearch(event.target.value)
       console.log("Company Name"+companySearch.companyData.name)
    }
    else {
        getCompanyByCode(event);
    }

}

const getCompanyByCode = (code) => {
    getCompany(code).then(res => {
        console.log("response code =>"+JSON.stringify(res));
        if (res){
            setCompanyDetails(res)
            props.setCompName(res.companyData.name);
            props.setCompCode(res.companyData.code);
        } else {
            //setCompanyCode({})
            setCompanyDetails({})
            alert('No company found')
        }
    });

}
return <Navbar.Collapse id="basic-navbar-nav">
<Nav className="w-50">
<NavDropdown title="Companies" onSelect={handleChange} value={props.companyCode}  id="basic-nav-dropdown">
   
{companies.map(company=>
    <NavDropdown.Item name="dropdown" eventKey={company.companyData.code}>{company.companyData.name}</NavDropdown.Item>) }
</NavDropdown>
</Nav>
<Form inline>
<FormControl type="text" name="company" onChange={handleChange} value={props.companyCode} placeholder="Search by Company Code" className="mr-sm-2 w-25" />
<Button variant="outline-light" onClick={handleSubmit}>Search</Button>
</Form> 
</Navbar.Collapse>
}
export default StockContainer;