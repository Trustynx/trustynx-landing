import Button from "../components/Button";

export default function HowItWorks() {
  return (
    <div className="bg-accent-light py-24 px-[163px] text-center">
      <div className="px-[101px] py-24">
        <h1 className="leading-[64px] text-5xl">
          How It <span className="font-bold">Works</span>
        </h1>
        <p className="text-2xl">
          Most platforms make you prove yourself before you get started.
          Trustynx works the other way around.
        </p>
      </div>
      <div className="flex gap-6 p-3 pt-16">
        <div className="flex flex-col gap-[110px]">
          <div className="flex gap-[24px] w-[543px]">
            <img
              className="h-[46px] w-[46px]"
              src="/images/doctor-icon.svg"
              alt="doctor-icon"
            />
            <div className="flex text-left flex-col">
              <h4 className="text-3xl text-button">
                Set up your public presence
              </h4>
              <p className="text-xl text-main">
                Create a clean, professional public page with your name,
                specialty, qualifications, and practice details.
              </p>
            </div>
          </div>

          <div className="flex gap-[24px] w-[543px]">
            <img
              className="h-[46px] w-[46px]"
              src="/images/doctor-icon.svg"
              alt="doctor-icon"
            />
            <div className="flex text-left flex-col">
              <h4 className="text-3xl">Share your profile publicly</h4>
              <p className="text-xl text-main">
                Get your unique Trustynx profile link the moment you publish.
                Share it anywhere patients might find you.
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] w-[543px]">
            <img
              className="h-[46px] w-[46px]"
              src="/images/doctor-icon.svg"
              alt="doctor-icon"
            />
            <div className="flex text-left flex-col">
              <h4 className="text-3xl">Become verified and build trust</h4>
              <p className="text-xl text-main">
                `When you&apos;re ready, submit your credentials for review.
                Documents are handled securely and never shared publicly.``
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[543px] h-[579px]"
            src="/images/male-doc.jpg"
            alt="doctor-image"
          />
        </div>
      </div>
      <div className="text-left px-19">
        <Button
          className="py-5 px-8 rounded-lg bg-button text-base text-white"
          text="Join as a Doctor"
        ></Button>
      </div>
    </div>
  );
}
