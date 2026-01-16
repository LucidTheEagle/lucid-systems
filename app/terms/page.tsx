import Link from "next/link";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-granite font-mono text-sm">
              Last Updated: January 14, 2026
            </p>
          </div>

          {/* SECTIONS */}
          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              1. Acceptance of Terms
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                By accessing or using Lucid Systems&apos; website and services (&apos;Services&apos;), you agree to be bound by these 
                Terms of Service (&apos;Terms&apos;). If you do not agree to these Terms, do not use our Services.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              2. Description of Services
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                Lucid Systems provides AI-powered operational intelligence systems including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-alabaster">The Prism:</strong> Intelligent data fracturing and extraction systems</li>
                <li><strong className="text-alabaster">The Sentry:</strong> Autonomous triage and qualification engines</li>
                <li><strong className="text-alabaster">The Overwatch:</strong> Predictive analytics and forecasting platforms</li>
              </ul>
              <p>
                Services are provided on a project basis as outlined in individual Master Services Agreements (MSAs).
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              3. User Obligations
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide accurate and complete information when engaging our services</li>
                <li>Maintain the confidentiality of any access credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our Services in compliance with all applicable laws and regulations</li>
                <li>Not attempt to reverse engineer, decompile, or disassemble any deployed systems</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              4. Intellectual Property
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                All systems, code, methodologies, and frameworks developed by Lucid Systems remain our exclusive 
                intellectual property unless explicitly transferred via written agreement.
              </p>
              <p>
                Clients receive a license to use deployed systems as outlined in their MSA. This license is 
                non-transferable and terminates upon contract completion unless otherwise specified.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              5. Payment Terms
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                Payment terms are defined in individual project agreements. Standard terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>50% deposit required to initiate deployment</li>
                <li>Remaining balance due upon system delivery</li>
                <li>Net 15 payment terms for invoices</li>
                <li>Late payments subject to 1.5% monthly interest charge</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              6. Warranties and Disclaimers
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                We warrant that services will be performed in a professional and workmanlike manner. However:
              </p>
              <p className="text-alabaster font-bold">
                SERVICES ARE PROVIDED &apos;AS IS&apos; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
                LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not guarantee specific business outcomes, revenue increases, or cost reductions, though we 
                design systems with these goals in mind.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              7. Limitation of Liability
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUCID SYSTEMS SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                WHETHER INCURRED DIRECTLY OR INDIRECTLY.
              </p>
              <p className="mt-4">
                Our total liability shall not exceed the amount paid by you for the services in the twelve (12) 
                months preceding the claim.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              8. Termination
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                Either party may terminate services with written notice as specified in the MSA. Upon termination, 
                you remain responsible for all fees accrued to the termination date.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              9. Changes to Terms
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our Services after changes 
                constitutes acceptance of the modified Terms.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              10. Governing Law
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nigeria, 
                without regard to its conflict of law provisions.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              11. Contact
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                Questions about these Terms? Contact us at:
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