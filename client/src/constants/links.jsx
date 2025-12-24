import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Code2,
  Sparkles,
  Database,
  Layout,
  Box,
} from "lucide-react";

export const SECTIONS = [
  {
    title: "SOCIALS",
    items: [
      {
        name: "X / TWITTER",
        icon: <Twitter className="w-5 h-5" />,
        url: "#",
        meta: "@chaoscedd",
        color: "#f97316",
      },
      {
        name: "LINKEDIN",
        icon: <Linkedin className="w-5 h-5" />,
        url: "#",
        meta: "in/chaoscedd",
        color: "#0ea5e9",
      },
      {
        name: "GITHUB",
        icon: <Github className="w-5 h-5" />,
        url: "#",
        meta: "github.com/chaoscedd",
        color: "#ffffff",
      },
      {
        name: "EMAIL",
        icon: <Mail className="w-5 h-5" />,
        url: "mailto:contact@chaoscedd.com",
        meta: "Direct line",
        color: "#94a3b8",
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
        icon: <Terminal className="w-5 h-5" />,
        meta: "v1.2.4 Deployment",
        color: "#f97316",
      },
      {
        name: "CHAOS HUB",
        status: "BETA",
        url: "#",
        icon: <Code2 className="w-5 h-5" />,
        meta: "Link Engine",
        color: "#0ea5e9",
      },
      {
        name: "LABOR PORTAL",
        status: "FINISHED",
        url: "#",
        icon: <Sparkles className="w-5 h-5" />,
        meta: "Production Ready",
        color: "#10b981",
      },
      {
        name: "D-STORE",
        status: "INACTIVE",
        url: "#",
        icon: <Database className="w-5 h-5" />,
        meta: "Archived",
        color: "#64748b",
      },
    ],
  },
  {
    title: "ECOSYSTEM",
    items: [
      {
        name: "RESUME",
        icon: <Layers className="w-5 h-5" />,
        url: "#",
        meta: "PDF / Online",
        color: "#ffffff",
      },
      {
        name: "READ.CV",
        icon: <Globe className="w-5 h-5" />,
        url: "#",
        meta: "Professional",
        color: "#94a3b8",
      },
      {
        name: "DEV.TO",
        icon: <Cpu className="w-5 h-5" />,
        url: "#",
        meta: "Writings",
        color: "#94a3b8",
      },
    ],
  },
];
