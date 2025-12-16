'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  Zap, 
  Shield, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  FileText,
  Users,
  TrendingUp,
  Lock,
  Sparkles,
  Timer,
  DollarSign,
  Brain,
  Workflow,
  Menu,
  X,
  Building2
} from 'lucide-react'
import Link from 'next/link'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <img src="/logo.svg" alt="William" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-lg -z-10" />
            </div>
            <span className="text-lg sm:text-xl font-bold font-display">William</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors animated-underline text-sm lg:text-base">Features</a>
            <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors animated-underline text-sm lg:text-base">How it Works</a>
            <Link href="/about" className="text-zinc-400 hover:text-white transition-colors animated-underline text-sm lg:text-base">About</Link>
            <Link href="/security" className="text-zinc-400 hover:text-white transition-colors animated-underline text-sm lg:text-base">Security</Link>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link href="/contact" className="bg-white text-black px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium hover:bg-zinc-200 transition-all hover:scale-105 text-sm lg:text-base">
              Schedule Demo
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-6 border-t border-white/10 pt-4"
          >
            <div className="flex flex-col gap-1">
              <a 
                href="#features" 
                className="text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                How it Works
              </a>
              <Link 
                href="/about" 
                className="text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/security" 
                className="text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Security
              </Link>
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link href="/contact" className="bg-white text-black px-5 py-3 rounded-full font-medium w-full block text-center">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-16 sm:pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating orbs - contained within viewport */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-amber-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-zinc-300">Enterprise-grade billing for AmLaw 200 firms</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            variants={fadeUp}
            className="text-[28px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.15] sm:leading-tight mb-4 sm:mb-6"
          >
            <span className="block">Time tracking that</span>
            <span className="text-gradient">thinks like a lawyer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeUp}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          >
            William uses AI to passively capture your billable hours, generate compliant narratives, 
            and unlock insights across your entire practice—automatically.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
            <Link href="/contact" className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-zinc-200 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center max-w-xs sm:max-w-none">
              Schedule Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-3 gap-2 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '30%', label: 'More billable time' },
              { value: '2 days', label: 'Saved per month' },
              { value: '99%', label: 'Compliance rate' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-1">
                <div className="text-lg sm:text-3xl md:text-4xl font-bold font-display text-gradient-gold">{stat.value}</div>
                <div className="text-[9px] sm:text-xs md:text-sm text-zinc-500 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero image/dashboard preview */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass rounded-xl sm:rounded-2xl p-1.5 sm:p-2 glow">
            <div className="bg-[#12121A] rounded-lg sm:rounded-xl overflow-hidden">
              <DashboardPreview />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Dashboard Preview Component
function DashboardPreview() {
  const timeEntries = [
    { client: 'Acme Corp', matter: 'Series B Financing', task: 'Draft term sheet review memo', time: '1.8', status: 'complete' },
    { client: 'TechStart Inc', matter: 'IP Litigation', task: 'Correspondence with opposing counsel re: discovery deadlines', time: '0.6', status: 'complete' },
    { client: 'Global Holdings', matter: 'M&A Transaction', task: 'Review due diligence documents', time: '2.4', status: 'pending' },
  ]

  return (
    <div className="p-3 sm:p-4 md:p-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">Today&apos;s Time Entries</h3>
          <p className="text-xs sm:text-sm text-zinc-500">December 7, 2025</p>
        </div>
        <div className="text-right">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">4.8 hrs</div>
          <div className="text-[10px] sm:text-xs text-zinc-500">Billable Today</div>
        </div>
      </div>

      {/* Time entries */}
      <div className="space-y-2 sm:space-y-3">
        {timeEntries.map((entry, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                <span className="font-medium text-xs sm:text-sm md:text-base truncate">{entry.client}</span>
                <span className="text-zinc-600 hidden sm:inline">·</span>
                <span className="text-zinc-400 text-[10px] sm:text-xs md:text-sm truncate hidden sm:inline">{entry.matter}</span>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 truncate">{entry.task}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
              <span className="text-sm sm:text-base md:text-lg font-semibold">{entry.time}</span>
              {entry.status === 'complete' ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              ) : (
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI suggestion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg sm:rounded-xl border border-amber-500/20"
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-amber-200/80">
              <span className="font-semibold text-amber-200">AI Suggestion:</span> You have 0.4 hours of email activity with TechStart Inc that hasn&apos;t been captured. Would you like to add it?
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Problems Section
function Problems() {
  const problems = [
    {
      icon: Timer,
      title: 'Hours Lost Daily',
      description: 'Attorneys lose 10-30% of billable time to poor capture and end-of-day reconstruction.',
      stat: '2.1 hrs',
      statLabel: 'lost per day'
    },
    {
      icon: DollarSign,
      title: 'Revenue Leakage',
      description: 'Write-downs, missed entries, and compliance rejections drain millions annually.',
      stat: '$150K+',
      statLabel: 'lost per attorney/year'
    },
    {
      icon: Brain,
      title: 'Zero Visibility',
      description: 'Without accurate data, pricing, capacity planning, and growth decisions are guesswork.',
      stat: '68%',
      statLabel: 'of firms lack insights'
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span variants={fadeUp} className="text-amber-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
            The Problem
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 sm:mt-4 mb-4 sm:mb-6">
            Manual timekeeping is <span className="text-gradient-gold">broken</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Legacy billing creates a costly cycle: frustrated attorneys, missed revenue, and no insight into where improvements can be made.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {problems.map((problem, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="group relative p-5 sm:p-6 md:p-8 bg-[#12121A] rounded-xl sm:rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-red-500/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                  <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{problem.title}</h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-6">{problem.description}</p>
                <div className="pt-4 sm:pt-6 border-t border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold text-red-400">{problem.stat}</div>
                  <div className="text-xs sm:text-sm text-zinc-500">{problem.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      id: 'capture',
      icon: Zap,
      label: 'Automatic Capture',
      title: 'Every billable moment, captured',
      description: 'William runs silently in the background, tracking your work across emails, documents, calls, and meetings. No timers, no manual entry, no missed hours.',
      highlights: ['Passive activity tracking', 'Smart matter detection', 'Retroactive capture for any date range', 'Works on desktop and mobile']
    },
    {
      id: 'narratives',
      icon: FileText,
      label: 'AI Narratives',
      title: 'Compliant entries, written for you',
      description: 'Our AI generates detailed, professional time entry narratives that comply with your firm\'s standards and client billing guidelines—automatically.',
      highlights: ['Learns your writing style', 'Client-specific formatting', 'Block billing detection', 'One-click approval']
    },
    {
      id: 'compliance',
      icon: Shield,
      label: 'Billing Compliance',
      title: 'Never worry about rejections',
      description: 'Upload your Outside Counsel Guidelines and let William enforce them at the point of entry. Catch issues before they become write-offs.',
      highlights: ['OCG rule extraction', 'Real-time validation', 'Pre-bill review automation', 'Audit-ready documentation']
    },
    {
      id: 'intelligence',
      icon: BarChart3,
      label: 'Practice Intelligence',
      title: 'Insights that drive growth',
      description: 'Transform your time data into strategic insights. Understand utilization, optimize staffing, and price matters with confidence.',
      highlights: ['Resource allocation', 'Predictive pricing', 'Margin analysis', 'Performance benchmarks']
    },
  ]

  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="relative py-16 sm:py-24 md:py-32 overflow-x-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
            Features
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 sm:mt-4 mb-4 sm:mb-6">
            Everything you need to <span className="text-gradient">bill smarter</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            William combines automated time capture, AI-powered narratives, compliance enforcement, and practice analytics in one seamless platform.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Feature tabs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-3 sm:space-y-4 order-2 lg:order-1"
          >
            {features.map((feature, i) => (
              <motion.button
                key={feature.id}
                variants={fadeUp}
                onClick={() => setActiveFeature(i)}
                className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  activeFeature === i 
                    ? 'bg-white/5 border-blue-500/50 glow' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeFeature === i ? 'bg-blue-500/20' : 'bg-white/5'
                  }`}>
                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${activeFeature === i ? 'text-blue-400' : 'text-zinc-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] sm:text-xs font-medium uppercase tracking-wider ${
                      activeFeature === i ? 'text-blue-400' : 'text-zinc-500'
                    }`}>
                      {feature.label}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-0.5 sm:mt-1">{feature.title}</h3>
                    {activeFeature === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 sm:mt-3"
                      >
                        <p className="text-zinc-400 text-xs sm:text-sm">{feature.description}</p>
                        <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                          {feature.highlights.map((highlight, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Feature visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 lg:sticky lg:top-24 overflow-hidden"
          >
            <div className="glass rounded-xl sm:rounded-2xl p-1.5 sm:p-2 glow">
              <div className="bg-[#12121A] rounded-lg sm:rounded-xl p-3 sm:p-5 md:p-6 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden">
                <FeatureVisual activeFeature={activeFeature} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Feature Visual Component
function FeatureVisual({ activeFeature }: { activeFeature: number }) {
  const visuals = [
    // Capture
    <div key="capture" className="space-y-3 sm:space-y-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h4 className="font-semibold text-sm sm:text-base">Activity Stream</h4>
        <span className="text-[10px] sm:text-xs text-zinc-500">Live</span>
      </div>
      {[
        { app: 'Outlook', action: 'Email to client@acmecorp.com', time: '9:42 AM', duration: '0.2', logo: '/logos/outlook.png' },
        { app: 'Word', action: 'Drafting: Motion_for_Summary...', time: '9:15 AM', duration: '1.4', logo: '/logos/word.png' },
        { app: 'Teams', action: 'Call with Sarah Chen re: Discovery', time: '8:30 AM', duration: '0.5', logo: '/logos/teams.png' },
      ].map((activity, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl overflow-hidden"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden p-1 sm:p-1.5 flex-shrink-0">
            <img src={activity.logo} alt={activity.app} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-medium">{activity.app}</span>
              <span className="text-[10px] sm:text-xs text-zinc-500">{activity.time}</span>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-400 truncate">{activity.action}</p>
          </div>
          <span className="text-emerald-400 font-medium text-xs sm:text-sm flex-shrink-0 pl-1">+{activity.duration}</span>
        </motion.div>
      ))}
    </div>,
    
    // Narratives
    <div key="narratives" className="space-y-3 sm:space-y-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
        <h4 className="font-semibold text-sm sm:text-base">AI-Generated Narrative</h4>
        <span className="px-2 py-0.5 sm:py-1 bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs rounded-full">Compliant</span>
      </div>
      <div className="p-3 sm:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl">
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
          <span className="font-medium text-xs sm:text-sm md:text-base">Acme Corp</span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="text-zinc-400 text-[10px] sm:text-xs md:text-sm">Series B Financing</span>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-relaxed">
              &quot;Reviewed and analyzed draft term sheet received from lead investor; prepared detailed memorandum outlining key terms, potential concerns regarding anti-dilution provisions, and recommended negotiation strategies for client consideration.&quot;
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm flex-wrap">
            <span className="text-zinc-400">Task Code: <span className="text-white">A101</span></span>
            <span className="text-zinc-400">Time: <span className="text-white">1.8 hrs</span></span>
          </div>
        </div>
      </div>
    </div>,

    // Compliance
    <div key="compliance" className="space-y-3 sm:space-y-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
        <h4 className="font-semibold text-sm sm:text-base">Compliance Check</h4>
        <span className="text-[10px] sm:text-xs text-zinc-500">Global Holdings OCG</span>
      </div>
      {[
        { rule: 'Block billing prohibited', status: 'pass', detail: 'Entry contains single task' },
        { rule: 'Minimum increment: 0.1 hrs', status: 'pass', detail: '0.3 hrs recorded' },
        { rule: 'Specific task description required', status: 'warning', detail: 'Consider adding more detail' },
      ].map((check, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
            check.status === 'pass' ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-amber-500/5 border-amber-500/20'
          }`}
        >
          {check.status === 'pass' ? (
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
          ) : (
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium">{check.rule}</p>
            <p className="text-[10px] sm:text-xs text-zinc-500">{check.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>,

    // Intelligence
    <div key="intelligence" className="space-y-3 sm:space-y-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
        <h4 className="font-semibold text-sm sm:text-base">Practice Analytics</h4>
        <select className="bg-white/5 border border-white/10 rounded-lg px-2 sm:px-3 py-1 text-[10px] sm:text-xs md:text-sm">
          <option>This Quarter</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {[
          { label: 'Utilization Rate', value: '78%', change: '+5%' },
          { label: 'Realization Rate', value: '92%', change: '+3%' },
          { label: 'Avg. Matter Value', value: '$47K', change: '+12%' },
          { label: 'Write-offs', value: '$8K', change: '-24%' },
        ].map((metric, i) => (
          <div key={i} className="p-3 sm:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl">
            <p className="text-[10px] sm:text-xs text-zinc-500">{metric.label}</p>
            <div className="flex items-end gap-1 sm:gap-2 mt-1">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">{metric.value}</span>
              <span className={`text-[10px] sm:text-xs ${metric.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>,
  ]

  return (
    <motion.div
      key={activeFeature}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {visuals[activeFeature]}
    </motion.div>
  )
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect your tools',
      description: 'Link William to your email, calendar, documents, and practice management system. Setup takes 5 minutes.',
      icon: Workflow
    },
    {
      number: '02',
      title: 'Work normally',
      description: 'Go about your day. William silently captures your billable activity across all connected applications.',
      icon: Clock
    },
    {
      number: '03',
      title: 'Review & approve',
      description: 'At the end of each day, review AI-generated time entries. Edit if needed, then approve with one click.',
      icon: CheckCircle2
    },
    {
      number: '04',
      title: 'Export & bill',
      description: 'Sync approved entries directly to your billing system. Compliant, detailed, and ready to invoice.',
      icon: TrendingUp
    },
  ]

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 sm:mt-4 mb-4 sm:mb-6">
            Simple setup, <span className="text-gradient">powerful results</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Get started in minutes and see results from day one. No complex implementation, no disruption to your workflow.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
              <div className="relative p-4 sm:p-5 md:p-6 bg-[#12121A] rounded-xl sm:rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors card-hover h-full">
                <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-blue-500/20">{step.number}</span>
                </div>
                <div className="pt-6 sm:pt-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 sm:mb-4">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Integrations
function Integrations() {
  const integrations = [
    { name: 'Microsoft 365', category: 'Productivity', logo: '/logos/microsoft365.jpg' },
    { name: 'SharePoint', category: 'Productivity', logo: '/logos/sharepoint.png' },
    { name: 'Google Drive', category: 'Productivity', logo: '/logos/googledrive.png' },
    { name: 'Clio', category: 'Practice Mgmt', logo: '/logos/clio.png' },
    { name: 'Elite 3E', category: 'Billing', logo: '/logos/elite3e.png' },
    { name: 'Aderant', category: 'Billing', logo: '/logos/aderant.png' },
    { name: 'iManage', category: 'DMS', logo: '/logos/imanage.png' },
    { name: 'Zoom', category: 'Communication', logo: 'https://cdn.simpleicons.org/zoom/white' },
    { name: 'Teams', category: 'Communication', logo: '/logos/teams.png' },
    { name: 'Slack', category: 'Communication', logo: '/logos/slack.png' },
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#0c0c12]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span variants={fadeUp} className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
            Integrations
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 sm:mt-4 mb-4 sm:mb-6">
            Works with your <span className="text-gradient">existing stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            William connects to all the tools you already use—no switching required.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-4 sm:p-5 md:p-6 bg-white/[0.02] rounded-lg sm:rounded-xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h4 className="font-medium text-xs sm:text-sm md:text-base">{integration.name}</h4>
              <p className="text-[10px] sm:text-xs text-zinc-500">{integration.category}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 mt-6 sm:mt-8 text-sm"
        >
          And 50+ more integrations available
        </motion.p>
      </div>
    </section>
  )
}

// Security Section
function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256 encryption.'
    },
    {
      icon: Shield,
      title: 'Enterprise SSO',
      description: 'Single sign-on integration with your existing identity provider.'
    },
    {
      icon: Users,
      title: 'Firm-Specific Models',
      description: 'Your AI models are trained only on your data—never mixed with other firms.'
    },
    {
      icon: FileText,
      title: 'You Control Your Data',
      description: 'Full data portability. Delete your data anytime with complete removal.'
    },
  ]

  return (
    <section id="security" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
              Security
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 sm:mt-4 mb-4 sm:mb-6">
              Enterprise-grade security, <span className="text-gradient">by design</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 md:mb-12">
              We understand that your client data is sacred. William is built from the ground up with security and privacy as core principles—not afterthoughts.
            </motion.p>

            <motion.div variants={stagger} className="space-y-4 sm:space-y-5 md:space-y-6">
              {securityFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">{feature.title}</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm md:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
              <Link href="/security" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm sm:text-base">
                Learn more about our security practices
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl blur-3xl" />
            <div className="relative glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">Security Overview</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm">View our security documentation</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {['Security Whitepaper', 'Privacy Policy', 'Data Processing Agreement', 'Terms of Service'].map((doc, i) => (
                  <Link key={i} href={doc === 'Privacy Policy' ? '/privacy' : doc === 'Data Processing Agreement' ? '/dpa' : doc === 'Terms of Service' ? '/terms' : '/security'} className="flex items-center justify-between p-3 sm:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl hover:bg-white/[0.04] transition-colors">
                    <span className="text-xs sm:text-sm">{doc}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-blue-500/20 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4 sm:mb-6">
            Ready to capture every <span className="text-gradient">billable moment</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            See how William can transform billing at your firm. Schedule a personalized demo with our team.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-zinc-200 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center max-w-xs sm:max-w-none">
              Schedule Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src="/logo.svg" alt="William" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-lg sm:text-xl font-bold font-display">William</span>
            </Link>
            <p className="text-zinc-500 max-w-xs text-xs sm:text-sm">
              AI-powered legal billing that captures every billable moment and transforms time data into strategic insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-zinc-400 text-xs sm:text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Time Capture</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">AI Narratives</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-zinc-400 text-xs sm:text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/dpa" className="hover:text-white transition-colors">DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 William Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/williamlegal" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/getwilliam" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative noise-overlay overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <Integrations />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
