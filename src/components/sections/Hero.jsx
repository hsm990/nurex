import '@/styles/hero.css'

// Small decorative panels — no images, just glass shards drifting in from the edges
const PANELS = [
    { top: "6%", left: "4%", w: "12%", h: "10%", dx: "-120px", dy: "-50px", drot: "-6deg", dur: "10s", delay: "0s" },
    { top: "78%", left: "10%", w: "10%", h: "12%", dx: "-90px", dy: "100px", drot: "5deg", dur: "11s", delay: "1.4s" },
    { top: "8%", left: "82%", w: "11%", h: "9%", dx: "120px", dy: "-40px", drot: "-4deg", dur: "9.5s", delay: "2.2s" },
    { top: "80%", left: "80%", w: "12%", h: "11%", dx: "110px", dy: "90px", drot: "5deg", dur: "10.5s", delay: "3.1s" },
    { top: "42%", left: "1%", w: "8%", h: "16%", dx: "-140px", dy: "10px", drot: "6deg", dur: "12s", delay: "0.7s" },
];

// Bigger panels that settle into place and hold a fake UI mockup (dashboard / hero / crm)
const CONTENT_PANELS = [
    { id: "dashboard", top: "10%", left: "58%", w: "26%", h: "26%", dx: "160px", dy: "-70px", delay: "0.2s" },
    { id: "hero", top: "14%", left: "8%", w: "24%", h: "30%", dx: "-170px", dy: "-40px", delay: "0.9s" },
    { id: "crm", top: "58%", left: "62%", w: "26%", h: "26%", dx: "150px", dy: "110px", delay: "1.6s" },
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
                />
            ))}
        </div>
    );
}

function DashboardMockup() {
    return (
        <div className="mockup mockup--dashboard">
            <div className="mockup-topbar">
                <span className="mockup-dot" />
                <span className="mockup-dot" />
                <span className="mockup-dot" />
            </div>
            <div className="mockup-stats">
                <div className="mockup-stat" />
                <div className="mockup-stat" />
                <div className="mockup-stat" />
            </div>
            <div className="mockup-chart">
                <span style={{ height: "40%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "85%" }} />
                <span style={{ height: "60%" }} />
                <span style={{ height: "95%" }} />
            </div>
        </div>
    );
}

function HeroMockup() {
    return (
        <div className="mockup mockup--hero">
            <div className="mockup-nav">
                <span className="mockup-dot" />
                <div className="mockup-navlinks">
                    <span /><span /><span />
                </div>
            </div>
            <div className="mockup-heroblock">
                <div className="mockup-line mockup-line--lg" />
                <div className="mockup-line mockup-line--md" />
                <div className="mockup-line mockup-line--sm" />
                <div className="mockup-pill" />
            </div>
        </div>
    );
}

function CrmMockup() {
    return (
        <div className="mockup mockup--crm">
            <div className="mockup-crmhead">
                <span /><span /><span />
            </div>
            {[0, 1, 2, 3].map((i) => (
                <div key={i} className="mockup-crmrow">
                    <span className="mockup-avatar" />
                    <span className="mockup-line mockup-line--row" />
                    <span className="mockup-badge" />
                </div>
            ))}
        </div>
    );
}

const MOCKUPS = {
    dashboard: <DashboardMockup />,
    hero: <HeroMockup />,
    crm: <CrmMockup />,
};

function ContentPanels() {
    return (
        <div className="glass-panels glass-panels--content" aria-hidden="true">
            {CONTENT_PANELS.map((p) => (
                <div
                    key={p.id}
                    className="glass-panel glass-panel--content"
                    style={{
                        "--top": p.top, "--left": p.left, "--w": p.w, "--h": p.h,
                        "--dx": p.dx, "--dy": p.dy, "--delay": p.delay,
                    }}
                >
                    {MOCKUPS[p.id]}
                </div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <div className="hero-page">
            <GlassPanels />
            <ContentPanels />

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