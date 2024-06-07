// @flow
import * as React from 'react';

export const NavBar = () => {
    return (
        <header className="fixed z-50 top-0 bg-black grid items-center grid-cols-3 w-full pt-5 p-2 mb-10 h-fit">
            <h1 className="font-bold text-5xl text-white">Dilan <br/> Fitness</h1>
            <nav className="mx-auto hidden md:flex flex-row gap-5 text-white">
                <a href="#" className="text-xl font-bold hover:text-neutral-500">Home</a>
                <a href="#" className="text-xl font-bold hover:text-neutral-500">About</a>
                <a href="#" className="text-xl font-bold hover:text-neutral-500">Membership</a>
                <a href="#" className="text-xl font-bold hover:text-neutral-500">Contact</a>
            </nav>
            <div className="absolute hidden md:flex right-5 top-[3rem] flex-row items-center gap-5">
            <div className="flex gap-3 items-center">
                    <a href="/login" className="text-red-500 font-bold text-xl hover:text-red-600">Login</a>
                    <a href="/sign-up" className="bg-red-500 px-3 py-1 rounded-full text-white font-bold text-xl hover:bg-red-600">SignUp</a>
                </div>
                <button>
                    <img src="/cart.svg" alt="cart" width={30}/>
                </button>
            </div>
        </header>
    );
};