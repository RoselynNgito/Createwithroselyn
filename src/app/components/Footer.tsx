export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Divider line - same alignment as other sections */}
        <div className="border-t-2 border-black/80"></div>
        
        {/* Footer content */}
        <div className="py-8">
          <p
            className="text-stone-700 text-sm text-left"
            style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            © {currentYear} Design With Roselyn | Get In Touch{" "}
            <a
              href="mailto:roselynngito@gmail.com"
              className="text-[#800020] underline hover:text-[#600018] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}
            >
              roselynngito@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}