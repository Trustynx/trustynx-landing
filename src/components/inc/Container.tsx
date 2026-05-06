import React, { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "" },
  (ref) => {
    return (
      <div ref={ref} className={`w-full px-[100px] py-8 mx-auto ${className}`}>
        {children}
      </div>
    );
  }),
);

Container.displayName = "Container";

export default Container;
