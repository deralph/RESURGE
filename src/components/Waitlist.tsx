// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase"; // Adjust the path to your firebase.js
import waitlist1 from "../assets/waitlist1.jpg";
import { Toaster } from "react-hot-toast";
import EmailForm from "../components/EmailForm";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <Toaster />
      <div className="text-xl font-bold font-montserrat py-3">RESURGE</div>
      <section className="font-montserrat w-screen h-screen flex flex-col lg:flex-row justify-center items-center gap-6 px-[5%] shadow-inner ">
        {/* <div className="md:h-full h-80 bg-[#FCD0A1] relative overflow-hidden"> */}
        <img
          src={waitlist1}
          alt="Mobile App Screenshots"
          className="object-cover w-full h-40 lg:h-full  lg:basis-1/2"
        />
        {/* </div> */}

        <main className="flex flex-col gap-8 justify-center items-center lg:basis-1/2">
          <div className="">
            <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
              Join the conversation: Secure your spot on RESURGE!
            </h1>
            <p className="text-gray-500 py-4">
              Join the waitlist1 to be notified when our app is available!
            </p>

            <EmailForm />
            <p className=""> Follow us on social media</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                target="_blank"
                href="https://x.com/resurge_style?s=21"
                aria-label="X"
                className=""
              >
                <FaXTwitter />
              </a>
              {/* <a
                target="_blank"
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300"
              >
                <FaLinkedin />
              </a> */}
              <a
                target="_blank"
                href="https://www.tiktok.com/@resurge24?_t=ZM-8vKxAs7HARh&_r=1"
                aria-label="tiktok"
                className=""
              >
                <FaTiktok />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/resurge_stle?igsh=MXU4aGh1bHZydWhzYg%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className=""
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
