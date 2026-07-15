"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  getMyCenters,
  createCenter,
    updateCenter,
      deleteCenter,
} from "@/services/center";

import { uploadImage } from "@/services/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ManageMyCentersPage() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const [centers, setCenters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [isOpen, setIsOpen] = useState(false);

 const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    availableSeats: "",
    rating: "",
    description: "",
  });


  const [editingId, setEditingId] = useState<string | null>(null);

const [isEditMode, setIsEditMode] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
const [deleteOpen, setDeleteOpen] = useState(false);


if (!session) {
  toast.error("Please login first");
  router.push("/login");
  return;
}

if (session.user.role !== "admin") {
  toast.error("Access Denied");
  router.push("/");
  return;
}
  useEffect(() => {

  if (!session) return;

  if (session.user.role !== "admin") {
    
    toast.error("Access Denied");
    router.push("/");
    return;
  }

  async function loadCenters() {

  const email = session?.user?.email;

  if (!email) return;

  try {
    const data = await getMyCenters(email);
    setCenters(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  loadCenters();

}, [session]);


    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleEdit = (center: any) => {
  setIsEditMode(true);

  setEditingId(center._id);

  setFormData({
    name: center.name,
    image: center.image,
    location: center.location,
    availableSeats: center.availableSeats.toString(),
    rating: center.rating.toString(),
    description: center.description,
  });

  setIsOpen(true);
};

const handleImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  try {
    setUploading(true);

    const imageUrl = await uploadImage(file);

    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  } catch (error) {
    console.error(error);
    alert("Image upload failed.");
  } finally {
    setUploading(false);
  }
};
  const handleSaveCenter = async () => {
  if (!session?.user) return;

  const centerData = {
    ...formData,
    availableSeats: Number(formData.availableSeats),
    rating: Number(formData.rating),

    ownerId: session.user.id,
    ownerName: session.user.name,
    ownerEmail: session.user.email,
  };

  try {
    if (isEditMode) {
      // ✅ Update
      await updateCenter(editingId!, centerData);

      alert("Center Updated Successfully!");
    } else {
      // ✅ Create
      await createCenter(centerData);

      alert("Center Added Successfully!");
    }

    setIsOpen(false);

    setIsEditMode(false);
    setEditingId(null);

    setFormData({
      name: "",
      image: "",
      location: "",
      availableSeats: "",
      rating: "",
      description: "",
    });

    const data = await getMyCenters(session.user.email);
    setCenters(data);
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};
const handleDelete = async () => {
  if (!deleteId) return;

  try {
    toast.loading("Deleting center...", {
      id: "delete-center",
    });

    await deleteCenter(deleteId);

    const data = await getMyCenters(session!.user.email);
    setCenters(data);

    toast.success("Center deleted successfully!", {
      id: "delete-center",
    });

    setDeleteOpen(false);
    setDeleteId(null);
  } catch (error) {
    console.error(error);

    toast.error("Delete failed!", {
      id: "delete-center",
    });
  }
}




  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage My Centers
        </h1>

     <button
  onClick={() => {
    setIsEditMode(false);
    setEditingId(null);

    setFormData({
      name: "",
      image: "",
      location: "",
      availableSeats: "",
      rating: "",
      description: "",
    });

    setIsOpen(true);
  }}
  className="bg-rose-400 text-white px-5 py-3 rounded-xl hover:bg-pink-600"
>
  + Add New Center
</button>

      </div>




      {centers.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-2xl font-bold">
            No Center Found
          </h2>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {centers.map((center) => (
            <div
              key={center._id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={center.image}
                alt={center.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {center.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {center.location}
                </p>
                <p className="text-gray-600 mt-2">
  🪑 Available Seats: {center.availableSeats}
</p>

 <p className="text-gray-600 mt-3">
    {center.description}
  </p>

                <div className="flex gap-3 mt-6">

                  <button
  onClick={() => handleEdit(center)}
  className="flex-1 bg-gray-400 hover:bg-gray-600 text-white py-2 rounded-lg"
>
  Update
</button>

         <button
  onClick={() => {
    setDeleteId(center._id);
    setDeleteOpen(true);
  }}
  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
>
  Delete
</button>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}

      {/* --------- */}


      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          Add Child Care Center
        </h2>

        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">

        <input
          name="name"
          placeholder="Center Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

   <div className="space-y-2">
    <label className="block text-sm font-medium">
      Center Image
    </label>

    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="w-full border rounded-lg p-3"
    />

    
    {uploading && (
      <p className="text-pink-500">
        Uploading image...
      </p>
    )}

   
  

  </div>

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="availableSeats"
          type="number"
          placeholder="Available Seats"
          value={formData.availableSeats}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

       

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className="w-full border rounded-lg p-3"
        />

      </div>

      <div className="flex justify-end gap-3 mt-8">

        <button
          onClick={() => setIsOpen(false)}
          className="px-5 py-2 border rounded-lg"
        >
          Cancel
        </button>

   <button
  onClick={handleSaveCenter}
  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
>
  {isEditMode ? "Update Center" : "Save Center"}
</button>

      </div>

    </div>
  </div>
)}
{deleteOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-red-600">
        Delete Center
      </h2>

      <p className="text-gray-600 mt-3">
        Are you sure you want to delete this child care center?
      </p>

      <div className="flex justify-end gap-3 mt-8">

        <button
          onClick={() => {
            setDeleteOpen(false);
            setDeleteId(null);
          }}
          className="px-5 py-2 border rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  </div>
)}
      

    </div>
  );
}