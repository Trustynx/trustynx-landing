import Button from "../components/Button";

export default function JoinIn() {
  return (
    <div className="text-center m-auto bg-[url('/images/group.jpg')] h-screen bg-cover bg-center text-white">
      <div className="bg-black/50 h-full w-full py-60 px-60">
        <div>
          <h1 className="text-5xl leading-[64px] pb-4">
            Join as a <span className="font-bold">Founding Doctor</span>
          </h1>
          <p className="text-2xl ">
            Be among the first healthcare professionals to build a verified
            presence on Trustynx. Founding doctors receive a permanent badge
            recognizing their early trust in the platform.
          </p>
        </div>
        <div className="flex gap-5 justify-center pt-8">
          <Button
            className="rounded-xl w-fit h-fit py-4 px-6 bg-button text-xl text-white"
            text="Join as a Doctor"
          />
          <Button
            className="rounded-xl w-fit h-fit py-4 px-6 text-button text-xl bg-white"
            text="See how it works"
          />
        </div>
      </div>
    </div>
  );
}
