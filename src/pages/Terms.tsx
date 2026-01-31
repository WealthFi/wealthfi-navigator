import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import termsRaw from "@/content/terms.md?raw";

const Terms = () => {
  const parsed = useMemo(() => {
    // Manual frontmatter parser (avoids using gray-matter at runtime which can fail in some browser bundles)
    try {
      const fmMatch = termsRaw.match(/^---\s*([\s\S]*?)\s*---\s*/);
      const data: Record<string, any> = {};
      if (fmMatch) {
        const fm = fmMatch[1];
        fm.split(/\r?\n/).forEach((line) => {
          const m = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
          if (m) {
            let val = m[2].trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
            data[m[1]] = val;
          }
        });
      }
      const content = termsRaw.replace(/^---[\s\S]*?---\s*/, "").trim();
      return { data: { title: data.title ?? "Termos de Uso", lastUpdated: data.lastUpdated ?? "", version: data.version ?? "" }, content };
    } catch (err) {
      return { data: { title: "Termos de Uso", lastUpdated: "", version: "" }, content: "" };
    }
  }, []);

  const { data, content } = parsed;


  class MarkdownErrorBoundary extends React.Component<{children: React.ReactNode},{hasError:boolean}> {
    constructor(props:{children: React.ReactNode}){
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(){
      return { hasError: true };
    }
    componentDidCatch(error: any){
      // eslint-disable-next-line no-console
      console.error('Markdown render error:', error);
    }
    render(){
      if(this.state.hasError){
        return <div className="p-4 bg-destructive/5 text-destructive rounded">Erro ao renderizar conteúdo.</div>;
      }
      return this.props.children as React.ReactElement;
    }
  }

  return (
    <main className="container-narrow py-12">
      <h1 className="text-2xl font-bold">{data.title ?? "Termos de Uso"}</h1>
      <p className="text-sm text-muted-foreground mt-2">Última atualização: {data.lastUpdated} • Versão: {data.version}</p>

      <article className="mt-6 text-sm text-foreground prose prose-sm dark:prose-invert">
        <MarkdownErrorBoundary>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </MarkdownErrorBoundary>
      </article>
    </main>
  );
};

export default Terms;
