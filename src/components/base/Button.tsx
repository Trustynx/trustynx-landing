type ButtonProp = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProp) {
  return <button className={className}>{text}</button>;
}
