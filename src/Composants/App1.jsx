import "./App1.css";
import Header from "./Header";
import  Main from "./Main";
import Sidebar from "./Sidebar";
import  Footer from "./Footer";
import  APropos from "./APropos";
import  Contact from "./Contact";

function App1(){
  return(
    <div className="page">
      <Header />
    <div className="content">
      <Main/>
      <Sidebar/>
    </div>
    < APropos/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App1;