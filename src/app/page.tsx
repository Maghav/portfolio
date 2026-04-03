import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
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

function SkillGroup({ title, items, variant = "default" }: {
  title: string;
  items: readonly string[];
  variant?: "default" | "secondary" | "outline";
}) {
  return (
    <div className="space-y-1.5">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <Badge key={item} variant={variant}>{item}</Badge>
        ))}
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
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company} className="p-3">
              <CardHeader>
                <div className="flex flex-col gap-y-1 sm:flex-row sm:items-center sm:justify-between sm:gap-x-2 text-base">
                  <h3 className="inline-flex items-center flex-wrap gap-x-1 font-extrabold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                    <span className="inline-flex flex-wrap gap-1">
                      {work.badges.map((badge) => (
                        <Badge variant="secondary" className="align-middle text-xs" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums font-bold text-muted-foreground shrink-0">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm font-semibold leading-none">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        {/* Education */}
        <Section>
          <SectionHeading>Education</SectionHeading>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school} className="p-3">
              <CardHeader>
                <div className="flex flex-col gap-y-1 sm:flex-row sm:items-center sm:justify-between sm:gap-x-2 text-base">
                  <h3 className="font-extrabold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums font-bold text-muted-foreground shrink-0">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 font-medium">{education.degree}</CardContent>
            </Card>
          ))}
        </Section>

        {/* Skills */}
        <Section>
          <SectionHeading>Skills & Technologies</SectionHeading>
          <div className="space-y-4">
            <SkillGroup title="Infrastructure, OS & Cloud" items={RESUME_DATA.infraOSCloud} variant="default" />
            <SkillGroup title="Automation & IaC" items={RESUME_DATA.a_iac} variant="outline" />
            <SkillGroup title="CI/CD" items={RESUME_DATA.cicd} variant="secondary" />
            <SkillGroup title="Containers & Orchestration" items={RESUME_DATA.container_orchestration} variant="default" />
            <SkillGroup title="Monitoring & Networking" items={RESUME_DATA.monitoring_networking} variant="outline" />
            <SkillGroup title="Security" items={RESUME_DATA.security} variant="secondary" />
            <SkillGroup title="AI" items={RESUME_DATA.ai} variant="default" />
            <SkillGroup title="Other" items={RESUME_DATA.others} variant="outline" />
          </div>
        </Section>

        {/* Certifications */}
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
        </Section>

        {/* FreeCodeCamp Projects */}
        <Section>
          <SectionHeading>FreeCodeCamp Projects</SectionHeading>
          <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.fcc_da_projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Other Projects */}
        <Section>
          <SectionHeading>Other Projects</SectionHeading>
          <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
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
