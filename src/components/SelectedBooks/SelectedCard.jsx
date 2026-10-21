import React from 'react';
import { toast } from 'react-toastify';

const SelectedCard = ({ book, carts, setCarts, balance, setBalance }) => {

    const handleCartRemove = (book) => {

        const filteredArray = carts.filter(c => c.id !== book.id)
        setCarts(filteredArray)
        toast.success("আপনার বইটি কার্ট থেকে সরিয়ে দেওয়া হয়েছে।");
        setBalance(balance + book.price)
    };


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
                    onClick={() => handleCartRemove(book)}
                    className="shrink-0 rounded-full border border-[#D9B8A5] bg-[#FBF3ED] px-4 py-2.5 text-sm font-semibold text-[#8B4935] transition-colors duration-300 hover:border-[#8B4935] hover:bg-[#8B4935] hover:text-white sm:px-5"
                >
                    রিমুভ করুন
                </button>
            </div>
        </div>
    );
};

export default SelectedCard;