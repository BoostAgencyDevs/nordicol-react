import "../../styles/Home/Marketing.css";

export const Marketing = () => {
    return (
        <section className="marketing-container" id="marketing">
            <div className="marketing-info">
                <h3><span><i className="fa-solid fa-bolt"></i></span> Automatización WhatsApp #1</h3>
                <article>
                    <h2 className="title">✨ Automatiza tus ventas por <span>WhatsApp</span></h2>
                    <p>Descubre todas las herramientas que necesitas para automatizar y escalar tu negocio por WhatsApp</p>
                </article>
                <div className="buttons-container">
                    <button className="btn-demo">📲 Solicitar Demo Gratuita</button>
                    <button className="btn-whatsapp"><i className="fa-regular fa-comment"></i> Hablar por WhatsApp</button>
                </div>
                <ul className="info">
                    <li className="colors">
                        <div className="red"></div>
                        <div className="orange"></div>
                        <div className="yellow"></div>
                    </li>
                    <li className="text">+1000 empresas confían en nosotros</li>
                    <li className="stars">⭐⭐⭐⭐⭐</li>
                    <li className="calification">4.9/5</li>
                </ul>
            </div>
            <div className="marketing-image">
                <figure>
                    <img src="./images/nordicol-image.jpeg" alt="Nordicol" width={50}/>
                    <figcaption>¡En vivo!</figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Marketing;