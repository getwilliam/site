'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DPAPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] relative noise-overlay">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Data Processing Agreement</h1>
          <p className="text-zinc-400 text-lg mb-12">Last updated: December 7, 2025</p>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service or other written agreement between William Technologies, Inc. (&quot;William,&quot; &quot;Processor,&quot; &quot;we,&quot; or &quot;us&quot;) and the entity agreeing to these terms (&quot;Customer,&quot; &quot;Controller,&quot; or &quot;you&quot;) for the provision of the William platform and services (the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                This DPA sets forth the terms and conditions under which William will process Personal Data on behalf of Customer in connection with the Services, and reflects the parties&apos; commitment to comply with applicable data protection laws, including the General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;), the California Consumer Privacy Act (&quot;CCPA&quot;), and other applicable privacy regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
              <p>For purposes of this DPA:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person that is processed by William on behalf of Customer in connection with the Services.</li>
                <li><strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data, including collection, storage, modification, retrieval, use, disclosure, or deletion.</li>
                <li><strong>&quot;Data Subject&quot;</strong> means the identified or identifiable natural person to whom Personal Data relates.</li>
                <li><strong>&quot;Sub-processor&quot;</strong> means any third party engaged by William to process Personal Data on behalf of Customer.</li>
                <li><strong>&quot;Security Incident&quot;</strong> means any unauthorized access, acquisition, use, or disclosure of Personal Data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Scope and Roles</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Customer as Controller</h3>
              <p>
                Customer is the Controller of Personal Data and determines the purposes and means of processing Personal Data through the Services. Customer is responsible for ensuring that its collection and use of Personal Data complies with applicable data protection laws.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 William as Processor</h3>
              <p>
                William is the Processor of Personal Data and processes Personal Data only on behalf of and in accordance with Customer&apos;s documented instructions. William shall not process Personal Data for any purpose other than providing the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Processing Details</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Subject Matter</h3>
              <p>
                The subject matter of data processing is the provision of the William AI-powered legal billing and time tracking platform.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Duration</h3>
              <p>
                Processing will continue for the duration of the Agreement, unless terminated earlier in accordance with the Agreement or this DPA.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Categories of Data Subjects</h3>
              <p>Data Subjects may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Customer&apos;s employees and contractors</li>
                <li>Customer&apos;s clients and their representatives</li>
                <li>Opposing counsel and other third parties referenced in billing records</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 Types of Personal Data</h3>
              <p>Personal Data processed may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Names and contact information</li>
                <li>Professional information (job titles, firm affiliations)</li>
                <li>Time and billing records</li>
                <li>Email metadata and calendar information</li>
                <li>Usage data and activity logs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. William&apos;s Obligations</h2>
              <p>William agrees to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Process Personal Data only on documented instructions from Customer, unless required by applicable law</li>
                <li>Ensure that personnel authorized to process Personal Data are bound by confidentiality obligations</li>
                <li>Implement appropriate technical and organizational security measures</li>
                <li>Assist Customer in responding to Data Subject requests</li>
                <li>Assist Customer in ensuring compliance with security, breach notification, and data protection impact assessment obligations</li>
                <li>Delete or return Personal Data upon termination of the Agreement, at Customer&apos;s choice</li>
                <li>Make available information necessary to demonstrate compliance with this DPA</li>
                <li>Allow for and contribute to audits and inspections conducted by Customer or an auditor mandated by Customer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Sub-processors</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Authorization</h3>
              <p>
                Customer provides general authorization for William to engage Sub-processors to process Personal Data. William maintains a list of current Sub-processors, which is available upon request.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Sub-processor Requirements</h3>
              <p>
                William shall ensure that each Sub-processor is bound by data protection obligations no less protective than those in this DPA. William remains liable for the acts and omissions of its Sub-processors.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Notice of Changes</h3>
              <p>
                William shall provide Customer with at least 30 days&apos; notice before engaging a new Sub-processor. Customer may object to the engagement of a new Sub-processor by providing written notice within 14 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Security Measures</h2>
              <p>
                William implements and maintains appropriate technical and organizational measures to protect Personal Data, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encryption of Personal Data in transit and at rest</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security testing and vulnerability assessments</li>
                <li>Incident response and disaster recovery procedures</li>
                <li>Employee security training and awareness programs</li>
                <li>Physical security controls for data center facilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Security Incidents</h2>
              <p>
                William shall notify Customer without undue delay (and in any event within 72 hours) after becoming aware of a Security Incident affecting Personal Data. The notification shall include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>A description of the nature of the incident</li>
                <li>The categories and approximate number of Data Subjects affected</li>
                <li>The likely consequences of the incident</li>
                <li>Measures taken or proposed to address the incident</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p>
                William shall not transfer Personal Data to a country outside the European Economic Area or the United Kingdom unless:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The transfer is to a country deemed adequate by the relevant authority</li>
                <li>Appropriate safeguards are in place, such as Standard Contractual Clauses</li>
                <li>Customer has provided explicit authorization for the transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Data Subject Rights</h2>
              <p>
                William shall assist Customer in responding to requests from Data Subjects exercising their rights under applicable data protection laws, including rights of access, rectification, erasure, restriction, portability, and objection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Data Retention and Deletion</h2>
              <p>
                Upon termination of the Agreement, William shall, at Customer&apos;s election, delete or return all Personal Data within 90 days, unless retention is required by applicable law. William shall provide certification of deletion upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Audits</h2>
              <p>
                William shall make available to Customer all information necessary to demonstrate compliance with this DPA and allow for audits and inspections. Audits shall be conducted with reasonable notice, during normal business hours, and subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Liability</h2>
              <p>
                Each party&apos;s liability under this DPA shall be subject to the limitations of liability set forth in the Agreement. Nothing in this DPA shall limit either party&apos;s liability for breaches of data protection laws where such limitation is prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact</h2>
              <p>
                For questions about this DPA or our data processing practices, please contact:
              </p>
              <div className="mt-4 p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <p><strong>William Technologies, Inc.</strong></p>
                <p>Attn: Data Protection Officer</p>
                <p>Email: dpo@getwilliam.xyz</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
