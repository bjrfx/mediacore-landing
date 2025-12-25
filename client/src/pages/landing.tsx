import { Button } from "@/components/ui/button";
import AudioVisualizer from "../components/AudioVisualizer";
import { Badge } from "@/components/ui/badge";
import {
  Headphones,
  Play,
  Sparkles,
  Shield,
  Heart,
  Smartphone,
  Globe,
  Volume2,
  ArrowRight,
  Check,
  Star,
  Zap,
  Layers,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { InstagramIcon, TwitterXIcon, YoutubeIcon } from "../components/SocialIcons";

const APP_URL = "https://app.mediacore.in";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img
              src="/logo512.png"
              alt="MediaCore Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary object-cover"
            />
            <span className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif"}}>
              MediaCore<span className="text-primary" style={{color: '#5ec26a'}}>.in</span>
            </span>
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="default"
              data-testid="button-navbar-cta"
              className="
    group
    rounded-full
    flex items-center
    transition-all
    duration-200
    hover:bg-white/10
  "
            >
              <span className="hidden sm:inline">Open App</span>
              <span className="sm:hidden">App</span>

              <ArrowRight
                className="
      w-4 h-4
      ml-1
      transition-transform
      duration-200
      ease-out
      group-hover:translate-x-1
    "
              />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B0F14] to-[#0F1623]">
      <div className="absolute inset-0 gradient-overlay" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge variant="secondary" className="glass text-white border-white/20 px-3 py-1.5 text-xs md:text-sm">
              <Check className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-green-400" />
              100% Free
            </Badge>
            <Badge variant="secondary" className="glass text-white border-white/20 px-3 py-1.5 text-xs md:text-sm">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-blue-400" />
              No Ads
            </Badge>
            <Badge variant="secondary" className="glass text-white border-white/20 px-3 py-1.5 text-xs md:text-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-purple-400" />
              No Credit Card
            </Badge>
          </div>
          <div className="flex justify-center mt-8">
            <AudioVisualizer />
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Stream Spiritual Content
              <span className="block mt-2 text-purple-300">
                For Your Inner Journey
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              MediaCore is a beautiful, ad-free streaming platform designed for spiritual seekers and wellness enthusiasts. Experience live transcription, curated content, and a distraction-free environment for your growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                data-testid="button-hero-cta"
                className="
    group
    rounded-full
    px-8 py-6
    text-lg font-semibold
    flex items-center
    gap-2
    transition-all
    duration-300
  "
              >
                <Play className="w-5 h-5 fill-current" />

                <span>Go to Media Player</span>

                <ArrowRight
                  className="
      w-5 h-5
      transition-all
      duration-300
      group-hover:translate-x-1.5
      group-hover:opacity-100
      opacity-80
    "
                />
              </Button>
            </a>
            <Badge
              variant="outline"
              className="glass text-white border-white/20 px-4 py-2 flex items-center"
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              {/* Green dot fade in/out
              <span className="relative flex h-3 w-3 mr-2">
                <span className="absolute h-3 w-3 rounded-full bg-green-400 animate-[pulse_2s_ease-in-out_infinite]" />
              </span>
              */}
              Web App Live Now
            </Badge>
          </div>

          <div className="pt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">Trusted by seekers worldwide</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Add class name to: "animate-bounce" to animate*/}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{marginBottom: '-4%'}}> 
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div> */}
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-[#0F1623] to-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Layers className="w-4 h-4 mr-1.5" />
              About MediaCore
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Sacred Space for
              <span className="block text-green-500">Mindful Media</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              MediaCore is more than just a streaming platform—it's a sanctuary for your spiritual journey. We've designed every aspect of the experience to support your inner growth, from the calming interface to the carefully curated content.
            </p>
            <ul className="space-y-4">
              {[
                "Curated spiritual and wellness audio library",
                "High-quality video teachings and meditations",
                "Distraction-free, ad-free streaming experience",
                "Modern, secure, and beautifully designed platform",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                size="lg"
                data-testid="button-about-cta"
                className="
    group
    rounded-full
    mt-4
    flex items-center
    gap-2
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:shadow-md
    hover:shadow-white/10
  "
              >
                <span>Explore MediaCore</span>

                <ArrowRight
                  className="
      w-4 h-4
      transition-transform
      duration-300
      ease-out
      group-hover:translate-x-1.5
    "
                />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/15 blur-3xl rounded-3xl" />
            <div className="relative glass-card rounded-3xl p-6 md:p-8 glow-soft">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                    <Headphones className="w-10 h-10 text-green-400" />
                  </div>
                  <p className="text-gray-400 text-sm">Immerse in spiritual content</p>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-6 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-10 bg-green-400/80 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                    <div className="w-1 h-8 bg-green-400/70 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                    <div className="w-1 h-12 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                    <div className="w-1 h-6 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    <div className="w-1 h-10 bg-green-400/80 rounded-full animate-pulse" style={{ animationDelay: '500ms' }} />
                    <div className="w-1 h-7 bg-green-400/65 rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Ad-Free Experience",
      description: "No interruptions, no distractions. Just pure, focused content for your spiritual journey without any advertisements.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: MessageSquare,
      title: "Live Transcription",
      description: "Follow along with live lyrics and transcripts as you listen. Seek to any moment by clicking on the text.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: Volume2,
      title: "Audio & Video Library",
      description: "Access a growing collection of spiritual teachings, meditations, and wellness content in both audio and video formats.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Zap,
      title: "Modern & Secure",
      description: "Built with the latest technology for a fast, reliable, and secure streaming experience you can trust.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      icon: Globe,
      title: "Web App Available",
      description: "Start streaming right now from any browser. No downloads required—just visit the web app and begin your journey.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps Soon",
      description: "iOS and Android apps are in development. One account, seamless experience across all your devices.",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-[#0B0F14] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            <Sparkles className="w-4 h-4 mr-1.5" />
            Key Features
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need for
            <span className="block text-green-500">Spiritual Growth</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We've built MediaCore with features that support your journey toward inner peace and awakening.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full" data-testid={`card-feature-${index}`}>
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      title: "No Ads, Ever",
      description: "Your spiritual practice deserves complete focus. We'll never interrupt your experience with advertisements.",
    },
    {
      title: "No Payments Required",
      description: "MediaCore is 100% free. No subscriptions, no hidden fees, no credit card needed to access all content.",
    },
    {
      title: "No Distractions",
      description: "A clean, minimal interface designed to keep you present and focused on what matters—your growth.",
    },
    {
      title: "Built for Inner Peace",
      description: "Every design decision is made with mindfulness in mind. From colors to interactions, we prioritize calm.",
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-[#0B0F14] to-[#0F1623] relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            <Heart className="w-4 h-4 mr-1.5" />
            Our Philosophy
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose
            <span className="text-green-500"> MediaCore</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We believe spiritual content should be accessible to everyone, without barriers or distractions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-left"
              data-testid={`card-reason-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AvailabilitySection() {
  return (
    <section className="py-24 md:py-40 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            <Smartphone className="w-4 h-4 mr-1.5" />
            Platform Availability
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            One Account,
            <span className="text-green-500"> Everywhere</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access your spiritual content library from any device. Start on the web today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 text-center"
            data-testid="card-platform-web"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-400/10 flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-green-400" />
            </div>
            <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400/30 mb-4">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              Live Now
            </Badge>
            <h3 className="text-xl font-semibold text-white mb-2">Web App</h3>
            <p className="text-gray-400 mb-4">
              Access MediaCore instantly from any modern browser. No downloads required.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                style={{marginLeft: '4.5rem'}}
                variant="default"
                data-testid="button-web-app"
                className="
    group
    rounded-full
    flex items-center
    gap-1.5
    transition-all
    duration-300
    hover:bg-white/10
  "
              >
                <span>Open Web App</span>

                <ArrowRight
                  className="
      w-4 h-4
      transition-transform
      duration-300
      ease-out
      group-hover:translate-x-1.5
    "
                />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 text-center"
            data-testid="card-platform-ios"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-400/10 flex items-center justify-center mb-4">
              <SiAppstore className="w-8 h-8 text-gray-400" />
            </div>
            <Badge variant="secondary" className="bg-gray-400/20 text-gray-400 border-gray-400/30 mb-4">
              Coming Soon
            </Badge>
            <h3 className="text-xl font-semibold text-white mb-2">iOS App</h3>
            <p className="text-gray-400 mb-4">
              Native iPhone and iPad app coming to the App Store soon.
            </p>
            <Button variant="glass" className="rounded-full" disabled data-testid="button-ios-app">
              App Store
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 text-center"
            data-testid="card-platform-android"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-400/10 flex items-center justify-center mb-4">
              <SiGoogleplay className="w-8 h-8 text-gray-400" />
            </div>
            <Badge variant="secondary" className="bg-gray-400/20 text-gray-400 border-gray-400/30 mb-4">
              Coming Soon
            </Badge>
            <h3 className="text-xl font-semibold text-white mb-2">Android App</h3>
            <p className="text-gray-400 mb-4">
              Native Android app coming to the Google Play Store soon.
            </p>
            <Button variant="glass" className="rounded-full" disabled data-testid="button-android-app">
              Play Store
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-gradient-to-b from-[#0F1623] to-[#0B0F14]">
      <div className="absolute inset-0 gradient-overlay opacity-40" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 glow-primary"
          data-testid="cta-final-container"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of seekers who have discovered the peace of mindful media consumption. It's free, it's beautiful, and it's waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                data-testid="button-final-cta"
                className="
    group
    rounded-full
    px-10 py-6
    text-lg font-semibold
    flex items-center
    gap-2
    transition-all
    duration-300
    hover:shadow-lg
    hover:shadow-green-500/20
    hover:-translate-y-0.5
  "
              >
                <Play className="w-5 h-5 fill-current" />

                <span>Go to MediaCore App</span>

                <ArrowRight
                  className="
      w-5 h-5
      transition-all
      duration-300
      opacity-80
      group-hover:translate-x-2
      group-hover:opacity-100
    "
                />
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No sign-up required to browse. Create an account to save your favorites.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legal Links Section - Visible for crawlers */}
        <div className="mb-8 pb-8 border-b border-white/5">
          <p className="text-xs text-gray-500 mb-3">Legal</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="/privacy" className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-green-500 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/logo512.png"
              alt="MediaCore Logo"
              className="w-9 h-9 rounded-lg bg-green-500 object-cover"
            />
            <span className="text-lg font-semibold text-white tracking-wide">
              MediaCore<span className="text-green-500">.in</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            Spiritual and wellness media streaming. Free to use.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-5">
            <a
              href="https://www.instagram.com/mediacore_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <InstagramIcon className="w-10 h-10" />
            </a>

            <a
              href="https://x.com/mediacore_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <TwitterXIcon className="w-10 h-10" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCzWTJPHliULme0kC2reNhLg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <YoutubeIcon className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} MediaCore. Built with love for spiritual seekers.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <a href="/privacy" className="text-gray-400 hover:text-green-500 transition-colors whitespace-nowrap">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="/terms" className="text-gray-400 hover:text-green-500 transition-colors whitespace-nowrap">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a
                href="mailto:contact@mediacore.in"
                className="text-gray-400 hover:text-green-500 transition-colors whitespace-nowrap"
              >
                contact@mediacore.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IframeApp() {
  return (
    <section className="hidden lg:block relative py-24 md:py-40 bg-gradient-to-b from-[#0B0F14] to-[#0F1623] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="section-live-preview">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            <Sparkles className="w-4 h-4 mr-1.5" />
            Live Preview
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            See MediaCore In Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Explore a real, distraction-free media experience. This preview shows the actual web app — optimized for clarity, with smooth playback, live transcription, and a calm, focused interface.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-5"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">What you can try</h3>
              <ul className="space-y-4">
                {[
                  'Click anywhere in the transcript to seek instantly',
                  'Toggle captions to follow along with teachings',
                  'Switch between audio and video where available',
                  'Add items to favorites to revisit sessions later',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  data-testid="button-preview-cta"
                  className="group mt-6 rounded-full flex items-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Open Full Web App</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Device preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-7 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-green-500/20 via-purple-500/10 to-blue-500/20 blur-2xl" />
              <div
                className="relative w-[400px] h-[820px] rounded-[2.5rem] border-[10px] border-black bg-black shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden"
                data-testid="preview-device"
              >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-10" />
                <iframe
                  src={APP_URL}
                  title="MediaCore Live Preview"
                  className="w-full h-full border-none rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <FeaturesSection />
        <IframeApp />
        <WhySection />
        <AvailabilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
