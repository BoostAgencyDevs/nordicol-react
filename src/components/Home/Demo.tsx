import "../../styles/Home/Demo.css";

const Demo = () => {
    const text = [{
        id: 1,
        text: "Demo personalizada de 30 minutos"
    },
    {
        id: 2,
        text: "Asesoría gratuita para tu negocio"
    },
    {
        id: 3,
        text: "Sin compromiso ni costos ocultos"
    },
    {
        id: 4,
        text: "Configuración inicial incluida"
    }
]
    return (
        <div className="demo-container" id="demo">
            <article className="demo-text">
                <h2 className="title">📲 Solicita una DEMO ahora</h2>
                <p className="text">Conéctate con nuestro equipo y recibe una asesoría gratuita sobre cómo automatizar tus ventas y mejorar tu atención por WhatsApp.</p>
            </article>
            <div className="demo-content">
                <article className="demo-article">
                    <h3>¿Listo para transformar tu negocio?</h3>
                    <section>
                        {text.map((item) => (
                            <p key={item.id}><i className="fa-solid fa-circle-check"></i> {item.text}</p>
                        ))}
                    </section>
                    <div className="buttons-container">
                        <button className="btn-demo"><i className="fa-solid fa-hand-pointer"></i> Solicitar Demo Gratuita</button>
                        <button className="btn-whatsapp"><i className="fa-regular fa-comment"></i> Hablar por WhatsApp</button>
                    </div>
                </article>
                <figure>
                    <figcaption>📸 Así se ve Software Nordicol</figcaption>
                    <img src="./images/nordicol-image.jpeg" alt="Nordicol" width={50}/>
                </figure>
            </div>
        </div>
    );
};

export default Demo;