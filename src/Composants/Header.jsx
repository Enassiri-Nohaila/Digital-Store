import image from "./image.png";
import Navbar from "./Navbar";
function Header(){
    return(
        <header className="header">
        <div className="logo">
        <img src={image} alt="logo"/>
            <div className="titre">
            <h1>Digital Store  </h1>
            <h3>Votre boutique de matériels informatiques</h3>
            </div>
        </div>
         <Navbar/>
        </header>
    );  
}
export default Header;