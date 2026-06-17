export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-32 px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
          Privacy <span className="text-red-600">Policy.</span>
        </h1>
        <div className="prose prose-slate max-w-none font-medium text-slate-600 space-y-6">
          <p>Last Updated: June 2024</p>
          <h2 className="text-xl font-bold text-slate-900">
            1. Information Collection
          </h2>
          <p>
            We only collect information you voluntarily provide via our WhatsApp
            and Email contact forms.
          </p>
          <h2 className="text-xl font-bold text-slate-900">2. Use of Data</h2>
          <p>
            Your data is used strictly to respond to your technical inquiries
            and project requests.
          </p>
        </div>
        <a
          href="/"
          className="inline-block text-red-600 font-bold uppercase text-xs tracking-widest border-b-2 border-red-600 pb-1"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
