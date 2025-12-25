import { Link } from "wouter";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "legal-bases", title: "Legal Bases (EEA/UK)" },
  { id: "sharing-and-disclosure", title: "Data Sharing & Disclosure" },
  { id: "retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "security", title: "Security" },
  { id: "children", title: "Children’s Privacy" },
  { id: "international-transfers", title: "International Transfers" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="mt-2 text-sm text-gray-400">Effective: December 25, 2025 · Last Updated: December 25, 2025</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs border border-white/10">Transparent & Secure</span>
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
                  {sections.map((s) => (
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
                <p>
                  This Privacy Policy describes how MediaCore collects, uses, discloses, and protects
                  information when you use MediaCore (the "Service"), including our web and mobile clients.
                  By using the Service, you consent to the data practices described in this Policy.
                </p>

                <h2 id="overview">Overview</h2>
                <p>
                  We collect information to operate MediaCore, provide secure access, and improve functionality.
                </p>

                <h2 id="information-we-collect">Information We Collect</h2>
                <ul>
                  <li>
                    <strong>Account Information:</strong> Email address, display name, and (if you use Google Sign‑In)
                    Google OAuth identifiers (e.g., <code>google_id</code>) and profile photo URL. Passwords are stored
                    as secure hashes.
                  </li>
                  <li>
                    <strong>Authentication Tokens:</strong> Access and refresh tokens (JWT). The frontend stores
                    tokens in localStorage; the backend stores refresh tokens for session management.
                  </li>
                  <li>
                    <strong>Usage & Analytics Data:</strong> Request and usage logs, which may include IP address,
                    user agent, referrer, endpoint accessed, response status/time, geographic attribution derived
                    from IP, and timestamps. We also track online presence and last activity time for admin analytics.
                  </li>
                  <li>
                    <strong>Subscription & Playback Data:</strong> Subscription tier, playback limits, session start
                    time, and related usage needed to enforce tier policies. Some data may be cached locally for performance.
                  </li>
                  <li>
                    <strong>Content & Files:</strong> If you upload/manage media, we store file metadata (paths, sizes,
                    types, thumbnails, subtitles) and associate files to artists/albums.
                  </li>
                  <li>
                    <strong>Push Notifications:</strong> If enabled, we store web push subscription details to deliver notifications.
                  </li>
                  <li>
                    <strong>Preferences & Local Cache:</strong> UI preferences, playback history/queue, recent searches,
                    and cached data may be stored in your browser. You can clear this within app settings.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We primarily rely on JWT tokens in localStorage. Limited cookies may be
                    used for security, rate‑limiting, or preference storage.
                  </li>
                </ul>

                <h2 id="how-we-use">How We Use Information</h2>
                <ul>
                  <li><strong>Provide & Maintain the Service:</strong> Authenticate users, serve media, enforce subscription tiers and playback limits.</li>
                  <li><strong>Security & Abuse Prevention:</strong> Verify identities, detect fraud/abuse, and protect accounts and infrastructure.</li>
                  <li><strong>Analytics & Improvements:</strong> Measure usage, performance, and reliability to improve features and UI.</li>
                  <li><strong>Communications:</strong> Send transactional messages and service notifications.</li>
                  <li><strong>Legal Compliance:</strong> Comply with applicable laws and respond to lawful requests.</li>
                </ul>

                <h2 id="legal-bases">Legal Bases (EEA/UK users)</h2>
                <p>
                  Where applicable, we rely on performance of a contract, legitimate interests (security, analytics),
                  consent (optional features like push notifications), and compliance with legal obligations.
                </p>

                <h2 id="sharing-and-disclosure">Data Sharing & Disclosure</h2>
                <ul>
                  <li><strong>Service Providers:</strong> Hosting, storage, analytics, logging, and support vendors acting on our behalf under contractual safeguards.</li>
                  <li><strong>Authentication Providers:</strong> Google OAuth (if you choose to sign in with Google) to verify tokens and link accounts.</li>
                  <li><strong>Legal & Safety:</strong> Authorities or third parties when required by law or to protect rights, safety, and security.</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset transfers, subject to continued protections.</li>
                </ul>

                <h2 id="retention">Data Retention</h2>
                <ul>
                  <li><strong>Tokens:</strong> Access tokens are short‑lived; refresh tokens typically expire in ~7 days. Expired/invalid tokens may be purged.</li>
                  <li><strong>Logs & Analytics:</strong> Retained for a period necessary for security, debugging, and analytics (e.g., 90–365 days).</li>
                  <li><strong>Content & Accounts:</strong> Retained while your account is active or as required by law.</li>
                </ul>
                <p>
                  You can clear local cached data from the app (Settings → Clear Data), and request account deletion as described below.
                </p>

                <h2 id="your-rights">Your Rights</h2>
                <ul>
                  <li><strong>Access/Portability:</strong> Obtain a copy of your data.</li>
                  <li><strong>Rectification:</strong> Correct inaccurate information.</li>
                  <li><strong>Erasure:</strong> Request deletion of your account and associated personal data.</li>
                  <li><strong>Restriction/Object:</strong> Limit certain processing or object to processing based on legitimate interests.</li>
                  <li><strong>Consent Withdrawal:</strong> Withdraw consent for optional features (e.g., push notifications).</li>
                </ul>
                <p>
                  To exercise rights, contact us at <a href="mailto:contact@mediacore.in">contact@mediacore.in</a>. We may need to verify your identity.
                </p>

                <h2 id="security">Security</h2>
                <p>
                  We use technical and organizational measures (e.g., hashed passwords, token verification, restricted database access)
                  to protect information. No system is 100% secure; please keep your credentials safe.
                </p>

                <h2 id="children">Children’s Privacy</h2>
                <p>
                  MediaCore is not directed to children under 13 (or the age of digital consent in your jurisdiction). We do not knowingly
                  collect personal information from children.
                </p>

                <h2 id="international-transfers">International Transfers</h2>
                <p>
                  Your data may be processed in regions where our servers or providers operate (e.g., Canada/India). We implement safeguards
                  for cross‑border transfers as required by law.
                </p>

                <h2 id="changes">Changes to This Policy</h2>
                <p>
                  We may update this Policy from time to time. The "Last Updated" date will reflect changes. Continued use of the Service
                  constitutes acceptance of the updated Policy.
                </p>

                <h2 id="contact">Contact Us</h2>
                <p>
                  MediaCore · Email: <a href="mailto:contact@mediacore.in">contact@mediacore.in</a>
                </p>
                <p className="text-xs text-gray-400">
                  For EU/UK residents: You may have the right to lodge a complaint with your local supervisory authority.
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
