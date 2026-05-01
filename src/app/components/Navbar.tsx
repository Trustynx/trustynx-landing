import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full px-[100px] py-8 mx-auto flex gap-2 justify-between items-center">
        <Image
          src="/images/trustynx-logo.svg"
          alt="Trustynx"
          width={150}
          height={40}
        />
        <nav className="flex justify-between items-center gap-12">
          <a className="cursor-pointer">How It Works</a>
          <a className="cursor-pointer">For Doctors</a>
          <a className="cursor-pointer">Verification</a>
          <a className="cursor-pointer">FAQs</a>
        </nav>
        <Button
          className="border rounded-xl w-fit h-fit py-4 px-6 bg-button text-xl text-white"
          text="Join as a Doctor"
        />
        {/* <button >
          Join as a Doctor
        </button> */}
      </div>
    </header>
  );
}
