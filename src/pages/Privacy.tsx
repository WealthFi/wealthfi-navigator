import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import privacyRaw from "@/content/privacy.md?raw";

const Privacy = () => {
  const parsed = useMemo(() => {
    try {
      return matter(privacyRaw);
    } catch (err) {
      // If parsing fails, return safe defaults to avoid crashing the app
      return { data: { title: "Política de Privacidade", lastUpdated: "", version: "" }, content: "" };
    }
  }, []);

  const { data, content } = parsed;

  return (
    <main className="container-narrow py-12">
      <h1 className="text-2xl font-bold">{data.title ?? "Política de Privacidade"}</h1>
      <p className="text-sm text-muted-foreground mt-2">Última atualização: {data.lastUpdated} • Versão: {data.version}</p>

      <article className="mt-6 text-sm text-foreground prose prose-sm dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default Privacy;
