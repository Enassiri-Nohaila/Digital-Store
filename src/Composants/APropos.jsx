import imgA from "./imgA.jpeg";
function APropos(){
    return(
        <section id="apropos">
        <div className="photo">
        <img src={imgA} alt="imgA" />
        </div>
        <div className="para">
        <h2>À propos de Digital Store</h2>

            <p>
                Digital Store est une boutique spécialisée
                dans la vente de matériel informatique.
            </p>

            <p>
                Nous proposons une large gamme de produits :
                ordinateurs, claviers, souris, écrans et accessoires.
            </p>
        <h3>Notre objectif</h3>
            <p>
                Notre objectif est de satisfaire nos clients
                en proposant des produits de qualité,
                performants et adaptés à leurs besoins.
            </p>
            <p>Votre satisfaction est notre priorité !</p>
            <button className="btn"><a href="#">Savoir plus</a></button> 
        </div>
        </section>
    );
}
export default APropos;