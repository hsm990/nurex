import '@/styles/services.css'

const SERVICES = [
    {
        code: "SITE",
        title: "Custom Websites",
        blurb: "A fast, on-brand site built exactly for what you sell.",
        includes: [
            "Responsive layout, tuned for mobile",
            "Bilingual RTL/LTR support on request",
            "Handed over with full source access",
        ],
        mockup: "site",
    },
    {
        code: "OPS",
        title: "Business Management Systems",
        blurb: "Records, scheduling, and memberships — built around how you actually run things.",
        tags: "Schools · Gyms · Studios · Clinics",
        includes: [
            "Student, member, or client records",
            "Class, appointment, or session scheduling",
            "Automated reminders and renewals",
        ],
        mockup: "roster",
    },
    {
        code: "RETAIL",
        title: "Store & POS Systems",
        blurb: "Ring up sales, track stock, and see what's selling.",
        includes: [
            "Barcode-ready checkout",
            "Live inventory counts",
            "Daily sales reports",
        ],
        mockup: "pos",
    },
    {
        code: "FLOW",
        title: "AI Automation",
        blurb: "The busywork between your tools, handled quietly.",
        includes: [
            "Lead capture routed to your CRM",
            "Scheduled reports and reminders",
            "Custom workflows built around your tools",
        ],
        mockup: "flow",
    },
    {
        code: "CHAT",
        title: "AI Chatbots",
        blurb: "Answers your customers instantly, day or night.",
        includes: [
            "Trained on your services and FAQs",
            "Books appointments directly",
            "Hands off to a human when needed",
        ],
        mockup: "chat",
    },
    {
        code: "DATA",
        title: "Business Dashboards",
        blurb: "The numbers that matter, in one screen.",
        includes: [
            "Live sales and performance charts",
            "Built around what you track today",
            "No spreadsheets to maintain",
        ],
        mockup: "dashboard",
    },
];

function SiteMockup() {
    return (
        <div className="svc-mock svc-mock--site">
            <div className="svc-mock-row">
                <span className="svc-mock-dot" />
                <div className="svc-mock-navlinks"><span /><span /><span /></div>
            </div>
            <div className="svc-mock-hero">
                <span className="svc-line svc-line--lg" />
                <span className="svc-line svc-line--md" />
                <span className="svc-mock-pill" />
            </div>
        </div>
    );
}

function RosterMockup() {
    return (
        <div className="svc-mock svc-mock--roster">
            <div className="svc-mock-head">
                <span /><span /><span />
            </div>
            {[0, 1, 2].map((i) => (
                <div key={i} className="svc-mock-rrow">
                    <span className="svc-mock-avatar" />
                    <span className="svc-line svc-line--row" />
                    <span className="svc-mock-badge" />
                </div>
            ))}
        </div>
    );
}

function PosMockup() {
    return (
        <div className="svc-mock svc-mock--pos">
            {[0, 1, 2].map((i) => (
                <div key={i} className="svc-mock-item">
                    <span className="svc-mock-icon" />
                    <span className="svc-line svc-line--row" />
                    <span className="svc-mock-price" />
                </div>
            ))}
            <div className="svc-mock-total">
                <span className="svc-line svc-line--sm" />
                <span className="svc-mock-total-amount" />
            </div>
        </div>
    );
}

function FlowMockup() {
    return (
        <div className="svc-mock svc-mock--flow">
            <div className="svc-mock-track">
                {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="svc-mock-node" />
                ))}
                <span className="svc-mock-pulse" />
            </div>
        </div>
    );
}

function ChatMockup() {
    return (
        <div className="svc-mock svc-mock--chat">
            <div className="svc-mock-bubble svc-mock-bubble--bot">
                <span className="svc-line svc-line--sm" />
            </div>
            <div className="svc-mock-bubble svc-mock-bubble--user">
                <span className="svc-line svc-line--sm" />
            </div>
            <div className="svc-mock-typing">
                <span /><span /><span />
            </div>
        </div>
    );
}

function DashboardMockup() {
    return (
        <div className="svc-mock svc-mock--dashboard">
            <div className="svc-mock-stats">
                <div className="svc-mock-stat" />
                <div className="svc-mock-stat" />
            </div>
            <div className="svc-mock-chart">
                <span style={{ height: "35%" }} />
                <span style={{ height: "60%" }} />
                <span style={{ height: "45%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "90%" }} />
                <span style={{ height: "70%" }} />
            </div>
        </div>
    );
}

const MOCKUPS = {
    site: <SiteMockup />,
    roster: <RosterMockup />,
    pos: <PosMockup />,
    flow: <FlowMockup />,
    chat: <ChatMockup />,
    dashboard: <DashboardMockup />,
};

function ServiceCard({ service }) {
    return (
        <div className="service-card">
            <div className="svc-mock-frame">
                {MOCKUPS[service.mockup]}
            </div>

            <div className="service-card-head">
                <span className="service-code">{service.code}</span>
                <span className="service-title">{service.title}</span>
            </div>

            <p className="service-blurb">{service.blurb}</p>

            {service.tags && (
                <p className="service-tags">{service.tags}</p>
            )}

            <ul className="service-includes">
                {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <a className="service-card-cta" href="#contact">
                Talk about this <span aria-hidden="true">→</span>
            </a>
        </div>
    );
}

export default function Services() {
    return (
        <section className="services-section" id="services">
            <div className="services-header">
                <span className="services-eyebrow">Systems we build</span>
                <h2 className="services-heading">
                    One team. Every system <em>your business runs on.</em>
                </h2>
                <p className="services-sub">
                    The six systems most of our clients start with.
                </p>
            </div>

            <div className="services-grid">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.code} service={service} />
                ))}
            </div>
        </section>
    );
}