
import React from 'react';
import { BookOpen, ShoppingBag } from 'lucide-react';
import { toast } from 'react-toastify';
import SelectedCard from './SelectedCard';

const SelectedBooks = ({ carts, setCarts, balance, setBalance }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handleProceed = () => {

        setCarts([])
    }

    return (
        <section className={`mx-auto rounded-2xl  ${carts.length > 0 && "border border-[#E8DFD1] bg-[#FAF7F1]/10"} py-4 my-7 md:my-10`}>

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

                {
                    carts.length > 0 && <div className="mb-6 flex w-11/12 mx-auto flex-wrap items-center justify-between gap-4">
                        <div>


                            <h2 className="text-xl font-bold text-[#302319] sm:text-3xl">
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
                }






                {/* Cart Cards */}
                <div className="cart-card-container w-11/12 mx-auto flex flex-col gap-4">

                    {carts.map(book => {
                        return (
                            <SelectedCard key={book.id}
                                book={book}
                                carts={carts}
                                setCarts={setCarts}
                                balance={balance}
                                setBalance={setBalance}
                            ></SelectedCard>
                        );
                    })}



                    {/* Total Price */}
                    {
                        carts.length > 0 && <div className="mt-6 flex w-full items-center justify-between rounded-2xl border border-[#E8DFD1] bg-[#FAF7F1] px-5 py-5 sm:px-6">
                            <h3 className="text-base font-semibold text-[#49301F] sm:text-lg">
                                মোট মূল্য
                            </h3>

                            <p className="text-xl font-bold text-[#49301F] sm:text-2xl">
                                ৳ {totalPrice.toLocaleString('bn-BD')}
                            </p>
                        </div>
                    }


                    {/* Proceed to Checkout Button */}
                    {
                        carts.length > 0 && <button onClick={handleProceed}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#49301F] px-6 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#62432D]">
                            অর্ডার সম্পন্ন করুন
                        </button>
                    }

                </div>
            </div>

        </section>
    );
};

export default SelectedBooks;
