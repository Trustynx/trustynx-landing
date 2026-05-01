import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="bg-white p-24 mt-12 text-center">
      <div>
        <div className="mx-auto w-fit flex rounded-[19.2px] border-[0.6px] border-button px-[9.6px] py-2 gap-2 bg-[#E6F2FD]">
          <img src="/images/Dashboard.svg" alt="Dashboard" />
          <p className="text-button">Now Onboarding Founding Doctors</p>
        </div>
        <div className="w-5xl mx-auto">
          <h1 className="text-6xl leading-[92px]">
            Build your <span className="font-bold">Professional Presence</span>{" "}
            today & get verified over time
          </h1>
          <p className="text-2xl text-para">
            Trustynx is a verification platform that helps doctors prove
            credibility and earn patient trust online. Join, and let your status
            speak for itself.
          </p>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <Button
            className="rounded-xl w-fit h-fit py-5 px-8 bg-button text-xl text-white"
            text="Join as a Doctor"
          ></Button>
          <Button
            className="border rounded-xl border-main py-5 px-8"
            text="See how it Works"
          ></Button>
        </div>
      </div>
    </section>
  );
}
