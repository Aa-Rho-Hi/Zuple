import { Hero } from './components/Hero';
import { Showcase } from './components/showcase';
import { BrandCarousel } from './components/BrandCarousel';
import { WaitlistForm } from './components/WaitlistForm';
import { HowItWorks } from './components/HowItWorks';
import { InsiderPerks } from './components/InsiderPerks';
import { ClosingMessage } from './components/ClosingMessage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Showcase />
      <WaitlistForm />
      
      <HowItWorks />
      <InsiderPerks />
      <ClosingMessage />
      <Footer />
    </div>
  );
}
