function Contact(){
    return(
        <section id="contact">
        <h2>Connectez-vous</h2>
        <p>Nous sommes à votre écoute!!</p>
        <form action="">
        <label htmlFor="NomC">Nom complet:</label>
        <input type="text" name="NomC" placeholder="Votre nom et prénom" />
        <label htmlFor="NomC">Email:</label>
        <input type="text" name="email" placeholder="Votre email" />
        <label htmlFor="msg">Message:</label>
        <textarea name="msg" id="msg" placeholder="Ecrivez votre message..." maxLength={200}></textarea>
        <button type="submit">Envoyer</button>
        </form>
        </section>
    );
}
export default Contact;