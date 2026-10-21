
import React from 'react';
import { BookOpen, ShoppingBag } from 'lucide-react';

const SelectedBooks = ({ carts, setCarts }) => {
    return (
        <section className="mx-auto my-12 w-[95%] md:my-20">

            {/* Empty Message */}
            {carts.length === 0 && (
                <div className="rounded-2xl border border-[#E8DFD1] bg-[#FAF7F1] px-5 py-14 text-center sm:py-16">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1E8D9]">
                        <BookOpen size={28} className="text-[#49301F]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#302319] sm:text-2xl">
                        কোনো বই নির্বাচন করা হয়নি
                    </h3>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#806B58] sm:text-base">
                        তোমার পছন্দের বইগুলো এখানে দেখতে পাবে।
                        এখনো কোনো বই যোগ করা হয়নি।
                    </p>
                </div>
            )}



            {/* Cart Section */}
            <div className="mt-3">

                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>


                        <h2 className="text-2xl font-bold text-[#302319] sm:text-3xl">
                            আপনার কার্ট
                        </h2>

                        <p className="mt-2 text-sm text-[#806B58]">
                            আপনার নির্বাচিত বইগুলোর তালিকা
                        </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8DFD1] bg-[#FAF7F1]">
                        <ShoppingBag size={22} className="text-[#49301F]" />
                    </div>
                </div>






                {/* Cart Cards */}
                <div className="cart-card-container flex flex-col gap-4">

                    {carts.map(book => {
                        return (

                            <div
                                key={book.bookName}
                                className="group flex flex-col gap-5 rounded-2xl border border-[#E8DFD1] bg-[#CBB69A]/10 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#CBB69A] hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-5"
                            >
                                {/* Left Side */}
                                <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                                    <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F1E8D9] sm:h-28 sm:w-24">
                                        <img
                                            src={book.bookImg}
                                            alt={book.bookName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <span className="mb-2 inline-block rounded-full bg-[#F5EEE4] px-3 py-1 text-xs font-medium text-[#806044]">
                                            নির্বাচিত বই
                                        </span>

                                        <h3 className="line-clamp-2 text-base font-bold leading-7 text-[#302319] sm:text-lg">
                                            {book.bookName}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#8B7763]">
                                            লেখক: {book.author}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: Price & Remove Button */}
                                <div className="flex items-center justify-between gap-4 border-t border-[#E8DFD1] pt-4 sm:justify-end sm:border-t-0 sm:pt-0">
                                    <div className="sm:text-right">
                                        <p className="text-xs text-[#8B7763]">বইয়ের মূল্য</p>
                                        <h4 className="mt-1 text-lg font-bold text-[#49301F] sm:text-xl">
                                            ৳ {book.price.toLocaleString('bn-BD')}
                                        </h4>
                                    </div>

                                    <button
                                        className="shrink-0 rounded-full border border-[#D9B8A5] bg-[#FBF3ED] px-4 py-2.5 text-sm font-semibold text-[#8B4935] transition-colors duration-300 hover:border-[#8B4935] hover:bg-[#8B4935] hover:text-white sm:px-5"
                                    >
                                        রিমুভ করুন
                                    </button>
                                </div>
                            </div>

                        );
                    })}



                    {/* Total Price */}
                    <div className="mt-6 flex w-full items-center justify-between rounded-2xl border border-[#E8DFD1] bg-[#FAF7F1] px-5 py-5 sm:px-6">
                        <h3 className="text-base font-semibold text-[#49301F] sm:text-lg">
                            মোট মূল্য
                        </h3>

                        <p className="text-xl font-bold text-[#49301F] sm:text-2xl">
                            ৳ {carts.reduce((total, book) => total + book.price, 0).toLocaleString('bn-BD')}
                        </p>
                    </div>

                    {/* Proceed to Checkout Button */}
                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#49301F] px-6 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#62432D]">
                        অর্ডার সম্পন্ন করুন
                    </button>

                </div>
            </div>

        </section>
    );
};

export default SelectedBooks;
