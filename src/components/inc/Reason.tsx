import Image from "next/image";

const variants = {
  cont: "flex gap-6 text-left w-[543px] max-lgg:w-[450px]",
  title: "text-3xl max-lgg:text-2xl",
  desc: "text-xl max-lgg:text-lg text-para",
};

type ReasonProp = {
  icon: string;
  title: string;
  desc: string;
  className?: string;
};

const Reason = ({ icon, title, desc, className = "" }: ReasonProp) => {
  const styles = variants.title;
  return (
    <div className={`${variants.cont} ${className} `}>
      <Image height={48} width={48} src={icon} alt={title} />
      <div>
        <h1 className={variants.title}>{title}</h1>
        <p className={variants.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default Reason;
