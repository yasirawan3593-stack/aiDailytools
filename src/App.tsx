import { useState } from 'react';
const tools = [
  { name: "ChatGPT", cat: "Writing", desc: "Best AI for writing, coding & ideas", link: "https://chatgpt.com", color: "bg-green-500" },
  { name: "Gemini", cat: "Writing", desc: "Google's powerful AI assistant", link: "https://gemini.google.com", color: "bg-blue-500" },
  { name: "Canva AI", cat: "Design", desc: "Design anything with AI Magic", link: "https://canva.com", color: "bg-purple-500" },
  { name: "Leonardo AI", cat: "Image", desc: "Create amazing AI images & art", link: "https://leonardo.ai", color: "bg-pink-500" },
  { name: "CapCut", cat: "Video", desc: "Free AI video editor online", link: "https://capcut.com", color: "bg-black" },
  { name: "ElevenLabs", cat: "Voice", desc: "Realistic AI Voice & Text to Speech", link: "https://elevenlabs.io", color: "bg-gray-800" },
  { name: "Notion AI", cat: "Productivity", desc: "Write faster & organize work", link: "https://notion.so", color: "bg-slate-700" },
  { name: "Remove.bg", cat: "Image", desc: "Remove background in 1 click", link: "https://remove.bg", color: "bg-orange-500" },
];
export default function App() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", "Writing", "Design", "Image", "Video", "Voice", "Productivity"];
  const filtered = tools.filter(t => (cat === "All" || t.cat === cat) && t.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI<span className="text-purple-400">DailyTools</span></h1>
        <div className="bg-white/10 px-4 py-2 rounded-full text-sm">100% Free Tools</div>
      </header>
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">All AI Tools in<br/><span className="text-purple-400">One Place</span></h2>
        <p className="text-gray-400 mb-8">Daily updated best AI tools for your work</p>
        <div className="max-w-xl mx-auto flex gap-2 bg-white/10 p-2 rounded-full">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search AI tools..." className="flex-1 bg-transparent px-4 outline-none" />
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold">Search</button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {cats.map(c => (<button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full text-sm ${cat===c? 'bg-white text-black' : 'bg-white/10'}`}>{c}</button>))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {filtered.map(tool => (
          <a key={tool.name} href={tool.link} target="_blank" className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full ${tool.color} flex items-center justify-center font-bold`}>{tool.name[0]}</div>
              <div><h3 className="font-bold">{tool.name}</h3><p className="text-xs text-gray-400">{tool.cat}</p></div>
            </div>
            <p className="text-sm text-gray-300">{tool.desc}</p>
            <div className="mt-4 text-sm text-purple-400">Use Tool →</div>
          </a>
        ))}
      </section>
      <footer className="text-center p-10 text-gray-500 text-sm">Made by Yasir Awan | aiDailytools © 2026</footer>
    </div>
  )
}
