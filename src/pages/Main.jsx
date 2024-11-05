import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";

const Main = () => {
    return (
        <main>
          

            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <Analytics />
        </main>
    )
}

export default Main