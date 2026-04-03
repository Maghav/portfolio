"use client";

import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, FacebookIcon } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Facebook: FacebookIcon,
};

interface SocialLink {
  name: string;
  url: string;
}

interface Props {
  email?: string;
  tel?: string;
  social: SocialLink[];
}

export function ContactButtons({ email, tel, social }: Props) {
  return (
    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
      {email ? (
        <Button className="h-8 w-8" variant="outline" size="icon" asChild>
          <a href={`mailto:${email}`}>
            <MailIcon className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {tel ? (
        <Button className="h-8 w-8" variant="outline" size="icon" asChild>
          <a href={`tel:${tel}`}>
            <PhoneIcon className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {social.map((s) => {
        const Icon = ICON_MAP[s.name];
        if (!Icon) return null;
        return (
          <Button key={s.name} className="h-8 w-8" variant="outline" size="icon" asChild>
            <a href={s.url}>
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}
