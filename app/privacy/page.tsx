import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster">
      {/* HEADER */}
      <header className="border-b border-white/5 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/" 
            className="text-lucid hover:text-white transition-colors font-mono text-sm uppercase tracking-widest"
          >
            ← Back to Lucid Systems
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-12">
          
          {/* TITLE */}
          <div className="border-l-2 border-lucid pl-6">
            <h1 className="text-ancient text-4xl md:text-6xl font-bold uppercase tracking-[0.15em] mb-4">
              Privacy Policy
            </h1>
            <p className="text-granite font-mono text-sm">
              Last Updated: January 14, 2026
            </p>
          </div>

          {/* SECTIONS */}
          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              1. Information We Collect
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                Lucid Systems (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;) collects information you provide directly when you:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Book a strategy call via our scheduling system</li>
                <li>Communicate with us via email or other channels</li>
                <li>Engage with our deployed systems during client projects</li>
              </ul>
              <p>
                This information may include: name, email address, company name, role, operational data specific to your engagement.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              2. How We Use Your Information
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about your deployment and support</li>
                <li>Analyze system performance and operational efficiency</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-alabaster font-bold">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              3. Data Security
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                We implement industry-standard security measures to protect your information. All data transmission is encrypted using TLS/SSL protocols. 
                Deployed systems follow zero-trust architecture principles with role-based access control.
              </p>
              <p>
                However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              4. Data Retention
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required by law. Client operational data is retained per the terms 
                of your Master Services Agreement.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              5. Your Rights
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@lucidsystems.io" className="text-lucid hover:text-white transition-colors">
                  privacy@lucidsystems.io
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              6. Changes to This Policy
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an 
                updated &apos;Last Updated&apos; date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              7. Contact Us
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-4 p-4 bg-basalt border border-white/10">
                <p className="font-mono text-sm">
                  <strong className="text-alabaster">Lucid Systems</strong><br />
                  Email:{" "}
                  <a href="mailto:lucidtheeagle@gmail.com" className="text-lucid hover:text-white transition-colors">
                    lucidtheeagle@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}