'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 text-lg mb-12">Last updated: December 7, 2025</p>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                William Technologies, Inc. (&quot;William,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered legal billing platform and related services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, job title, firm name, and contact details when you create an account or request a demo.</li>
                <li><strong>Billing Information:</strong> Time entries, matter details, client information, and billing narratives processed through our platform.</li>
                <li><strong>Communications:</strong> Information you provide when contacting our support team or participating in surveys.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <p>When you use our Services, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Usage Data:</strong> Information about how you interact with our Services, including features used, time spent, and actions taken.</li>
                <li><strong>Device Information:</strong> Device type, operating system, browser type, and unique device identifiers.</li>
                <li><strong>Log Data:</strong> IP address, access times, pages viewed, and referring URLs.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Activity Data for Time Tracking</h3>
              <p>
                To provide our automated time capture features, William may collect information about your work activities, including application usage, document interactions, calendar events, and email metadata. This data is used solely to generate time entries and is processed in accordance with your firm&apos;s configuration and your individual privacy preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Generate automated time entries and billing narratives</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
                <li>Train and improve our AI models (using aggregated, de-identified data only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>With Your Firm:</strong> Information is shared with authorized administrators at your law firm as configured in your account settings.</li>
                <li><strong>Service Providers:</strong> We share information with third-party vendors who perform services on our behalf, subject to confidentiality obligations.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share information for other purposes with your explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>AES-256 encryption for data at rest and in transit</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide you Services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Upon termination of your account, we will delete or anonymize your data within 90 days, unless retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a portable copy of your data</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@getwilliam.xyz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and maintained on, servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses approved by relevant authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <p><strong>William Technologies, Inc.</strong></p>
                <p>Attn: Privacy Team</p>
                <p>Email: privacy@getwilliam.xyz</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
