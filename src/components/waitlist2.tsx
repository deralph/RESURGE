import React, { useState, FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDb } from "./firebase"; // adjust the path as neededy

const Resurge: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!fullName.trim()) {
      newErrors.name = "Please enter your full name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Reset previous errors
    setErrors({});

    if (!validate()) return;

    try {
      // Save name and email in the "waitlist" collection
      const res = await addDoc(collection(firestoreDb, "waitlist"), {
        name: fullName,
        email: email,
        timestamp: new Date(),
      });
      console.log(res);
      // Show toast via react-hot-toast
      toast.success("Thank you for joining our waitlist! 🚀");
      // Reset form fields
      setFullName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document:", error);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <div
      className="hero-container flex items-center justify-center h-screen w-full bg-cover bg-center relative"
      style={{
        objectFit: "contain",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=High-quality%20professional%20fashion%20photograph%20of%20a%20Nigerian%20model%20in%20a%20stylish%20pose%20scanning%20an%20NFC%20tag%20on%20a%20matte-black%20designer%20t-shirt.%20The%20model%20has%20a%20sophisticated%20expression%2C%20wearing%20minimal%20accessories.%20The%20background%20is%20simple%20and%20elegant%20with%20soft%20studio%20lighting%20creating%20a%20luxury%20atmosphere.%20The%20scene%20conveys%20modern%20technology%20meeting%20high%20fashion.%20The%20image%20has%20rich%20contrast%20and%20professional%20quality%20suitable%20for%20a%20luxury%20brand%20website.&width=1920&height=1080&seq=resurge1&orientation=landscape')`,
      }} 
    >
      <div  className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6" >
        <img src="../src/assets/resurge001.png" alt="Resurge Logo" className="h-8 sm:h-10 md:h-12 lg:h-12 xl:h-12"  />
      </div>
      <Toaster />
      <div className="content-wrapper flex flex-col items-center justify-center text-center px-4  animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug mb-4 max-w-[90vw] font-montserrat font-normal font-bold text-white text-center">
          They gave you logos.
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug mb-4 max-w-[90vw] font-montserrat font-normal font-bold text-white text-center">
        We give you you{" "}
  <span className="relative inline-block">
    <span className="relative z-10">legacy</span>
    
    <svg
      className="absolute bottom-0 left-0 w-full z-0"
      viewBox="0 0 300 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M5 30 C50 60, 250 0, 295 30"
        fill="orange"
        opacity="0.9"
      />
    </svg>
  </span>
        </h1>
        
        <p className="text-base sm:text-lg mb-8 max-w-[90vw] font-montserrat font-medium text-white text-center">
          Scan your clothing. Upload your story. Preserve it for decades.
        </p>

        <div className="form-container w-full max-w-xs sm:max-w-sm px-4">
          <form
            id="waitlistForm"
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`w-full px-4 py-3 rounded ${
                  errors.name ? "border-b-2 border-red-600" : ""
                }`}
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 rounded ${
                  errors.email ? "border-b-2 border-red-600" : ""
                }`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-white text-black  py-3 px-6 mt-2 rounded-full font-medium !rounded-button whitespace-nowrap"
            >
              Join the movement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resurge;
