import Text from "@/components/base/Text";
import Reason from "@/components/inc/Reason";
import Image from "next/image";

interface Trust {
  icon: string;
  title: string;
  desc: string;
}

const model: Trust[] = [
  {
    icon: "/images/search.svg",
    title: "An established presence",
    desc: " This doctor has set up their Trustynx profile. Credentials have not yet been submitted for review.",
  },
  {
    icon: "/images/mouse.svg",
    title: " Review in progress",
    desc: "This doctor has submitted credentials for review. Verification is currently in progress.",
  },
  {
    icon: "/images/tick-circle.svg",
    title: "Credentials confirmed",
    desc: "This doctor's credentials have been reviewed and approved by Trustynx.",
  },
];

export default function TrustModel() {
  return (
    <div className="text-center py-24 max-lgg:py-15 px-31 max-lgg:px-20 bg-accent-light">
      <div className="w-4xl max-lgg:w-3xl mx-auto">
        <Text as="h1">
          The <span className="font-bold">Trust</span> Model
        </Text>
        <Text as="p">
          Our verification system reflects how trust actually works. Every
          profile has a status. Every status means something specific.
        </Text>
      </div>
      <div>
        <div className="flex gap-6 max-lgg:gap-3 p-3 pt-16">
          <div className="flex flex-col gap-28 max-lgg:gap-20">
            {model.map((role: Trust, index) => {
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
              className="max-lgg:h-[475px]"
              src="/images/female-doc.svg"
              alt="doctor-image"
              width={581}
              height={469}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
