import { readFileSync } from "node:fs";
import { join } from "node:path";

export type ContentSection = {
  heading: string;
  body: string;
};

export function getContentExportRaw() {
  const filePath = join(process.cwd(), "content", "techjoy_site_content.md");
  return readFileSync(filePath, "utf8");
}

export function parseContentSections(markdown: string): ContentSection[] {
  const lines = markdown.split("\n");
  const sections: ContentSection[] = [];
  let current: ContentSection | null = null;

  for (const line of lines) {
    if (line.startsWith("# ")) {
      if (current) sections.push(current);
      current = { heading: line.replace(/^#\s+/, "").trim(), body: "" };
      continue;
    }

    if (current) current.body += `${line}\n`;
  }

  if (current) sections.push(current);
  return sections;
}

export function extractPageDefinitions(markdown: string) {
  const pagePattern = /# PAGE:\s+([^\n]+)[\s\S]*?```yaml([\s\S]*?)```/gim;
  const pageBlocks: Array<{ key: string; slug: string; title: string; description: string }> = [];
  let match = pagePattern.exec(markdown);

  while (match) {
    const key = match[1].trim();
    const yaml = match[2];
    const slug = yaml.match(/slug:\s*(.+)/)?.[1]?.trim() ?? "";
    const title = yaml.match(/title:\s*(.+)/)?.[1]?.trim() ?? "";
    const description = yaml.match(/description:\s*(.+)/)?.[1]?.trim() ?? "";

    pageBlocks.push({ key, slug, title, description });
    match = pagePattern.exec(markdown);
  }

  return pageBlocks;
}

export function getContentExportParsed() {
  const raw = getContentExportRaw();
  return {
    sections: parseContentSections(raw),
    pages: extractPageDefinitions(raw)
  };
}
