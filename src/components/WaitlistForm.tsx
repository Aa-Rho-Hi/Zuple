import { useState } from 'react';
import { supabase } from '../lib/supabase'; // 👈 ADD THIS

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 ADD
  const [error, setError] = useState<string | null>(null); // 👈 ADD

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          category: formData.category,
        },
      ]);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="waitlist" className="px-6 py-20 md:py-24 bg-secondary/40">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">You're on the list!</h2>
          <p className="text-lg opacity-75">
            We'll reach out soon with early access details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="px-6 py-20 md:py-24 bg-secondary/40">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">
          Join the waitlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full px-6 py-4 rounded-2xl border"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full px-6 py-4 rounded-2xl border"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Which category excites you most?"
            className="w-full px-6 py-4 rounded-2xl border"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-primary rounded-full font-semibold"
          >
            {loading ? 'Submitting...' : 'Request early access'}
          </button>
        </form>
      </div>
    </section>
  );
}
