const levels = [
  {
    level: "Level 1",
    title: "Profile Created",
    description: "Doctor has signed up and created a public profile. No credentials submitted yet.",
    status: "Unverified",
    color: "bg-[#F5F7FA] text-muted",
  },
  {
    level: "Level 2",
    title: "Verification Pending",
    description: "Credentials have been submitted and are under review by the Trustynx team.",
    status: "In Review",
    color: "bg-accent-light text-accent",
  },
  {
    level: "Level 3",
    title: "Trustynx Verified",
    description: "Credentials reviewed and confirmed. Full access to trust features and QR verification.",
    status: "Verified",
    color: "bg-accent text-white",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Trust that builds gradually
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Our verification system reflects how trust actually works. Clear levels, transparent process, no shortcuts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((item) => (
            <div
              key={item.level}
              className="bg-white rounded-xl border border-border p-6 flex flex-col"
            >
              <span className="text-xs font-medium text-muted uppercase tracking-wide">
                {item.level}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted font-(family-name:--font-dm-sans) leading-relaxed flex-1">
                {item.description}
              </p>
              <div className="mt-5">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${item.color}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
