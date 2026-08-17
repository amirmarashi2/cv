import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Clock, 
  Tag, 
  X, 
  Share2, 
  Copy, 
  Check, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { lang, selectedBlog, setSelectedBlog } = useApp();
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="py-20 bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>08 / TECHNICAL KNOWLEDGE & WRITE-UPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'مقالات تخصصی، تجربیات و رترواسپکتیوها' : 'Engineering Articles & Technical Write-ups'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'مستندات گام‌به‌گام و تحلیل‌های فنی از حل باگ‌های روتینگ، مالتی‌کست، احراز هویت و پایپ‌لاین‌های اتوماسیون.'
              : 'Deep-dive postmortems, protocol analysis, and step-by-step guides from live engineering battlefields.'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              id={`blog-post-${post.id}`}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5 group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lang === 'fa' ? post.readTimeFa : post.readTimeEn}</span>
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-mono group-hover:text-emerald-300 transition-colors leading-snug">
                  {lang === 'fa' ? post.titleFa : post.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {lang === 'fa' ? post.excerptFa : post.excerptEn}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  id={`read-article-btn-${post.id}`}
                  onClick={() => setSelectedBlog(post)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-300 border border-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{lang === 'fa' ? 'مطالعه کامل مقاله و کانفیگ‌ها' : 'Read Full Technical Article'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                    {selectedBlog.category}
                  </span>
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{lang === 'fa' ? selectedBlog.readTimeFa : selectedBlog.readTimeEn}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {lang === 'fa' ? selectedBlog.titleFa : selectedBlog.titleEn}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Share / Copy Link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-slate-200 leading-relaxed text-sm font-sans whitespace-pre-line">
              {lang === 'fa' ? selectedBlog.contentFa : selectedBlog.contentEn}
            </div>

            {/* Tags footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {selectedBlog.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-mono text-emerald-400 border border-slate-700"
                >
                  #{t}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
