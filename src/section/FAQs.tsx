"use client";

import { useState } from "react";
import Text from "@/components/base/Text";
import Image from "next/image";

interface Asked {
  id: number;
  que: string;
  ans: string;
}

const freq: Asked[] = [
  {
    id: 1,
    que: "Do I need to upload any documents to create a profile?",
    ans: "No. You can create a complete, publicly shareable profile with just your basic professional information — your name, specialty, qualifications, practice location, and a short bio. No documents are required at this stage. Verification is a separate step you can take when you're ready.",
  },
  { id: 2, que: "What does Trustynx Verified actually mean?", ans: " " },
  {
    id: 3,
    que: "What documents do I need to submit for verification?",
    ans: " ",
  },
  { id: 4, que: "Who at Trustynx can see my submitted documents?", ans: " " },
  { id: 5, que: "How do patients find my Trustynx profile?", ans: " " },
  {
    id: 6,
    que: "What does 'Profile Created' mean to someone viewing my profile?",
    ans: " ",
  },
  {
    id: 7,
    que: "Is Trustynx replacing official medical licensing bodies?",
    ans: " ",
  },
  { id: 8, que: "What is a founding doctor?", ans: " " },
];

export default function FAQs() {
  const [clicked, setClicked] = useState<number | null>(null);

  function handleClick(id: number) {
    setClicked((prev) => {
      return prev === id ? null : id;
    });
  }

  return (
    <div
      id="faqs"
      className="py-24 max-lgg:py-15 px-64 max-lgg:px-30 bg-accent-light text-center"
    >
      <div className="h-fit">
        <Text as="h1">
          Real <span className="font-bold">Questions.</span> Straight{" "}
          <span className="font-bold">Answers.</span>
        </Text>
        <Text as="p">
          We&apos;d rather you asked than wonder. Everything you want to know
          about Trustynx before creating your profile.
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-16">
        {freq.map((quency: Asked) => {
          return (
            <div
              onClick={() => handleClick(quency.id)}
              key={quency.id}
              className=""
            >
              {clicked === quency.id ? (
                <div className="bg-button p-6 max-lgg:p-4 text-left rounded-[20px] text-white">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-2xl max-lgg:text-xl pb-6">
                      {quency.que}
                    </h4>
                    <Image
                      src="/images/add.svg"
                      alt="add-icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="leading-[28px]">{quency.ans}</p>
                </div>
              ) : (
                <div className="flex justify-between bg-white p-6 max-lgg:p-4 text-left rounded-[20px]">
                  <h4 className="font-medium max-lgg:text-xl text-2xl">
                    {quency.que}
                  </h4>
                  <Image
                    src="/images/add-blue.svg"
                    alt="add-icon"
                    width={24}
                    height={24}
                  />
                </div>
              )}
            </div>
          );
        })}

        <p className="text-xl text-para pt-2">
          Still have a question? Reach out at info@trustynx.com.
        </p>
      </div>
    </div>
  );
}
