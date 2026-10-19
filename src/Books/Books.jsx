import React, { use } from 'react';
import { BookOpen, ShoppingCart } from 'lucide-react';
import AvailableBooks from '../AvailableBooks/AvailableBooks';

const Books = ({ booksPromise }) => {
    const books = use(booksPromise)
    // console.log(books);  // [{..} {...}]



    return (
        <section className="books-container mx-auto my-12 w-[95%] md:my-20 md:w-[85%]">

            {/* Heading and Toggle Buttons */}
            <div className="mx-3 my-6 flex flex-col gap-4 sm:mx-4 sm:flex-row sm:items-center sm:justify-between">
                <div>

                    <h2 className="text-xl font-bold text-[#302319] sm:text-2xl">সকল বইসমূহ ({books.length.toLocaleString('bn-BD')})</h2>
                </div>

                <div className="flex w-full items-center gap-1 rounded-full border border-[#DCCBB4] bg-white p-1 sm:w-auto">
                    <button className="flex-1 rounded-full bg-[#49301F] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 sm:flex-none">
                        সব বই
                    </button>

                    <button className="flex-1 rounded-full px-5 py-2.5 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:bg-[#FBF8F1] hover:text-[#49301F] sm:flex-none">
                        নির্বাচিত বইগুলো
                    </button>
                </div>
            </div>








            <AvailableBooks books={books}></AvailableBooks>









            {/* Bottom Message */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-[#F3EBDD] p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#8A5A31]">
                    <BookOpen size={22} />
                </div>

                <div>
                    <h3 className="font-semibold text-[#49301F]">
                        প্রতিটি বই, একটি নতুন পৃথিবী
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-stone-500">
                        তোমার পছন্দের গল্পটি খুঁজে নাও বইঘরে।
                    </p>
                </div>
            </div>



        </section>
    );
};

export default Books;
