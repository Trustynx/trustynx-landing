import Button from "@/components/base/Button";
import Text from "@/components/base/Text";
import Reason from "@/components/inc/Reason";
import Image from "next/image";

interface How {
  icon: string;
  title: string;
  desc: string;
}

const work: How[] = [
  {
    icon: "/images/doctor-icon.svg",
    title: "Set up your public presence",
    desc: "Create a clean, professional public page with your name, specialty, qualifications, and practice details.",
  },
  {
    icon: "/images/doctor-icon.svg",
    title: "Share your profile publicly",
    desc: "Get your unique Trustynx profile link the moment you publish. Share it anywhere patients might find you.",
  },
  {
    icon: "/images/doctor-icon.svg",
    title: "Become verified and build trust",
    desc: "When you're ready, submit your credentials for review. Documents are handled securely and never shared publicly.",
  },
];

export default function HowItWorks() {
  return (
    <div
      id="works"
      className="bg-accent-light py-24 max-lgg:py-15 px-44 max-lgg:px-25 text-center"
    >
      <div className="px-25 max-lgg:px-10">
        <Text as="h1">
          How It <span className="font-bold">Works</span>
        </Text>
        <Text as="p">
          Most platforms make you prove yourself before you get started.
          Trustynx works the other way around.
        </Text>
      </div>
      <div className="flex gap-6 p-3 pt-16">
        <div className="flex flex-col gap-28 max-lgg:gap-20">
          {work.map((role: How, index) => {
            return (
              <Reason
                className={`${index === 0 && "text-button"}`}
                key={role.title}
                icon={role.icon}
                title={role.title}
                desc={role.desc}
              />
            );
          })}
        </div>
        <div>
          <Image
            src="/images/male-doc.svg"
            alt="doctor-image"
            width={543}
            height={579}
          />
        </div>
      </div>
      <div className="text-left px-19">
        <Button
          className="py-5 px-8 mt-5 rounded-lg bg-button text-base text-white max-lgg:py-4 max-lgg:px-6"
          text="Join as a Doctor"
        ></Button>
      </div>
    </div>
  );
}
