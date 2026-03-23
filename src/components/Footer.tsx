export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Trustynx
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
              The verification layer for healthcare professionals. Building trust infrastructure that healthcare deserves.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#trust" className="text-sm text-muted hover:text-foreground transition-colors">
                  Verification Levels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:team@trustynx.com" className="text-sm text-muted hover:text-foreground transition-colors">
                  team@trustynx.com
                </a>
              </li>
              <li>
                <a href="mailto:security@trustynx.com" className="text-sm text-muted hover:text-foreground transition-colors">
                  security@trustynx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Trustynx. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
