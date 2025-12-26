export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="legal-info">
                            <h3 className="legal-title">Información Legal</h3>
                            <div className="legal-item">
                                <span className="legal-label">NIT:</span>
                                <span className="legal-value">900729437-1</span>
                            </div>
                            <div className="legal-item">
                                <span className="legal-label">Representante Legal:</span>
                                <span className="legal-value">MESIAS BURBANO ROJAS</span>
                            </div>
                            <div className="legal-item">
                                <span className="legal-label">Dirección:</span>
                                <span className="legal-value">CARRERA 10 NO. 1 - 19 - Diego de Ospina</span>
                            </div>
                            <div className="legal-item">
                                <span className="legal-label">Municipio:</span>
                                <span className="legal-value">Neiva, Huila</span>
                            </div>
                            <div className="legal-item">
                                <span className="legal-label">Email:</span>
                                <a href="mailto:messi122008@hotmail.com" className="legal-value legal-link">messi122008@hotmail.com</a>
                            </div>
                            <div className="legal-item">
                                <span className="legal-label">Teléfono:</span>
                                <a href="https://wa.me/573212409096" target="_blank" rel="noopener noreferrer" className="legal-value legal-link">321 240 9096</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-right">
                        <figure>
                            <img src="./images/logo2.png" alt="Logo" width={100} />
                        </figure>
                        <p>La herramienta de automatización WhatsApp más completa del mercado</p>
                        <ul className="lists">
                            <li className="list"><a href="#">Términos</a></li>
                            <li className="list"><a href="#">Privacidad</a></li>
                            <li className="list"><a href="#">Soporte</a></li>
                        </ul>
                    </div>
                </div>

                <p className="copy">© 2025 Software Nordicol. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}