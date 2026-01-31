import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Heading = { level: number; text: string; id: string };

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const Toc: React.FC<{ headings: Heading[] }> = ({ headings }) => {
  if (!headings.length) return null;
  return (
    <nav className="mb-4 rounded-md border border-border bg-muted/5 p-4">
      <h3 className="text-sm font-semibold mb-2">Índice</h3>
      <ul className="text-sm space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level > 2 ? "ml-4" : ""}>
            <a href={`#${h.id}`} className="text-muted-foreground hover:text-foreground">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MarkdownLayout: React.FC<{ content: string }> = ({ content }) => {
  const headings = useMemo(() => {
    const lines = content.split(/\r?\n/);
    const hs: Heading[] = [];
    for (const line of lines) {
      const m = line.match(/^\s*(#{2,3})\s+(.*)$/);
      if (m) {
        const level = m[1].length;
        const text = m[2].replace(/\s*#*$/g, "").trim();
        const id = slugify(text);
        hs.push({ level, text, id });
      }
    }
    return hs;
  }, [content]);

  return (
    <div className="mt-6">
      <Toc headings={headings} />

      <div className="bg-muted/5 p-6 rounded-lg border border-border">
        <article className="text-base text-foreground prose dark:prose-invert leading-relaxed space-y-6 prose-a:text-primary prose-li:mb-2">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children, ...props }: { children: React.ReactNode }) => {
                const text = React.Children.toArray(children).join("");
                const id = slugify(String(text));
                return (
                  <h2 id={id} className="mt-6 scroll-mt-24" {...props}>
                    {children}
                  </h2>
                );
              },
              h3: ({ children, ...props }: { children: React.ReactNode }) => {
                const text = React.Children.toArray(children).join("");
                const id = slugify(String(text));
                return (
                  <h3 id={id} className="mt-5 scroll-mt-24" {...props}>
                    {children}
                  </h3>
                );
              },
              a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-2 border-muted/40 bg-muted/5 p-4 rounded" {...props} />
              ),
              pre: ({ node, ...props }) => <pre className="rounded-md bg-muted/3 p-3 overflow-x-auto" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default MarkdownLayout;
