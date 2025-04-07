// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase"; // Adjust the path to your firebase.js
import waitlist from "../assets/waitlist.jpg";
import { Toaster } from "react-hot-toast";
import EmailForm from "../components/EmailForm";
export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-screen flex flex-col lg:flex-row  gap-6 p-[5%] shadow-inner ">
        {/* <div className="md:h-full h-80 bg-[#FCD0A1] relative overflow-hidden"> */}
        <img
          src={waitlist}
          alt="Mobile App Screenshots"
          className="object-fit lg:object-cover h-40 lg:h-auto  lg:basis-1/2"
        />
        {/* </div> */}

        <main className="flex flex-col gap-8 justify-center items-center lg:basis-1/2">
          <div className="">
            <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
              Join the conversation: Secure your spot on our Chat App!
            </h1>
            <p className="text-gray-500 py-4">
              Join the waitlist to be notified when our app is available!
            </p>

            <EmailForm />
          </div>
        </main>
      </section>
    </>
  );
}
