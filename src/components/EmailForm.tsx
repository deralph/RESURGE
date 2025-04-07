"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { RxInfoCircled } from "react-icons/rx";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDb } from "./firebase"; // adjust the path as needed

export default function EmailForm() {
  // Initialize email state as an empty string
  const [email, setEmail] = useState<string>("");

  // Update email state on input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission and add the email to Firebase Firestore
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Save the email in the "waitlist" collection
      const mail = await addDoc(collection(firestoreDb, "waitlist"), { email });
      console.log(mail);
      // Clear the input field and show a success toast
      setEmail("");
      toast.success("Thank you for joining our waitlist! 🚀");
    } catch (error) {
      // Clear the input field and show an error toast on failure
      setEmail("");
      toast.error("Oops! Something went wrong!");
      console.error("Error adding document:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="mt-2 max-w-sm">
        <div className="flex flex-col gap-2 lg:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Email address
          </label>
          <input
            autoComplete="email"
            className="text-accent-500 block h-10 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="email-address"
            name="email"
            placeholder="johndoe@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>Join the waitlist</span>
          </button>
        </div>
      </form>

      <div className="flex items-start gap-2 text-gray-500 py-4">
        <RxInfoCircled />
        <p className="text-xs -mt-[0.5] max-w-sm">
          No worries! Your data is completely safe and will only be utilized to
          provide you with updates about our product.
        </p>
      </div>
    </>
  );
}
