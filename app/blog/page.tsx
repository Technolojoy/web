import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const posts = [
  "The Global E-Waste Crisis",
  "How to Recycle Electronics Safely",
  "What Happens to Recycled Phones",
  "Why Smartphone Buyback Programs Matter",
  "The Future of the Circular Economy"
];

export default function BlogPage() {
  return (
    <PageShell title="TechJoy Blog" subtitle="Insights about electronics recycling, sustainability, and technology reuse.">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link href="#" key={post} className="glass rounded-2xl p-6 text-xl">
            {post}
          </Link>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-600">This is a sample of the first 5 topics. Additional topics available on request.</p>
    </PageShell>
  );
}
