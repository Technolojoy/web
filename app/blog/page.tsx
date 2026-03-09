import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const posts = [
  "E-waste crisis",
  "Phone recycling",
  "Refurbished electronics",
  "Rare metals recovery",
  "Circular economy"
];

export default function BlogPage() {
  return (
    <PageShell title="TECHJOY Blog" subtitle="SEO-ready publishing structure and category scaffolding.">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link href="#" key={post} className="glass rounded-2xl p-6 text-xl">{post}</Link>
        ))}
      </div>
    </PageShell>
  );
}
