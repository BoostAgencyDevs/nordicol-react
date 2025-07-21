import "../../styles/Home/Features.css";

import linearGradient from "../../utils/linearGradient";

const Features = () => {
    const sections = [
        {
            id: 1,
            icon: "fa-solid fa-robot",
            title: "🤖 Respuestas Automáticas",
            text: "Crea reglas personalizadas por palabras clave para que tus clientes reciban respuestas inmediatas, incluso cuando no estás disponible.",
            color: "#3498db"
        },
        {
            id: 2,
            icon: "fa-solid fa-filter",
            title: "🔍 Filtro de números",
            text: "Evita perder tiempo y dinero: filtra automáticamente qué números están activos en WhatsApp antes de enviar tus campañas.",
            color: "#e74c3c"
        },
        {
            id: 3,
            icon: "fa-solid fa-paper-plane",
            title: "🎯 Envío masivo a contactos y no contactos",
            text: "Llega a miles de clientes al instante. Carga tus listas y envía mensajes, imágenes o documentos sin guardar los números.",
            color: "#2ecc71"
        },
        {
            id: 4,
            icon: "fa-solid fa-envelope",
            title: "📱 Gestión centralizada de mensajes",
            text: "Visualiza y responde mensajes de múltiples cuentas desde una sola interfaz. Ideal para equipos de ventas y soporte.",
            color: "#9b59b6"
        },
        {
            id: 5,
            icon: "fa-solid fa-calendar-check",
            title: "📅 Campañas con historial y programación",
            text: "Lanza campañas con fecha y hora programada. Visualiza resultados, clona campañas exitosas y reanuda las que fallaron.",
            color: "#f1c40f"
        },
        {
            id: 6,
            icon: "fa-solid fa-robot",
            title: "🤖 Bots automáticos de atención",
            text: "Configura chatbots personalizados para que atiendan automáticamente a tus clientes, filtren solicitudes y guíen al cierre.",
            color: "#34495e"
        },
        {
            id: 7,
            icon: "fa-solid fa-users",
            title: "👥 Captura de grupos y contactos",
            text: "Extrae automáticamente los miembros de grupos de WhatsApp y segmenta tus campañas.",
            color: "#e67e22"
        },
        {
            id: 8,
            icon: "fa-solid fa-chart-bar",
            title: "📊 Analizador de cuentas y campañas",
            text: "Mide el desempeño de cada cuenta y analiza métricas clave para tomar mejores decisiones de negocio.",
            color: "#2980b9"
        },
        {
            id: 9,
            icon: "fa-solid fa-file-arrow-up",
            title: "📁 Adjunta archivos, imágenes y más",
            text: "Envía catálogos, videos, audios y cualquier tipo de archivo en tus campañas para destacar frente a la competencia.",
            color: "#8e44ad"
        }
    ]

    return (
        <div className="features-container" id="features">
            <article className="features-article">
                <h2>🚀 ¿Qué puedes hacer con Nordicol?</h2>
                <p>Descubre todas las herramientas que necesitas para automatizar y escalar tu negocio por WhatsApp</p>
            </article>
            <section className="features-section">
                {sections.map((section) => (
                    <article key={section.id} className="features-item">
                        <i className={section.icon} style={{ backgroundImage: linearGradient(section.color) }}></i>
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Features;