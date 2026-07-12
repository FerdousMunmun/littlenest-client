
"use client";

import { useState, useEffect } from "react";
import { authClient } from '@/lib/auth-client'
import { LayoutDashboard, User, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { MdSportsHandball } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaHandsHoldingChild } from "react-icons/fa6";
const Navbar = () => {

  const router = useRouter();
  const {
    data: session,
  } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async (): Promise<void> => {
    await authClient.signOut();
    router.push("/login");
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">

              <h2 className=" flex font-extrabold text-3xl tracking-tight text-rose-400 text-align-center">Little <FaHandsHoldingChild /></h2><span className="font-extrabold text-3xl  text-gray-400">Nest</span>

            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/child-care-centers" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Child Care Centers</Link>
            <Link href="/my-bookings" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">My Bookings</Link>
            <Link href="/add-child-care-centers" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Manage My Centers</Link>
            <Link href="/Manage-center" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">My Profile</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link href="/login" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Login</Link>
                <Link href="/registration">

                  <Button className="font-bold rounded-full px-8 shadow-lg shadow-orange-600/20 bg-rose-400">
                    Registration
                  </Button>
                </Link>
              </>
            ) : (

              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                  <img
                    width={40}
                    height={40}
                    src={user?.image || "/avatar.png"}
                    alt={user?.name || "User"}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold truncate max-w-25">
                      {user?.name || "User"}
                    </p>

                  </div>
                </button>
                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">Welcome back!</p>

                  </div>
                  <Link href="/Add-Facility" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                    <LayoutDashboard className="w-4 h-4" /> Add Facility
                  </Link>
                  <Link href="/manage-facilities" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                    <User className="w-4 h-4" /> Manage My Facilities
                  </Link>
                  <Button onClick={handleSignOut} className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
                    <LogOut className="w-4 h-4" /> Log Out
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Home</Link>
          <Link href="/all-facilities" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">All Facilities</Link>
          <Link href="/add-facility" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Add Facility</Link>
          <Link href="/manage-facilities" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Manage My Facility</Link>
          <div className="pt-4 border-t border-border mt-4">

            <div className="grid grid-cols-2 gap-4">
              <Link href="/login">
                <Button href="/login" variant="bordered" className="rounded-xl">Login</Button>
              </Link>
              <Link href="/registration">
                <Button href="/registration" color="primary" className="rounded-xl">Registration</Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Account</p>
              <Button onClick={handleSignOut} className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl">Log Out</Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar