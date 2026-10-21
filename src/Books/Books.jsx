import React, { use, useState } from 'react';
import { BookOpen, ShoppingCart } from 'lucide-react';
import AvailableBooks from '../components/AvailableBooks/AvailableBooks';
import SelectedBooks from '../components/SelectedBooks/SelectedBooks';

const Books = ({ booksPromise }) => {
    const books = use(booksPromise)
    // console.log(books);  // [{..} {...}]
    const [activeTabs, setActiveTabs] = useState("all-books")

    const [carts, setCarts] = useState([])
    console.log(carts);



    return (
        <section className="books-container mx-auto my-12 w-[95%] md:my-20 md:w-[85%]">

            {/* Heading and Toggle Buttons */}
            <div className="mx-3 my-6 flex flex-col gap-4 sm:mx-4 sm:flex-row sm:items-center sm:justify-between">
                <div>

                    <h2 className="text-xl font-bold text-[#302319] sm:text-2xl">সকল বইসমূহ ({books.length.toLocaleString('bn-BD')})</h2>
                </div>

                <div className="flex w-full items-center gap-1 rounded-full border border-[#DCCBB4] bg-white p-1 sm:w-auto">

                    <button
                        onClick={() => setActiveTabs("all-books")}
                        className={`flex-1 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 sm:flex-none ${activeTabs === "all-books"
                            ? "bg-[#49301F] text-white"
                            : "text-[#49301F] hover:bg-[#FBF8F1]"
                            }`}
                    >
                        সব বই
                    </button>

                    <button
                        onClick={() => setActiveTabs("selected-books")}
                        className={`flex-1 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 sm:flex-none ${activeTabs === "selected-books"
                            ? "bg-[#49301F] text-white"
                            : "text-[#49301F] hover:bg-[#FBF8F1]"
                            }`}
                    >
                        নির্বাচিত বইগুলো
                    </button>
                </div>
            </div>








            {/* <AvailableBooks books={books}></AvailableBooks> */}
            {
                activeTabs === "all-books" ?
                    <AvailableBooks
                        books={books}
                        carts={carts}
                        setCarts={setCarts}></AvailableBooks>
                    :
                    <SelectedBooks carts={carts}
                        setCarts={setCarts}></SelectedBooks>
            }









            {/* Bottom Message */}
            {
                activeTabs === "all-books" && <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-[#F3EBDD] p-5">
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
            }



        </section>
    );
};

export default Books;
