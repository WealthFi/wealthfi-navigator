import matter from "gray-matter";
import privacyRaw from "./privacy.md?raw";

const parsed = matter(privacyRaw);

export const privacy = {
  title: parsed.data.title ?? 'Política de Privacidade',
  lastUpdated: parsed.data.lastUpdated ?? '',
  version: parsed.data.version ?? '',
  content: parsed.content,
};
