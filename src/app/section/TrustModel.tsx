export default function TrustModel() {
  return (
    <div className="text-center py-24 px-31 bg-accent-light">
      <div className="w-4xl mx-auto">
        <h1 className="leading-[64px] text-5xl text-main">
          The <span className="font-bold">Trust</span> Model
        </h1>
        <p className="text-2xl text-para">
          Our verification system reflects how trust actually works. Every
          profile has a status. Every status means something specific.
        </p>
      </div>
      <div>
        <div className="flex gap-6 p-3 pt-16">
          <div className="flex flex-col gap-[110px]">
            <div className="flex gap-[24px] w-[543px]">
              <img
                className="h-[46px] w-[46px]"
                src="/images/search.svg"
                alt="search-icon"
              />
              <div className="flex text-left flex-col">
                <h4 className="text-3xl text-button">
                  An established presence
                </h4>
                <p className="text-xl text-main">
                  This doctor has set up their Trustynx profile. Credentials
                  have not yet been submitted for review.
                </p>
              </div>
            </div>

            <div className="flex gap-[24px] w-[543px]">
              <img
                className="h-[46px] w-[46px]"
                src="/images/mouse.svg"
                alt="mouse-icon"
              />
              <div className="flex text-left flex-col">
                <h4 className="text-3xl">Review in progress</h4>
                <p className="text-xl text-main">
                  This doctor has submitted credentials for review. Verification
                  is currently in progress.
                </p>
              </div>
            </div>
            <div className="flex gap-[24px] w-[543px]">
              <img
                className="h-[46px] w-[46px]"
                src="/images/tick-circle.svg"
                alt="tick-icon"
              />
              <div className="flex text-left flex-col">
                <h4 className="text-3xl">Credentials confirmed</h4>
                <p className="text-xl text-main">
                  `This doctor&apos;s credentials have been reviewed and
                  approved by Trustynx.`
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[543px] h-[579px]"
              src="/images/female-doc.jpg"
              alt="doctor-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
