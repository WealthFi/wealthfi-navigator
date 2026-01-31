import termsRaw from "./terms.md?raw";

function parseFrontmatter(raw: string) {
  const fmMatch = raw.match(/^---\s*([\s\S]*?)\s*---\s*/);
  const data: Record<string, string> = {};
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
  const content = raw.replace(/^---[\s\S]*?---\s*/, "").trim();
  return { data, content };
}

const parsed = parseFrontmatter(termsRaw);

export const terms = {
  title: parsed.data.title ?? 'Termos de Uso',
  lastUpdated: parsed.data.lastUpdated ?? '',
  version: parsed.data.version ?? '',
  content: parsed.content,
};
