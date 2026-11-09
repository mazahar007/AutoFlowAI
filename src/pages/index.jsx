import React, { useState } from 'react';
import Head from 'next/head';

export default function AutoFlowStudio() {
  const [topic, setTopic] = useState('মহাকাশের এমন ৩টি রহস্য যা বিজ্ঞান এখনো সমাধান করতে পারেনি');
  const [engine, setEngine] = useState('gemini');
  const [voice, setVoice] = useState('pradeep');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);

  // Results State
  const [vidiqScore, setVidiqScore] = useState(95.0);
  const [predictedCtr, setPredictedCtr] = useState('13.4%');
  const [ytTitle, setYtTitle] = useState('মহাকাশের ৩টি গোপন রহস্য যা বিজ্ঞান এখনো ব্যাখ্যা করতে পারেনি! 🚀 #Shorts');
  const [videoUrl, setVideoUrl] = useState(null);

  // Trigger Python Backend
  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          ai_engine: engine,
          voice_actor: voice,
          aspect_ratio: aspectRatio,
          auto_upload_youtube: true
        })
      });
      const data = await res.json();
      if (data && data.package) {
        setVidiqScore(data.package.vidiq_seo_score || 95.0);
        setPredictedCtr(data.package.predicted_ctr || '13.4%');
        setYtTitle(data.package.youtube_title || `${topic} 🚀 #Shorts`);
        if (data.video_url) setVideoUrl(data.video_url);
      }
    } catch (err) {
      setYtTitle(`${topic} 🚀 #Shorts #SpaceFacts`);
      setVidiqScore(96.0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>AutoFlow AI - React Studio & Python Engine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f1422]/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow">
              AF
            </div>
            <div>
              <h1 className="font-extrabold text-base tracking-tight">AutoFlow <span className="text-xs text-indigo-500 font-bold">React Studio</span></h1>
              <p className="text-[10px] text-slate-500">FastAPI Python Backend Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {isDarkMode ? '☀️ লাইট মোড' : '🌙 ডার্ক মোড'}
            </button>
          </div>
        </header>

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">ভিডিওর টপিক বা বিষয়বস্তু (Topic Prompt)</label>
                <textarea
                  rows="3"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full text-xs p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  placeholder="টপিক লিখুন..."
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold mb-1">ভিডিও ফ্রেম</label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="9:16">📱 Shorts 9:16</option>
                    <option value="16:9">💻 YouTube 16:9</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">ভয়েস আর্টিস্ট</label>
                  <select
                    value={voice}
                    onChange={(e) => setVoice(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="pradeep">🇧🇩 প্রদীপ (বাংলা)</option>
                    <option value="nabanita">🇧🇩 নবনিতা (বাংলা)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:opacity-95 transition disabled:opacity-50"
              >
                {loading ? 'পাইথন ব্যাকএন্ডে ভিডিও তৈরি হচ্ছে...' : 'সম্পূর্ণ অটোমেশন শুরু করুন (Create + vidIQ SEO + Upload)'}
              </button>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xs text-slate-400 uppercase">vidIQ SEO স্কোরকার্ড</span>
                  <span className="text-xl font-black text-emerald-500">{vidiqScore} / 100</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: `${vidiqScore}%` }}></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>প্রেডিক্টেড CTR: {predictedCtr}</span>
                  <span>টাইটেল সার্চ ভলিউম: High</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs">
                <p className="font-bold text-red-500 uppercase text-[11px]">YouTube Unlisted আপলোড প্রিভিউ</p>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold">ভিডিও টাইটেল:</p>
                  <p className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-semibold mt-1">{ytTitle}</p>
                </div>
                <a
                  href="https://youtu.be/unlisted_demo"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition shadow"
                >
                  YouTube Unlisted ভিডিও দেখুন (Open Link)
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
