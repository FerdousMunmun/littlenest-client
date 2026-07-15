
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
  console.log("SESSION USER =>", session?.user);
  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

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
            <Link href="/" className="font-medium text-slate-700 hover:text-rose-600 transition-colors">Home</Link>
            <Link href="/child-care-centers" className="font-medium text-slate-700 hover:text-rose-600 transition-colors">Child Care Centers</Link>
           {isUser && (
  <Link href="/my-bookings">
    My Bookings
  </Link>
)}

{isAdmin && (
  <Link href="/manage-my-centers">
    Manage My Centers
  </Link>
)}
 <Link href="/all-facilities" className="font-medium text-slate-700 hover:text-rose-600 transition-colors">All Facilities</Link>
            <Link href="/my-profile" className="font-medium text-slate-700 hover:text-rose-600 transition-colors">My Profile</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link href="/login" className="font-medium text-slate-700 hover:text-rose-600 transition-colors">Login</Link>
                <Link href="/registration">

                  <Button className="font-bold rounded-full px-8 shadow-lg shadow-orange-600/20 bg-rose-400">
                    Registration
                  </Button>
                </Link>
              </>
            ) : (

              <div className="relative group pb-3">
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
              <div className="absolute right-0 top-full mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 overflow-hidden">
                 <div className="flex items-center gap-4 p-5 border-b">

  <img
    src={user?.image || "/avatar.png"}
    alt={user?.name || "User"}
    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400"
  />

  <div>
    <h3 className="font-bold">
      {user?.name}
    </h3>

    <p className="text-sm text-gray-500">
      {user?.email}
    </p>

    <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
      {user?.role}
    </span>
  </div>

</div>
                  {/* dropdown menu */}
                 {isAdmin && (
  <Link href="/manage-my-centers"
       onClick={() => {
    console.log("clicked");
  }}

  className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50 transition">
    <User className="w-4 h-4  ml-2" />
    Manage My Centers
  </Link>
)}

{isUser && (
  <Link href="/my-bookings"  className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50 transition">
    <User className="w-4 h-4" />
    My Bookings
  </Link>
)}
   {/* dropdown menu */}
                 <div className="flex justify-between p-3 border-t">
  <Button
    onClick={handleSignOut}
    className="text-black"
  >
    <LogOut className="w-4 h-4" />
    Log Out
  </Button>
</div>
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
          <Link href="/chid-care-centers" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"> Child Care Centers</Link>
          <Link href="/my-bookings" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">My Bookings</Link>
          <Link href="/manage-my-centers" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Manage My Center</Link>
          <Link href="/my-profile" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"> My Profile</Link>
          <div className="pt-4 border-t border-border mt-4">

            <div className="grid grid-cols-2 gap-4">
              <Link href="/login">
                <Button  variant="outline" className="rounded-xl">Login</Button>
              </Link>
              <Link href="/registration">
                <Button  className="rounded-xl">Registration</Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Account</p>
              <Button onClick={handleSignOut} className="block w-full text-left px-4 py-3 text-base font-medium text-rose-400 hover:bg-rose-600 rounded-xl">Log Out</Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar