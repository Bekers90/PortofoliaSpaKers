import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Branding } from './components/Branding';
import "tailwindcss";
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';
import { BulletPoints } from './components/BulletPoints';
import { CallToAction } from './components/CallToAction';


function App() {
  return (
    <>
     <Header />
     <Hero />
     <Branding />
     <Features />
     <CallToAction />
     <BulletPoints />
     <Pricing />
      <CallToAction minify />
      <Footer />
    </>
  )
}

export default App
