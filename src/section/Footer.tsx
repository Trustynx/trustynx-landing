import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#0A1A2F] py-32 px-25 text-bright">
      <div className="flex justify-between">
        <div>
          <Image
            width={200}
            height={53}
            src="/images/white-logo.svg"
            alt="logo"
          />
          <p className="w-[420px] pt-6">
            The verification layer for healthcare professionals. Building trust
            infrastructure that healthcare deserves.
          </p>
        </div>
        <div>
          <h4 className="pb-6 font-medium text-2xl text-white">Product</h4>

          <div className="flex flex-col gap-4">
            <p>How It Works</p>
            <p>Features</p>
            <p>Verification Levels</p>
          </div>
        </div>
        <div>
          <h4 className="pb-6 font-medium text-2xl text-white">Contact</h4>
          <div className="flex flex-col gap-4">
            <p>info@trustynx.com</p>
            <p>support@trustynx.com</p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <hr className="pb-6" />
        <div className="flex justify-between">
          <div>
            <Image
              src="/images/vector.svg"
              alt="logo"
              className="inline mb-2 pr-3"
              width={24}
              height={24}
            />
            <p className="inline">
              {new Date().getFullYear()} Trustynx. All rights reserved.
            </p>
          </div>
          <div className="flex justify-between gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
