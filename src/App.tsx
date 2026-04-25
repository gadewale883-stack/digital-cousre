/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

// Asset paths (from public folder)
const ASSET_VERSION = "v1.1";
const heroVideo = `/assets/hero-video.mp4?${ASSET_VERSION}`;
const heroVideoAlt = `/assets/hero-video-alt.mp4?${ASSET_VERSION}`;
const instructorImg = `/assets/instructor.jpg?${ASSET_VERSION}`;
const proofAccessImg = `/assets/proof-access.jpg?${ASSET_VERSION}`;
const proofEarningsImg = `/assets/proof-earnings.jpg?${ASSET_VERSION}`;
const proofNigeriaImg = `/assets/proof-nigeria.jpg?${ASSET_VERSION}`;
const proofPaymentImg = `/assets/proof-payment.jpg?${ASSET_VERSION}`;
const proofReceiptImg = `/assets/proof-receipt.jpg?${ASSET_VERSION}`;

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
  ZapOff,
  Plus,
  File,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "2348112222684";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in the Amomak Digital Academy 20 Course Bundle for R200. Please give me access.`;

const courses = [
  { title: "Smartphone VTU Creation", icon: Smartphone, description: "Learn how to create a top-up system for airtime and data using just your phone." },
  { title: "Lead Generation Course", icon: Target, description: "Master the art of finding high-paying customers for any business online." },
  { title: "Amazon Book Publishing", icon: BookOpen, description: "Start earning in Dollars by publishing simple books on Amazon Kindle." },
  { title: "Mobile Video Editing", icon: Video, description: "Create professional-grade videos for YouTube and TikTok using CapCut and more." },
  { title: "Facebook Ads Course", icon: Facebook, description: "Run profitable ads that bring in sales every single day without failing." },
  { title: "Ultimate Website Design", icon: Globe, description: "Build stunning websites without writing a single line of code." },
  { title: "Blogging Monetization", icon: Rss, description: "Turn your passion into profit with a blog that pays you monthly." },
  { title: "YouTube Ads Mastery", icon: Youtube, description: "Scale your business using high-converting YouTube video advertisements." },
  { title: "Google My Business", icon: MapPin, description: "Help local businesses show up on Google Maps and get paid for it." },
  { title: "Digital Creation Kit", icon: Package, description: "Everything you need to create and sell your own digital products." },
  { title: "Content Writing Course", icon: PenTool, description: "Write persuasive articles and social media posts that attract attention." },
  { title: "PayPal Creation Course", icon: CreditCard, description: "Safely create and manage a working PayPal account in restricted countries." },
  { title: "Mini Importation Training", icon: Truck, description: "Import cheap products from China and sell them for huge profits locally." },
  { title: "YouTube Management", icon: Youtube, description: "Learn how to grow and manage successful YouTube channels for others." },
  { title: "1000+ Premium Apps", icon: Layout, description: "Get access to a library of premium mobile applications and tools." },
  { title: "Mobile App & Game", icon: AppWindow, description: "Create your own apps and games and monetize them with ads." },
  { title: "Smartphone Graphic", icon: Palette, description: "Design flyers, logos, and banners like a pro using just your phone." },
  { title: "Ultimate Data Hack", icon: ShieldAlert, description: "Get cheap data for your phone and learn how to resell it for profit." },
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
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [viewingCount, setViewingCount] = useState(142);
  const [activeTab, setActiveTab] = useState<"privacy" | "terms" | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    const viewInterval = setInterval(() => {
      setViewingCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(viewInterval);
    };
  }, []);

  const openPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FFD700] selection:text-black overflow-x-hidden">
      {/* Sticky Floating Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-[100] bg-black/95 backdrop-blur-xl border-b border-[#FFD700]/20 py-3 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Badge className="bg-[#FFD700] text-black font-bold animate-pulse">FLASH SALE</Badge>
            <p className="text-sm font-bold tracking-tight">
              ⚠️ PRICE INCREASES TO <span className="text-[#D91B1B]">R2000</span> IN {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-8 h-8 rounded-full border-2 border-black" alt="user" />)}
             </div>
             <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">78 others are buying right now</p>
             <Button 
               size="sm" 
               variant="outline"
               onClick={openPurchaseModal}
               className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold rounded-full px-8"
             >
               CLAIM R200 DEAL
             </Button>
          </div>
        </div>
      </motion.div>

      {/* Compliance Modal */}
      {(activeTab === "privacy" || activeTab === "terms") && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setActiveTab(null)} />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white text-black w-full max-w-2xl rounded-[40px] p-8 md:p-12 overflow-y-auto max-h-[80vh]"
          >
            <h3 className="font-heading text-4xl uppercase mb-6">{activeTab === "privacy" ? "Privacy Policy" : "Terms & Conditions"}</h3>
            <div className="space-y-4 text-black/70 text-sm leading-relaxed">
              <p>We take your privacy seriously. All transaction data is handled via encrypted WhatsApp communication.</p>
              <p>Your contact details will only be used to facilitate the delivery of your digital products and optional future updates.</p>
              <p>By purchasing from Amomak Digital Academy, you are granted a non-exclusive license to use and resell the materials for 100% profit. You may not distribute the source links without authorization.</p>
              <p>Refunds are not provided after the digital download link has been shared due to the nature of digital goods. Please verify your interest before purchase.</p>
            </div>
            <Button onClick={() => setActiveTab(null)} className="mt-8 bg-black text-white px-8 rounded-full">Close Window</Button>
          </motion.div>
        </div>
      )}

      {/* Explanation/Purchase Modal */}
      {isPurchaseModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPurchaseModalOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative bg-[#111] border border-white/10 w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl"
          >
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-[#25D366]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-3xl uppercase">HERE'S WHAT HAPPENS NEXT</h3>
                <p className="text-white/60 text-sm">Follow these 3 simple steps to get your courses immediately.</p>
              </div>

              <div className="space-y-4 text-left">
                {[
                  { step: "1", text: "You will be redirected to WhatsApp to message our support team." },
                  { step: "2", text: "We will provide bank or PayPal details for your R200 payment." },
                  { step: "3", text: "Once payment is verified, you get your instant download link! 🚀" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-6 h-6 rounded-lg bg-[#D91B1B] flex-shrink-0 flex items-center justify-center font-bold text-xs">{item.step}</div>
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#1faa53] text-black font-bold h-16 rounded-2xl text-lg flex items-center justify-center gap-2"
                  >
                    CONTINUE TO WHATSAPP <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <button 
                  onClick={() => setIsPurchaseModalOpen(false)}
                  className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
            <div className="bg-[#25D366] p-2 text-center text-[10px] font-bold text-black uppercase tracking-tighter">
              100% SECURE & VERIFIED SERVICE
            </div>
          </motion.div>
        </div>
      )}

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white text-black w-full max-w-md rounded-[40px] p-8 shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#D91B1B] rounded-2xl flex items-center justify-center mb-6">
              <selectedCourse.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-3xl uppercase mb-4">{selectedCourse.title}</h3>
            <p className="text-black/70 text-lg leading-relaxed mb-8">
              {selectedCourse.description}
            </p>
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-[10px] tracking-widest opacity-40">What's Included:</h4>
              <ul className="space-y-2">
                {["Step-by-step Video Tutorials", "Downloadable Cheat Sheets", "Lifetime Access & Updates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              className="w-full mt-8 bg-black text-white font-bold h-14 rounded-2xl"
              onClick={() => {
                setSelectedCourse(null);
                openPurchaseModal();
              }}
            >
              LEARN THIS & MORE <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      )}

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
            <div className="w-8 h-8 bg-[#D91B1B] rounded-lg flex items-center justify-center font-bold text-white">A</div>
            <span className="font-display font-bold text-xl tracking-tight uppercase tracking-widest italic">AMOMAK<span className="text-[#FFD700]"> ACADEMY</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#courses" className="hover:text-white transition-colors">Courses</a>
            <a href="#bonuses" className="hover:text-white transition-colors">Bonuses</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <Button 
            className="bg-[#D91B1B] hover:bg-[#B71616] text-white font-bold rounded-full px-6"
            onClick={openPurchaseModal}
          >
            GET ACCESS
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
            poster={instructorImg}
          >
            <source src={heroVideo} type="video/mp4" />
            <source src={heroVideoAlt} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-[5]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D91B1B]/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FFD700]/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <Badge className="bg-[#FFD700] text-black font-bold px-4 py-1 rounded-full animate-bounce">
                OFFER ENDS IN: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </Badge>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                Promo Active for {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] tracking-tighter uppercase px-2">
              AMOMAK <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91B1B] via-[#FFD700] to-[#D91B1B]">DIGITAL</span> <br className="hidden sm:block" />
              ACADEMY
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-xl font-display px-6 leading-relaxed">
              Master high-income skills and start your digital empire today. 
              Includes a full resale license—buy once, sell forever for 100% profit.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-6 md:pt-10">
              <div className="flex items-center gap-6 md:gap-4 bg-white/5 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none w-full md:w-auto justify-center border border-white/5 md:border-none">
                <div className="text-center md:text-left">
                  <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Value</p>
                  <p className="text-lg md:text-xl line-through text-white/30 font-bold">R5,000</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center md:text-left">
                  <p className="text-[#FFD700] text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Today</p>
                  <p className="text-3xl md:text-5xl font-heading text-white">R200</p>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={openPurchaseModal}
                className="w-full md:w-auto bg-[#D91B1B] hover:bg-[#B71616] text-white text-lg font-bold h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(217,27,27,0.4)] group active:scale-95 transition-all"
              >
                GET INSTANT ACCESS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" alt="User" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold leading-none">1,240+ joined this week</p>
                    <div className="flex items-center gap-1 text-[#FFD700] mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      <span className="text-[10px] ml-1 uppercase tracking-tighter">Verified Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-[#25D366] font-bold">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <MessageSquare className="w-4 h-4" />
                  <span>Support: +234 811 222 2684</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/70 font-medium text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>{viewingCount} people viewing this offer</span>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-12 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <Badge className="bg-[#D91B1B] text-white font-bold px-4 py-1 uppercase tracking-widest text-[10px]">Simple 3-Step Process</Badge>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl uppercase">HOW TO GET INSTANT ACCESS</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-sm md:text-lg">
              Getting your 20-course bundle is quick and easy. Follow these steps to start learning today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-black/5 -translate-y-1/2 z-0" />
            
            {[
              { 
                step: "01", 
                title: "Click 'Get Access'", 
                text: "Tap any button on this page to open our official WhatsApp support chat.",
                icon: MessageSquare
              },
              { 
                step: "02", 
                title: "Pay R200", 
                text: "We will provide bank or PayPal details. Send your payment receipt to the chat.",
                icon: DollarSign
              },
              { 
                step: "03", 
                title: "Download Bundle", 
                text: "Receive your instant access link and start downloading all 20 courses immediately.",
                icon: Zap
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-[40px] border border-black/5 shadow-lg flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#D91B1B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-[#D91B1B] font-heading text-4xl mb-2">{item.step}</div>
                <h3 className="font-display font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#D91B1B]/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 space-y-6"
            >
              <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center text-black">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl uppercase">OUR MISSION</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                To empower individuals across Africa by providing affordable access to high-income digital skills and the necessary tools to achieve financial independence in the modern economy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[40px] border border-white/10 space-y-6"
            >
              <div className="w-12 h-12 bg-[#D91B1B] rounded-xl flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-4xl uppercase">OUR VISION</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To be Africa's leading digital academy, fostering a thriving community of expert entrepreneurs and digital creators who shape the future of global online commerce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Instructor Section */}
      <section className="py-20 md:py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[280px] md:max-w-sm"
            >
              <div className="absolute inset-0 bg-[#FFD700] rounded-[40px] md:rounded-[60px] rotate-6 z-0" />
              <div className="relative z-10 aspect-[4/5] bg-black rounded-[40px] md:rounded-[60px] overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={instructorImg} 
                  className="w-full h-full object-cover" 
                  alt="Lead Instructor"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-black/5 z-20">
                <p className="font-heading text-2xl md:text-3xl">10+ YEARS</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest opacity-40">Digital Experience</p>
              </div>
            </motion.div>

            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left pt-6 md:pt-0">
              <div className="space-y-4">
                <Badge className="bg-[#D91B1B] text-white font-bold px-4 py-1">MEET THE FOUNDER</Badge>
                <h2 className="font-heading text-3xl md:text-6xl uppercase leading-none">
                  AMOMAK <br className="md:hidden" />
                  <span className="text-[#D91B1B]">DIGITAL GURU</span>
                </h2>
                <p className="text-base md:text-xl text-black/70 leading-relaxed font-display px-4 md:px-0">
                  "My goal is simple: To show you that your smartphone is a goldmine. I've spent the last decade mastering the digital world, and now I'm handing you the exact blue-print I used to help 50,000+ people achieve financial freedom."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-sm mx-auto md:mx-0">
                {[
                  { label: "Students Taught", value: "50,000+" },
                  { label: "Digital Products", value: "200+" },
                  { label: "Years Experience", value: "10+" },
                  { label: "Community", value: "Active 24/7" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-[#FFD700] pl-3 md:pl-4 text-left">
                    <p className="text-xl md:text-2xl font-heading leading-none">{stat.value}</p>
                    <p className="text-[8px] md:text-[10px] uppercase font-bold opacity-40">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={openPurchaseModal}
                className="w-full md:w-auto bg-black text-white hover:bg-black/90 font-bold h-14 px-10 rounded-2xl shadow-xl"
              >
                JOIN THE ACADEMY <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
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
      <section className="py-12 md:py-20 bg-[#D91B1B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-6xl uppercase leading-none">
                BUY & RESELL FOR <br />
                <span className="text-black">100% PROFIT</span>
              </h2>
              <p className="text-white/90 text-base md:text-lg">
                This isn't just a learning bundle. It's a business in a box. 
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
              <div className="aspect-square bg-black/20 rounded-[40px] flex items-center justify-center p-8 border border-white/10 overflow-hidden group">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <img src="https://www.freeiconspng.com/uploads/seal-of-approval-png-12.png" className="w-full h-full object-contain invert" alt="Seal" />
                </motion.div>
                <div className="text-center space-y-4 relative z-10">
                  <Badge className="bg-[#FFD700] text-black font-bold mb-4">GOLDEN CERTIFIED</Badge>
                  <DollarSign className="w-20 h-20 mx-auto text-[#FFD700] animate-bounce" />
                  <p className="font-heading text-3xl md:text-4xl">OFFICIAL RESELL LICENSE</p>
                  <p className="text-white/70 text-sm">Included free with your R200 purchase today.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] text-black p-6 rounded-2xl font-bold shadow-xl rotate-3 flex items-center gap-4">
                <div>
                  <p className="text-sm uppercase">Potential Earnings</p>
                  <p className="text-2xl md:text-3xl font-heading">R2,000+/DAY</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <CheckCircle2 className="text-[#FFD700] w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Breakdown Section */}
      <section className="py-24 bg-white text-black border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-black text-white px-4 py-1 mb-4">THE MATH MAKES SENSE</Badge>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase">TOTAL VALUE BREAKDOWN</h2>
          </div>
          
          <div className="bg-white rounded-[32px] md:rounded-[40px] border-2 border-black p-6 md:p-12 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000]">
            <div className="space-y-4 md:space-y-6">
              {[
                { name: "Smartphone VTU Masterclass", price: "R500" },
                { name: "Ads Mastery (FB, YT)", price: "R1,200" },
                { name: "Amazon Publishing", price: "R800" },
                { name: "Website/App Kit", price: "R1,500" },
                { name: "Full Resale Rights", price: "R2,500" },
                { name: "6 AI/Marketing Bonuses", price: "R1,000" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-black/5 pb-3">
                  <span className="font-bold text-sm md:text-lg">{item.name}</span>
                  <span className="font-heading text-lg md:text-xl text-[#D91B1B]">{item.price}</span>
                </div>
              ))}
              
              <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase opacity-40 font-bold">Actual Total Value</p>
                  <p className="text-3xl md:text-4xl font-heading line-through opacity-30">R7,500.00</p>
                </div>
                <div className="w-px h-12 bg-black/10 hidden md:block" />
                <div className="text-center md:text-left">
                  <p className="text-[#D91B1B] text-[10px] uppercase font-bold tracking-widest">You Pay Only</p>
                  <p className="text-5xl md:text-6xl font-heading">R200.00</p>
                </div>
                <Button 
                  size="lg"
                  onClick={openPurchaseModal}
                  className="w-full md:w-auto bg-[#D91B1B] hover:bg-[#B71616] text-white font-bold h-16 px-10 rounded-2xl"
                >
                  CLAIM DEAL <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl uppercase">WHAT'S INSIDE THE BUNDLE?</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-base md:text-lg">
              20 comprehensive courses covering the most in-demand digital skills in 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCourse(course)}
                className="group p-6 rounded-3xl border border-black/5 bg-black/5 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D91B1B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-sm opacity-60">Click to see what you will learn in this course module.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Proof Section */}
      <section className="py-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#25D366] text-black font-bold">REAL CONVERSATIONS</Badge>
              <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none">
                OUR DELIVERY IS <br />
                <span className="text-[#25D366]">INSTANT</span> ON WA
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                We don't just talk. We deliver. See how our students get access to their 20-course bundle seconds after payment.
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-heading">50k+</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Students</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-4xl font-heading">24/7</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Support</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-4xl font-heading">100%</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Success</p>
                </div>
              </div>
            </div>

            {/* Simulated WhatsApp Chat UI */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#25D366]/20 blur-[100px] rounded-full" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-[#0b141a] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
              >
                {/* WA Header */}
                <div className="bg-[#202c33] p-5 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center font-bold text-black text-xl">D</div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#202c33] rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Amomak Academy Support</p>
                      <p className="text-[10px] text-[#25D366] font-medium tracking-wide">Last seen today at 10:45 AM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-white/40">
                    <Video className="w-5 h-5" />
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Chat Body */}
                <div className="p-6 space-y-6 h-[450px] overflow-y-auto bg-repeat opacity-95 scrollbar-hide" style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)', backgroundSize: '400px' }}>
                  <div className="flex justify-start">
                    <div className="bg-[#202c33] p-4 rounded-2xl rounded-tl-none max-w-[85%] text-[13px] shadow-lg border border-white/5">
                      Hello! I saw your ad on Facebook. I'm in South Africa 🇿🇦, how do I get the 20 Course Bundle for R200?
                      <div className="text-[9px] text-white/30 text-right mt-1">10:42 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] p-4 rounded-2xl rounded-tr-none max-w-[85%] text-[13px] shadow-lg border border-white/5">
                      Welcome! 🚀 It's simple. You can pay R200 via Bank Transfer or PayPal. Once payment is done, send the screenshot here and I will give you the link immediately. ✅
                      <div className="text-[9px] text-white/50 text-right mt-1">10:43 AM</div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-[#202c33] p-3 rounded-2xl rounded-tl-none max-w-[85%] text-[13px] shadow-lg border border-white/5 space-y-3">
                       <div className="relative group">
                          <img 
                            src={proofReceiptImg} 
                            alt="Payment Proof" 
                            className="w-full h-48 object-cover rounded-xl border border-white/10"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                            <span className="text-[10px] font-bold uppercase py-1 px-3 bg-white text-black rounded-full">Tap to view</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                            <File className="w-4 h-4 text-[#25D366]" />
                         </div>
                         <p className="font-bold text-[11px]">R200_SUCCESS_RECEIPT.pdf</p>
                       </div>
                       <div className="text-[9px] text-white/30 text-right">10:45 AM</div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="bg-[#005c4b] p-4 rounded-2xl rounded-tr-none max-w-[85%] text-[13px] shadow-lg border border-white/5 space-y-3"
                    >
                      <p>Payment Verified! You are now a member of the Amomak Academy community. 🎊</p>
                      <div className="bg-black/20 p-3 rounded-xl border border-white/10">
                        <p className="text-[11px] text-white/60 mb-1">Click below to access your courses:</p>
                        <p className="text-[#25D366] font-bold break-all">https://amomak.academy/access/VIP-77-88</p>
                      </div>
                      <div className="text-[9px] text-white/50 text-right">10:45 AM</div>
                    </motion.div>
                  </div>
                </div>

                {/* WA Input */}
                <div className="bg-[#202c33] p-5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/40">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div className="flex-1 h-12 bg-[#2a3942] rounded-full px-5 flex items-center text-white/40 text-[13px] border border-white/5">Type a message...</div>
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                    <Phone className="w-6 h-6 text-[#0b141a]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Success - Multi-Image Proof */}
      <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20 px-4">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              <Badge className="bg-[#D91B1B] text-white font-bold px-4 py-1 tracking-widest uppercase text-[10px]">Proof of Impact</Badge>
              <h2 className="font-heading text-4xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
                THE WALL OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700]">SUCCESS</span>
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-[24px] md:rounded-[32px] md:max-w-xs">
              <p className="text-white/60 text-xs md:text-sm font-medium italic">
                "We don't use stock photos. All these are real screenshots from our WhatsApp students."
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#25D366] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> 100% Authentic Proof
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { img: proofAccessImg, title: "Instant Access", text: "Student getting link seconds after payment." },
              { img: proofEarningsImg, title: "Earnings Proof", text: "Reselling the bundle for 100% profit." },
              { img: proofPaymentImg, title: "Payment Confirmation", text: "Successful R200 transactions." },
              { img: proofNigeriaImg, title: "Nigerian Success", text: "Local students scaling their digital skills." },
              { img: proofReceiptImg, title: "Verified Receipt", text: "Official transaction proof from bank app." },
              { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop", title: "Global Reach", text: "Joining our 50k+ strong community." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-white/5 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500">
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white">Live Proof</span>
                    </div>
                  </div>
                  
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="font-heading text-2xl uppercase mb-2 text-white">{item.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full px-10 h-16 text-lg font-bold backdrop-blur-sm"
              >
                SEE MORE ON WHATSAPP <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Recent Proof Gallery */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase">RECENT PAYMENTS</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-lg">
              We process hundreds of orders daily. Here is proof of real people getting access.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-black/5 rounded-3xl border border-black/10 p-4 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="relative z-10">
                   <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#D91B1B] flex items-center justify-center font-bold text-white text-[10px]">P{i}</div>
                      <div>
                         <p className="text-[10px] font-bold">Verified Buyer</p>
                         <p className="text-[8px] opacity-40">Just now</p>
                      </div>
                   </div>
                   <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-black/5">
                      <p className="text-[10px] break-all font-mono">HASH: 0x9823...3242{i}</p>
                      <p className="text-xl font-heading mt-2">R200.00</p>
                      <p className="text-[10px] text-[#25D366] font-bold">SUCCESSFUL</p>
                   </div>
                </div>
                <div className="relative z-10 flex justify-center">
                   <CheckCircle2 className="w-12 h-12 text-[#25D366]/20 group-hover:text-[#25D366]/40 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#FFD700] text-black font-bold px-4 py-1">REAL FEEDBACK</Badge>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl uppercase">WHAT OUR STUDENTS SAY</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Success stories from real people who started exactly where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[40px] space-y-6 relative"
              >
                <div className="flex text-[#FFD700]">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-[#FFD700]" alt={t.name} referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-[#FFD700] uppercase font-bold">{t.role}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8">
                  <Quote className="w-12 h-12 text-white/5" />
                </div>
              </motion.div>
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
      <section className="py-16 md:py-24 bg-[#D91B1B] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <Zap className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#FFD700] animate-pulse" />
          <h2 className="font-heading text-3xl sm:text-6xl md:text-8xl uppercase leading-tight">
            DON'T MISS OUT ON <br />
            THIS <span className="text-black">CRAZY DEAL</span>
          </h2>
          <p className="text-base md:text-xl text-white/90 font-display">
            The price will return to R5,000 very soon. Secure your future for the price of a meal.
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              onClick={openPurchaseModal}
              className="w-full md:w-auto bg-black hover:bg-black/80 text-white text-lg md:text-2xl font-bold h-20 px-12 rounded-2xl group transition-all"
            >
              YES! I WANT ACCESS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-black/60">
            Secure Payment • Instant Access • 100% Satisfaction
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D91B1B] rounded-lg flex items-center justify-center font-bold text-white">A</div>
            <span className="font-display font-bold text-xl tracking-tight uppercase tracking-widest italic">AMOMAK<span className="text-[#FFD700]"> ACADEMY</span></span>
          </div>
          <p className="text-white/40 text-sm">© 2026 Amomak Digital Academy. All rights reserved.</p>
          <div className="flex gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => setActiveTab("privacy")} className="hover:text-[#FFD700] transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveTab("terms")} className="hover:text-[#FFD700] transition-colors">Terms of Service</button>
          </div>
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
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 md:hidden">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-black/90 backdrop-blur-xl rounded-[32px] p-2 border border-white/10 shadow-2xl flex items-center justify-between pl-6"
        >
          <div className="flex flex-col">
            <span className="text-[10px] text-[#FFD700] font-bold uppercase tracking-widest">Only R200 Today</span>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-white/40" />
              <span className="text-xs font-heading">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </div>
          </div>
          <Button 
            onClick={openPurchaseModal}
            className="bg-[#D91B1B] hover:bg-[#B71616] text-white font-bold h-14 px-6 rounded-2xl active:scale-95 transition-all text-xs"
          >
            CLAIM ACCESS <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
