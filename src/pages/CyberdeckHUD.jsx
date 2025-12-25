import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "../constants/links";

const HUDMetric = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] text-brand-orange/50 uppercase tracking-widest">
      {label}
    </span>
    <span className="font-mono text-xs text-white uppercase">{value}</span>
  </div>
);

const HUDCard = ({ item, isBuild }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="group relative block"
    >
      <div
        className={`relative p-4 border transition-all duration-300 ${
          isFocused
            ? "border-brand-orange bg-brand-orange/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        {/* Reticle corners */}
        <AnimatePresence>
          {isFocused && (
            <>
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-brand-orange"
              />
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-brand-orange"
              />
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-brand-orange"
              />
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-brand-orange"
              />
            </>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <div
            className={`p-2 transition-colors duration-300 ${
              isFocused
                ? "bg-brand-orange text-black"
                : "bg-white/5 text-white/50"
            }`}
          >
            {item.icon}
          </div>
          <div className="grow">
            <h3 className="font-anton text-lg tracking-widest uppercase text-white group-hover:text-glow-orange">
              {item.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono text-white/40 uppercase">
                {item.meta}
              </span>
              {isBuild && (
                <span className="text-[8px] bg-brand-orange/20 text-brand-orange px-1 border border-brand-orange/30">
                  {item.status}
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[9px] font-mono text-brand-orange/40">
              LAT: {Math.floor(Math.random() * 90)}ms
            </div>
            <div className="text-[9px] font-mono text-brand-orange/40">
              BIT: {Math.floor(Math.random() * 1024)}KB
            </div>
          </div>
        </div>

        {/* HUD Bars */}
        <div className="absolute left-0 bottom-0 w-full h-px bg-white/5 overflow-hidden">
          <motion.div
            animate={{ x: isFocused ? ["0%", "100%"] : "0%" }}
            transition={{ duration: 1, repeat: Infinity }}
            className="h-full w-1/4 bg-brand-orange"
          />
        </div>
      </div>
    </motion.a>
  );
};

export default function CyberdeckHUD() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-8 flex flex-col overflow-hidden relative selection:bg-brand-orange selection:text-black">
      {/* HUD Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />

        {/* Corner Telemetry */}
        <div className="absolute top-8 left-8 p-4 border-l border-t border-white/20">
          <HUDMetric label="SYS_OS" value="CHAOS_DECK_V.4" />
        </div>
        <div className="absolute top-8 right-8 p-4 border-r border-t border-white/20 text-right">
          <HUDMetric
            label="LOCAL_TIME"
            value={new Date().toLocaleTimeString()}
          />
        </div>
        <div className="absolute bottom-8 left-8 p-4 border-l border-b border-white/20">
          <HUDMetric label="SIGNAL_STRENGTH" value="MAX_OPTIMIZED" />
        </div>
        <div className="absolute bottom-8 right-8 p-4 border-r border-b border-white/20 text-right">
          <div className="flex gap-1 h-4 items-end">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-${Math.floor(
                  Math.random() * 4 + 1
                )} bg-brand-orange/40 animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <span className="text-[10px] text-brand-orange/50 uppercase block mt-1">
            DATA_STREAM
          </span>
        </div>
      </div>

      <header className="relative z-10 flex flex-col items-center mb-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-1 bg-brand-orange/20" />
          <div className="w-16 h-16 border-2 border-brand-orange flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(249,115,22,0.5)]">
            <span className="font-anton text-4xl">CH</span>
          </div>
          <div className="w-16 h-1 bg-brand-orange/20" />
        </div>
        <h1 className="mt-4 font-anton text-4xl tracking-[0.3em] uppercase">
          CHAOSCEDD_HUB
        </h1>
      </header>

      <main className="relative z-10 grow grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto w-full">
        {/* Navigation Sidebar */}
        <nav className="md:col-span-3 flex flex-col gap-2">
          {SECTIONS.map((section, idx) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(idx)}
              className={`text-left p-4 border transition-all duration-300 font-anton tracking-widest uppercase ${
                activeSection === idx
                  ? "bg-brand-orange text-black border-brand-orange"
                  : "bg-white/5 border-white/10 text-white/40 hover:text-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{section.title}</span>
                <span className="text-[10px] font-mono opacity-50">
                  0{idx + 1}
                </span>
              </div>
            </button>
          ))}
          <div className="mt-auto p-4 bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-[9px] font-mono text-zinc-500 mb-2 uppercase tracking-tighter">
              Deck_Hardware_Specs:
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-mono uppercase">
                <span className="text-zinc-600">CPU:</span>{" "}
                <span>ZENITH_9</span>
              </div>
              <div className="flex justify-between text-[9px] font-mono uppercase">
                <span className="text-zinc-600">RAM:</span>{" "}
                <span>128GB_BIO</span>
              </div>
              <div className="flex justify-between text-[9px] font-mono uppercase">
                <span className="text-zinc-600">ENC:</span>{" "}
                <span>SHA_1024</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <section className="md:col-span-9 space-y-4 overflow-y-auto pr-4 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {SECTIONS[activeSection].items.map((item) => (
                <HUDCard
                  key={item.name}
                  item={item}
                  isBuild={SECTIONS[activeSection].title === "PROJECTS"}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <footer className="relative z-10 mt-12 py-4 pb-20 border-t border-white/10 flex justify-between items-center opacity-30">
        <div className="text-[9px] font-mono uppercase">
          System_Healthy // All_Ports_Open
        </div>
        <div className="text-[9px] font-mono uppercase">
          User: Chaoscedd_Main_Terminal
        </div>
      </footer>
    </div>
  );
}
