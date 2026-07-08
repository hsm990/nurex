import '@/styles/hero.css'

const NAV_LINKS = [
    { label: "Home", href: "#", active: true },
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "Automation", href: "#" },
    { label: "Contact", href: "#" },
];

// Added 'img' properties with UI/Dashboard placeholders
const PANELS = [
    { top: "8%", left: "6%", w: "18%", h: "14%", dx: "-140px", dy: "-60px", drot: "-6deg", dur: "9s", delay: "0s", img: "https://i.pinimg.com/1200x/73/07/9c/73079cb83aedc740eb8daffe2665abcc.jpg" },
    { top: "10%", left: "30%", w: "22%", h: "10%", dx: "120px", dy: "-90px", drot: "5deg", dur: "10s", delay: "1.2s", img: "https://i.pinimg.com/736x/3c/e4/3e/3ce43e00625485af5d185935b80a68bc.jpg" },
    { top: "6%", left: "60%", w: "16%", h: "16%", dx: "160px", dy: "-40px", drot: "-4deg", dur: "8.5s", delay: "2.4s", img: "https://i.pinimg.com/1200x/de/9e/98/de9e98ae60c3a1f77f4771cbd041f44d.jpg" },
    { top: "40%", left: "4%", w: "14%", h: "20%", dx: "-180px", dy: "20px", drot: "6deg", dur: "11s", delay: "0.6s", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
    { top: "38%", left: "42%", w: "20%", h: "12%", dx: "0px", dy: "-140px", drot: "0deg", dur: "9.5s", delay: "3s", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" }, // Left this one empty as a pure glass accent
    { top: "62%", left: "20%", w: "18%", h: "14%", dx: "-100px", dy: "120px", drot: "-5deg", dur: "10.5s", delay: "1.8s", img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=600&q=80" },
    { top: "68%", left: "54%", w: "22%", h: "11%", dx: "140px", dy: "100px", drot: "4deg", dur: "9s", delay: "2.9s", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80" },
    { top: "20%", left: "78%", w: "14%", h: "18%", dx: "160px", dy: "-20px", drot: "-3deg", dur: "11.5s", delay: "0.3s", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
    { top: "70%", left: "78%", w: "16%", h: "16%", dx: "100px", dy: "120px", drot: "5deg", dur: "10s", delay: "3.6s", img: "https://i.pinimg.com/736x/2e/b4/31/2eb4313d5b99cd39a4d131426b3d84fc.jpg" },
];

function GlassPanels() {
    return (
        <div className="glass-panels" aria-hidden="true">
            {PANELS.map((p, i) => (
                <div
                    key={i}
                    className="glass-panel"
                    style={{
                        "--top": p.top, "--left": p.left, "--w": p.w, "--h": p.h,
                        "--dx": p.dx, "--dy": p.dy, "--drot": p.drot,
                        "--dur": p.dur, "--delay": p.delay,
                    }}
                >
                    {/* Render the image inside the panel if it exists */}
                    {p.img && <img src={p.img} alt="System Dashboard" className="panel-img" />}
                </div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <div className="hero-page">
            <GlassPanels />
            <nav className="navbar">
                <a href="#" className="logo">HSL Studio<sup>®</sup></a>
                <div className="nav-links">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href} className={`nav-link${link.active ? " nav-link--active" : ""}`}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <button className="btn-glass btn-glass--nav">Start Your Project</button>
            </nav>

            <section className="hero">
                <h1 className="hero-title animate-fade-rise">
                    We build the <em>systems</em> behind <em>growing businesses.</em>
                </h1>
                <p className="hero-subtext animate-fade-rise-delay">
                    From school management platforms to storefronts and gyms — we
                    design, build, and automate the software your operations run on,
                    powered by AI where it counts.
                </p>
                <button className="btn-glass btn-glass--hero animate-fade-rise-delay-2">
                    Start Your Project
                </button>
            </section>

            <div className="marquee">
                <div className="marquee-track">
                    <MarqueeItems />
                    <MarqueeItems aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}

const SERVICES = [
    "Custom Websites", "School Management Systems", "Store & POS Systems",
    "Gym Management Systems", "AI Automation", "Booking & CRM Systems",
    "AI Chatbots", "Business Dashboards",
];

function MarqueeItems() {
    return (
        <ul className="marquee-group">
            {SERVICES.map((item) => (
                <li key={item} className="marquee-item">
                    <span className="marquee-dot" />
                    {item}
                </li>
            ))}
        </ul>
    );
}