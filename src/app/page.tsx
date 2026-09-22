import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { ExperienceCard } from "@/components/experience-card";
import { AttachmentCard } from "@/components/attachment-card";
import { ContactButtons } from "@/components/contact-buttons";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-block text-xl font-extrabold tracking-tight bg-neo-yellow border-2 border-neo-black px-2 py-0.5 shadow-neo-sm uppercase">
      {children}
    </h2>
  );
}

type BadgeVariant = "default" | "secondary" | "green" | "red" | "outline" | "destructive";

function SkillCard({
  title,
  items,
  variant = "default",
  color = "bg-neo-yellow",
}: {
  title: string;
  items: readonly string[];
  variant?: BadgeVariant;
  color?: string;
}) {
  return (
    <div className="border-2 border-neo-black bg-white shadow-neo-sm p-3 flex flex-col justify-between hover:shadow-neo transition-all duration-150">
      <div>
        <div className="flex items-center gap-2 border-b-2 border-neo-black pb-1.5 mb-2">
          <span className={`inline-block w-2.5 h-2.5 border border-neo-black ${color} shrink-0`} />
          <h3 className="text-xs font-mono font-extrabold uppercase tracking-wide text-foreground">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <Badge key={item} variant={variant} className="text-[11px] py-0.5 px-1.5 font-mono">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 pb-20 bg-background print:space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-2 border-neo-black p-4 shadow-neo bg-white">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground font-medium">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline font-bold"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <ContactButtons
              email={RESUME_DATA.contact.email}
              tel={RESUME_DATA.contact.tel}
              social={RESUME_DATA.contact.social.map(({ name, url }) => ({ name, url }))}
            />
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28 border-2 border-neo-black shadow-neo-sm">
            <AvatarFallback className="text-2xl font-extrabold bg-neo-yellow text-neo-black">{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* About */}
        <Section>
          <SectionHeading>About</SectionHeading>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        {/* Work Experience */}
        <Section>
          <SectionHeading>Work Experience</SectionHeading>
          <div className="space-y-4">
            {RESUME_DATA.work.map((work) => (
              <Card key={work.company} className="overflow-hidden border-2 border-neo-black shadow-neo bg-white">
                <div className="bg-neo-blue border-b-2 border-neo-black px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-extrabold text-base md:text-lg leading-tight">
                      <a
                        className="hover:underline inline-flex items-center gap-1.5 text-neo-black"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.company}
                        <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                      </a>
                    </h3>
                    <div className="text-xs font-bold text-neo-black shrink-0 font-mono bg-white px-2 py-0.5 border-2 border-neo-black shadow-neo-sm whitespace-nowrap">
                      {work.start} – {work.end}
                    </div>
                  </div>
                  {work.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {work.badges.map((badge) => (
                        <Badge variant="default" className="text-[10px] py-0 border-neo-black" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="px-4 py-3.5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-neo-black shrink-0" />
                    <p className="font-mono text-sm md:text-base font-extrabold text-foreground">
                      {work.title}
                    </p>
                  </div>
                  {"points" in work && Array.isArray(work.points) ? (
                    <ul className="space-y-2 list-none">
                      {work.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs md:text-sm text-foreground/85 leading-relaxed font-mono"
                        >
                          <span className="inline-block h-1.5 w-1.5 bg-neo-black shrink-0 mt-2 mr-2.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-mono">
                      {work.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section>
          <SectionHeading>Education</SectionHeading>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school} className="overflow-hidden">
              <div className="bg-neo-blue border-b-2 border-neo-black px-4 pt-3 pb-2">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="font-extrabold text-base leading-tight">
                    {education.school}
                  </h3>
                  <div className="text-sm font-bold text-neo-black shrink-0 font-mono whitespace-nowrap">
                    {education.start} – {education.end}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="font-mono text-sm font-bold text-foreground">
                  {education.degree}
                </p>
              </div>
            </Card>
          ))}
        </Section>

        {/* Skills */}
        <Section>
          <SectionHeading>Skills & Technologies</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <SkillCard
              title="Infrastructure, OS & Cloud"
              items={RESUME_DATA.infraOSCloud}
              variant="green"
              color="bg-neo-green"
            />
            <SkillCard
              title="Automation & IaC"
              items={RESUME_DATA.a_iac}
              variant="red"
              color="bg-neo-coral"
            />
            <SkillCard
              title="CI/CD"
              items={RESUME_DATA.cicd}
              variant="secondary"
              color="bg-neo-blue"
            />
            <SkillCard
              title="Containers & Orchestration"
              items={RESUME_DATA.container_orchestration}
              variant="green"
              color="bg-neo-green"
            />
            <SkillCard
              title="Monitoring & Networking"
              items={RESUME_DATA.monitoring_networking}
              variant="red"
              color="bg-neo-coral"
            />
            <SkillCard
              title="Security"
              items={RESUME_DATA.security}
              variant="secondary"
              color="bg-neo-blue"
            />
            <SkillCard
              title="AI & Agentic Systems"
              items={RESUME_DATA.ai}
              variant="green"
              color="bg-neo-green"
            />
            <SkillCard
              title="Languages & Platforms"
              items={RESUME_DATA.others}
              variant="default"
              color="bg-neo-yellow"
            />
          </div>
        </Section>

        {/* Certifications
        <Section>
          <SectionHeading>Certifications</SectionHeading>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.certifications.map((cert) => (
              <AttachmentCard
                key={cert.title}
                title={cert.title}
                link={cert.link.href}
              />
            ))}
          </div>
        </Section> */}

        {/* Learning/Troubleshooting Experience */}
        <Section>
          <SectionHeading>Learning/Troubleshooting Experience</SectionHeading>
          <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.experience.map((experience) => (
              <ExperienceCard
                key={experience.title}
                title={experience.title}
                description={experience.description}
                tags={experience.techStack}
                link={"link" in experience ? experience.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section>
          <SectionHeading>Projects</SectionHeading>
          <div className="space-y-4">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                points={project.points}
                skillsLearned={project.skillsLearned}
                status={"status" in project ? project.status : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Attachments */}
        <Section>
          <SectionHeading>Attachments</SectionHeading>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.attachments.map((attachment) => (
              <AttachmentCard
                key={attachment.title}
                title={attachment.title}
                link={attachment.link.href}
              />
            ))}
          </div>
        </Section>

      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
