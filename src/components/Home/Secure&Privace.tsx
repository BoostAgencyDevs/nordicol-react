import "../../styles/Home/Secure&Privace.css"

const SecurePrivace = () => {
    return (
        <div className="secure-privace-container" id="secure-privace">
            <article className="secure-privace security">
                <i className="fa-solid fa-shield"></i>
                <h2 className="title">🔒 Seguridad y privacidad</h2>
                <p className="text">Tu información y la de tus clientes siempre están protegidas. Cumplimos con los más altos estándares de privacidad y seguridad digital.</p>
            </article>
            <article className="secure-privace ready">
                <h2 className="title">¿Listo para automatizar tus ventas por Whatsapp?</h2>
                <p className="text">Únete a más de 1,000 empresas que ya están transformando sus resultados con Nordicol.</p>
                <div className="buttons-container">
                    <button className="btn-demo">📲 Solicitar Demo Gratuita</button>
                    <button className="btn-whatsapp"><i className="fa-regular fa-comment"></i> Hablar por WhatsApp</button>
                </div>
            </article>
        </div>
    )
}

export default SecurePrivace