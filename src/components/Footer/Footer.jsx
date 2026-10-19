import React from 'react';
import { BookOpen, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#10251F] text-stone-300 mt-10 md:mt-25">
            {/* Background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/[0.06] blur-[90px]"></div>
            <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-[100px]"></div>

            <div className="relative mx-auto w-[92%] max-w-7xl pt-16 md:pt-20">
                <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                                <BookOpen size={25} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">বইঘর</h2>
                                <p className="mt-0.5 text-xs tracking-wide text-amber-200/70">
                                    বাংলা বইয়ের আপন ঠিকানা
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-stone-400">
                            বই শুধু জ্ঞান দেয় না, খুলে দেয় নতুন পৃথিবীর দরজা।
                            প্রিয় বাংলা বইয়ের সঙ্গে তোমার প্রতিটি দিন হয়ে উঠুক
                            আরও সুন্দর ও অর্থবহ।
                        </p>

                        <div className="mt-6 space-y-3 text-sm text-stone-400">
                            <p className="flex items-center gap-3">
                                <MapPin size={16} className="shrink-0 text-amber-300" />
                                বাংলাদেশ
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail size={16} className="shrink-0 text-amber-300" />
                                hello@boighor.com
                            </p>
                        </div>

                        <div className="mt-7 flex gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold hover:border-amber-300/50 hover:text-amber-200">f</span>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold hover:border-amber-300/50 hover:text-amber-200">in</span>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold hover:border-amber-300/50 hover:text-amber-200">▶</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-base font-semibold text-white">দ্রুত লিংক</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="transition-colors hover:text-amber-200">হোম</li>
                            <li className="transition-colors hover:text-amber-200">সব বই</li>
                            <li className="transition-colors hover:text-amber-200">লেখক</li>
                            <li className="transition-colors hover:text-amber-200">জনপ্রিয় বই</li>
                            <li className="transition-colors hover:text-amber-200">আমার সংগ্রহ</li>
                        </ul>
                    </div>

                    {/* Authors */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-base font-semibold text-white">জনপ্রিয় লেখক</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="transition-colors hover:text-amber-200">হুমায়ূন আহমেদ</li>
                            <li className="transition-colors hover:text-amber-200">কাজী নজরুল ইসলাম</li>
                            <li className="transition-colors hover:text-amber-200">জীবনানন্দ দাশ</li>
                            <li className="transition-colors hover:text-amber-200">জাহানারা ইমাম</li>
                            <li className="transition-colors hover:text-amber-200">জহির রায়হান</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-base font-semibold text-white">সহায়তা</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="transition-colors hover:text-amber-200">সচরাচর জিজ্ঞাসা</li>
                            <li className="transition-colors hover:text-amber-200">অর্ডার সংক্রান্ত তথ্য</li>
                            <li className="transition-colors hover:text-amber-200">গোপনীয়তা নীতি</li>
                            <li className="transition-colors hover:text-amber-200">যোগাযোগ</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <p className="mb-5 inline-block rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-3 py-1.5 text-xs font-medium text-amber-200">
                            বইপ্রেমীদের জন্য
                        </p>

                        <h3 className="text-lg font-semibold leading-7 text-white">
                            নতুন বইয়ের খবর পেতে সঙ্গে থাকুন
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-stone-400">
                            নতুন প্রকাশনা ও বইয়ের আপডেট পেতে আমাদের সঙ্গে থাকুন।
                        </p>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-1.5 focus-within:border-amber-300/40"
                        >
                            <input
                                type="email"
                                required
                                placeholder="ইমেইল ঠিকানা"
                                aria-label="ইমেইল ঠিকানা"
                                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-stone-500"
                            />
                            <button
                                type="submit"
                                aria-label="সাবস্ক্রাইব করুন"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-300 text-[#10251F] transition-colors hover:bg-amber-200"
                            >
                                <ArrowRight size={19} />
                            </button>
                        </form>

                        <p className="mt-3 text-xs leading-5 text-stone-500">
                            * ইমেইল সাবস্ক্রিপশনের জন্য এখনো backend সংযুক্ত করা হয়নি।
                        </p>
                    </div>
                </div>

                {/* Quote */}
                <div className="border-t border-white/10 py-7 text-center">
                    <p className="text-sm leading-7 text-stone-400">
                        “বই মানুষের জ্ঞানের পরিধি বাড়ায়, কল্পনাকে দেয় ডানা।”
                    </p>
                    <p className="mt-2 text-xs font-medium text-amber-300/80">
                        পড়ুন, জানুন, এগিয়ে চলুন।
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs leading-6 text-stone-500">
                        © {new Date().getFullYear()} বইঘর — বইয়ের পাতায় গড়ে উঠুক নতুন পৃথিবী।
                    </p>

                    <p className="text-xs text-stone-400">
                        Developed by <span className="font-semibold text-amber-300">Bayjid Alom</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
