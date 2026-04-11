/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Target, 
  BookOpen, 
  Video, 
  Facebook, 
  Globe, 
  Rss, 
  Youtube, 
  MapPin, 
  Package, 
  PenTool, 
  CreditCard, 
  Truck, 
  Layout, 
  AppWindow, 
  Palette, 
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Gift,
  TrendingUp,
  MessageSquare,
  DollarSign,
  Phone,
  Clock,
  ShieldCheck,
  Lock,
  ZapOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "9115322425";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in the 20 Digital Course Bundle for R200. Please give me access.`;

const courses = [
  { title: "Smartphone VTU Creation", icon: Smartphone },
  { title: "Lead Generation Course", icon: Target },
  { title: "Amazon Book Publishing", icon: BookOpen },
  { title: "Mobile Video Editing", icon: Video },
  { title: "Facebook Ads Course", icon: Facebook },
  { title: "Ultimate Website Design", icon: Globe },
  { title: "Blogging Monetization", icon: Rss },
  { title: "YouTube Ads Mastery", icon: Youtube },
  { title: "Google My Business Blueprint", icon: MapPin },
  { title: "Digital Creation Kit", icon: Package },
  { title: "Content Writing Course", icon: PenTool },
  { title: "PayPal Creation Course", icon: CreditCard },
  { title: "Mini Importation Training", icon: Truck },
  { title: "YouTube Channel Management", icon: Youtube },
  { title: "1000+ Premium Apps Pack", icon: Layout },
  { title: "Mobile App & Game Creation", icon: AppWindow },
  { title: "Smartphone Graphic Design", icon: Palette },
  { title: "Ultimate Data Hack Course", icon: ShieldAlert },
];

const bonuses = [
  { title: "ChatGPT Monetization", description: "Learn how to use AI to generate income." },
  { title: "Digital Marketing Blueprint", description: "The complete roadmap to online success." },
  { title: "AI Integration Course", description: "Automate your business with AI tools." },
  { title: "Copywriting Course", description: "Write words that sell anything." },
  { title: "Sell Like a Pro Course", description: "Master the art of closing deals." },
  { title: "Premium Movie Apps", description: "Access to top-tier entertainment apps." },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Digital Entrepreneur",
    content: "This bundle changed my life. I started reselling the courses and made R1,500 in my first week!",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David K.",
    role: "Freelancer",
    content: "The video editing course alone is worth more than R200. Best investment I've made this year.",
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    name: "Blessing O.",
    role: "Student",
    content: "I was skeptical at first, but the delivery was instant and the content is top-notch. Highly recommended!",
    avatar: "https://picsum.photos/seed/blessing/100/100"
  }
];

export default function App() {
  const handleGetAccess = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FFD700] selection:text-black">
      {/* WhatsApp Floating Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          Chat on WA
        </span>
      </motion.a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D91B1B] rounded-lg flex items-center justify-center font-bold text-white">D</div>
            <span className="font-display font-bold text-xl tracking-tight">DIGITAL<span className="text-[#FFD700]">BUNDLE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#courses" className="hover:text-white transition-colors">Courses</a>
            <a href="#bonuses" className="hover:text-white transition-colors">Bonuses</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <Button 
            onClick={handleGetAccess}
            className="bg-[#D91B1B] hover:bg-[#B71616] text-white font-bold rounded-full px-6"
          >
            GET ACCESS
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D91B1B]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FFD700]/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <Badge className="bg-[#FFD700] text-black font-bold px-4 py-1 rounded-full animate-pulse">
                LIMITED TIME OFFER
              </Badge>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase">
              20 EASY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91B1B] via-[#FFD700] to-[#D91B1B]">DIGITAL COURSE</span> <br />
              BUNDLE
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-display px-4">
              Master high-income skills and start your digital empire today. 
              Includes a full resale license—buy once, sell forever for 100% profit.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <div className="text-center md:text-left">
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Total Value</p>
                <p className="text-2xl line-through text-white/30 font-bold">R5,000+</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center md:text-left">
                <p className="text-[#FFD700] text-sm uppercase tracking-widest font-bold">Today's Price</p>
                <p className="text-5xl md:text-6xl font-heading text-white">R200</p>
              </div>
              <Button 
                onClick={handleGetAccess}
                size="lg" 
                className="w-full md:w-auto bg-[#D91B1B] hover:bg-[#B71616] text-white text-xl font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(217,27,27,0.4)] group"
              >
                GET INSTANT ACCESS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-8 text-white/50 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-black" alt="User" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p><span className="text-white font-bold">1,240+</span> people joined this week</p>
              </div>
              <div className="flex items-center gap-2 text-[#25D366] font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>Contact via WA: {WHATSAPP_NUMBER}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
          {[
            { icon: ShieldCheck, text: "SECURE PAYMENT" },
            { icon: Lock, text: "PRIVATE ACCESS" },
            { icon: Zap, text: "INSTANT DELIVERY" },
            { icon: CheckCircle2, text: "VERIFIED CONTENT" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-bold text-xs tracking-widest">
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Resell Highlight */}
      <section className="py-20 bg-[#D91B1B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-4xl md:text-6xl uppercase leading-none">
                BUY & RESELL FOR <br />
                <span className="text-black">100% PROFIT</span>
              </h2>
              <p className="text-white/90 text-lg">
                This isn't just a learning bundle. It's a business in a box. 
                We give you the full rights to resell these courses as your own. 
                Keep every single cent you make.
              </p>
              <ul className="space-y-3">
                {[
                  "Full Resale Rights Included",
                  "Keep 100% of the Profits",
                  "Ready-to-use Marketing Materials",
                  "Instant Digital Delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-black" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-black/20 rounded-[40px] flex items-center justify-center p-8 border border-white/10">
                <div className="text-center space-y-4">
                  <DollarSign className="w-24 h-24 mx-auto text-[#FFD700] animate-bounce" />
                  <p className="font-heading text-3xl md:text-4xl">START EARNING TODAY</p>
                  <p className="text-white/70">No technical skills required. Just share and earn.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] text-black p-6 rounded-2xl font-bold shadow-xl rotate-3">
                <p className="text-sm uppercase">Potential Earnings</p>
                <p className="text-2xl md:text-3xl font-heading">R2,000+/DAY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase">WHAT'S INSIDE THE BUNDLE?</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-lg">
              20 comprehensive courses covering the most in-demand digital skills in 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-3xl border border-black/5 bg-black/5 hover:bg-black hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D91B1B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-sm opacity-60">Master this skill and start offering services or reselling the knowledge.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl uppercase">WHAT STUDENTS SAY</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-4">
                <div className="flex gap-1 text-[#FFD700]">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg italic text-white/80">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full border border-white/20" alt={t.name} referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 hidden md:block">
              <Gift className="w-32 h-32 text-[#FFD700]/10 rotate-12" />
            </div>
            
            <div className="relative z-10">
              <Badge className="bg-[#FFD700] text-black font-bold mb-6">EXCLUSIVE BONUSES</Badge>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase mb-12">
                PLUS 6 <span className="text-[#FFD700]">FREE</span> BONUSES
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bonuses.map((bonus, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-[#FFD700]">
                      <Star className="w-5 h-5 fill-current" />
                      <h3 className="font-bold text-xl">{bonus.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm">{bonus.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white text-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl uppercase text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-black/10">
              <AccordionTrigger className="text-left font-bold text-lg">How do I get access after payment?</AccordionTrigger>
              <AccordionContent className="text-black/60">
                Immediately after your payment is confirmed via WhatsApp, you will receive a link to download the entire bundle. You can access it anytime, anywhere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-black/10">
              <AccordionTrigger className="text-left font-bold text-lg">Do I really get resale rights?</AccordionTrigger>
              <AccordionContent className="text-black/60">
                Yes! When you purchase this bundle, you get the full license to resell these courses. You keep 100% of the profit from every sale you make.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-black/10">
              <AccordionTrigger className="text-left font-bold text-lg">Is this suitable for beginners?</AccordionTrigger>
              <AccordionContent className="text-black/60">
                Absolutely. Every course is designed to take you from zero to hero. No prior experience is needed to start learning or reselling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-black/10">
              <AccordionTrigger className="text-left font-bold text-lg">What if I have issues with the download?</AccordionTrigger>
              <AccordionContent className="text-black/60">
                We have 24/7 support via WhatsApp. Just send us a message and our team will assist you immediately.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#D91B1B] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <Zap className="w-16 h-16 mx-auto text-[#FFD700] animate-pulse" />
          <h2 className="font-heading text-5xl sm:text-6xl md:text-8xl uppercase leading-none">
            DON'T MISS OUT ON <br />
            THIS <span className="text-black">CRAZY DEAL</span>
          </h2>
          <p className="text-xl text-white/90 font-display">
            The price will return to R5,000 very soon. Secure your future for the price of a meal.
          </p>
          <div className="pt-4">
            <Button 
              onClick={handleGetAccess}
              size="lg" 
              className="w-full md:w-auto bg-black hover:bg-black/80 text-white text-xl md:text-2xl font-bold h-20 px-12 rounded-2xl group"
            >
              YES! I WANT ACCESS FOR R200 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-black/60">
            Secure Payment • Instant Access • 100% Satisfaction
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D91B1B] rounded-lg flex items-center justify-center font-bold text-white">D</div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">DIGITAL<span className="text-[#FFD700]">BUNDLE</span></span>
          </div>
          <p className="text-white/40 text-sm">© 2026 Digital Bundle. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5 text-white/40 hover:text-[#FFD700] cursor-pointer transition-colors" />
            </a>
            <Youtube className="w-5 h-5 text-white/40 hover:text-[#FFD700] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/40 hover:text-[#FFD700] cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 md:hidden">
        <Button 
          onClick={handleGetAccess}
          className="w-full bg-[#D91B1B] hover:bg-[#B71616] text-white font-bold h-14 rounded-2xl shadow-2xl flex items-center justify-between px-6"
        >
          <span>GET ACCESS NOW</span>
          <span className="bg-black/20 px-3 py-1 rounded-lg">R200</span>
        </Button>
      </div>
    </div>
  );
}
