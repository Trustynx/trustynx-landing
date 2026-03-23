export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-accent-light text-accent text-xs font-medium rounded-full tracking-wide uppercase">
          Now onboarding founding doctors
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
          The verification layer for healthcare professionals
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted font-(family-name:--font-dm-sans) max-w-2xl mx-auto leading-relaxed">
          Trustynx helps doctors prove they&apos;re legitimate and helps patients trust who they&apos;re seeing.
          Verification that&apos;s instant, visible, and reliable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors text-center"
          >
            Create your profile
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-3.5 border border-border text-foreground font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
