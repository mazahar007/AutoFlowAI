import React, { useState } from 'react';
import Head from 'next/head';

export default function AutoFlowHomePage() {
  const [isDark, setIsDark] = useState(true);
  const [demoTopic, setDemoTopic] = useState('মহাকাশের এমন ৩টি রহস্য যা বিজ্ঞান এখনো ব্যাখ্যা করতে পারেনি');
  const [demoTitle, setDemoTitle] = useState('মহাকাশের ৩টি গোপন রহস্য');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDemoGenerate = () => {
    setDemoTitle(demoTopic);
    triggerToast('🎉 ডেমো সিমুলেশন সম্পন্ন! vidIQ স্কোর ৯৫/১০০ ও আনলিস্টেড লিঙ্ক রেডি।');
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <Head>
        <title>AutoFlow AI - স্বয়ংক্রিয় ভিডিও তৈরি ও ইউটিউব পাবলিশিং প্ল্যাটফর্ম</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200 font-sans flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white text-xs py-2 px-4 text-center font-semibold">
          🚀 নতুন আপডেট: Gemini 2.5, Claude 3.5 এবং vidIQ SEO স্কোরিং সহ সম্পূর্ণ অটোমেশন এখন উন্মুক্ত!
        </div>

        {/* Navbar */}
        <header className="h-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#070a12]/80 backdrop-blur-lg sticky top-0 z-40 px-6 sm:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-500/30">
              AF
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                AutoFlow <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-800">AI</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">ফিচারসমূহ</a>
            <a href="#pipeline" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">কাজের পদ্ধতি</a>
            <a href="#vidiq-seo" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">vidIQ এসইও</a>
            <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">সাধারণ প্রশ্ন</a>
          </nav>

          <div className="flex items-center gap-3.5">
            <button
              onClick={() => {
                setIsDark(!isDark);
                triggerToast(isDark ? 'লাইট মোড সক্রিয় ☀️' : 'ডার্ক মোড সক্রিয় 🌙');
              }}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center font-bold text-sm"
              title="থিম পরিবর্তন"
            >
              ☀️ / 🌙
            </button>

            <a
              href="#app-demo"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 transition flex items-center gap-2"
            >
              <span>স্টুডিও ডেমো</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-16 pb-24 px-6 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>সম্পূর্ণ এন্ড-টু-এন্ড অটোমেশন • ১ ক্লিকে তৈরি ও আপলোড</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              ভিডিও বানাবে এআই, <br className="hidden sm:inline" />
              সরাসরি আপলোড হবে <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">ইউটিউবে!</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              শুধু টপিক লিখে দিন। স্ক্রিপ্ট লেখা, প্রাকৃতিক বাংলা ভয়েসওভার, ডায়নামিক সাবটাইটেল, vidIQ এসইও স্কোরিং এবং সরাসরি YouTube-এ Unlisted হিসেবে ভিডিও আপলোড হবে এক পাইপলাইনে।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#app-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>ফ্রি ভিডিও অটোমেশন শুরু করুন</span>
              </a>

              <a
                href="https://github.com/mazahar007/AutoFlowAI"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-bold text-xs transition flex items-center justify-center gap-2"
              >
                <span>গিটহাব সোর্স কোড (GitHub)</span>
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> কোনো সফটওয়্যার ইনস্টল ছাড়া</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> ১০০% প্রফেশনাল বাংলা কণ্ঠ</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> সরাসরি Unlisted আপলোড</span>
            </div>
          </div>
        </section>

        {/* Live Interactive Studio Section */}
        <section className="px-6 pb-24" id="app-demo">
          <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl glow-effect text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-bold">লাইভ প্রিভিউ ড্যাশবোর্ড</span>
                <h2 className="text-xl sm:text-2xl font-black mt-2">অল-ইন-ওয়ান ভিডিও ক্রিয়েটর ফ্রেমওয়ার্ক</h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  YouTube API Connected
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
                  <label className="block text-xs font-bold text-slate-300">১. ভিডিও টপিক লিখুন</label>
                  <input
                    type="text"
                    value={demoTopic}
                    onChange={(e) => setDemoTopic(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-medium"
                  />
                  
                  <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">এআই মডেল</label>
                      <select className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                        <option>Google Gemini 2.5 Flash</option>
                        <option>Claude 3.5 Sonnet</option>
                        <option>OpenAI ChatGPT-4o</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">ভয়েস আর্টিস্ট</label>
                      <select className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                        <option>প্রদীপ (বাংলা পুরুষ)</option>
                        <option>নবনিতা (বাংলা নারী)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleDemoGenerate}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-xs hover:opacity-95 transition mt-2 shadow-lg"
                  >
                    জেনারেট এবং আপলোড করুন (Unlisted) ⚡
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">V</div>
                    <div>
                      <p className="font-bold text-slate-200">vidIQ এসইও স্কোর</p>
                      <p className="text-[11px] text-slate-400">টাইটেল ও ট্যাগ অপটিমাইজেশন</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-emerald-400">95.0</span>
                    <span className="text-slate-500"> / 100</span>
                  </div>
                </div>
              </div>

              {/* Mobile Shorts Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-[210px] h-[375px] rounded-3xl bg-black border-4 border-slate-700 overflow-hidden shadow-2xl flex flex-col justify-between p-3.5 text-center">
                  <div className="flex justify-between items-center text-[9px] text-white/70 z-10">
                    <span className="text-red-500 font-bold">● Shorts 9:16</span>
                    <span>00:30</span>
                  </div>

                  <div className="my-auto z-10 space-y-1.5 px-1">
                    <span className="text-[8px] px-2 py-0.5 rounded-full bg-amber-400 text-black font-black uppercase">Viral Hook</span>
                    <h4 className="text-xs font-black text-amber-300 drop-shadow line-clamp-2">{demoTitle}</h4>
                    <p className="text-[9px] text-slate-200 line-clamp-3">আমরা যা দেখি মহাবিশ্বের মাত্র ৫%! বাকি ৯৫% জুড়ে রয়েছে অজানা ডার্ক এনার্জি...</p>
                  </div>

                  <div className="z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">প্রদীপ (বাংলা)</span>
                    <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">▶</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-slate-900/90 to-black z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Pipeline */}
        <section className="py-20 px-6 bg-white dark:bg-[#0c101d] border-t border-b border-slate-200 dark:border-slate-800" id="pipeline">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center space-y-3">
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">স্বয়ংক্রিয় কার্যপ্রণালী</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">কীভাবে কাজ করে AutoFlow AI?</h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">টপিক দেওয়া থেকে শুরু করে চ্যানেলে ভিডিও পৌঁছানো পর্যন্ত প্রতিটি ধাপ সম্পূর্ণ অটোমেটেড।</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '১', title: 'এআই স্ক্রিপ্ট ও হুক', desc: 'Gemini 2.5 বা Claude দিয়ে প্রথম ৩ সেকেন্ডের জন্য আকর্ষণীয় ভাইরাল হুক ও সাবটাইটেল তৈরি হয়।', color: 'bg-indigo-600' },
                { step: '২', title: 'প্রাকৃতিক ভয়েসওভার', desc: 'Edge-TTS নিউরাল মডেলের মাধ্যমে স্পষ্ট বাংলা পুরুষ (প্রদীপ) ও নারী (নবনিতা) কণ্ঠে ভয়েস রেন্ডার হয়।', color: 'bg-purple-600' },
                { step: '৩', title: 'vidIQ SEO স্কোরিং', desc: 'ভাইরাল কিওয়ার্ড, হ্যাশট্যাগ ও থাম্বনেইল ক্যাপশন হিসাব করে ৯৫+ এসইও স্কোর নিশ্চিত করা হয়।', color: 'bg-amber-500' },
                { step: '৪', title: 'YouTube Unlisted আপলোড', desc: 'অফিসিয়াল YouTube Data API দিয়ে ভিডিও স্বয়ংক্রিয়ভাবে আপনার চ্যানেলে আনলিস্টেড হয়ে জমা হবে।', color: 'bg-red-600' }
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${s.color} text-white flex items-center justify-center font-black text-sm`}>{s.step}</div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* vidIQ Section */}
        <section className="py-20 px-6" id="vidiq-seo">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20">SEO ইঞ্জিন</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">vidIQ অপটিমাইজড মেটাডাটা</h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">ভিডিও বানানোর পাশাপাশি এর ভিউ নিশ্চিত করতে উচ্চ সার্চ ভলিউম ট্যাগ ও ক্লিক-থ্রু রেট প্রেডিকশন।</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-sm">📈</div>
                <h4 className="font-bold text-base">হাই CTR থাম্বনেইল হুক</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">দর্শকের নজর কাড়ার জন্য আকর্ষণীয় কালার কনট্রাস্ট ও বোল্ড বাংলা টেক্সট প্রম্পট তৈরি করে।</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-black text-sm">🔍</div>
                <h4 className="font-bold text-base">সার্চ ভলিউম অপটিমাইজড ট্যাগ</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">ইউটিউবে মানুষ কী লিখে খুঁজছে তার ওপর ভিত্তি করে সেরা কীওয়ার্ড ও হ্যাশট্যাগ নির্বাচন।</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-black text-sm">🎯</div>
                <h4 className="font-bold text-base">৯৫+ এসইও স্কোর প্রিভিউ</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">আপলোডের আগেই vidIQ অ্যালগরিদম অনুযায়ী ভিডিওর এসইও স্কোর ও র‍্যাংকিং পারফরম্যান্স জানা যায়।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-slate-100/60 dark:bg-[#0c101d]" id="features">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">সব সেরা ফিচার এক প্ল্যাটফর্মে</h2>
              <p className="text-sm text-slate-500">ক্রিয়েটরদের সময় বাঁচিয়ে কোয়ালিটি কনটেন্ট বানানোর আধুনিক সমাধান।</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-base">সুপারফাস্ট রেন্ডারিং</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">প্রতিটি ৩০ সেকেন্ডের ভিডিও মাত্র ১৫-২০ সেকেন্ডে রেন্ডার হয়ে প্রস্তুত হয়ে যায়।</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-bold text-base">কালপুরুষ বাংলা ফন্ট</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">ভিডিওতে প্রফেশনাল কালপুরুষ ফন্টে সোনালী ও সাদা সাবটাইটেল ক্রিস্টাল ক্লিয়ার দেখা যায়।</p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-bold text-base">নিরাপদ আনলিস্টেড মোড</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">ভিডিও সরাসরি পাবলিক হয় না, ফলে আপনি নিজে দেখে নেওয়ার পর ইচ্ছেমতো সময়ে পাবলিশ করতে পারবেন।</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" id="faq">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">সাধারণ কিছু প্রশ্নোত্তর (FAQ)</h2>
              <p className="text-sm text-slate-500">AutoFlow AI ব্যবহারের সাধারণ নিয়মাবলী।</p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">১. ভিডিও কি সরাসরি ইউটিউবে পাবলিক হয়ে যাবে?</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">না। ভিডিওটি সবসময় 'Unlisted' বা অপ্রকাশিত অবস্থায় আপলোড হয়। আপনি ভিডিও দেখে সন্তুষ্ট হলে তবেই নিজের ইউটিউব স্টুডিও থেকে এক ক্লিকে পাবলিক করতে পারবেন।</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">২. ভয়েসওভারের কোয়ালিটি কেমন হবে?</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">আমরা Microsoft Edge-এর সর্বশেষ নিউরাল টিটিএস ব্যবহার করি। বাংলা প্রদীপ ও নবনিতা কণ্ঠ রোবোটিক নয়, বরং সম্পূর্ণ মানুষের মতো স্বাভাবিক ও পরিষ্কার শোনা যায়।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070a12] py-8 px-6 text-center text-xs text-slate-500">
          <p>© ২০২৬ AutoFlow AI • এন্ড-টু-এন্ড ভিডিও অটোমেশন স্টুডিও। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{toastMsg}</span>
          </div>
        )}

      </div>
    </div>
  );
}
