import { useState, useEffect } from 'react';

const tools = [
  { id: "pi", name: "Pi Coin to PKR - LIVE 🔥", cat: "Trending", desc: "Live Pi Price - Pi Network", color: "bg-yellow-400" },
  { id: "gold", name: "سونے کی قیمت - Gold Price LIVE", cat: "Trending", desc: "Aaj Sone Ki Qeemat - 1 Tola", color: "bg-amber-500" },
  { id: "dollar", name: "ڈالر کی قیمت - Dollar to PKR LIVE", cat: "Trending", desc: "USD to PKR Live Converter", color: "bg-green-600" },
  { id: "video", name: "YouTube Thumbnail Downloader", cat: "Trending", desc: "Trending: videos", color: "bg-red-600" },
  { id: "weather", name: "Weather Forecast - LIVE", cat: "Trending", desc: "Faqirwali Weather Live", color: "bg-sky-500" },
  { name: "ChatGPT", cat: "Writing", link: "https://chat.openai.com", desc: "AI Writing Assistant", color: "bg-green-500" },
  { name: "Gemini", cat: "Writing", link: "https://gemini.google.com", desc: "Google AI Assistant", color: "bg-blue-500" },
  { name: "Canva AI", cat: "Design", link: "https://canva.com", desc: "Design with AI", color: "bg-purple-500" },
  { name: "Leonardo AI", cat: "Image", link: "https://leonardo.ai", desc: "AI Image Generator", color: "bg-pink-500" },
  { name: "CapCut", cat: "Video", link: "https://capcut.com", desc: "Free Video Editor", color: "bg-black" },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const [piPrice, setPiPrice] = useState(115.2);
  const [usdPrice, setUsdPrice] = useState(278.5);
  const [goldPrice] = useState(285000);

  const [piAmount, setPiAmount] = useState("1");
  const [usdAmount, setUsdAmount] = useState("1");
  const [goldAmount, setGoldAmount] = useState("1");
  const [ytUrl, setYtUrl] = useState("");
  const [city, setCity] = useState("Faqirwali");

  const cats = ["All", "Trending", "Writing", "Design", "Image", "Video"];
  const filtered = tools.filter(t => (cat === "All" || t.cat === cat) && t.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=pkr")
    .then(r => r.json()).then(d => { if(d["pi-network"]?.pkr) setPiPrice(d["pi-network"].pkr) }).catch(()=>{});
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(r => r.json()).then(d => { if(d.rates?.PKR) setUsdPrice(d.rates.PKR) }).catch(()=>{});
  }, []);

  const getYoutubeId = (url: string) => {
    const reg = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const m = url.match(reg);
    return (m && m[2].length === 11)? m[2] : null;
  };

  const renderCalculator = () => {
    if (activeTool === "pi") return (
      <div className="bg-white/5 border border-yellow-400/30 p-8 rounded-3xl">
        <h2 className="text-3xl font-bold mb-2">Pi Coin to PKR Calculator 🔥</h2>
        <p className="text-gray-400 mb-6">Live Price: 1 Pi = {piPrice} PKR</p>
        <input type="number" value={piAmount} onChange={e=>setPiAmount(e.target.value)} className="w-full p-4 rounded-2xl bg-black border border-white/10 text-2xl outline-none" />
        <div className="mt-6 p-6 bg-yellow-400 text-black rounded-2xl text-center">
          <div className="text-sm font-bold">Total in PKR</div>
          <div className="text-4xl font-black mt-1">Rs. {(Number(piAmount||0) * piPrice).toLocaleString()}</div>
        </div>
      </div>
    );
    if (activeTool === "gold") return (
      <div className="bg-white/5 border border-amber-500/30 p-8 rounded-3xl">
        <h2 className="text-3xl font-bold mb-2">سونے کی قیمت - Gold Price Pakistan</h2>
        <p className="text-gray-400 mb-6">Live: 1 Tola = {goldPrice.toLocaleString()} PKR</p>
        <label className="text-sm text-gray-400">تولہ لکھیں</label>
        <input type="number" value={goldAmount} onChange={e=>setGoldAmount(e.target.value)} className="w-full mt-2 p-4 rounded-2xl bg-black border border-white/10 text-2xl outline-none" />
        <div className="mt-6 p-6 bg-amber-500 text-black rounded-2xl text-center">
          <div className="text-sm font-bold">کل قیمت</div>
          <div className="text-4xl font-black mt-1">Rs. {(Number(goldAmount||0) * goldPrice).toLocaleString()}</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white/10 p-3 rounded-xl">10 Gram: Rs. {(goldPrice/2.43).toFixed(0)}</div>
          <div className="bg-white/10 p-3 rounded-xl">1 Gram: Rs. {(goldPrice/11.66).toFixed(0)}</div>
        </div>
      </div>
    );
    if (activeTool === "dollar") return (
      <div className="bg-white/5 border border-green-500/30 p-8 rounded-3xl">
        <h2 className="text-3xl font-bold mb-2">ڈالر سے پاکستانی روپیہ</h2>
        <p className="text-gray-400 mb-6">Live: 1 USD = {usdPrice} PKR</p>
        <label className="text-sm text-gray-400">Dollar لکھیں</label>
        <input type="number" value={usdAmount} onChange={e=>setUsdAmount(e.target.value)} className="w-full mt-2 p-4 rounded-2xl bg-black border border-white/10 text-2xl outline-none" />
        <div className="mt-6 p-6 bg-green-600 text-white rounded-2xl text-center">
          <div className="text-sm">Total PKR</div>
          <div className="text-4xl font-black mt-1">Rs. {(Number(usdAmount||0) * usdPrice).toLocaleString()}</div>
        </div>
      </div>
    );
    if (activeTool === "video") {
      const vid = getYoutubeId(ytUrl);
      return (
        <div className="bg-white/5 border border-red-500/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-2">YouTube Thumbnail Downloader</h2>
          <p className="text-gray-400 mb-6">YouTube لنک پیسٹ کریں</p>
          <input value={ytUrl} onChange={e=>setYtUrl(e.target.value)} placeholder="https://youtube.com/..." className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none" />
          {vid && (
            <div className="mt-6">
              <img src={`https://img.youtube.com/vi/${vid}/maxresdefault.jpg`} className="rounded-2xl w-full" />
              <a href={`https://img.youtube.com/vi/${vid}/maxresdefault.jpg`} target="_blank" className="mt-4 block w-full p-4 bg-red-600 text-center rounded-2xl font-bold">Download HD Thumbnail</a>
            </div>
          )}
        </div>
      );
    }
    if (activeTool === "weather") return (
      <div className="bg-white/5 border border-sky-500/30 p-8 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Weather Forecast LIVE</h2>
        <input value={city} onChange={e=>setCity(e.target.value)} className="w-full p-4 rounded-2xl bg-black border border-white/10 text-center text-xl outline-none my-6" />
        <a href={`https://www.google.com/search?q=weather+${city}`} target="_blank" className="w-full p-4 bg-sky-500 text-black rounded-2xl font-bold block">Check Live Weather</a>
      </div>
    );
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Daily Tools</h1>
        <div className="bg-white/10 px-4 py-2 rounded-full text-sm">Trending 🔥</div>
      </header>
      {activeTool? (
        <div className="max-w-2xl mx-auto p-6">
          <button onClick={()=>setActiveTool(null)} className="mb-6 bg-white/10 px-4 py-2 rounded-full">← Back</button>
          {renderCalculator()}
        </div>
      ) : (
        <>
          <section className="text-center py-12 px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Find Best AI Tools</h2>
            <p className="text-gray-400 mb-8">Pi, Gold, Dollar Live Calculators</p>
            <div className="max-w-xl mx-auto">
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tools..." className="w-full p-3 rounded-full bg-white/10 outline-none text-center" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {cats.map(c => (<button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm ${cat === c? 'bg-white text-black' : 'bg-white/10'}`}>{c}</button>))}
            </div>
          </section>
          <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((tool:any) => (
              <div key={tool.name} onClick={()=> tool.id? setActiveTool(tool.id) : window.open(tool.link, "_blank")} className="cursor-pointer bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-full ${tool.color}`}></div><h3 className="font-bold">{tool.name}</h3></div>
                <p className="text-sm text-gray-400">{tool.desc}</p><div className="mt-4 text-sm text-yellow-400 font-bold">{tool.cat} - CLICK</div>
              </div>
            ))}
          </section>
        </>
      )}
      <footer className="text-center p-10 text-gray-400">
  <div className="flex justify-center gap-6 mb-4">
    <a href="/about.html" className="hover:text-white underline">About Us</a>
    <a href="/privacy.html" className="hover:text-white underline">Privacy Policy</a>
    <a href="/contact.html" className="hover:text-white underline">Contact Us</a>
  </div>
  <p>© 2026 AI Daily Tools - All Rights Reserved</p>
</footer>
