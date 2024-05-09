import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
  } from "./ui/card";
  import { Badge } from "./ui/badge";
  
  interface Props {
    title: string;
    link?: string;
  }
  
  export function AttachmentCard({ title, link }: Props) {
    return (
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                  <span className="h-1 w-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          </div>
        </CardHeader>
        </Card>
    );
  }
  