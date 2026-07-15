import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold">
              Little
              <span className="text-rose-400">Nest</span>
            </h2>

            <p className="mt-5 text-slate-300 leading-7">
              Helping families discover trusted child care centers with
              verified information, reviews, and easy search.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-rose-500 transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-rose-500 transition"
              >
             <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-rose-500 transition"
              >
               <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/centers">
                  Child Care Centers
                </Link>
              </li>

              <li>
                <Link href="/providers">
                  Providers
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Verified Centers</li>
              <li>Parent Reviews</li>
              <li>Child Care Search</li>
              <li>Provider Registration</li>
              <li>Safety Information</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            {/* <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>support@littlenest.com</p>
              </div>

            </div> */}



            <div className="space-y-4 text-slate-300">

  
   <a href="https://www.google.com/maps/search/?api=1&query=Dhaka,Bangladesh"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-rose-400 transition"
  >
    <MapPin size={18} />
    <p>Dhaka, Bangladesh</p>
  </a>

  
    <a href="tel:+8801234567890"
    className="flex items-center gap-3 hover:text-rose-400 transition"
  >
    <Phone size={18} />
    <p>+880 1234-567890</p>
  </a>

  
    <a href="mailto:support@littlenest.com"
    className="flex items-center gap-3 hover:text-rose-400 transition"
  >
    <Mail size={18} />
    <p>support@littlenest.com</p>
  </a>

</div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} LittleNest. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-slate-400 text-sm">
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;