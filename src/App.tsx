import { Hero } from './components/Hero';
import { Showcase } from './components/showcase';
import { WaitlistForm } from './components/WaitlistForm';
import { HowItWorks } from './components/HowItWorks';
import { InsiderPerks } from './components/InsiderPerks';
import { ClosingMessage } from './components/ClosingMessage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Hero />

      {/* EXTRA SPACE BELOW CTA */}
      <div className="mt-16 md:mt-24">
        <Showcase />
      </div>

      <div className="mt-24 md:mt-32">
        <WaitlistForm />
      </div>

      <HowItWorks />
      <InsiderPerks />
      <ClosingMessage />
      <Footer />
    </div>
  );
}
