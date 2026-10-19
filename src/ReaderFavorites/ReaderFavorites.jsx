
import React from 'react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

const ReaderFavorites = () => {
    return (
        <section className="bg-[#F3EBDD] py-16 md:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                {/* Section Heading */}
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#8A5A31]">
                            <Star size={15} />
                            নির্বাচিত বইয়ের সংগ্রহ
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-[#302319] sm:text-4xl md:text-5xl">
                            পাঠকের
                            <span className="text-[#A66B37]"> পছন্দ</span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                            কিছু গল্প বারবার পড়তে ইচ্ছে করে।
                            আবিষ্কার করো এমন কিছু বই, যা তোমার
                            ব্যক্তিগত সংগ্রহে রাখার মতো।
                        </p>
                    </div>

                    <a
                        href="#books"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-[#D8C6AC] bg-white/70 px-5 py-3 text-sm font-semibold text-[#49301F] transition-colors hover:bg-white md:self-auto"
                    >
                        সব বই দেখুন
                        <ArrowRight size={17} />
                    </a>
                </div>

                {/* Featured Books */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Book One */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3D6C4] bg-white transition-colors hover:border-amber-800/30">
                        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#E9DDC9] p-5">
                            <img
                                src="https://placehold.co/400x550/e5d4b5/543820?text=Nondito+Noroke"
                                alt="নন্দিত নরকে"
                                className="h-full w-auto max-w-[65%] object-cover shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
                            />
                            <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#79512D]">
                                পাঠকের পছন্দ
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <p className="text-xs font-medium text-[#A16B37]">উপন্যাস</p>
                            <h3 className="mt-2 text-xl font-bold text-[#302319]">নন্দিত নরকে</h3>
                            <p className="mt-1 text-sm text-stone-500">হুমায়ূন আহমেদ</p>
                            <p className="mt-3 text-sm leading-6 text-stone-500">
                                মধ্যবিত্ত পরিবারের জীবন ও সম্পর্কের আবেগঘন গল্প।
                            </p>
                            <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#EEE7DC] pt-4 mt-5">
                                <span className="text-xl font-bold text-[#49301F]">৳ ২৫০</span>
                                <a href="#books" className="inline-flex items-center gap-1 text-sm font-semibold text-[#8A5A31] hover:text-[#49301F]">
                                    বইটি দেখুন <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Book Two */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3D6C4] bg-white transition-colors hover:border-amber-800/30">
                        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#E9DDC9] p-5">
                            <img
                                src="https://placehold.co/400x550/d7d8bc/34442c?text=Jochona+O+Jononir+Golpo"
                                alt="জোছনা ও জননীর গল্প"
                                className="h-full w-auto max-w-[65%] object-cover shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
                            />
                            <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#79512D]">
                                বিশেষ নির্বাচন
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <p className="text-xs font-medium text-[#A16B37]">মুক্তিযুদ্ধভিত্তিক উপন্যাস</p>
                            <h3 className="mt-2 text-xl font-bold text-[#302319]">জোছনা ও জননীর গল্প</h3>
                            <p className="mt-1 text-sm text-stone-500">হুমায়ূন আহমেদ</p>
                            <p className="mt-3 text-sm leading-6 text-stone-500">
                                মুক্তিযুদ্ধের পটভূমিতে ইতিহাস ও মানুষের হৃদয়স্পর্শী গল্প।
                            </p>
                            <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#EEE7DC] pt-4 mt-5">
                                <span className="text-xl font-bold text-[#49301F]">৳ ৫৫০</span>
                                <a href="#books" className="inline-flex items-center gap-1 text-sm font-semibold text-[#8A5A31] hover:text-[#49301F]">
                                    বইটি দেখুন <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Book Three */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3D6C4] bg-white transition-colors hover:border-amber-800/30">
                        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#E9DDC9] p-5">
                            <img
                                src="https://placehold.co/400x550/c9d3c2/304b37?text=Bonolota+Sen"
                                alt="বনলতা সেন"
                                className="h-full w-auto max-w-[65%] object-cover shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
                            />
                            <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#79512D]">
                                কাব্যসংগ্রহ
                            </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <p className="text-xs font-medium text-[#A16B37]">কবিতা</p>
                            <h3 className="mt-2 text-xl font-bold text-[#302319]">বনলতা সেন</h3>
                            <p className="mt-1 text-sm text-stone-500">জীবনানন্দ দাশ</p>
                            <p className="mt-3 text-sm leading-6 text-stone-500">
                                প্রকৃতি, নিঃসঙ্গতা ও সৌন্দর্যের অনন্য কাব্যিক প্রকাশ।
                            </p>
                            <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#EEE7DC] pt-4 mt-5">
                                <span className="text-xl font-bold text-[#49301F]">৳ ১৮০</span>
                                <a href="#books" className="inline-flex items-center gap-1 text-sm font-semibold text-[#8A5A31] hover:text-[#49301F]">
                                    বইটি দেখুন <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Note */}
                <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#DCCBB4] pt-6 sm:flex-row sm:items-center">
                    <p className="text-sm leading-6 text-stone-600">
                        প্রতিটি বইয়ের পাতায় অপেক্ষা করছে একটি নতুন অভিজ্ঞতা।
                    </p>

                    <a href="#authors" className="inline-flex items-center gap-2 text-sm font-semibold text-[#49301F] hover:text-[#A16B37]">
                        প্রিয় লেখকদের চিনে নাও
                        <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ReaderFavorites;
