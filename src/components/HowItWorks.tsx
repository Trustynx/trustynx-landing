const steps = [
  {
    number: "01",
    title: "Sign up and create your profile",
    description:
      "No documents required upfront. Add your specialties, qualifications, and practice details. Your public profile is generated instantly.",
  },
  {
    number: "02",
    title: "Share your profile",
    description:
      "Get a shareable profile link you can add to your website, social media, or send directly to patients and referral partners.",
  },
  {
    number: "03",
    title: "Get Trustynx Verified",
    description:
      "Upload your credentials when you are ready. Our team reviews your documents and grants your verified badge — unlocking trust features and QR verification.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            How it works
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Value first, verification second. Start building your professional presence immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-bold text-accent/15 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted font-(family-name:--font-dm-sans) leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
