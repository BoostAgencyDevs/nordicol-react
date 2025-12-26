import "../../styles/Home/KeyBenefits.css";

const KeyBenefits = () => {
    const keyBenefits = [
        {
            id: 1,
            icon: "fa-solid fa-laptop",
            title: "Interfaz profesional y fácil de usar",
            text: "Diseño intuitivo que no requiere conocimientos técnicos"
        },
        {
            id: 2,
            icon: "fa-solid fa-clock",
            title: "Ahorra tiempo automatizando respuestas",
            text: "Responde a tus clientes las 24 horas del día automáticamente"
        },
        {
            id: 3,
            icon: "fa-solid fa-arrow-trend-up",
            title: "Aumenta tus cierres con atención 24/7",
            text: "Nunca pierdas una venta por no estar disponible"
        },
        {
            id: 4,
            icon: "fa-solid fa-shield",
            title: "Llega a más personas sin bloqueos",
            text: "Sistema inteligente que protege tus cuentas de Nordicol"
        },
        {
            id: 5,
            icon: "fa-solid fa-headset",
            title: "Soporte técnico personalizado",
            text: "Equipo de expertos disponible para ayudarte siempre"
        },
        {
            id: 6,
            icon: "fa-solid fa-chart-line",
            title: "Resultados inmediatos",
            text: "Comienza a ver mejoras desde el primer día de uso"
        }
    ]
    return (
        <div className="key-benefits-container" id="key-benefits">
            <h2 className="title">💡 ¿Por qué elegir Nordicol?</h2>
            <section className="key-benefits-section">
                {keyBenefits.map((keyBenefit) => (
                    <article key={keyBenefit.id}>
                        <i className={keyBenefit.icon}></i>
                        <h3>{keyBenefit.title}</h3>
                        <p>{keyBenefit.text}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default KeyBenefits;