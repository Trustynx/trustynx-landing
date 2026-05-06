const variants = {
  h1: "leading-[64px] text-main text-5xl max-lgg:text-4xl",
  p: "text-2xl max-lgg:text-xl text-para",
};

type TextProps = {
  as: "h1" | "p";
  className?: string;
  children: React.ReactNode;
};

const Text = ({ as: Tag = "p", className = "", children }: TextProps) => {
  const styles = variants[Tag];
  return <Tag className={`${styles} ${className}`}>{children}</Tag>;
};

export default Text;
