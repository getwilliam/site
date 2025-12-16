'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Send, Building2, Users, MessageSquare } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    firmSize: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] relative noise-overlay overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 sm:mb-12 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left column - Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 sm:mb-6">
              Schedule a <span className="text-gradient">Demo</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-12">
              See how William can transform billing at your firm. Our team will walk you through a personalized demo tailored to your practice areas and workflow.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5 sm:space-y-6 md:space-y-8">
              <motion.div variants={fadeUp} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Built for Large Firms</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm md:text-base">William is designed for AmLaw 200 firms with complex billing requirements and enterprise security needs.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Dedicated Support</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm md:text-base">Get a dedicated implementation team and ongoing support from billing experts who understand your needs.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Custom Demo</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm md:text-base">We&apos;ll show you exactly how William works with your existing systems and practice areas.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 bg-white/[0.02] rounded-xl sm:rounded-2xl border border-white/5">
              <p className="text-xs text-zinc-500 mb-3 sm:mb-4">LEADERSHIP</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">JJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Jessica Jonas</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm">Founder & CEO</p>
                  <a href="https://www.linkedin.com/in/jessicapj/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors">
                    LinkedIn →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Thank you for your interest!</h2>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8">
                  We&apos;ve received your inquiry and a member of our team will be in touch within 24 hours to schedule your personalized demo.
                </p>
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                  ← Return to homepage
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Request a Demo</h2>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <label htmlFor="email" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="john.smith@lawfirm.com"
                  />
                </div>

                <div className="mb-3 sm:mb-4">
                  <label htmlFor="company" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Law Firm *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="Smith & Associates LLP"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <label htmlFor="title" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Job Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Managing Partner"
                    />
                  </div>
                  <div>
                    <label htmlFor="firmSize" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Firm Size *</label>
                    <select
                      id="firmSize"
                      name="firmSize"
                      required
                      value={formData.firmSize}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    >
                      <option value="" className="bg-[#12121A]">Select size</option>
                      <option value="100-250" className="bg-[#12121A]">100-250 attorneys</option>
                      <option value="250-500" className="bg-[#12121A]">250-500 attorneys</option>
                      <option value="500-1000" className="bg-[#12121A]">500-1,000 attorneys</option>
                      <option value="1000+" className="bg-[#12121A]">1,000+ attorneys</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Tell us about your needs</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="What challenges are you looking to solve with William?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-5 sm:px-6 py-3 sm:py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Request Demo
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <p className="text-[10px] sm:text-xs text-zinc-500 mt-3 sm:mt-4 text-center">
                  By submitting this form, you agree to our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
