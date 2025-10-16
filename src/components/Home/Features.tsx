import React, { useState } from "react";
import "../../styles/Home/Features.css";

const Features = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const sections = [
        {
            id: 1,
            icon: "fa-solid fa-comments",
            title: "Respuestas Automáticas",
            text: "Crea reglas personalizadas por palabras clave para que tus clientes reciban respuestas inmediatas, incluso cuando no estás disponible.",
            color: "#3498db",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 2,
            icon: "fa-solid fa-filter",
            title: "Filtro de números",
            text: "Evita perder tiempo y dinero: filtra automáticamente qué números están activos en WhatsApp antes de enviar tus campañas.",
            color: "#e74c3c",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 3,
            icon: "fa-solid fa-paper-plane",
            title: "Envío masivo a contactos y no contactos",
            text: "Llega a miles de clientes al instante. Carga tus listas y envía mensajes, imágenes o documentos sin guardar los números.",
            color: "#2ecc71",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 4,
            icon: "fa-solid fa-envelope",
            title: "Gestión centralizada de mensajes",
            text: "Visualiza y responde mensajes de múltiples cuentas desde una sola interfaz. Ideal para equipos de ventas y soporte.",
            color: "#9b59b6",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 5,
            icon: "fa-solid fa-calendar-check",
            title: "Campañas con historial y programación",
            text: "Lanza campañas con fecha y hora programada. Visualiza resultados, clona campañas exitosas y reanuda las que fallaron.",
            color: "#f1c40f",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 6,
            icon: "fa-solid fa-robot",
            title: "Bots automáticos de atención",
            text: "Configura chatbots personalizados para que atiendan automáticamente a tus clientes, filtren solicitudes y guíen al cierre.",
            color: "#34495e",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 7,
            icon: "fa-solid fa-users",
            title: "Captura de grupos y contactos",
            text: "Extrae automáticamente los miembros de grupos de WhatsApp y segmenta tus campañas.",
            color: "#e67e22",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 8,
            icon: "fa-solid fa-chart-bar",
            title: "Analizador de cuentas y campañas",
            text: "Mide el desempeño de cada cuenta y analiza métricas clave para tomar mejores decisiones de negocio.",
            color: "#2980b9",
            image: "./images/features/nordicol-image.jpeg"
        },
        {
            id: 9,
            icon: "fa-solid fa-file-arrow-up",
            title: "Adjunta archivos, imágenes y más",
            text: "Envía catálogos, videos, audios y cualquier tipo de archivo en tus campañas para destacar frente a la competencia.",
            color: "#8e44ad",
            image: "./images/features/nordicol-image.jpeg"
        }
    ];

    // Mostrar todas las tarjetas, pero ocultar las adicionales con CSS
    const allSections = sections;

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleCardClick = (image: string) => {
        // Reproducir sonido inmediatamente al hacer clic
        if (typeof window !== 'undefined' && (window as any).playElegantSound) {
            (window as any).playElegantSound();
        }
        // Abrir modal después del sonido
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
        // Reproducir sonido de cierre
        if (typeof window !== 'undefined' && (window as any).playCloseSound) {
            (window as any).playCloseSound();
        }
    };

    // Función para manejar el cierre con tecla Escape
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && selectedImage) {
            closeModal();
        }
    };

    // Agregar event listener para tecla Escape
    React.useEffect(() => {
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="features-container" id="features">
            <article className="features-article">
                <h2>¿Qué puedes hacer con Nordicol?</h2>
                <p>Descubre todas las herramientas que necesitas para automatizar y escalar tu negocio por WhatsApp</p>
            </article>
            <section className={`features-section ${showAll ? 'show-additional' : ''}`}>
                {allSections.map((section) => (
                    <article 
                        key={section.id} 
                        className={`features-item features-item-${section.id}`}
                        onClick={() => handleCardClick(section.image)}
                    >
                        <i className={section.icon}></i>
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                    </article>
                ))}
            </section>
            {sections.length > 6 && (
                <div className="features-button-container">
                    <button 
                        className="features-toggle-button" 
                        onClick={toggleShowAll}
                    >
                        {showAll ? "Ver menos" : "Ver más"}
                        <i className={`fa-solid fa-chevron-${showAll ? 'up' : 'down'}`}></i>
                    </button>
                </div>
            )}
            
            {/* Modal para mostrar la imagen */}
            {selectedImage && (
                <div className="features-modal" onClick={closeModal}>
                    <div className="features-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="features-modal-close" onClick={closeModal} title="Cerrar">
                            <i className="fa-solid fa-times"></i>
                        </button>
                        <img src={selectedImage} alt="Captura de funcionalidad" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Features;