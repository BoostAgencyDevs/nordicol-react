import "../../styles/Home/Testimonials.css";

import toPastel from "../../utils/toPastel.ts";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "PKR",
            agency: "Ropa",
            testimonial: "Hemos experimentado un aumento significativo en las ventas.",
            color: "#3498db",
            logo: "/images/clients/Copia de LOGOS PKR.svg"
        },
        {
            id: 2,
            name: "Tu Tienda a un Click",
            agency: "Ecommerce",
            testimonial: "La automatización ha mejorado nuestra eficiencia operativa.",
            color: "#e74c3c",
            logo: "/images/clients/Tutiendaclik.svg"
        },
        {
            id: 3,
            name: "Tu Esencia Natural",
            agency: "Productos Naturales",
            testimonial: "Nos ha ayudado a mejorar la atención al cliente.",
            color: "#2ecc71",
            logo: "/images/clients/Diseño sin título (3).svg"
        }
    ] 

    return (
        <div className="testimonials-container" id="testimonials">
            <article className="testimonials-text">
                <h2>🛡️ Confían en nosotros</h2>
                <p>Más de 1,000 empresas ya han mejorado sus ventas usando Nordicol.</p>
            </article>
            <section className="testimonials-section">
                {testimonials.map((testimonial) => (
                    <div className="card" key={testimonial.id} style={{ backgroundColor: toPastel(testimonial.color, 0.45), border: `1px solid ${testimonial.color}` }}>
                        <div className="logo-container">
                            <img src={testimonial.logo} alt={testimonial.name} className="client-logo" />
                        </div>
                        <p className="stars">⭐⭐⭐⭐⭐</p>
                        <p className="testimonial-leads">"{testimonial.testimonial}"</p>
                        <div className="lead">
                            <p className="name">{testimonial.name}</p>
                            <p className="agency">{testimonial.agency}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
    
export default Testimonials;