'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-zinc-400 text-lg mb-12">Last updated: December 7, 2025</p>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and William Technologies, Inc. (&quot;William,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your access to and use of the William platform, including any associated software, applications, and services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services. If you are using the Services on behalf of a law firm or other organization, you represent and warrant that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p>
                William provides an AI-powered legal billing and time tracking platform that includes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Automated time capture and tracking</li>
                <li>AI-generated billing narratives</li>
                <li>Billing compliance and validation tools</li>
                <li>Practice analytics and reporting</li>
                <li>Integration with third-party billing and practice management systems</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Security</h2>
              <p>
                To use certain features of the Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Notify us immediately of any unauthorized access or use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Subscription Plans</h3>
              <p>
                Access to the Services requires a paid subscription. Subscription plans, pricing, and features are described on our website or in a separate order form or enterprise agreement.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Payment Terms</h3>
              <p>
                You agree to pay all fees associated with your subscription plan. Fees are non-refundable except as expressly set forth in these Terms or required by applicable law. We may change our fees upon 30 days&apos; notice.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Automatic Renewal</h3>
              <p>
                Unless otherwise specified, subscriptions automatically renew for successive periods equal to the initial subscription term. You may cancel auto-renewal at any time before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
              <p>You agree not to use the Services to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any systems or networks</li>
                <li>Reverse engineer, decompile, or disassemble the Services</li>
                <li>Use the Services for any unlawful or fraudulent purpose</li>
                <li>Transmit false, misleading, or fraudulent time entries or billing information</li>
                <li>Share your account credentials with unauthorized users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Our Intellectual Property</h3>
              <p>
                The Services, including all software, algorithms, user interfaces, graphics, and documentation, are owned by William and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services during your subscription term.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Your Content</h3>
              <p>
                You retain ownership of all data, content, and information you submit to the Services (&quot;Your Content&quot;). You grant us a limited license to use, process, and display Your Content solely to provide the Services to you.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Feedback</h3>
              <p>
                If you provide us with suggestions, ideas, or feedback about the Services, you grant us a royalty-free, worldwide license to use, modify, and incorporate such feedback into our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
              <p>
                We understand that the information processed through our Services may include confidential and privileged attorney-client communications. We maintain strict confidentiality obligations and will not access, use, or disclose Your Content except as necessary to provide the Services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Protection</h2>
              <p>
                Our collection, use, and protection of personal information is governed by our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>. For enterprise customers, we also offer a <Link href="/dpa" className="text-blue-400 hover:underline">Data Processing Agreement</Link> that addresses GDPR and other data protection requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                We do not warrant that the Services will be uninterrupted, error-free, or secure. AI-generated content, including billing narratives, should be reviewed before submission to clients or billing systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WILLIAM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES.
              </p>
              <p className="mt-4">
                OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO WILLIAM DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless William and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the Services, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p>
                Either party may terminate these Terms at any time by providing written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your access to the Services will be suspended</li>
                <li>You remain responsible for any unpaid fees</li>
                <li>You may request export of Your Content within 30 days</li>
                <li>We will delete Your Content within 90 days, unless retention is required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Disputes</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Modifications to Terms</h2>
              <p>
                We may modify these Terms at any time by posting the revised terms on our website. Material changes will be communicated via email or through the Services. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. General Provisions</h2>
              <p>
                These Terms constitute the entire agreement between you and William regarding the Services. If any provision is found unenforceable, the remaining provisions will continue in effect. Our failure to enforce any right or provision shall not be deemed a waiver. You may not assign these Terms without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <p><strong>William Technologies, Inc.</strong></p>
                <p>Attn: Legal Department</p>
                <p>Email: legal@getwilliam.xyz</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
