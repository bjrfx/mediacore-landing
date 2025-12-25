import { Link } from "wouter";

const toc = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "eligibility", title: "Eligibility" },
  { id: "use", title: "Use of the Service" },
  { id: "accounts", title: "Accounts" },
  { id: "ip", title: "Content & Intellectual Property" },
  { id: "third-party", title: "Third‑Party Services" },
  { id: "termination", title: "Termination" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo512.png" alt="MediaCore Logo" className="w-8 h-8 rounded-lg bg-green-500 object-cover" />
            <span className="text-base font-semibold tracking-wide">
              MediaCore<span className="text-green-500">.in</span>
            </span>
          </Link>
          <nav className="text-sm text-gray-400 flex items-center gap-4">
            <Link to="/terms" className="hover:text-green-500 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0B0F14] to-[#0F1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
              <p className="mt-2 text-sm text-gray-400">Last updated: December 25, 2025</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs border border-white/10">Fair Use & Safety</span>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 hidden lg:block">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-400 mb-3">On this page</p>
                <ul className="space-y-2 text-sm">
                  {toc.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-gray-300 hover:text-green-400 transition-colors">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="lg:col-span-9">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="prose prose-invert prose-sm sm:prose-base">
                <h2 id="acceptance">Acceptance of Terms</h2>
                <p>
                  By accessing or using MediaCore (the “Service”), you agree to be bound by these Terms of Service (“Terms”).
                  If you do not agree, do not use the Service.
                </p>

                <h2 id="eligibility">Eligibility</h2>
                <p>
                  You must be at least 13 years old to use the Service. If you are under the age of majority in your jurisdiction,
                  you must obtain consent from a legal guardian.
                </p>

                <h2 id="use">Use of the Service</h2>
                <ul>
                  <li>Do not misuse, disrupt, or interfere with the Service or its infrastructure.</li>
                  <li>Do not attempt unauthorized access or reverse engineer any part of the Service.</li>
                  <li>Respect the rights of content owners; streaming is provided for personal use.</li>
                </ul>

                <h2 id="accounts">Accounts</h2>
                <p>
                  If you create an account, you are responsible for maintaining the confidentiality of your credentials and for
                  all activities under your account.
                </p>

                <h2 id="ip">Content & Intellectual Property</h2>
                <p>
                  All trademarks, logos, and content available through the Service are owned by MediaCore or its licensors. You receive
                  a limited, non‑exclusive, revocable right to access and use the Service for personal, non‑commercial purposes.
                </p>

                <h2 id="third-party">Third‑Party Services</h2>
                <p>
                  The Service may include links or integrations with third‑party platforms. We are not responsible for their content,
                  policies, or practices.
                </p>

                <h2 id="termination">Termination</h2>
                <p>
                  We may suspend or terminate access to the Service at any time for violations of these Terms or to protect the Service
                  and its users.
                </p>

                <h2 id="disclaimers">Disclaimers</h2>
                <p>
                  The Service is provided “as is” and “as available.” We disclaim all warranties, express or implied, to the extent permitted by law.
                </p>

                <h2 id="liability">Limitation of Liability</h2>
                <p>
                  To the extent permitted by law, MediaCore will not be liable for indirect, incidental, special, consequential, or punitive damages
                  arising from your use of the Service.
                </p>

                <h2 id="changes">Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be communicated via the website or email where appropriate.
                  Continued use of the Service after changes indicates acceptance.
                </p>

                <h2 id="contact">Contact</h2>
                <p>
                  For questions about these Terms, contact <a href="mailto:contact@mediacore.in">contact@mediacore.in</a>.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link to="/" className="text-sm text-gray-400 hover:text-green-500 transition-colors">← Back to Home</Link>
              <div className="text-xs text-gray-500">
                Questions? <a href="mailto:contact@mediacore.in" className="hover:text-green-500">contact@mediacore.in</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} MediaCore</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
            <a href="mailto:contact@mediacore.in" className="hover:text-green-500 transition-colors">contact@mediacore.in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
