<footer className="bg-primary-900 text-white py-12">
  <div className="container mx-auto px-6 space-y-12">
    {/* Top Row: Logo + Social */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div
        className="text-2xl font-bold font-serif cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Secure Yield
      </div>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/company/secure-yield-financial-services/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>

    {/* Main Grid Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-700 pt-10">
      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold mb-4">Contact</h3>
        <p className="text-gray-400 mb-2">
          Email:{" "}
          <a
            href="mailto:Investors@secureyield.in"
            className="hover:text-accent-400 transition-colors"
          >
            Investors@secureyield.in
          </a>
        </p>
        <p className="text-gray-400">Phone: +91 92205 37637</p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors">About Us</a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-accent-400 transition-colors">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-accent-400 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Secure Yield. All rights reserved.</p>
    </div>
  </div>
</footer>
