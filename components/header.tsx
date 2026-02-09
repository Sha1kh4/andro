"use client";
import CartIcon from "./cart-icon";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
      
        <div className="flex items-center gap-2 w-full sm:w-auto">
        <img src="https://cdn.brandfetch.io/idmjhO-S03/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1764583854965"></img>
          <button
            aria-haspopup="dialog"
            aria-label="Select Location"
            className="flex items-center gap-2 text-sm text-muted-foreground"
            type="button"
          >
            <h3
              data-testid="user-address"
              style={{ color: "black" }}
              className="flex items-center gap-1 text-sm"
            >
              Select Location
            </h3>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              style={{ height: 12, minWidth: 12, color: "black" }}
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

          <Input
            placeholder="Search customers..."
            className="h-10 bg-white w-full sm:max-w-sm"
          />
          
        </div>
          <CartIcon/>

      </div>
    </>
  );
}
