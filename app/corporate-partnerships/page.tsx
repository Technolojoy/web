import { PageShell } from "@/components/PageShell";

const services = [
  "IT asset disposal",
  "Bulk electronics recycling",
  "Secure data destruction",
  "Device resale programs"
];

export default function CorporatePage() {
  return (
    <PageShell
      title="Corporate Electronics Recycling and IT Asset Disposal"
      subtitle="Businesses generate large quantities of electronic equipment over time. TechJoy helps organizations manage end-of-life devices responsibly."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((item) => (
          <div key={item} className="glass rounded-2xl p-6">
            {item}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
