import { useState } from 'react';
import { Hero } from './components/Hero';
import { WaitlistForm } from './components/WaitlistForm';
import { HowItWorks } from './components/HowItWorks';
import { InsiderPerks } from './components/InsiderPerks';
import { ClosingMessage } from './components/ClosingMessage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WaitlistForm />
      <HowItWorks />
      <InsiderPerks />
      <ClosingMessage />
      <Footer />
    </div>
  );
}