import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-[#1C1712] mb-18 md:mb-25">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90')"
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#160e08]/95 via-[#21150b]/85 to-[#21150b]/25" />

            {/* Decorative Glow */}
            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

            <div className="relative mx-auto grid min-h-[470px] w-[92%] max-w-7xl items-center gap-10 py-16 md:min-h-[530px] md:grid-cols-2 md:py-20">
                {/* Content */}
                <div className="max-w-2xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-white/[0.07] px-4 py-2 text-sm text-amber-200 backdrop-blur-md">
                        <Sparkles size={16} />
                        <span>ভালো বই, সমৃদ্ধ জীবন</span>
                    </div>

                    <h1 className="text-4xl leading-[1.3] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        বইয়ের পাতায়
                        <br />
                        <span className="text-amber-300">খুঁজে নাও</span>
                        <br />
                        নতুন এক পৃথিবী
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-stone-200 sm:text-lg">
                        বাংলাদেশের জনপ্রিয় লেখকদের সেরা বই নিয়ে
                        তোমার প্রিয় বইঘর। পড়ো, জানো, কল্পনা করো
                        আর নিজেকে প্রতিদিন নতুন করে আবিষ্কার করো।
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#books"
                            className="group inline-flex items-center gap-3 rounded-full bg-amber-300 px-7 py-3.5 font-semibold text-[#28180b] shadow-lg shadow-amber-950/20 transition-colors duration-300 hover:bg-amber-200"
                        >
                            <BookOpen size={19} />
                            সব বই দেখুন
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#popular-books"
                            className="rounded-full border border-white/25 px-7 py-3.5 font-medium text-white transition-colors hover:border-amber-200/60 hover:bg-white/10"
                        >
                            জনপ্রিয় বই
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm text-stone-300">
                        <div>
                            <p className="text-xl font-bold text-white">বাংলা</p>
                            <p className="mt-1">প্রিয় ভাষার বই</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">নির্বাচিত</p>
                            <p className="mt-1">পাঠকের পছন্দের সংগ্রহ</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">৳</p>
                            <p className="mt-1">টাকায় বইয়ের দাম</p>
                        </div>
                    </div>
                </div>

                {/* Book Showcase */}
                <div className="relative mx-auto hidden h-[370px] w-full max-w-md items-center justify-center md:flex">
                    <div className="absolute right-3 top-8 h-64 w-64 rounded-full border border-amber-200/15" />
                    <div className="absolute right-10 top-16 h-48 w-48 rounded-full border border-amber-200/10" />

                    <div className="relative z-10 w-64 -rotate-3 overflow-hidden rounded-2xl border border-white/20 bg-[#f4e5c8] p-3 shadow-2xl shadow-black/50">
                        <img
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85"
                            alt="বইয়ের সংগ্রহ"
                            className="h-72 w-full rounded-xl object-cover"
                        />
                        <div className="px-2 py-3">
                            <p className="font-semibold text-[#382316]">বইয়ের সাথে কাটুক সময়</p>
                            <p className="mt-1 text-sm text-[#80674d]">প্রতিটি পাতা, নতুন অভিজ্ঞতা</p>
                        </div>
                    </div>

                    <div className="absolute -bottom-1 right-0 z-20 rounded-2xl border border-amber-100/20 bg-[#fffaf0]/95 p-4 shadow-xl backdrop-blur-md">
                        <p className="text-sm text-stone-500">আজকের অনুপ্রেরণা</p>
                        <p className="mt-1 font-semibold text-[#382316]">বই পড়ো, এগিয়ে চলো।</p>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-amber-800 via-amber-300 to-amber-800" />
        </section>
    );
};

export default Banner;