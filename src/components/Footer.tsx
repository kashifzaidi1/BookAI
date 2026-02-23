const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About LoopsAI", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Status", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E5] pt-16 pb-8 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#1A1A1A] flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-[#1A1A1A]">BookAI</span>
            </div>
            <p className="text-[#ABABAB] text-sm leading-relaxed">
              Your AI receptionist that never sleeps. Built by LoopsAI.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#ABABAB] text-sm hover:text-[#1A1A1A] transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E8E8E5] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ABABAB] text-sm">&copy; {new Date().getFullYear()} LoopsAI. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-[#ABABAB]">
            <span>Built by</span>
            <a href="#" className="font-semibold text-[#1A1A1A] hover:underline">LoopsAI</a>
            <span>· Security · Privacy · Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
