export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <img
                src="/idec-logo.png"
                alt="IDEC logo"
                className="h-7 w-7 rounded-full object-cover"
              />
              IDEC
            </a>
            <p className="mt-1 text-sm text-stone-500">
              Notion templates for your best life.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#free-templates"
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              Free
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/idecnotion/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-100 p-2.5 text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@idecnotion"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-100 p-2.5 text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900"
              aria-label="Threads"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.243 1.33-3.023.812-.687 1.913-1.095 3.088-1.19a17.07 17.07 0 012.623.024c-.19-.907-.536-1.581-1.04-2.008-.627-.53-1.56-.8-2.77-.8h-.045c-1.094.01-2.022.338-2.698.864l-1.282-1.66C7.777 4.756 9.2 4.18 10.89 4.161h.064c1.713.009 3.08.494 4.065 1.44.862.828 1.425 1.978 1.68 3.395.603.122 1.162.3 1.67.54 1.24.584 2.19 1.48 2.747 2.592.757 1.512.82 4.086-1.195 6.06-1.728 1.694-3.877 2.46-6.963 2.482h-.005l.233-.57zm-2.478-7.814c-.063 0-.124.002-.186.005-.96.052-1.682.322-2.15.804-.384.395-.564.884-.534 1.453.044.78.382 1.322 1.003 1.724.577.374 1.378.541 2.176.498 1.063-.058 1.876-.445 2.416-1.117.378-.47.646-1.09.808-1.862a8.83 8.83 0 00-3.533-1.505z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-stone-100 pt-8 text-center">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} IDEC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
