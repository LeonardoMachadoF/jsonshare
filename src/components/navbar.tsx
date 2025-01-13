"use client"
import { useTheme } from "@/contexts/theme-context";
import { MoonStar, SunMoon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="sticky top-0 z-10 border-b bg-background px-4 sm:px-6 ">
            <div className="flex justify-between items-center mx-auto max-w-4xl h-16">
                <div className="flex gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold">jsonshare</span>
                    </Link>
                    <nav>
                        <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground">
                            Dashboard
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2">

                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button>Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <button onClick={() => { toggleTheme() }} >
                        {theme === 'dark' ? <MoonStar className="h-5" /> : <SunMoon className="h-6" />}
                    </button>
                </div>
            </div>
        </div>
    )
}