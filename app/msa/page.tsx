import Link from "next/link";

export default function MasterServicesAgreement() {
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
              Master Services Agreement
            </h1>
            <p className="text-granite font-mono text-sm">
              Standard MSA Template • Last Updated: January 14, 2026
            </p>
          </div>

          {/* INTRO */}
          <div className="p-6 bg-basalt border border-lucid/30">
            <p className="text-modern text-granite leading-relaxed">
              This Master Services Agreement (&apos;Agreement&apos;) governs the provision of AI systems architecture and 
              deployment services by Lucid Systems to Client. Individual projects are detailed in Statements of Work (SOWs) 
              that reference this MSA.
            </p>
          </div>

          {/* SECTIONS */}
          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              1. Services Provided
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                Lucid Systems provides custom AI system architecture, development, deployment, and optimization services 
                (&apos;Services&apos;) as detailed in project-specific SOWs. Services may include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Operational flow mapping and analysis</li>
                <li>Custom AI model development and training</li>
                <li>System architecture design</li>
                <li>Integration with existing client infrastructure</li>
                <li>Deployment support and team training</li>
                <li>Ongoing monitoring and optimization (if contracted)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              2. Project Phases
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                Standard project phases follow the E.A.G.L.E. Framework:
              </p>
              <div className="mt-4 space-y-4 border-l-2 border-white/10 pl-4">
                <div>
                  <p className="text-alabaster font-bold">Phase 1: OBSERVE</p>
                  <p>Operational flow mapping and bottleneck identification</p>
                </div>
                <div>
                  <p className="text-alabaster font-bold">Phase 2: ARCHITECT</p>
                  <p>Intelligence layer design and system blueprinting</p>
                </div>
                <div>
                  <p className="text-alabaster font-bold">Phase 3: DEPLOY</p>
                  <p>System integration, training, and live implementation</p>
                </div>
                <div>
                  <p className="text-alabaster font-bold">Phase 4: EVOLVE</p>
                  <p>Post-deployment monitoring and adaptive optimization</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              3. Payment Structure
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p><strong className="text-alabaster">Standard Pricing Tiers:</strong></p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-alabaster">Single System:</strong> $2,500 (one system deployment)</li>
                <li><strong className="text-alabaster">Operations Pack:</strong> $4,500 (two integrated systems)</li>
                <li><strong className="text-alabaster">Full Intelligence:</strong> $7,000 (complete stack deployment)</li>
              </ul>
              
              <p className="mt-6"><strong className="text-alabaster">Payment Terms:</strong></p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>50% deposit upon SOW execution</li>
                <li>50% upon system delivery and acceptance</li>
                <li>Net 15 terms for invoices</li>
                <li>Late payments subject to 1.5% monthly interest</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              4. Intellectual Property Rights
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p><strong className="text-alabaster">Client Ownership:</strong></p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Client retains ownership of all proprietary data provided</li>
                <li>Client receives perpetual license to use deployed systems per SOW scope</li>
                <li>Client-specific configurations and customizations are included in license</li>
              </ul>
              
              <p className="mt-6"><strong className="text-alabaster">Lucid Systems Retention:</strong></p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Core E.A.G.L.E. Framework and methodologies</li>
                <li>Reusable code libraries and system components</li>
                <li>Architectural patterns and templates</li>
                <li>Pre-existing intellectual property</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              5. Confidentiality
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                Both parties agree to maintain confidentiality of all proprietary information disclosed during the 
                engagement. This obligation survives termination of this Agreement for a period of three (3) years.
              </p>
              <p className="mt-4 text-alabaster">
                Exceptions include: publicly available information, information independently developed, or information 
                required to be disclosed by law.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              6. Warranties and Performance
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                Lucid Systems warrants that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Services will be performed in a professional manner consistent with industry standards</li>
                <li>Delivered systems will substantially conform to specifications in the SOW</li>
                <li>Systems will be free from material defects for 30 days post-delivery</li>
              </ul>
              
              <p className="mt-6 text-amber-400 font-bold">
                DISCLAIMER: We do not warrant specific business outcomes. While systems are designed for operational 
                efficiency, results depend on factors beyond our control including client data quality, operational 
                processes, and market conditions.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              7. Limitation of Liability
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                LUCID SYSTEMS&apos; TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THIS AGREEMENT SHALL NOT EXCEED THE 
                TOTAL FEES PAID BY CLIENT IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="mt-4">
                IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                PUNITIVE DAMAGES.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              8. Term and Termination
            </h2>
            <div className="text-modern text-granite leading-relaxed space-y-4">
              <p>
                This Agreement remains in effect until all SOWs are completed or terminated. Either party may 
                terminate an active SOW with thirty (30) days written notice.
              </p>
              <p>
                Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Client pays for all work completed to termination date</li>
                <li>Lucid Systems delivers all work-in-progress in its current state</li>
                <li>Client license to incomplete systems terminates</li>
                <li>Confidentiality obligations survive</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              9. Dispute Resolution
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                Any disputes arising from this Agreement shall first be attempted to be resolved through good-faith 
                negotiation. If unsuccessful within thirty (30) days, disputes shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              10. Governing Law
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                This Agreement shall be governed by the laws of Nigeria, without regard to conflict of 
                law principles.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-ancient text-2xl font-bold uppercase tracking-wide text-lucid">
              11. Amendments
            </h2>
            <div className="text-modern text-granite leading-relaxed">
              <p>
                This Agreement may only be amended by written agreement signed by both parties. Individual SOWs 
                may specify additional terms that supplement but do not contradict this MSA.
              </p>
            </div>
          </section>

          {/* CONTACT */}
          <div className="p-6 bg-basalt border border-white/10">
            <h3 className="text-alabaster font-mono text-sm uppercase tracking-widest mb-4">
              To Initiate Services
            </h3>
            <p className="text-granite text-sm mb-4">
              Schedule a strategy call to discuss your operational challenges and receive a custom SOW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cal.com/lucid-theeagle-ebabkz/system-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-lucid text-obsidian font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors text-center"
              >
                Book Strategy Call
              </a>
              <a 
                href="mailto:lucidtheeagle@gmail.com"
                className="px-6 py-3 border border-white/20 text-alabaster hover:border-lucid hover:text-lucid transition-colors font-mono text-sm uppercase tracking-wide text-center"
              >
                Email Legal Team
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}