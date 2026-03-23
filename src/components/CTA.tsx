export default function CTA() {
  return (
    <section id="join" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Join as a founding doctor
        </h2>
        <p className="mt-4 text-muted text-lg leading-relaxed">
          Be among the first healthcare professionals to build a verified presence on Trustynx.
          Founding doctors receive a permanent badge recognizing their early trust in the platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors text-center"
          >
            Create your profile
          </a>
          <a
            href="mailto:team@trustynx.com"
            className="w-full sm:w-auto px-8 py-3.5 border border-border text-foreground font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            Talk to our team
          </a>
        </div>

        <p className="mt-6 text-xs text-muted">
          No documents required to get started. Create your profile in under two minutes.
        </p>
      </div>
    </section>
  );
}
