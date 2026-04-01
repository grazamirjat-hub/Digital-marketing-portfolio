/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Linkedin,
  Zap,
  Target,
  Users,
  MessageCircle,
  Facebook,
  Github
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Search Engine Optimization",
      description: "Dominate search results and drive high-quality organic traffic to your website with our data-driven SEO strategies.",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Search Engine Marketing",
      description: "Maximize your ROI with targeted PPC campaigns that put your brand in front of ready-to-buy customers.",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Content Strategy",
      description: "Engage your audience with compelling stories and valuable content that builds trust and authority.",
      icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Social Media Growth",
      description: "Build a loyal community and amplify your brand voice across all major social platforms.",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50"
    }
  ];

  const stats = [
    { label: "Growth Rate", value: "250%" },
    { label: "Active Clients", value: "50+" },
    { label: "ROI Average", value: "12x" },
    { label: "Keywords Ranked", value: "10k+" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">G Raza Mirjat</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8">
              <Zap className="w-4 h-4 fill-current" />
              Accelerate Your Digital Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              G Raza Mirjat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                SEO, Blogger & Digital Growth Expert
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Legal precision meets digital excellence. I am a professional Blogger specializing in SEO, SEM, and organic growth 
              strategies that turn search visibility into measurable business success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Start Growing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:border-slate-900 transition-all">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Everything you need to dominate your niche and outpace the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Clients Trust <br />
              <span className="text-blue-500">G Raza Mirjat</span>
            </h2>
            <div className="space-y-6">
              {[
                "Unique blend of Legal expertise and Digital Marketing",
                "Transparent reporting and clear communication",
                "Custom strategies tailored to your business goals",
                "Proven track record in SEO and Organic Growth"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-lg text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl rotate-3 flex items-center justify-center p-12">
              <div className="bg-slate-900/40 backdrop-blur-xl w-full h-full rounded-2xl flex flex-col items-center justify-center text-center p-8 border border-white/10">
                <BarChart3 className="w-20 h-20 text-blue-400 mb-6" />
                <div className="text-5xl font-black mb-2">12.4x</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">Average Client ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale?</h2>
            <p className="text-xl text-slate-600 mb-12">
              Let's build a digital strategy that actually works. Book your free 
              strategy call today and discover your growth potential.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/923163836324" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all w-full md:w-auto justify-center shadow-lg shadow-emerald-200"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Me
              </a>
              <a 
                href="mailto:grazamirjat@gmail.com" 
                className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all w-full md:w-auto justify-center shadow-lg shadow-blue-200"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/g-raza-mirjat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-200 transition-all w-full md:w-auto justify-center border border-slate-200"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a 
                href="https://www.facebook.com/share/1CVX6YnYg7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1877F2] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#166fe5] transition-all w-full md:w-auto justify-center shadow-lg shadow-blue-100"
              >
                <Facebook className="w-6 h-6" />
                Facebook
              </a>
              <a 
                href="https://github.com/grazamirjat-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all w-full md:w-auto justify-center shadow-lg shadow-slate-200"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-blue-600 w-6 h-6" />
            <span className="text-lg font-bold">G Raza Mirjat</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} G Raza Mirjat. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/g-raza-mirjat" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/share/1CVX6YnYg7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://github.com/grazamirjat-hub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="mailto:grazamirjat@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
