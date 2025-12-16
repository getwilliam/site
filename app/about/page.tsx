'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Target, Heart, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] relative noise-overlay overflow-x-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 sm:mb-12 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6">
            About <span className="text-gradient">William</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            We&apos;re building the future of legal billing—where AI handles the tedious work so lawyers can focus on what matters most: their clients.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To eliminate the friction between legal work and legal billing, recovering billions of dollars in lost revenue for law firms worldwide.'
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'We believe in transparency, security, and putting lawyers first. Your data is yours, your AI models are yours, and your success is our priority.'
              },
              {
                icon: Zap,
                title: 'Our Approach',
                description: 'Enterprise-grade AI that learns your firm&apos;s unique billing patterns, practice areas, and client preferences—without compromising security.'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 sm:p-6 md:p-8 bg-white/[0.02] rounded-xl sm:rounded-2xl border border-white/5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm">Leadership</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mt-3 sm:mt-4">Meet Our Founder</h2>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                {/* Headshot placeholder - replace src with actual headshot */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                      {/* Replace this div with an img tag when you have the headshot */}
                      {/* <img src="/images/jessica-jonas.jpg" alt="Jessica Jonas" className="w-full h-full object-cover" /> */}
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90">JJ</span>
                    </div>
                    <div className="absolute -inset-2 rounded-xl sm:rounded-2xl bg-blue-500/20 blur-xl -z-10" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display mb-1 sm:mb-2">Jessica Jonas</h3>
                  <p className="text-blue-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Founder & CEO</p>
                  
                  <div className="space-y-3 sm:space-y-4 text-zinc-300 text-sm sm:text-base">
                    <p>
                      Jessica founded William with a clear vision: to solve the legal industry&apos;s most frustrating problem—the gap between the work lawyers do and the time they actually bill.
                    </p>
                    <p>
                      With deep expertise in legal technology and a passion for building tools that make lawyers&apos; lives easier, Jessica leads William&apos;s mission to transform how law firms capture, generate, and optimize their billing.
                    </p>
                    <p>
                      Under her leadership, William has grown to serve AmLaw 200 firms, helping attorneys recover countless hours previously lost to manual time entry.
                    </p>
                  </div>

                  <a 
                    href="https://www.linkedin.com/in/jessicapj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#0A66C2]/80 transition-colors text-sm sm:text-base"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-6 sm:mb-8">Our Story</h2>
            <div className="space-y-4 sm:space-y-6 text-zinc-300 text-sm sm:text-base md:text-lg">
              <p>
                William was born from a simple observation: lawyers are excellent at practicing law, but the administrative burden of tracking and billing time takes them away from what they do best.
              </p>
              <p>
                Studies show that attorneys lose an average of 2+ hours per day to billing inefficiencies—time that should be spent serving clients. That&apos;s millions of dollars in lost revenue per year.
              </p>
              <p>
                We built William to change that. Using advanced AI that understands legal work, we&apos;ve created a platform that automatically captures billable activity, generates compliant narratives, and ensures nothing falls through the cracks.
              </p>
              <p>
                Today, William serves leading law firms across the country, helping them recover revenue, improve accuracy, and give attorneys back their time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3 sm:mb-4">Ready to Transform Your Billing?</h2>
            <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Join the leading law firms that trust William to capture every billable moment.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all hover:scale-105 text-sm sm:text-base">
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
