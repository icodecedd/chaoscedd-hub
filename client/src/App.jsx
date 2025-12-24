import { Badge } from "./components/ui/badge";
import {
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Mail,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Code2,
  Sparkles,
} from "lucide-react";

const SECTIONS = [
  {
    title: "SOCIALS",
    items: [
      {
        name: "X / TWITTER",
        icon: <Twitter className="w-5 h-5 text-brand-orange" />,
        url: "#",
        meta: "@chaoscedd",
      },
      {
        name: "LINKEDIN",
        icon: <Linkedin className="w-5 h-5 text-brand-blue" />,
        url: "#",
        meta: "in/chaoscedd",
      },
      {
        name: "GITHUB",
        icon: <Github className="w-5 h-5 text-white" />,
        url: "#",
        meta: "github.com/chaoscedd",
      },
      {
        name: "EMAIL",
        icon: <Mail className="w-5 h-5 text-white/50" />,
        url: "mailto:contact@chaoscedd.com",
        meta: "Direct line",
      },
    ],
  },
  {
    title: "BUILDS",
    items: [
      {
        name: "MANTRIX",
        status: "ONGOING",
        url: "#",
        icon: <Terminal className="w-5 h-5 text-brand-orange" />,
        meta: "v1.2.4 Deployment",
      },
      {
        name: "CHAOS HUB",
        status: "BETA",
        url: "#",
        icon: <Code2 className="w-5 h-5 text-brand-blue" />,
        meta: "Link Engine",
      },
      {
        name: "LABOR PORTAL",
        status: "FINISHED",
        url: "#",
        icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
        meta: "Production Ready",
      },
      {
        name: "D-STORE",
        status: "INACTIVE",
        url: "#",
        icon: <Layers className="w-5 h-5 text-white/20" />,
        meta: "Archived",
      },
    ],
  },
  {
    title: "ECOSYSTEM",
    items: [
      {
        name: "RESUME",
        icon: <Layers className="w-5 h-5 text-white" />,
        url: "#",
        meta: "PDF / Online",
      },
      {
        name: "READ.CV",
        icon: <Globe className="w-5 h-5 text-white/50" />,
        url: "#",
        meta: "Professional",
      },
      {
        name: "DEV.TO",
        icon: <Cpu className="w-5 h-5 text-white/50" />,
        url: "#",
        meta: "Writings",
      },
    ],
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    FINISHED: "border-emerald-500/50 text-emerald-400 bg-emerald-500/5",
    ONGOING: "border-brand-orange/50 text-brand-orange bg-brand-orange/5",
    BETA: "border-brand-blue/50 text-brand-blue bg-brand-blue/5",
    INACTIVE: "border-white/10 text-white/20 bg-white/5",
  };

  return (
    <Badge
      variant="outline"
      className={`rounded-none text-mono px-2 py-0 border-t-0 border-l-0 border-r-0 border-b-2 ${styles[status]}`}
    >
      {status}
    </Badge>
  );
};

const Card = ({ item, isBuild = false }) => (
  <a href={item.url} className="group block">
    <div
      className={`monolith-card p-4 h-full flex items-center gap-4 ${
        isBuild ? "border-hover-orange" : "border-hover-blue"
      }`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-black/40 flex items-center justify-center border border-white/5 shadow-inner">
          {item.icon}
        </div>
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-anton text-xl tracking-tight text-white group-hover:text-brand-orange transition-colors truncate">
            {item.name}
          </h3>
          {isBuild && <StatusBadge status={item.status} />}
        </div>
        <p className="text-mono text-white/30 mt-1">{item.meta}</p>
      </div>
    </div>
  </a>
);

export function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-12 relative selection:bg-brand-orange selection:text-black">
      {/* Background Grid Pattern (Subtle) */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <main className="max-w-6xl mx-auto relative z-10">
        {/* Header Monolith */}
        <header className="flex flex-col items-center mb-16 space-y-4 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-24 h-24 bg-black border-2 border-brand-orange/50 flex items-center justify-center animate-pulse-glow shadow-2xl header-glow">
            <span className="font-anton text-5xl text-white tracking-tighter">
              CH
            </span>
          </div>
          <div className="text-center">
            <h1 className="font-anton text-7xl md:text-8xl tracking-tighter text-white leading-none">
              CHAOSCEDD
            </h1>
            <div className="mt-2 flex items-center justify-center gap-4">
              <span className="h-px bg-white/10 w-12" />
              <p className="text-mono text-brand-orange tracking-[0.4em]">
                SYSTEM OPERATOR
              </p>
              <span className="h-px bg-white/10 w-12" />
            </div>
          </div>
        </header>

        {/* Dashboard Sections */}
        <div className="grid gap-16">
          {SECTIONS.map((section, idx) => (
            <section
              key={section.title}
              className={`animate-in fade-in slide-in-from-bottom-4 duration-700`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-anton text-2xl tracking-widest text-white/20">
                  {section.title}
                </h2>
                <div className="h-px bg-white/5 flex-grow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {section.items.map((item) => (
                  <Card
                    key={item.name}
                    item={item}
                    isBuild={section.title === "BUILDS"}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Terminal Style */}
        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-mono text-white/20">
            ROOT@CHAOSHUB: ~/PROJECTS/TOTAL_LINKS:{" "}
            {SECTIONS.reduce((acc, s) => acc + s.items.length, 0)}
          </div>
          <div className="text-mono text-brand-orange animate-pulse">
            [ READY FOR COMMAND ]
          </div>
          <div className="text-mono text-white/20">
            EST. 2025 // ENCRYPTED_CONNECTION
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
