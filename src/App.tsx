/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Home, 
  BookOpen, 
  List, 
  MessageSquare, 
  Bell, 
  User, 
  Clock, 
  BarChart, 
  PlayCircle, 
  Calendar, 
  FileText, 
  Download, 
  Lightbulb,
  Menu,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="flex min-h-screen font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-low flex flex-col h-screen sticky top-0 p-4 gap-2 shrink-0 hidden md:flex">
        <div className="px-4 py-6 mb-4">
          <h1 className="text-lg font-bold text-primary font-headline leading-tight">Keys2Balance</h1>
          <p className="text-xs text-secondary font-medium tracking-wide">Learning Portal</p>
        </div>
        
        <nav className="flex flex-col gap-1">
          <NavItem icon={<Home size={18} />} label="Home" />
          <NavItem icon={<BookOpen size={18} />} label="Course Overview" />
          <NavItem icon={<List size={18} />} label="Lessons" active />
          
          <div className="ml-10 flex flex-col gap-1 mt-1 border-l border-outline-variant/20">
            <a href="#" className="px-4 py-2 text-xs font-semibold text-primary">Lesson 1: Intro</a>
            <a href="#" className="px-4 py-2 text-xs font-medium text-secondary hover:text-primary transition-colors">Lesson 2: Core Values</a>
          </div>
          
          <NavItem icon={<MessageSquare size={18} />} label="Discussions" />
        </nav>

        <div className="mt-auto p-4 flex items-center gap-3 bg-white rounded-xl custom-shadow">
          <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPZZpHwLmty4BH4iahlcmsIrqXuaKIPi4O0vC_qOOYHy0HV2wD-9kUBW_q5AXfpE0bh-VWCmIYNzrqOfyT399jbD0-kOWjTpnybaTvnAKLDykptD_1nQEkD8BTOBriQelhNbGsSXmKxZ-cwMosXalU9VCn5ZdHHteRRGsxRP5_B8OtHcPMBnk8Yu9kIzUScdRYeH9scheGtcsaNRUqK4knIi1CjpmGccysorv7lVPHwl5Ww2v9TT_hMi5FSm1R5qIFznBtBUNXm_jJ" 
              alt="Alex Rivera"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Alex Rivera</p>
            <p className="text-[10px] text-secondary">Premium Learner</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-surface overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center w-full px-8 py-4 bg-surface sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-primary">
              <Menu size={24} />
            </button>
            <h2 className="font-headline font-bold text-lg tracking-tight text-primary-container">Lesson 1: Introduction to Balance</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-secondary hover:bg-surface-container-highest transition-colors rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-2 text-secondary hover:bg-surface-container-highest transition-colors rounded-full">
              <User size={20} />
            </button>
          </div>
        </header>

        <div className="bg-surface-container-low h-px w-full"></div>

        <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col gap-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded-full">Module 01</span>
            <h1 className="text-5xl font-black font-headline text-primary mt-4 mb-6 leading-[1.1]">Exploring Balance</h1>
            <div className="flex gap-6 text-sm text-secondary font-medium">
              <span className="flex items-center gap-2"><Clock size={16} /> 45 Min</span>
              <span className="flex items-center gap-2"><BarChart size={16} /> Introductory</span>
            </div>
          </motion.div>

          {/* Text Content Block */}
          <ContentSection title="The Foundation of Equilibrium">
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Welcome to the first step of your transformative journey. In this section, we explore the conceptual framework of "Balance"—not as a static state, but as a dynamic process of adjustment and awareness.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Understanding balance requires us to look at the intersection of professional demands, personal well-being, and our internal psychological state. We will define the three pillars of sustainable equilibrium and how to identify early signs of imbalance.
            </p>
          </ContentSection>

          {/* Video Lecture Card */}
          <motion.section 
            whileHover={{ scale: 1.01 }}
            className="bg-white border border-outline-variant/10 rounded-xl overflow-hidden custom-shadow group relative"
          >
            <div className="flex flex-col md:flex-row h-auto md:h-48">
              <div className="w-full md:w-1/3 bg-primary-container relative min-h-[150px]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBXKoZvTO1VwzksLeoqonQFuOZ3VLI11rBjbHwNzcwWxePPCnYDI-6EkYHnbGsgk7jM6TPqCKKJ6_wO9hZXCXfCUqciMllntzn1dgWb9qZMrUNnFONSSMjGwBUl_UNwSKQqgMMALQcTGewvayTuHbakuwffRowfA1Rdq_OS6nZDm3-yUyBUHrut3Zi_34Um6HZtj-w_1StLj3grityXlnJkcxoSKUhzzx0AUBblIjHDLPqXN5DMvLfQC0Cg7V69YNB9KaZPn54DUh" 
                  alt="Session Recording"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center flex-1">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Video Lecture</span>
                <h3 className="text-lg font-bold text-primary font-headline mb-2">Recorded Lecture - Session 01</h3>
                <p className="text-sm text-on-surface-variant mb-4">A deep dive into the theoretical aspects of balance and personal productivity.</p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-md hover:bg-primary-container transition-colors">Watch Recording</button>
                  <span className="text-xs text-secondary italic">28:14 duration</span>
                </div>
              </div>
            </div>
            <AdminPlusIcon />
          </motion.section>

          {/* Live Workshop Card */}
          <motion.section 
            whileHover={{ scale: 1.01 }}
            className="glass-effect border border-white/40 rounded-xl p-8 custom-shadow flex flex-col md:flex-row items-start md:items-center justify-between group relative overflow-hidden"
          >
            <div className="relative z-10 mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-primary uppercase">Upcoming Live Session</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-headline">Live Workshop: Finding Your Flow</h3>
              <p className="text-on-surface-variant mt-1 flex items-center gap-2">
                <Calendar size={14} /> Tomorrow at 10:00 AM EST
              </p>
            </div>
            <button className="relative z-10 px-6 py-3 bg-gradient-to-r from-primary-container to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Join Meeting
            </button>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <AdminPlusIcon />
          </motion.section>

          {/* Assessment Card */}
          <motion.section 
            whileHover={{ scale: 1.01 }}
            className="bg-surface-container rounded-xl p-8 group relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold text-primary">ASSESSMENT</span>
                  <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-bold">Your Submission: Not Started</span>
                </div>
                <h3 className="text-xl font-bold text-primary font-headline">Personality Assessment Quiz</h3>
                <p className="text-on-surface-variant mt-2 max-w-lg">Discover your inherent work-life tendencies and how they influence your perception of stability and stress.</p>
              </div>
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-container transition-colors">Start Quiz</button>
            </div>
            <AdminPlusIcon />
          </motion.section>

          {/* Learning Resources */}
          <section className="bg-surface-container-low rounded-xl p-8 group relative">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">Learning Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResourceItem 
                title="Lesson Slides.pdf" 
                meta="2.4 MB • PDF Document" 
                icon={<FileText size={20} className="text-on-error-container" />}
                iconBg="bg-error-container/40"
              />
              <ResourceItem 
                title="Reading Material.md" 
                meta="15 KB • Markdown File" 
                icon={<BookOpen size={20} className="text-on-tertiary-fixed-variant" />}
                iconBg="bg-tertiary-fixed/40"
              />
            </div>
            <AdminPlusIcon />
          </section>

          {/* Key Takeaway */}
          <div className="mt-8 ml-auto max-w-xs p-6 bg-surface-container-highest rounded-2xl relative border-l-4 border-accent-gold">
            <Lightbulb size={32} className="text-accent-gold mb-2 fill-accent-gold" />
            <h4 className="text-sm font-bold text-primary mb-2">Key Takeaway</h4>
            <p className="text-xs text-on-surface-variant italic leading-relaxed">
              "Balance is not something you find, it's something you create." Remember to reflect on your daily 'energy leaks' during this module.
            </p>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-32"></div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-4 py-3 font-medium text-sm transition-all duration-300 ease-in-out rounded-lg ${
        active 
          ? 'bg-surface-container-highest text-primary font-semibold' 
          : 'text-secondary hover:bg-surface-container-highest/50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ContentSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="bg-surface-container-low p-8 rounded-xl relative group">
      <div className="max-w-none">
        <h3 className="text-xl font-bold text-primary mb-4 font-headline">{title}</h3>
        {children}
      </div>
      <AdminPlusIcon />
    </section>
  );
}

function ResourceItem({ title, meta, icon, iconBg }: { title: string, meta: string, icon: React.ReactNode, iconBg: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group/item cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface">{title}</p>
          <p className="text-[10px] text-secondary">{meta}</p>
        </div>
      </div>
      <Download size={18} className="text-secondary opacity-40 group-hover/item:opacity-100 transition-opacity" />
    </div>
  );
}

function AdminPlusIcon() {
  return (
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded-full shadow-md border border-outline-variant/20 cursor-pointer z-10">
      <Plus size={16} className="text-primary" />
    </div>
  );
}
