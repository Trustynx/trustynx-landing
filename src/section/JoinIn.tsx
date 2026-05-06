import Button from "@/components/base/Button";

export default function JoinIn() {
  return (
    <div
      id="join"
      className="text-center m-auto bg-[url('/images/group.jpg')] h-screen bg-cover bg-center text-white"
    >
      <div className="bg-black/50 h-full w-full p-60 max-lgg:py-40 max-lgg:px-20">
        <div>
          <h1 className="text-5xl max-lgg:text-4xl leading-[64px] pb-4">
            Join as a <span className="font-bold">Founding Doctor</span>
          </h1>
          <p className="text-2xl max-lgg:text-xl">
            Be among the first healthcare professionals to build a verified
            presence on Trustynx. Founding doctors receive a permanent badge
            recognizing their early trust in the platform.
          </p>
        </div>
        <div className="flex gap-5 justify-center pt-8">
          <Button
            className="rounded-xl w-fit h-fit py-4 px-6 bg-button text-xl text-white max-lgg:py-4 max-lgg:px-6"
            text="Join as a Doctor"
          />
          <Button
            className="rounded-xl w-fit h-fit py-4 px-6 text-button text-xl bg-white max-lgg:py-4 max-lgg:px-6"
            text="See how it works"
          />
        </div>
      </div>
    </div>
  );
}
