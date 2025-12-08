'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Server, Eye, Globe, Key, Users, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your sensitive billing data is protected at every step.'
    },
    {
      icon: Key,
      title: 'Enterprise SSO',
      description: 'Single sign-on integration with SAML 2.0 and OAuth 2.0 providers. Manage your users with the identity systems and policies you already have in place.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Our infrastructure runs on enterprise-grade cloud providers with multiple availability zones, ensuring high availability and disaster recovery.'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Granular role-based access controls ensure that users only have access to the data and features they need. All access is logged and auditable.'
    },
    {
      icon: Users,
      title: 'Firm-Specific AI Models',
      description: 'Your AI models are deployed on a firm-by-firm basis. Your data is never mixed with other firms or used to train models for other customers.'
    },
    {
      icon: Globe,
      title: 'Data Residency',
      description: 'Choose where your data is stored. We offer data residency options in multiple regions to meet your compliance requirements.'
    },
  ]

  const faqs = [
    {
      question: 'How is my data protected?',
      answer: 'All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. We implement strict access controls, regular security audits, and maintain comprehensive audit logs.'
    },
    {
      question: 'Do you have compliance certifications?',
      answer: 'We are currently pursuing SOC 2 Type I certification, with completion expected in 2025. Our infrastructure providers maintain ISO 27001, ISO 27017, and ISO 27018 certifications.'
    },
    {
      question: 'Can I control which applications William tracks?',
      answer: 'Yes, users have full control over which applications and data sources are tracked. You can configure tracking preferences at both the firm and individual user level.'
    },
    {
      question: 'How do you handle attorney-client privilege?',
      answer: 'William is designed with attorney-client privilege in mind. We never access the content of privileged communications. Our AI processes metadata to generate time entries without exposing confidential information.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Upon cancellation, you can export all your data within 30 days. After that period, we securely delete all your data within 90 days, unless retention is required by law.'
    },
    {
      question: 'Do you perform security testing?',
      answer: 'Yes, we conduct regular penetration testing by independent security firms, automated vulnerability scanning, and continuous security monitoring.'
    },
  ]

  return (
    <main className="min-h-screen bg-[#0A0A0F] relative noise-overlay">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 mb-6">
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold font-display mb-6">
            Protecting Your Data is <span className="text-gradient">Table Stakes</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Securing your personal and client data is paramount for your firm. We&apos;ve built William from the ground up with enterprise-grade security as a core principle—not an afterthought.
          </motion.p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Security by Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display mb-6">Secure by Design</h2>
                <p className="text-zinc-400 mb-6">
                  We leverage best-in-class infrastructure and services to provide enterprise-grade security. Our platform runs continuously across multiple physically isolated data centers to ensure high availability and resilience.
                </p>
                <ul className="space-y-4">
                  {[
                    'Performance is consistent, even during usage spikes',
                    'Data is encrypted at rest and in transit',
                    'Data is stored within a private network',
                    'Regular backups with point-in-time recovery',
                    'Continuous monitoring and threat detection'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-[#12121A] rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="text-6xl font-bold font-display text-gradient mb-2">99.9%</div>
                    <p className="text-zinc-400">Uptime SLA</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-white/[0.02] rounded-xl">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <p className="text-xs text-zinc-500">Monitoring</p>
                    </div>
                    <div className="text-center p-4 bg-white/[0.02] rounded-xl">
                      <div className="text-2xl font-bold text-white">AES-256</div>
                      <p className="text-xs text-zinc-500">Encryption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 bg-white/[0.02] rounded-xl border border-white/5"
              >
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-zinc-400 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold font-display mb-4">Have Security Questions?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Our security team is available to discuss your specific requirements and answer any questions about how we protect your data.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all hover:scale-105">
              Contact Our Security Team
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
