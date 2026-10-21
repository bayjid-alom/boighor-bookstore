
import React from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const AvailableBooks = ({ books, carts, setCarts, balance, setBalance }) => {

    const handleAddToCart = (book) => {
        const existingBook = carts.find(c => c.id === book.id);

        if (existingBook) {
            toast.info("বইটি ইতোমধ্যে কার্টে রয়েছে।");
            return;
        }

        const newBalance = balance - book.price;

        if (newBalance < 0) {
            toast.warning("আপনার পর্যাপ্ত টাকা নেই।");
            return;
        }

        setBalance(newBalance);
        setCarts([...carts, book]);

        toast.success(`${book.bookName} বইটি কার্টে যোগ হয়েছে।`);
    };

    return (
        <div className="books-container grid w-full grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {books.map(book => {
                const isAdded = carts.some(c => c.id === book.id);

                return (
                    <div
                        key={book.id}
                        className="group overflow-hidden rounded-2xl border border-[#E8DFD1] bg-white transition-all duration-300 hover:border-amber-800/40 hover:shadow-lg"
                    >
                        {/* Book Cover */}
                        <div className="relative m-3 flex h-56 items-center justify-center overflow-hidden rounded-xl bg-[#F1E8D9] p-4">
                            <img
                                src={book.bookImg}
                                alt={book.bookName}
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                            />

                            {book.rating > 9.6 && (
                                <span className="absolute left-3 top-3 rounded-full bg-[#49301F] px-3 py-1 text-xs font-semibold text-white">
                                    বেস্টসেলার
                                </span>
                            )}

                            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#49301F] shadow-sm">
                                <span className="text-amber-500">★</span>
                                {book.rating.toLocaleString('bn-BD')}
                            </div>
                        </div>

                        {/* Book Information */}
                        <div className="flex flex-col p-4 pt-2">
                            <p className="mb-2 text-xs font-medium text-[#8B6B50]">
                                {book.category}
                            </p>

                            <h3 className="mb-1 text-lg font-bold leading-snug text-[#302319]">
                                {book.bookName}
                            </h3>

                            <p className="mb-3 text-sm text-[#8B7766]">
                                লেখক: {book.author}
                            </p>

                            <p className="mb-5 line-clamp-2 text-sm leading-6 text-[#78685A]">
                                {book.description}
                            </p>

                            {/* Price and Add to Cart */}
                            <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F1E8D9] pt-4">
                                <p className="whitespace-nowrap text-base font-bold text-[#49301F]">
                                    ৳ {book.price.toLocaleString('bn-BD')}
                                </p>

                                <button
                                    onClick={() => handleAddToCart(book)}
                                    disabled={isAdded}
                                    className={`inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${isAdded
                                            ? "cursor-not-allowed bg-[#E8DFD1] text-[#49301F]"
                                            : "bg-[#49301F] text-white hover:bg-[#68452C]"
                                        }`}
                                >
                                    {isAdded ? (
                                        <>
                                            <Check size={16} />
                                            <span>কার্টে যোগ হয়েছে</span>
                                        </>
                                    ) : (
                                        "+ কার্টে যোগ করুন"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
};

export default AvailableBooks;
