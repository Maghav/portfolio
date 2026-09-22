import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface ExperienceCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ExperienceCard({
  title,
  description,
  tags,
  link,
}: ExperienceCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-2 border-neo-black bg-white shadow-neo hover:shadow-neo-lg hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150 p-3.5 justify-between">
      <div className="space-y-2">
        <h3 className="font-extrabold text-sm md:text-base leading-tight">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1.5"
            >
              {title}
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-3 pt-2.5 border-t border-neo-black/10 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            className="px-1.5 py-0 text-[10px] font-mono border-neo-black shadow-none font-bold"
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
