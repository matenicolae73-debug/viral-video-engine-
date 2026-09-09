"use client";
import {useState} from "react";
export default function Home(){
 const [idea,setIdea]=useState("");
 const [duration,setDuration]=useState("AUTO");
 const [score,setScore]=useState<number|null>(null);
 const [result,setResult]=useState("");
 function analyze(){
   const text=idea.trim();
   if(!text){setResult("Enter a video idea first.");return}
   const s=Math.min(98,52+text.length%35+(text.includes("?")?7:0)+(text.length>70?5:0));
   setScore(s);
   setResult(`Hook: Start with a surprising result or question in the first 2 seconds.\n\nStructure: Hook → fast value/story → pattern break → payoff → loop-worthy ending.\n\nRecommended duration: ${duration==="AUTO"?(text.length>120?"30–45s":"15–30s"):duration}.\n\nCreate 5 A/B variants with different hooks before choosing the winner.`);
 }
 return <main>
   <header><div className="logo">Viral<span>Engine</span></div><div className="badge">0€ MVP</div></header>
   <section className="hero"><p className="eyebrow">VIRAL VIDEO OPTIMIZATION</p><h1>Build videos designed to <span>earn attention.</span></h1><p className="sub">Analyze an idea, generate stronger hooks and create multiple testable versions.</p></section>
   <section className="card">
    <label>VIDEO IDEA</label>
    <textarea value={idea} onChange={e=>setIdea(e.target.value)} placeholder="Example: A 20-second video showing a surprising trick that saves people time..."/>
    <div className="row"><div><label>DURATION</label><select value={duration} onChange={e=>setDuration(e.target.value)}><option>AUTO</option><option>7–15 seconds</option><option>15–30 seconds</option><option>30–60 seconds</option><option>60–180 seconds</option></select></div><button onClick={analyze}>ANALYZE & OPTIMIZE</button></div>
   </section>
   {score!==null&&<section className="result"><div className="score">{score}<small>/100</small><span>VIRAL POTENTIAL</span></div><pre>{result}</pre></section>}
   <section className="features"><div><b>⚡ Hook Lab</b><p>Generate multiple opening angles.</p></div><div><b>🧪 A/B Variants</b><p>Compare different structures.</p></div><div><b>📈 Learning Loop</b><p>Use real performance data later.</p></div></section>
   <footer>Viral Video Engine · Built as a free MVP · No fake views, bots or artificial engagement.</footer>
 </main>
}