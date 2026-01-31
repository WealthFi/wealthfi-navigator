import matter from "gray-matter";
import termsRaw from "./terms.md?raw";

const parsed = matter(termsRaw);

export const terms = {
  title: parsed.data.title ?? 'Termos de Uso',
  lastUpdated: parsed.data.lastUpdated ?? '',
  version: parsed.data.version ?? '',
  content: parsed.content,
};
