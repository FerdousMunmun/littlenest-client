"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { CalendarDays, Mail, ShieldCheck, User } from "lucide-react";
import { useState } from "react";

import { updateProfile } from "@/services/profile";
import { uploadImage } from "@/services/image";
import toast from "react-hot-toast";
export default function MyProfilePage() {

    const [openEdit, setOpenEdit] = useState(false);
    const [name, setName] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const handleUpdateProfile = async () => {
        try {
            let imageUrl = user?.image;

            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            const result = await updateProfile(user!.id, {
                name,
                image: imageUrl,
            });

            if (result.modifiedCount > 0) {
                toast.success("Profile Updated Successfully");

                setOpenEdit(false);

                window.location.reload();
            } else {
                toast.error("Nothing Updated");
            }
        } catch (error) {
            console.log(error);

            toast.error("Update Failed");
        }
    };
    const { data: session } = authClient.useSession();

    const user = session?.user;
    console.log(user);

console.log("PROFILE PAGE USER =>", user);
    return (
        <div className="bg-gray-50 min-h-screen py-14 px-5">
            <div className="max-w-5xl mx-auto">

                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold">My Profile</h1>
                    <p className="text-gray-500 mt-2">
                        Manage your personal account information.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400"></div>

                    {/* Profile */}
                    <div className="px-8 pb-10">

                        <img
                            src={user?.image || "/avatar.png"}
                            alt={user?.name || "User"}
                            className="w-36 h-36 rounded-full object-cover border-[6px] border-white shadow-lg mx-auto -mt-18"
                        />

                        <h2 className="text-3xl font-bold text-center mt-5">
                            {user?.name}
                        </h2>

                        <p className="text-center text-gray-500 mt-2">
                            {user?.email}
                        </p>

                        <div className="flex justify-center mt-5">
                            <span
                                className={`px-5 py-2 rounded-full text-sm font-semibold ${user?.role === "admin"
                                    ? "bg-red-100 text-red-600"
                                    : "bg-green-100 text-green-600"
                                    }`}
                            >
                                {user?.role === "admin"
                                    ? "Administrator"
                                    : "User"}
                            </span>
                        </div>

                        {/* Personal Information */}

                        <div className="mt-10 border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-6">
                                Personal Information
                            </h3>

                            <div className="space-y-5">

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <User size={18} />
                                        Full Name
                                    </div>

                                    <span className="font-semibold">
                                        {user?.name}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Mail size={18} />
                                        Email
                                    </div>

                                    <span className="font-semibold">
                                        {user?.email}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <ShieldCheck size={18} />
                                        Role
                                    </div>

                                    <span className="font-semibold capitalize">
                                        {user?.role}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <CalendarDays size={18} />
                                        Member Since
                                    </div>

                                    <span className="font-semibold">
                                        {user?.createdAt
                                            ? new Date(user.createdAt).toLocaleDateString()
                                            : "N/A"}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Quick Actions */}

                        <div className="mt-10">

                            <h3 className="text-xl font-bold mb-5">
                                Quick Actions
                            </h3>

                            <div className="flex flex-wrap justify-center gap-4 mt-6">

                                {user?.role === "user" ? (
                                    <Link href="/my-bookings">
                                        <Button className="bg-pink-500 text-white rounded-lg px-6 py-2">
                                            My Bookings
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href="/manage-my-centers">
                                        <Button className="mt-8 bg-gray-600 text-white rounded-lg px-8 py-2">
                                            Manage Centers
                                        </Button>
                                    </Link>
                                )}

                                <Link href="/child-care-centers">
                                    <Button
                                        className="bg-rose-500 hover:bg-rose-600 text-white rounded-lg px-6 py-2"
                                    >
                                        Browse Centers
                                    </Button>
                                </Link>

                            </div>

                        </div>

                        {/* Edit Button */}

                        <div className="mt-8 flex justify-center">
                            <Button
                                onPress={() => {
                                    setName(user?.name || "");
                                    setOpenEdit(true);
                                }}
                                className="bg-black text-white rounded-lg px-8 py-2"
                            >
                                Edit Profile
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
            {openEdit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                        <h2 className="text-2xl font-bold mb-6">
                            Edit Profile
                        </h2>

                        <div className="space-y-4">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border p-3 outline-none focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Profile Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setImageFile(e.target.files?.[0] || null)
                                    }
                                    className="w-full rounded-lg border p-2"
                                />
                            </div>

                        </div>

                        <div className="mt-8 flex justify-end gap-3">

                            <button
                                onClick={() => setOpenEdit(false)}
                                className="rounded-lg border px-5 py-2"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleUpdateProfile}
                                className="rounded-lg bg-pink-500 px-5 py-2 text-white"
                            >
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            )}


        </div>

    );
}