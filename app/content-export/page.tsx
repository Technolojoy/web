import { getContentExportParsed } from "@/lib/content-export";

export default function ContentExportPage() {
  const data = getContentExportParsed();

  return (
    <main className="section">
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Content Export Pipeline</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">
        Parsed from <code>content/techjoy_site_content.md</code> for static-site generation, SEO route mapping, and schema injection workflows.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-5">Sections: {data.sections.length}</div>
        <div className="glass rounded-2xl p-5">Page definitions: {data.pages.length}</div>
        <div className="glass rounded-2xl p-5">API endpoint: /api/content-export</div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/60 bg-white/80 p-6">
        <h2 className="text-2xl font-semibold">Parsed pages</h2>
        <div className="mt-4 grid gap-3">
          {data.pages.map((page) => (
            <div key={page.key} className="rounded-xl border border-slate-200 p-4">
              <p className="font-medium">{page.title || page.key}</p>
              <p className="text-sm text-slate-600">{page.slug}</p>
              <p className="mt-1 text-sm text-slate-500">{page.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
