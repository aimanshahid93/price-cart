import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
 <Dashboard />
    </div>
  );
}
function Dashboard(){
  return(
  <div className="Dashboard">
    <Offers/> 
    </div>);
}
function Offers(){
  const PackagesList=[
    {
    header:"Free",
     OfferPrice:"0$/month",
     users:"single user",
     Storage:"5GB storage",
     ProjectScope:"Unlimited Projects",
     Access:"Community Access",
     Private:"limited",
     phoneSupport:"No dedicated Phone Support",
     Domain:"No free domain",
     Statusreport:"No Monthly status report",
    icon1:faCheck,
    icon2:faX,
    },
    {
    header:"Plus",
     OfferPrice:"9$/month",
     users:"5 users",
     Storage:"50GB storage",
     ProjectScope:"Unlimited Public Projects",
     Access:"Community Access",
     Private:"unlimited Private projects",
     phoneSupport:"dedicated Phone Support",
     Domain:"free domain",
     Statusreport:"No Monthly status report",
     icon1:faCheck,
     icon2:faX,
    },
    {
    header:"Pro",
    OfferPrice:"49$/month",
     users:"Unlimited user",
     Storage:"150GB storage",
     ProjectScope:"Unlimited Projects",
     Access:"Community Access",
     Private:"unlimited Private projects",
     phoneSupport:"dedicated Phone Support",
     Domain:"Unlimited free domain",
     Statusreport:"Monthly status report",
     icon1:faCheck,
     icon2:faX,
    },
  ]
  return(
    <div className="Offers">
      {PackagesList.map((dt)=>
      <PriceCart packages={dt}/>)}
    </div>
  );
 }
function PriceCart({packages}){
  
  return(
    <Card className="pricecart">
   <CardContent>
    <div className="header">
    <h2>{packages.header}</h2>
    <h3>{packages.OfferPrice}</h3>
    </div>
    <p><FontAwesomeIcon icon={packages.icon1} />{packages.users}</p>
    <p><FontAwesomeIcon icon={packages.icon1} />{packages.Storage}</p>
    <p><FontAwesomeIcon icon={packages.icon1} />{packages.ProjectScope}</p>
    <p><FontAwesomeIcon icon={packages.icon1} />{packages.Access}</p>
    <p><FontAwesomeIcon 
    icon={packages.Private==="limited"?faX:faCheck} />{packages.Private}</p>
    <p>
    <FontAwesomeIcon 
    icon={packages.phoneSupport==="No dedicated Phone Support"?faX:faCheck} />
    {packages.phoneSupport}</p>
    <p>
    <FontAwesomeIcon 
    icon={packages.Domain==="No free domain"?faX:faCheck} />  
    {packages.Domain}</p>
    <p>
    <FontAwesomeIcon 
    icon={packages.Statusreport==="No Monthly status report"?faX:faCheck} />{" "}
    {packages.Statusreport}</p>
    <Button className="button" variant="contained">Purchase</Button>
  </CardContent>
  </Card>
  );
}
export default App;
