"use client";

import Image from "next/image";
import { useState } from "react";
import { AbstractPlaceholder } from "@/components/ui/AbstractPlaceholder";
import { cn } from "@/lib/cn";
import { withBasePath } from "@/lib/base-path";

type MediaFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  videoSrc?: string;
  placeholderLabel?: string;
  seed?: string;
  objectPosition?: string;
};

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  videoSrc,
  placeholderLabel,
  seed,
  objectPosition,
}: MediaFrameProps) {
  const [imageFailed, setImageFailed] = useState(!src);
  const [videoFailed, setVideoFailed] = useState(!videoSrc);
  const showVideo = Boolean(videoSrc) && !videoFailed;
  const showImage = Boolean(src) && !imageFailed && !showVideo;

  return (
    <div className={cn("overflow-hidden bg-bg-elevated", className)}>
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              imageClassName,
            )}
            src={withBasePath(videoSrc)}
            poster={withBasePath(src)}
            muted
            playsInline
            loop
            autoPlay
            onError={() => setVideoFailed(true)}
          />
        ) : null}

        {showImage ? (
          <Image
            src={withBasePath(src)!}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
            style={objectPosition ? { objectPosition } : undefined}
            onError={() => setImageFailed(true)}
          />
        ) : null}

        {!showVideo && !showImage ? (
          <AbstractPlaceholder
            seed={seed ?? src ?? alt}
            label={placeholderLabel}
          />
        ) : null}
      </div>
    </div>
  );
}
