import React from 'react';
import { ArrowUpRight, Feather } from 'lucide-react';

const authors = [
    {
        id: 1,
        name: 'হুমায়ূন আহমেদ',
        title: 'কথাসাহিত্যিক ও ঔপন্যাসিক',
        books: 'নন্দিত নরকে',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9g6e2nLFFBQaD6Q27KsMWZhvb-WhyPo7Rjtyhm2Sojr5zNNWrplCfxc&s=10',
    },
    {
        id: 2,
        name: 'কাজী নজরুল ইসলাম',
        title: 'বিদ্রোহী কবি ও সাহিত্যিক',
        books: 'সঞ্চিতা',
        image: 'https://i.pinimg.com/1200x/6c/7b/48/6c7b488df4fdcf1d14c4b25a6052a409.jpg',
    },
    {
        id: 3,
        name: 'জীবনানন্দ দাশ',
        title: 'কবি ও কথাসাহিত্যিক',
        books: 'বনলতা সেন',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GddBmgakywZMzjwBKvRY22264QvSDH18EIAOq0nYMbe7nf2y2PFgpw0&s=10',
    },
    {
        id: 4,
        name: 'জাহানারা ইমাম',
        title: 'লেখিকা ও মুক্তিযুদ্ধের সংগঠক',
        books: 'একাত্তরের দিনগুলি',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKnyC7e0_uJ4BxTSw09tbFYi-j4BDrzHTvUIsr7t8fv4tgfNcwFx8b8zU&s=10',
    },
];

const FeaturedAuthors = () => {
    return (
        <section id="authors" className="bg-white py-16 md:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/10 bg-[#FBF8F1] px-4 py-2 text-sm text-amber-900">
                            <Feather size={16} />
                            বাংলা সাহিত্যের গর্ব
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-[#292018] sm:text-4xl md:text-5xl">
                            কলমের জাদুকর
                            <span className="text-[#A66A32]"> যারা</span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-stone-500 sm:text-base">
                            যাঁদের লেখা প্রজন্ম থেকে প্রজন্মে পাঠকের হৃদয়ে
                            জায়গা করে নিয়েছে, তাঁদের বই আবিষ্কার করো।
                        </p>
                    </div>

                    <a
                        href="#books"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAE1D3] px-5 py-3 text-sm font-semibold text-[#3D281C] transition-colors hover:bg-[#FBF8F1] md:self-auto"
                    >
                        লেখকদের বই
                        <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {authors.map(author => (
                        <article
                            key={author.id}
                            className="group overflow-hidden rounded-2xl border border-[#EAE1D3] bg-[#FBF8F1] transition-colors hover:border-amber-800/30"
                        >
                            <div className="relative h-64 overflow-hidden bg-[#EDE3D3]">
                                <img
                                    src={author.image}
                                    alt={author.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                />

                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                                <span className="absolute right-4 bottom-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#3D281C]">
                                    {author.books}
                                </span>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[#292018]">
                                    {author.name}
                                </h3>

                                <p className="mt-2 text-sm text-stone-500">
                                    {author.title}
                                </p>

                                <a
                                    href="#books"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8A5A31] transition-colors hover:text-[#3D281C]"
                                >
                                    বই দেখুন
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAuthors;
