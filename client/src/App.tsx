<footer className="bg-[#042f24] text-white pt-28 pb-12 px-10 border-t border-emerald-900 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
    
    {/* कॉलम १: ब्रांड लोगो और टैगलाइन */}
    <div className="space-y-6">
      <div className="group cursor-pointer" onClick={() => setView('login')}>
        <h2 className="text-4xl font-black tracking-tighter mb-1">Prawali</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-bold opacity-80">
          From Waste to Wonder
        </p>
      </div>
      <p className="opacity-70 text-sm leading-relaxed italic pr-4">
        "From Parali to Pride." Bihar's first luxury sustainable brand, transforming stubble waste into premium essentials.
      </p>
    </div>

    {/* कॉलम २: इनोवेशन टीम (Krishna & Riley) */}
    <div className="space-y-8">
      <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[10px] border-b border-white/10 pb-4">
        Innovation Team
      </h4>
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-xs font-bold border border-emerald-700 shadow-lg">K</div>
          <div className="text-xs">
            <p className="font-black text-white">Krishna</p>
            <p className="opacity-50">Developer & AI Lead</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-xs font-bold border border-emerald-700 shadow-lg">R</div>
          <div className="text-xs">
            <p className="font-black text-white">Riley AI</p>
            <p className="opacity-50">Assistant</p>
          </div>
        </div>
      </div>
    </div>

    {/* कॉलम ३: रजिस्टर्ड ऑफिस (Patna Unit) */}
    <div className="space-y-8">
      <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[10px] border-b border-white/10 pb-4">
        Registered Office
      </h4>
      <div className="space-y-5 opacity-80 text-sm leading-relaxed">
        <p className="flex gap-4">
          <MapPin size={28} className="text-emerald-400 shrink-0" />
          <span>Startly Innovations Pvt. Ltd.<br/>Biscomaun Tower, Gandhi Maidan Road,<br/>Patna, Bihar - 800001</span>
        </p>
        <p className="flex gap-4 items-center">
          <Mail size={18} className="text-emerald-400 shrink-0" />
          <a href="mailto:team@startlyinnovations.com" className="text-white hover:text-emerald-400 transition">team@startlyinnovations.com</a>
        </p>
      </div>
    </div>

    {/* कॉलम ४: पैरेंट कंपनी (Bio-Polymer Tech) */}
    <div className="bg-[#064e3b]/50 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
      <h4 className="font-black text-emerald-300 italic mb-4 tracking-tight text-xl">Startly Innovations™</h4>
      <p className="text-xs opacity-70 leading-relaxed mb-6">
        Leading bio-polymer research in Patna. Our proprietary tech ensures products decompose in soil within 180 days.
      </p>
      <div className="flex items-center gap-3 text-[10px] font-black text-emerald-400 tracking-tighter uppercase">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        Direct From Patna
      </div>
    </div>
  </div>

  {/* बॉटम लीगल बार */}
  <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <p className="text-[10px] opacity-30 tracking-[0.3em] uppercase font-bold">
        © 2026 PRAWALI. ALL RIGHTS RESERVED.
      </p>
      <p className="text-[9px] opacity-20 mt-1 uppercase tracking-widest font-black">Unit of Startly Innovations Private Limited</p>
    </div>
    <div className="flex gap-8 text-[10px] opacity-30 uppercase font-bold tracking-[0.2em]">
      <span className="hover:opacity-100 transition cursor-help">CIN: U72900BR2026</span>
      <span className="hover:opacity-100 transition">Made with ❤️ in Bihar</span>
    </div>
  </div>
</footer>