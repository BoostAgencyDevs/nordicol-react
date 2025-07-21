import "../../styles/Home/Testimonials.css";

import linearGradient from "../../utils/linearGradient.ts"
import getInitial from "../../utils/getInitial.ts";
import toPastel from "../../utils/toPastel.ts";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Carlos M.",
            agency: "Boutique Fashion",
            testimonial: "Desde que implementamos Nordicol en nuestro negocio, hemos experimentado un aumento significativo en las ventas.",
            color: "#3498db"
        },
        {
            id: 2,
            name: "Ana L.",
            agency: "Tienda Digital",
            testimonial: "La automatización de nuestras respuestas ha permitido que nuestro equipo se enfocara en actividades más estratégicas.",
            color: "#e74c3c"
        },
        {
            id: 3,
            name: "Juan P.",
            agency: "Agencia de Marketing Pro",
            testimonial: "Es fácil de usar y nos ha ayudado a mejorar nuestros resultados, especialmente en la atención al cliente.",
            color: "#2ecc71"
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
                        <p className="stars">⭐⭐⭐⭐⭐</p>
                        <p className="testimonial-leads">"{testimonial.testimonial}"</p>
                        <div className="avatar">
                            <div className="initial-container">
                                <p className="initial" style={{ backgroundImage: linearGradient(testimonial.color) }}>{getInitial(testimonial.name)}</p>
                            </div>
                            <div className="lead">
                                <p className="name">{testimonial.name}</p>
                                <p className="agency">{testimonial.agency}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
    
export default Testimonials;