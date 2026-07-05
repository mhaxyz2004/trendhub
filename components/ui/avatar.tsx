import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  size = 40,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full object-cover flex-shrink-0", className)}
      style={{ width: size, height: size }}
    />
  );
}
