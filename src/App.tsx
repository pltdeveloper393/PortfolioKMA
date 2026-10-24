import { MotionConfig } from 'motion/react';
import About from './components/About';
import Contact from './components/Contact';
import DownloadToast from './components/DownloadToast';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <DownloadToast />
      </LanguageProvider>
    </MotionConfig>
  );
}
