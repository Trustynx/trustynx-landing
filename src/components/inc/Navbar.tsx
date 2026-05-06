import Image from "next/image";
import Button from "../base/Button";

interface NavProp {
  title: string;
  ref: string;
}

const nav: NavProp[] = [
  {
    title: "How It Works",
    ref: "#works",
  },
  {
    title: "For Doctors",
    ref: "#join",
  },
  {
    title: "Verification",
    ref: "#real",
  },
  {
    title: "FAQs",
    ref: "#faqs",
  },
];

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
          {nav.map((navi: NavProp, index) => {
            return (
              <a
                key={index}
                href={navi.ref}
                className="cursor-pointer text-main"
              >
                {navi.title}
              </a>
            );
          })}
        </nav>
        <Button
          className="border rounded-xl w-fit h-fit py-4 px-6 bg-button text-xl text-white"
          text="Join as a Doctor"
        />
      </div>
    </header>
  );
}
