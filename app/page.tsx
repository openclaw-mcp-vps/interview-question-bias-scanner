export default function Home() {
  const faqs = [
    {
      q: 'What kinds of bias does it detect?',
      a: 'The AI flags gender-coded language, age bias, cultural assumptions, ableist phrasing, and other patterns shown to discourage diverse candidates from applying or performing well in interviews.'
    },
    {
      q: 'How does the subscription work?',
      a: 'For $15/month you get unlimited scans of interview questions and job descriptions, plus a history dashboard to track improvements over time. Cancel anytime.'
    },
    {
      q: 'Is my data kept private?',
      a: 'Your uploaded content is processed securely and never used to train AI models. We do not share your data with third parties.'
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Interview Questions for{' '}
          <span className="text-[#58a6ff]">Unconscious Bias</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 leading-relaxed">
          Paste your interview questions or job description and get instant AI analysis. Spot biased language, understand why it matters, and get neutral alternatives — so every candidate gets a fair shot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-2xl w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Paste Your Content', desc: 'Upload interview questions or a job description directly into the scanner.' },
            { step: '2', title: 'AI Analyzes Bias', desc: 'Our model flags problematic phrases and explains the type of bias present.' },
            { step: '3', title: 'Get Better Language', desc: 'Receive neutral, inclusive alternatives you can use immediately.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bias scans',
              'Interview questions & job descriptions',
              'Neutral language suggestions',
              'Scan history dashboard',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-[#8b949e] text-xs text-center">
        © {new Date().getFullYear()} Interview Bias Scanner. Built for fairer hiring.
      </footer>
    </main>
  )
}
