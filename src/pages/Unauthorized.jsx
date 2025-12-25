import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HUDMetric = ({ label, value, colorClass = "text-brand-orange" }) => (
  <div className="flex flex-col gap-1">
    <span className={`text-[10px] ${colorClass}/50 uppercase tracking-widest`}>
      {label}
    </span>
    <span className="font-mono text-xs text-white uppercase">{value}</span>
  </div>
);

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 md:p-8 flex flex-col items-center justify-center overflow-hidden relative selection:bg-brand-orange selection:text-black">
      {/* HUD Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />

        {/* Corner Telemetry */}
        <div className="absolute top-4 left-4 p-4 border-l border-t border-white/20">
          <HUDMetric
            label="SYS_STATUS"
            value="ACCESS_DENIED"
            colorClass="text-red-500"
          />
        </div>
        <div className="absolute top-4 right-4 p-4 border-r border-t border-white/20 text-right">
          <HUDMetric
            label="ERROR_CODE"
            value="401_UNAUTHORIZED"
            colorClass="text-red-500"
          />
        </div>
        <div className="absolute bottom-4 left-4 p-4 border-l border-b border-white/20">
          <HUDMetric
            label="THREAT_LEVEL"
            value="CRITICAL"
            colorClass="text-red-500"
          />
        </div>
        <div className="absolute bottom-4 right-4 p-4 border-r border-b border-white/20 text-right">
          <HUDMetric
            label="SEC_PROTOCOL"
            value="LOCKDOWN_ACTIVE"
            colorClass="text-red-500"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center space-y-6 md:space-y-8 max-w-xl px-4"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 border-2 border-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            <span className="font-anton text-4xl text-red-500">!</span>
          </motion.div>

          <div className="space-y-1">
            <h1 className="font-anton text-6xl md:text-8xl tracking-tighter uppercase text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">
              401
            </h1>
            <h2 className="font-anton text-xl md:text-2xl tracking-[0.2em] uppercase text-white/90">
              Page Not Found
            </h2>
          </div>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 p-5 md:p-6 backdrop-blur-md space-y-4 relative">
          {/* Decorative bits */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent" />

          <p className="font-mono text-[10px] md:text-xs text-white/50 uppercase leading-relaxed tracking-wider">
            SYSTEM_ERROR: Access to the requested terminal node has been
            terminated by central security. Credentials provided are either
            malformed or lack the necessary clearance level for this sector.
          </p>

          <div className="flex items-center gap-3 justify-center py-1">
            <div className="h-px grow bg-red-500/10" />
            <span className="text-[9px] font-mono text-red-500/40 whitespace-nowrap px-3 tracking-[0.2em]">
              USER_SCAN_IN_PROGRESS
            </span>
            <div className="h-px grow bg-red-500/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-left space-y-0.5">
              <span className="block text-[7px] text-zinc-600 uppercase font-mono">
                Entry_Point:
              </span>
              <span className="block text-[9px] text-red-500/60 font-mono uppercase">
                Unknown_Gateway
              </span>
            </div>
            <div className="text-right space-y-0.5">
              <span className="block text-[7px] text-zinc-600 uppercase font-mono">
                Log_ID:
              </span>
              <span className="block text-[9px] text-red-500/60 font-mono uppercase">
                #EX-401-2049
              </span>
            </div>
          </div>
        </div>

        <Link to="/" className="inline-block group relative">
          <div className="relative px-8 py-3 bg-white/5 border border-white/10 group-hover:bg-red-500 group-hover:text-black transition-all duration-300">
            {/* Reticle corners */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-500 group-hover:border-black" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-500 group-hover:border-black" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-red-500 group-hover:border-black" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-500 group-hover:border-black" />

            <span className="font-anton tracking-[0.2em] uppercase text-base">
              Return to Deck
            </span>
          </div>
        </Link>
      </motion.div>

      <footer className="fixed bottom-4 w-full px-8 z-10 flex justify-between items-center opacity-20 pointer-events-none">
        <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
          Trace_ID: {Math.random().toString(36).substring(7).toUpperCase()}
        </div>
        <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
          System_Lockdown_Mode: ON
        </div>
      </footer>
    </div>
  );
}
