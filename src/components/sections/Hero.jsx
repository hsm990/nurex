import Navbar from '@/components/layout/Navbar'
import '@/styles/hero.css';
import key from '../../assets/images/key.png'
import key1 from '../../assets/images/key2.png'
import key2 from '../../assets/images/key3.png'
import Ferrofluid from '../layout/Ferrofluid';
import ServicesCarousel from "../Carousel";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg-container">
                <Ferrofluid
                    colors={["#2563FF", "#2563FF", "#2563FF"]}
                    speed={0.2}
                    scale={1.6}
                    turbulence={1}
                    fluidity={0.1}
                    rimWidth={0.2}
                    sharpness={2.5}
                    shimmer={1.5}
                    glow={2}
                    flowDirection="down"
                    opacity={1}
                    mouseInteraction
                    mouseStrength={1}
                    mouseRadius={0.35}
                />
            </div>
            <Navbar />

            <div className="hero-bg-radial" />

            <div className="hero-content">
                <div className="hero-main">
                    <h1 className="hero-title">
                        <span className="hero-word"><span><img className="hero-title-b" src={key} alt="B" /></span>uild.</span>
                        <span className="hero-word"><em><span><img className="hero-title-b" src={key1} alt="B" /></span>anage.</em></span>
                        <br /><span className="hero-word"><span><img className="hero-title-b" src={key2} alt="B" /></span>utomate.</span>
                    </h1>

                    <p className="hero-sub">
                        NUREX builds websites, management systems, and AI automations
                        that help restaurants, schools, and shops run smarter.
                    </p>

                    <div className="hero-btns">
                        <button className="btn-white">Explore offers</button>
                        <button className="btn-dark">
                            <span className="btn-play">▶</span>
                            Watch a demo
                        </button>
                    </div>
                </div>


            </div>
            <ServicesCarousel />
        </section>
    );
}