import "../styles/Home.css";

import Marketing from "../components/Home/Marketing"
import Features from "../components/Home/Features"
import TargetLeads from "../components/Home/TargetLeads"
import KeyBenefits from "../components/Home/KeyBenefits"
import Demo from "../components/Home/Demo"
import Testimonials from "../components/Home/Testimonials"

function Home() {
    const sections = [
        {
            id: 1,
            title: "marketing",
            component: <Marketing />
        },
        {
            id: 2,
            title: "features",
            component: <Features />
        },
        {
            id: 3,
            title: "target-leads",
            component: <TargetLeads />
        },
        {
            id: 4,
            title: "key-benefits",
            component: <KeyBenefits />
        },
        {
            id: 5,
            title: "demo",
            component: <Demo />
        },
        {
            id: 6,
            title: "testimonials",
            component: <Testimonials />
        },
    ]

    return (
        <div className="outlet">
            <div className="home">
                {sections.map((section) => (
                    <section key={section.id} id={section.id % 2 === 0 ? "even-section" : "odd-section"} className={section.title}>
                        {section.component}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Home;