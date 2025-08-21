"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Mail, Sword, Shield, Cpu, Gamepad2, Code2, Layers3, TerminalSquare, Rocket, Link as LinkIcon, Star, CircleCheck, Download, ExternalLink, Hammer, Radar, Zap, Globe2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as ReTooltip } from "recharts";

// ————————————————————————————————————————————————————————————
// Phoenix • Roblox Dev Portfolio — single-file React component
// TailwindCSS + shadcn/ui + framer-motion + recharts
// Optimized for RoDevs portfolio usage
// ————————————————————————————————————————————————————————————

const skills = [
  { name: "Luau (Roblox Lua)", value: 95 },
  { name: "Gameplay Systems", value: 92 },
  { name: "Anti‑Cheat & Security", value: 90 },
  { name: "Physics/Character", value: 88 },
  { name: "C# (Tools/External)", value: 82 },
  { name: "UI/UX & VFX", value: 80 },
  { name: "Networking", value: 78 },
  { name: "Python (automation)", value: 70 },
];

const projects = [
  {
    title: "Arcade Rescue (Narrative Horror Prototype)",
    year: "2025",
    tags: ["Story", "Systems", "Multiplayer Queue"],
    blurb:
      "A queue‑based horror experience where players hack an arcade to free a trapped sister. Two endings, stateful progress, and a scene orchestrator controlling scares and pacing.",
    highlights: [
      "Dialogue/state machine & save system",
      "Event‑driven ‘scare graph’ and encounter director",
      "Coop queueing with party hand‑off",
    ],
  },
  {
    title: "White Doors‑Like Prototype (Cursor‑Turn Controller)",
    year: "2025",
    tags: ["Input", "UX", "Entities"],
    blurb:
      "Custom controller: view turns only when cursor reaches screen edges (FNAF‑style). Entities and rare hiding spots with reactive audio and occlusion.",
    highlights: [
      "Custom character controller & camera rig",
      "Entity AI with heat‑based search",
      "Hiding spot rarity & loot tables",
    ],
  },
  {
    title: "Planet Walk (Sticky‑Gravity Controller)",
    year: "2024",
    tags: ["Physics", "Math"],
    blurb:
      "Earth‑like gravity on a small globe. Players ‘stick’ to the surface with smooth orientation blending, slope handling, and jump arcs.",
    highlights: [
      "Surface‑normal alignment & blending",
      "Ground detection & step offset",
      "Jump apex prediction",
    ],
  },
  {
    title: "Combat Stack (Melee • Blood • Styles)",
    year: "2024",
    tags: ["Systems", "FX"],
    blurb:
      "Modular melee framework featuring cancellable combos, DI windows, hitstop, camera shake budget, and stylized blood/decals.",
    highlights: [
      "Server‑authoritative hits with client prediction",
      "Cancelable combo graph & style multipliers",
      "Deterministic ragdoll triggers",
    ],
  },
  {
    title: "PhoenixShield (Anti‑Cheat Layer)",
    year: "2023‑25",
    tags: ["Security", "Tooling"],
    blurb:
      "Lightweight anti‑cheat patterns: input sanity, server‑side validators, anti‑teleport, cooldown forgery checks, spoof detection, and forensic logging.",
    highlights: [
      "Heuristics + allow‑lists for low false‑positives",
      "Replay proof packs for moderation",
      "Exploit‑resilient remotes & rate limiting",
    ],
  },
  {
    title: "Boot‑Sequence UI (Retro Shell)",
    year: "2025",
    tags: ["UI", "Polish"],
    blurb:
      "Animated PC‑boot inspired screen with typewriter text, scanlines, glow passes, and command palette – used as stylish intro for multiple prototypes.",
    highlights: [
      "Motion pipeline & shader‑like effects",
      "Skippable cinematics & accessibility toggles",
      "Reusable theming tokens",
    ],
  },
  {
    title: "Finisher Lab (Dismember/Ragdoll FX)",
    year: "2024",
    tags: ["VFX", "Gameplay"],
    blurb:
      "Over‑the‑top finishers with physics‑based part ‘explosions’, debris pooling, and safe cleanup via Debris service.",
    highlights: [
      "Gore toggle & parental mode",
      "Deterministic break thresholds",
      "Auto‑cleanup & performance budget",
    ],
  },
];

const badges = [
  { icon: <Shield className="h-4 w-4" />, text: "Anticheat Enthusiast" },
  { icon: <Sword className="h-4 w-4" />, text: "Combat Systems" },
  { icon: <Cpu className="h-4 w-4" />, text: "Low‑Level Tools (C#)" },
  { icon: <Gamepad2 className="h-4 w-4" />, text: "Solo/Lead Dev" },
];

const quickFacts = [
  { label: "Experience", value: "5+ yrs Roblox" },
  { label: "Focus", value: "Systems • Security • Polish" },
  { label: "Location", value: "PH (UTC+8)" },
  { label: "Age", value: "17" },
];

const services = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Gameplay & Systems",
    text: "Combat, inventory, dialogue, save/data, encounters, progression, telemetry.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Netcode & Security",
    text: "Server‑auth mechanics, remote hygiene, rate‑limits, validation, forensics.",
  },
  {
    icon: <TerminalSquare className="h-5 w-5" />,
    title: "Tools & Pipelines",
    text: "Debuggers, profilers, exporters, CI‑friendly scripts, content workflows.",
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    title: "Polish & UX",
    text: "Cameras, feel tuning, VFX/sfx hooks, menu flows, accessibility toggles.",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/", icon: <Github className="h-4 w-4" /> },
  { label: "RoDevs Profile", href: "https://rodevs.org/", icon: <Globe2 className="h-4 w-4" /> },
  { label: "Contact", href: "mailto:your@email.here", icon: <Mail className="h-4 w-4" /> },
];

function SectionTitle({ icon, title, kicker }: { icon: React.ReactNode; title: string; kicker?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg ring-1 ring-white/10">{icon}</div>
      <div>
        {kicker && <p className="text-xs uppercase tracking-wider text-slate-400">{kicker}</p>}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 rounded-full bg-white/5 text-xs text-slate-300 ring-1 ring-white/10">{children}</span>;
}

function GradientBG() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}

export default function PhoenixPortfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
        <GradientBG />

        {/* NAVBAR */}
        <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-bold tracking-tight text-lg">Phoenix</a>
            <div className="hidden md:flex items-center gap-1">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="px-3 py-2 rounded-xl hover:bg-white/5 text-sm">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="rounded-xl">
                <a href="#contact"><Mail className="h-4 w-4 mr-2" />Hire Me</a>
              </Button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header id="home" className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Phoenix — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Roblox Systems Engineer</span>
              </motion.h1>
              <p className="mt-4 text-slate-300 max-w-[60ch]">
                17‑year‑old solo/lead scripter from the Philippines. I build performant gameplay systems, resilient anti‑cheat layers, and polished UX — end to end.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {badges.map((b, i) => (
                  <Badge key={i} variant="secondary" className="bg-white/10 text-slate-200 hover:bg-white/20">
                    <span className="mr-1 inline-flex items-center">{b.icon}</span>
                    {b.text}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild className="rounded-xl">
                  <a href="#projects"><Rocket className="h-4 w-4 mr-2" />View Projects</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-xl">
                  <a href="#contact"><Mail className="h-4 w-4 mr-2" />Contact</a>
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quickFacts.map((f) => (
                  <Card key={f.label} className="bg-white/5 border-white/10 rounded-2xl">
                    <CardContent className="p-3 text-center">
                      <p className="text-xs uppercase tracking-wide text-slate-400">{f.label}</p>
                      <p className="font-semibold">{f.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative"> 
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 ring-1 ring-white/10 p-2">
                <div className="h-full w-full rounded-2xl bg-slate-900/60 grid place-items-center">
                  <div className="p-6 text-center">
                    <Shield className="h-10 w-10 mx-auto mb-2" />
                    <p className="text-sm text-slate-300">Security‑minded by design</p>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                      <CircleCheck className="h-4 w-4" /><span>Server‑authored</span>
                      <CircleCheck className="h-4 w-4" /><span>Predict‑then‑verify</span>
                      <CircleCheck className="h-4 w-4" /><span>Rate‑limited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle icon={<Zap className="h-5 w-5" />} title="About Phoenix" kicker="Profile" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 rounded-2xl md:col-span-2">
              <CardContent className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  I design and implement robust gameplay frameworks on Roblox — from input to camera, combat to progression, and the guardrails that keep it fair. I love turning rough ideas into production‑ready systems with clean APIs, documentation, and sensible defaults.
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-300 list-disc pl-5">
                  <li>Solo/lead developer on multiple prototypes and client gigs</li>
                  <li>Security patterns: remote hygiene, validators, and forensics</li>
                  <li>Tooling: profilers, exporters, and debugging overlays</li>
                  <li>Polish: camera feel, hitstop, screenshake budgets, SFX hooks</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 rounded-2xl">
              <CardHeader>
                <h3 className="font-semibold">Availability</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge className="bg-emerald-500/20 text-emerald-200">Open to paid work</Badge>
                <div className="text-sm text-slate-300">Part‑time / Milestone‑based • Remote (UTC+8)</div>
                <div className="text-xs text-slate-400">Prefer: system architecture, anti‑cheat, and gameplay feel.</div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full rounded-xl"><a href="#contact"><Mail className="h-4 w-4 mr-2" />Start a thread</a></Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle icon={<Radar className="h-5 w-5" />} title="Core Skills" kicker="Technical" />
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10 rounded-2xl">
              <CardHeader><h3 className="font-semibold">Breadth & Focus</h3></CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm"><span>{s.name}</span><span className="text-slate-400">{s.value}%</span></div>
                      <Progress value={s.value} className="h-2 mt-1 bg-white/10" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 rounded-2xl">
              <CardHeader><h3 className="font-semibold">Tech Snapshot</h3></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Luau", "Roblox Studio", "Rojo", "Promise/Signal", "ProfileService", "Knit/Flamework", "DataStore v2", "C#", "ImGui", "Python", "Git", "Framer‑Motion", "UI/VFX", "Recharts"].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <div className="mt-6 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skills}>
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <ReTooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                      <Bar dataKey="value" radius={[8, 8, 8, 8]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle icon={<Rocket className="h-5 w-5" />} title="Selected Projects" kicker="Portfolio" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card key={p.title} className="group bg-white/5 border-white/10 rounded-2xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-xs text-slate-400">{p.year}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-300">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} className="bg-white/10 text-slate-200">{t}</Badge>
                    ))}
                  </div>
                  <ul className="mt-4 text-sm text-slate-300 list-disc pl-5 space-y-1">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">Role: Solo/Lead Scripter</div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="secondary" className="rounded-xl" asChild>
                      <a href="#" onClick={(e)=>e.preventDefault()}><ExternalLink className="h-4 w-4 mr-1" />Demo</a>
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="icon" variant="ghost" className="rounded-xl">
                            <Star className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-xl">Save for later (placeholder)</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle icon={<Layers3 className="h-5 w-5" />} title="What I Do" kicker="Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Card key={s.title} className="bg-white/5 border-white/10 rounded-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2"><div className="p-2 rounded-xl bg-white/5">{s.icon}</div><h3 className="font-semibold">{s.title}</h3></div>
                </CardHeader>
                <CardContent className="text-sm text-slate-300">{s.text}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle icon={<Mail className="h-5 w-5" />} title="Contact" kicker="Let’s build" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 rounded-2xl md:col-span-2">
              <CardContent className="p-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
                  <Input placeholder="Your name" className="rounded-xl bg-white/5 border-white/10" />
                  <Input type="email" placeholder="you@domain.com" className="rounded-xl bg-white/5 border-white/10" />
                  <Input placeholder="Project / Role" className="rounded-xl bg-white/5 border-white/10 md:col-span-2" />
                  <Textarea placeholder="What are you building?" className="rounded-xl bg-white/5 border-white/10 md:col-span-2 min-h-[120px]" />
                  <div className="md:col-span-2 flex items-center justify-between">
                    <div className="text-xs text-slate-400">Typical response: within 24–48h</div>
                    <Button type="submit" className="rounded-xl"><Mail className="h-4 w-4 mr-2" />Send</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 rounded-2xl">
              <CardHeader><h3 className="font-semibold">Links</h3></CardHeader>
              <CardContent className="space-y-2">
                {links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10">
                    <span className="flex items-center gap-2">{l.icon}{l.label}</span>
                    <LinkIcon className="h-4 w-4" />
                  </a>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full rounded-xl" asChild>
                  <a href="#" onClick={(e)=>e.preventDefault()}><Download className="h-4 w-4 mr-2" />Download 1‑page PDF (coming soon)</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Phoenix. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="#about" className="hover:text-slate-200">About</a>
              <a href="#projects" className="hover:text-slate-200">Projects</a>
              <a href="#contact" className="hover:text-slate-200">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
