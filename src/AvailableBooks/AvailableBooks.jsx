import React from 'react';

const AvailableBooks = ({ books }) => {
    // console.log(books);  // [{..} {...}]

    return (
        <div className="books-container grid w-full grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                books.map(book => <div className="group overflow-hidden rounded-2xl border border-[#E8DFD1] bg-white transition-all duration-300 hover:border-amber-800/40 hover:shadow-lg">

                    {/* Book Cover */}
                    <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#F5EFE5] p-3 sm:h-56">

                        <img
                            src="https://images.stockcake.com/public/f/5/1/f517e2de-d47e-45fb-9d16-66a4088a94fc_large/morning-reading-time-stockcake.jpg"
                            alt="নন্দিত নরকে"
                            className="h-full max-w-[70%]  rounded-xl object-cover shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                        />

                        {/* conditional positioning */}
                        {book.rating > 9.6 && (
                            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#79512D] shadow-sm">
                                বেস্টসেলার
                            </span>
                        )}


                        <span className="absolute bottom-4 right-4 rounded-lg bg-[#173F2C] px-2.5 py-1 text-xs font-semibold text-white">
                            ★ {book.rating.toLocaleString('bn-BD')}
                        </span>
                    </div>

                    {/* Book Information */}
                    <div className="p-4">
                        <span className="text-xs font-medium text-[#A16B37]">
                            {book.category}
                        </span>

                        <h3 className="mt-1.5 truncate text-lg font-bold text-[#302319]">
                            {book.bookName}
                        </h3>

                        <p className="mt-1 text-sm text-stone-500">
                            {book.author}
                        </p>

                        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-500">
                            {book.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#EEE7DC] pt-3">
                            <div className="shrink-0">
                                <p className="text-xs text-stone-400">বইয়ের মূল্য</p>
                                <p className="mt-1 text-lg font-bold text-[#49301F]">
                                    ৳ {book.price.toLocaleString('bn-BD')}
                                </p>
                            </div>

                            <button className="rounded-xl bg-[#49301F] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#68452C] sm:text-sm">
                                + কার্টে যোগ করুন
                            </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AvailableBooks;