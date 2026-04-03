import {
  Card,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  link?: string;
}

export function AttachmentCard({ title, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden p-3 hover:shadow-neo-lg hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150">
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
                <span className="h-2 w-2 bg-neo-green border border-neo-black"></span>
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
