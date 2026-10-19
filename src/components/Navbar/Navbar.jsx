import React from 'react';
import Link from './Link';


const navLinks = [
    { id: 1, name: 'হোম', path: '/' },
    { id: 2, name: 'সব বই', path: '/books' },
    { id: 3, name: 'লেখক', path: '/authors' },
    { id: 4, name: 'জনপ্রিয় বই', path: '/popular' },
    { id: 5, name: 'আমার সংগ্রহ', path: '/collection' },
];

const Navbar = () => {
    const links = navLinks.map(route => (
        <Link key={route.id} route={route} />
    ));


    return (
        <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white">
            <div className="navbar mx-auto w-[96%] px-0 py-2 md:w-[85%] md:py-4">

                {/* Logo */}
                <div className="flex flex-1 items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                        <span className="text-2xl">📚</span>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-amber-900 md:text-2xl">
                            বইঘর
                        </h1>
                        <p className="hidden text-xs text-gray-500 sm:block">
                            বাংলা বইয়ের আপন ঠিকানা
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <ul className="mr-5 hidden items-center gap-2 md:flex">
                    {links}
                </ul>

                {/* Static Wallet Balance */}
                <div className="flex-none">
                    <button
                        type="button"
                        className="btn rounded-full border-amber-200 bg-amber-50 px-3 text-amber-900 hover:bg-amber-100 sm:px-4"
                    >
                        <span className="font-bold">৳ 0</span>
                        <span className="hidden sm:inline">ব্যালেন্স</span>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
