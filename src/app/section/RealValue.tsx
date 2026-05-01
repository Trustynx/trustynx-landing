interface Values {
  id: number;
  icon: string;
  title: string;
  para: string;
}

const value: Values[] = [
  {
    id: 1,
    icon: "/images/qr.svg",
    title: "QR code verification",
    para: "Verified doctors get a scannable QR code. Patients can confirm credentials in seconds — in clinics, hospitals, or anywhere.",
  },
  {
    id: 2,
    icon: "/images/doc-profile.svg",
    title: "Public doctor profiles",
    para: "Sign up, fill in your details, and your public profile is ready. Specialty, qualifications, practice location, all in one clean, shareable link.",
  },
  {
    id: 3,
    icon: "/images/verified.svg",
    title: "Verification badges",
    para: "Every profile carries a visible trust status. Patients and institutions don't need to decode anything. They see exactly where you stand.",
  },
  {
    id: 4,
    icon: "/images/folder.svg",
    title: "Private and secure",
    para: "Documents are stored securely and never shared publicly. Only the verification status is visible, your credentials stay private.",
  },
  {
    id: 5,
    icon: "/images/trust.svg",
    title: "Transparent trust",
    para: "Trustynx is transparent about what has and hasn't been verified. Verification is based on submitted credentials and this is clearly stated. No false authority claims.",
  },
  {
    id: 6,
    icon: "/images/scale.svg",
    title: "Built to scale",
    para: "Designed for individual doctors today, ready for hospitals and institutions tomorrow. Your Trustynx profile is built to meet that demand.",
  },
];

export default function RealValue() {
  return (
    <div className="bg-accent-light py-24 px-[163px] gap-16 text-center">
      <div>
        <h1 className="text-5xl leading-[64px] w-3xl mx-auto text-main h-[204px]">
          Real Value Before You Ever <span className="font-bold">Upload</span> a
          Document
        </h1>
        <p className="text-para text-3xl h-[50px]">
          Instant profile. Clear trust signals. Secure verification. Simple
          tools that make professional credibility visible and verifiable. No
          unnecessary friction.
        </p>
      </div>
      <div className="p-16 grid grid-cols-3 gap-8">
        {value.map((real: Values) => {
          return (
            <div
              className={`flex flex-col gap-8 rounded-2xl border-[1px] p-6 pt-8 border-bright shadow-[0px_4px_4px_rgba(0,0,0,0.08)] ${real.id === 2 ? "bg-button text-white" : "bg-white"}`}
              key={real.title}
            >
              <div>
                <img
                  className={`p-2 rounded-lg ${real.id === 2 ? "bg-white" : "bg-bright/36"}`}
                  src={real.icon}
                  alt={real.title}
                />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-2xl">{real.title}</h3>
                <p
                  className={`text-base leading-[28px] ${real.id !== 2 && "text-para"}`}
                >
                  {real.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
