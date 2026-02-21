<footer className="bg-emerald-950 text-white pt-28 pb-12 px-10 border-t border-emerald-900 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
    
    {/* Column 1: The Identity */}
    <div className="space-y-6">
      <h2 onClick={() => setView('login')} className="text-4xl font-black cursor-pointer hover:text-emerald-400 transition tracking-tighter">Prawali</h2>
      <p className="opacity-70 text-sm leading-relaxed italic">
        "From Parali to Pride." Transforming Bihar's agricultural waste into luxury sustainable essentials.
      </p>
      <div className="flex gap-4 opacity-40">
        <Recycle size={20} /> <Globe size={20} /> <ShieldCheck size={20} /> <Zap size={20} />
      </div>
    </div>

    {/* Column 2: The Visionaries (Riley AI & Team) */}
    <div>
      <h4 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-[10px]">The Innovation Team</h4>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-bold">K</div>
          <div className="text-xs">
            <p className="font-bold">Krishna</p>
            <p className="opacity-50">Developer & AI Lead</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-bold">R</div>
          <div className="text-xs">
            <p className="font-bold">Riley AI</p>
            <p className="opacity-50">Smart Assistant</p>
          </div>
        </li>
      </ul>
    </div>

    {/* Column 3: Corporate Presence */}
    <div>
      <h4 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-[10px]">Registered Office</h4>
      <div className="space-y-5 opacity-70 text-sm">
        <p className="flex gap-3 leading-snug">
          <MapPin size={24} className="text-emerald-400 shrink-0" />
          <span>Startly Innovations Pvt. Ltd.<br/>Biscomaun Tower, Gandhi Maidan Road,<br/>Patna, Bihar - 800001</span>
        </p>
        <p className="flex gap-3 items-center">
          <Mail size={18} className="text-emerald-400 shrink-0" />
          <a href="mailto:team@startlyinnovations.com" className="text-white hover:text-emerald-400 transition">team@startlyinnovations.com</a>
        </p>
      </div>
    </div>

    {/* Column 4: Parent Company Tech */}
    <div className="bg-emerald-900/30 p-8 rounded-[2.5rem] border border-white/5 shadow-inner">
      <h4 className="font-black text-emerald-300 italic mb-3 tracking-tight">Startly Innovations™</h4>
      <p className="text-xs opacity-70 leading-relaxed mb-6">
        Leading bio-polymer research in Patna. Our products are engineered to decompose in soil within 180 days.
      </p>
      <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 tracking-tighter uppercase">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        Direct From Bihar
      </div>
    </div>
  </div>

  {/* Footer Bottom Bar */}
  <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase font-bold">
        © 2026 PRAWALI. ALL RIGHTS RESERVED.
      </p>
      <p className="text-[9px] opacity-20 mt-1 uppercase tracking-widest">Unit of Startly Innovations Private Limited</p>
    </div>
    <div className="flex gap-8 text-[10px] opacity-30 uppercase font-bold tracking-[0.2em]">
      <span className="hover:opacity-100 cursor-help transition">CIN: U72900BR2026</span>
      <span className="hover:opacity-100 transition">Made with ❤️ in Patna</span>
    </div>
  </div>
</footer>