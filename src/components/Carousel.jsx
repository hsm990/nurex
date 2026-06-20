import { useEffect, useRef, useState } from "react";
import "@/styles/ServicesCarousel.css";

const services = [
    {
        title: "Website Building",
        tag: "Web Development",
        desc: "Fast, modern websites built around your business — from sharp landing pages to full multi-section platforms that hold up on every screen.",
    },
    {
        title: "Restaurant Systems",
        tag: "Management System",
        desc: "Orders, tables, menus, staff — one dashboard. Built for the pace of a real restaurant, not a boardroom demo.",
    },
    {
        title: "School Platforms",
        tag: "Education Tech",
        desc: "Grades, attendance, schedules, and student records in one place. Structure without the overhead.",
    },
    {
        title: "Shop Management",
        tag: "Retail System",
        desc: "Track stock, log sales, manage suppliers. Your shop runs better when the numbers aren't scattered across three spreadsheets.",
    },
    {
        title: "AI Automation",
        tag: "AI & Automation",
        desc: "Hand off the repetitive work. Reports, follow-ups, data entry — automated so your team focuses on what only humans can do.",
    },
];

const extendedServices = [...services, ...services, ...services];

export default function ServicesCarousel() {
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const animFrameRef = useRef(null);
    const posRef = useRef(0);
    const lastTimeRef = useRef(null);

    const SPEED = 48;

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const cards = track.querySelectorAll(".sc-card");
        const cardW = cards[0]?.offsetWidth ?? 280;
        const gap = 20;
        const oneSetWidth = services.length * (cardW + gap);

        function animate(ts) {
            if (!lastTimeRef.current) lastTimeRef.current = ts;
            const delta = ts - lastTimeRef.current;
            lastTimeRef.current = ts;

            if (!isPaused) {
                posRef.current += (SPEED * delta) / 1000;
                if (posRef.current >= oneSetWidth) {
                    posRef.current -= oneSetWidth;
                }
                track.style.transform = `translateX(-${posRef.current}px)`;
            }

            animFrameRef.current = requestAnimationFrame(animate);
        }

        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [isPaused]);

    return (
        <section className="sc-section">
            <div
                className="sc-viewport"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="sc-track" ref={trackRef}>
                    {extendedServices.map((s, i) => (
                        <article className="sc-card" key={i}>
                            <p className="sc-card__tag">{s.tag}</p>
                            <h3 className="sc-card__title">{s.title}</h3>
                            <p className="sc-card__desc">{s.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
