export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <figure>
                    <img src="./images/logo2.png" alt="Logo" width={100} />
                </figure>
                <p>La herramienta de automatización WhatsApp más completa del mercado</p>
                <ul className="lists">
                    <li className="list"><a href="#">Términos</a></li>
                    <li className="list"><a href="#">Privacidad</a></li>
                    <li className="list"><a href="#">Soporte</a></li>
                </ul>
                <p className="copy">© 2025 Software Nordicol. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}