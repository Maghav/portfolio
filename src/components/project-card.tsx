import { Globe, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export interface ProjectCardProps {
  title: string;
  points?: readonly string[];
  skillsLearned?: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
  // Fallbacks for backwards compatibility:
  description?: string;
  tags?: readonly string[];
  link?: string;
}

export function ProjectCard({
  title,
  points,
  skillsLearned,
  liveUrl,
  githubUrl,
  status,
  description,
  tags,
  link,
}: ProjectCardProps) {
  const resolvedLiveUrl = liveUrl || link;
  const resolvedSkills = skillsLearned || tags || [];
  const bulletPoints =
    points && points.length > 0
      ? points
      : description
      ? [description]
      : [];

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-neo-black bg-white shadow-neo hover:shadow-neo-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
      {/* Top Banner with Title and Action Links */}
      <div className="bg-neo-yellow/20 border-b-2 border-neo-black px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-extrabold text-base md:text-lg tracking-tight text-foreground">
            {resolvedLiveUrl ? (
              <a
                href={resolvedLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1.5"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {status && (
            <Badge
              variant="outline"
              className="text-[10px] font-mono bg-white border-neo-black py-0 px-1.5 font-bold"
            >
              {status}
            </Badge>
          )}
        </div>

        {/* 1. Live Link & 2. GitHub Repo Link */}
        <div className="flex items-center gap-2 print:hidden">
          {resolvedLiveUrl && (
            <a
              href={resolvedLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold font-mono bg-neo-green text-neo-black border-2 border-neo-black shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Live Link</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold font-mono bg-white text-neo-black border-2 border-neo-black shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub Repo</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1 flex flex-col justify-between bg-white">
        {/* 3. Point based description */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
            Project Overview:
          </span>
          <ul className="space-y-1.5 list-none font-mono text-xs text-foreground/90">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-neo-black shrink-0 mt-1.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Print URLs */}
        <div className="hidden font-mono text-xs space-y-0.5 print:block border-t border-dashed border-neo-black pt-2">
          {resolvedLiveUrl && (
            <div>
              <span className="font-bold">Live Link:</span> {resolvedLiveUrl}
            </div>
          )}
          {githubUrl && (
            <div>
              <span className="font-bold">GitHub Repo:</span> {githubUrl}
            </div>
          )}
        </div>

        {/* 4. Skills Learned */}
        {resolvedSkills.length > 0 && (
          <div className="pt-3 border-t-2 border-neo-black/10">
            <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-neo-black block mb-2">
              Skills Learned:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {resolvedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-[10px] py-0 px-2 border-neo-black shadow-none font-bold"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
