"use client";

import Image from "next/image";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileText,
  FolderKanban,
  Gauge,
  GitBranch,
  LayoutGrid,
  Link2,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData, type ProjectItem } from "@/lib/portfolio-data";
import type { GithubSnapshot } from "@/lib/github";

type PortfolioPageProps = {
  github: GithubSnapshot | null;
};

const monthYearFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

const metricIcons = {
  repositories: FolderKanban,
  categories: LayoutGrid,
  performance: Gauge,
  dsa: Braces,
} as const;

function formatMonthYear(value: string) {
  return monthYearFormatter.format(new Date(value));
}

export function PortfolioPage({ github }: PortfolioPageProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 26,
      filter: shouldReduceMotion ? "none" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const featuredProjects: ProjectItem[] =
    github?.featuredRepos ?? portfolioData.projects;
  const recentRepos = github?.recentRepos ?? [];
  const githubBio = github?.bio ?? portfolioData.githubFallback.bio;
  const quickStats = [
    {
      value: `${github?.totals.repos ?? portfolioData.githubFallback.repos}+`,
      label: "GitHub repos",
      note: "Built across UI systems, APIs, ML experiments, and product-style interfaces.",
    },
    {
      value: "2",
      label: "Hands-on roles",
      note: "Internship experience in React frontend work plus full-stack training exposure.",
    },
    {
      value: `${github?.totals.stars ?? portfolioData.githubFallback.stars}`,
      label: "Public stars",
      note: "Collected through portfolio builds, practical experiments, and shipped repositories.",
    },
    {
      value: portfolioData.education.cgpa,
      label: "Current CGPA",
      note: "Computer Science undergraduate with strong DSA, OOP, DBMS, and systems fundamentals.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-20" />
      <div className="pointer-events-none absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-7rem] top-36 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6 lg:px-8">
        <motion.section
          className="grid gap-4 xl:grid-cols-[minmax(0,1.28fr)_minmax(340px,392px)]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="section-shell">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow">Jabir Imteyaz Portfolio</span>
              <span className="badge-soft">
                <BadgeCheck className="h-3.5 w-3.5" />
                Open to opportunities
              </span>
              <span className="badge-soft">
                <MapPin className="h-3.5 w-3.5" />
                Based in India
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="max-w-4xl">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">
                  {portfolioData.role}
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.3rem]">
                  {portfolioData.headline}
                </h1>
              </div>

              <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                {portfolioData.summary}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:translate-y-[-2px]"
              >
                Let&apos;s work together
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={portfolioData.resumePath}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:border-white/18 hover:bg-white/[0.06]"
              >
                Download updated resume
                <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {portfolioData.specializations.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    className="compact-shell surface-card-hover"
                  >
                    <div className="icon-wrap">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="mt-3 text-base font-semibold text-white">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {portfolioData.techStack.map((item) => (
                <span key={item} className="chip-soft">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {portfolioData.heroHighlights.map((item) => (
                <div key={item.label} className="compact-shell">
                  <p className="text-2xl font-bold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4">
            <div className="section-shell">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05]">
                  {github?.avatarUrl ? (
                    <Image
                      src={github.avatarUrl}
                      alt={portfolioData.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-emerald-400/30 to-violet-500/20 text-xl font-bold text-white">
                      JI
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge-soft">
                      <Sparkles className="h-3.5 w-3.5" />
                      Available now
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {portfolioData.name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-300">{portfolioData.profileTitle}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {portfolioData.profileBio}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {portfolioData.quickSpecialization.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-zinc-100">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {portfolioData.skillTags.map((item) => (
                  <span key={item} className="chip-soft">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <SocialLink href={`mailto:${portfolioData.email}`} label="Email" icon={Mail} />
                <SocialLink href={portfolioData.github} label="GitHub" icon={GitBranch} />
                <SocialLink href={portfolioData.linkedin} label="LinkedIn" icon={Link2} />
                <SocialLink href={portfolioData.resumePath} label="Resume" icon={FileText} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickStats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="compact-shell surface-card-hover"
                >
                  <p className="text-2xl font-bold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <div className="section-shell">
              <div className="flex items-center gap-2">
                <span className="icon-wrap">
                  <Activity className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Experience snapshot</p>
                  <p className="text-sm text-zinc-400">
                    React internship work, API integration, and Java plus DSA-based
                    problem solving.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {portfolioData.experienceSummary.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {portfolioData.metricHighlights.map((item) => {
            const Icon = metricIcons[item.icon];

            return (
              <motion.article
                key={item.label}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="compact-shell surface-card-hover"
              >
                <div className="icon-wrap">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-base font-semibold text-zinc-100">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </motion.article>
            );
          })}
        </motion.section>

        <motion.section
          className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading
              eyebrow="About"
              title="Compact, product-focused, and built with engineering depth."
            />
            <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
              {portfolioData.about}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {portfolioData.coreStrengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="Education" title={portfolioData.education.school} />
            <p className="mt-4 text-base font-semibold text-white">
              {portfolioData.education.degree}
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              {portfolioData.education.period} • CGPA {portfolioData.education.cgpa}
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {portfolioData.education.note}
            </p>

            <div className="mt-5 space-y-3">
              {portfolioData.educationHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="Current Focus" title="What I am sharpening right now" />
            <div className="mt-4 space-y-3">
              {portfolioData.currentFocus.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Internship work that improved speed, structure, and frontend execution."
            />
            <div className="mt-5 grid gap-4">
              {portfolioData.experience.map((item) => (
                <motion.div
                  key={`${item.company}-${item.title}`}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        {item.company}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="badge-soft">
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">{item.summary}</p>

                  <ul className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="GitHub Pulse" title="Recent code activity and public momentum" />

            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Public profile
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{githubBio}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Live repository metrics are fetched from GitHub when available and safely
                  fall back to curated portfolio data.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Followers
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">
                    {github?.totals.followers ?? portfolioData.githubFallback.followers}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Stars
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">
                    {github?.totals.stars ?? portfolioData.githubFallback.stars}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {recentRepos.length > 0 ? (
                recentRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 transition hover:border-white/14 hover:bg-white/[0.05]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{repo.name}</p>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {repo.description ?? "Public repository on GitHub"}
                        </p>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                        {formatMonthYear(repo.updatedAt)}
                      </span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-zinc-400">
                  GitHub live data is optional. The portfolio still stays polished and
                  complete even when API data is unavailable.
                </div>
              )}
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <SectionHeading
              eyebrow="Projects"
              title="Meaningful builds across frontend systems, collaboration flows, and explainable AI."
            />
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="chip-soft"
            >
              View GitHub profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.name}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className="section-shell surface-card-hover flex h-full flex-col"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="badge-soft">{project.category}</span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 transition hover:text-white"
                  >
                    Repo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{project.summary}</p>

                <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{project.impact}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={`${project.name}-${item}`} className="chip-soft">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-5 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Code2 className="h-4 w-4" />
                    {project.language ?? "Project build"}
                  </span>
                  {typeof project.stars === "number" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </span>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="Research" title="Ideas that connect curiosity, systems thinking, and real-world use." />
            <div className="mt-5 space-y-4">
              {portfolioData.research.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{item.summary}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="Stack & Workflow" title="Tools and habits behind the work" />
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-white">Core tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {portfolioData.tools.map((item) => (
                    <span key={item} className="chip-soft">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Learning momentum</p>
                <div className="mt-3 space-y-3">
                  {portfolioData.learningAreas.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article variants={fadeUp} className="section-shell">
            <SectionHeading eyebrow="Contact" title="Ready to contribute, learn fast, and ship carefully." />
            <p className="mt-4 text-sm leading-7 text-zinc-400">{portfolioData.contactSummary}</p>

            <div className="mt-5 space-y-3">
              <ActionLink href={`mailto:${portfolioData.email}`} icon={Mail} label="Email me" />
              <ActionLink href={portfolioData.linkedin} icon={Link2} label="Connect on LinkedIn" />
              <ActionLink href={portfolioData.github} icon={GitBranch} label="Explore GitHub" />
              <ActionLink href={portfolioData.resumePath} icon={FileText} label="Download resume" />
            </div>
          </motion.article>
        </motion.section>
      </div>
    </main>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Mail;
}) {
  const external = !href.startsWith("mailto:") && !href.startsWith("/");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/16 hover:bg-white/[0.06]"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function ActionLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Mail;
}) {
  const external = !href.startsWith("mailto:") && !href.startsWith("/");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-medium text-white transition hover:border-white/14 hover:bg-white/[0.05]"
    >
      <span className="inline-flex items-center gap-3">
        <span className="icon-wrap h-9 w-9 rounded-xl">
          <Icon className="h-4 w-4" />
        </span>
        {label}
      </span>
      <ArrowUpRight className="h-4 w-4 text-zinc-400" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
