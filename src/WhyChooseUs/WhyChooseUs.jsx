import React from 'react';
import {
    BookOpen,
    ShieldCheck,
    Truck,
    Headset,
    ArrowRight
} from 'lucide-react';

const features = [
    {
        id: 1,
        icon: BookOpen,
        title: 'বাছাই করা বই',
        description: 'জনপ্রিয় লেখক ও বিভিন্ন ধারার বই এক জায়গায় খুঁজে নাও।',
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: 'নিরাপদ কেনাকাটা',
        description: 'সহজ ও নির্ভরযোগ্য কেনাকাটার অভিজ্ঞতার জন্য তৈরি।',
    },
    {
        id: 3,
        icon: Truck,
        title: 'সুবিধাজনক ডেলিভারি',
        description: 'অর্ডার ও ডেলিভারির তথ্য সহজেই জানতে পারবে।',
    },
    {
        id: 4,
        icon: Headset,
        title: 'পাঠক সহায়তা',
        description: 'বই নির্বাচন ও অর্ডারসংক্রান্ত প্রশ্নে সহায়তা পাওয়ার সুযোগ।',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#F3EBDD] py-16 md:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-amber-900">
                            <BookOpen size={16} />
                            কেন বইঘর?
                        </div>

                        <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#292018] sm:text-4xl md:text-5xl">
                            বই কেনা হোক
                            <br />
                            <span className="text-[#A66A32]">আরও আনন্দের</span>
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-8 text-stone-600 sm:text-base">
                            বই নির্বাচন থেকে কেনাকাটা পর্যন্ত প্রতিটি ধাপ
                            সহজ ও স্বচ্ছ রাখাই আমাদের লক্ষ্য। তোমার
                            পরবর্তী প্রিয় বইটি খুঁজে নিতে থাকো বইঘরের সঙ্গে।
                        </p>

                        <a
                            href="#books"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3D281C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#5A3A26]"
                        >
                            বই আবিষ্কার করো
                            <ArrowRight size={17} />
                        </a>
                    </div>

                    {/* Right Features */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {features.map(feature => {
                            const Icon = feature.icon;

                            return (
                                <article
                                    key={feature.id}
                                    className="rounded-2xl border border-[#E0D2BD] bg-white/75 p-6 transition-colors hover:border-amber-800/30 hover:bg-white"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EBDD] text-[#8A5A31]">
                                        <Icon size={23} strokeWidth={1.7} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-[#292018]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-stone-500">
                                        {feature.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
