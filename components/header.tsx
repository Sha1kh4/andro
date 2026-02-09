"use client";
import CartIcon from "./cart-icon";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4 md:gap-8">
                  <img src="https://cdn.brandfetch.io/idmjhO-S03/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1764583854965"></img>
          <button
            className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
            type="button"
          >
            <span>Select Location</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-3 w-3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <Input
            placeholder="Search products..."
            className="hidden sm:block max-w-[300px]"
          />
          <CartIcon/>
        </div>
      </div>
    </header>
  );
}