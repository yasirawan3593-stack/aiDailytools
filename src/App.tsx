import { useState } from 'react';

const tools = [
  { name: "Pi Coin to PKR - LIVE 🔥", cat: "Trending", desc: "Check Live Pi Price in PKR", link: "https://www.binance.com/en/price/pi-network", color: "bg-yellow-400" },
  { name: "ChatGPT", cat: "Writing", desc: "AI Writing Assistant", link: "https://chat.openai.com", color: "bg-green-500" },
  { name: "Gemini", cat: "Writing", desc: "Google AI Assistant", link: "https://gemini.google.com", color: "bg-blue-500" },
  { name: "Canva AI", cat: "Design", desc: "Design with AI", link: "https://canva.com", color: "bg-purple-500" },
  { name: "Leonardo AI", cat: "Image", desc: "AI Image Generator", link: "https://leonardo.ai", color: "bg-pink-500" },
  { name: "CapCut", cat: "Video", desc: "Free Video Editor", link: "https://capcut.com", color: "bg-black" },
  { name: "ElevenLabs", cat: "Voice", desc: "AI Voice Generator", link: "https://elevenlabs.io", color: "bg-gray-800" },
  { name: "Notion AI", cat: "Productivity", desc: "Productivity with AI", link: "https://notion.so", color: "bg-white text-black" },
  { name: "Remove.bg", cat: "Image", desc: "Remove Background Free", link: "https://remove.bg", color: "bg-slate-700" },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", "Trending", "Writing", "Design", "Image", "Video", "Voice", "Productivity"];
  const filtered = tools.filter(t => (cat === "All" || t.cat === cat) && t.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Daily Tools</h1>
        <div className="bg-white/10 px-4 py-2 rounded-full text-sm">100+ Tools</div>
      </header>
      <section className="text-center py-12 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Find Best AI Tools</h2>
        <p className="text-gray-400 mb-8">Trending Tools Added Daily</p>
        <div className="max-w-xl mx-auto flex gap-2">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tools..." className="w-full p-3 rounded-full bg-white/10 outline-none" />
          <button className="bg-white text-black px-6 rounded-full font-bold">Search</button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {cats.map(c => (<button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm ${cat === c ? 'bg-white text-black' : 'bg-white/10'}`}>{c}</button>))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(tool => (
          <a key={tool.name} href={tool.link} target="_blank" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-full ${tool.color}`}></div>
              <div><h3 className="font-bold">{tool.name}</h3></div>
            </div>
            <p className="text-sm text-gray-400">{tool.desc}</p>
            <div className="mt-4 text-sm text-white/60">{tool.cat}</div>
          </a>
        ))}
      </section>
      <footer className="text-center p-10 text-gray-500 text-sm">© 2026 AI Daily Tools - Made by Yasir Awan</footer>
    </div>
  )
}
