import "../../styles/Home/TargetLeads.css";

const TargetLeads = () => {
    const targetLeads = [
        {
            id: 1,
            title: "Emprendedores"
        },
        {
            id: 2,
            title: "Agencias de marketing"
        },
        {
            id: 3,
            title: "Negocios físicos y online"
        },
        {
            id: 4,
            title: "Equipos de soporte y ventas"
        },
        {
            id: 5,
            title: "Freelancers y creadores de contenido"
        },
        {
            id:6,
            title: "E-commerce y tiendas online"
        }

    ]
    return (
        <div className="target-leads-container" id="target-leads">
            <h2 className="title">💼 ¿Quién puede usar Nordicol?</h2>
            <section className="target-leads-section">
                {targetLeads.map((targetLead) => (
                    <div key={targetLead.id} className="target-lead">
                        <h3><i className="fa-regular fa-circle-check"></i> ✅ {targetLead.title}</h3>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TargetLeads;