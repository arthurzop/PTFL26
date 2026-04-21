"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";

type Props = ImageProps & {
  wrapperClassName?: string;
};

export default function BlurImage({
  className,
  wrapperClassName,
  ...props
}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={clsx("overflow-hidden", wrapperClassName)}>
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={clsx(
          "object-cover transition-all duration-1200 ease-out",
          isLoading ? "blur-sm" : "blur-0",
          className,
        )}
      />
    </div>
  );
}
