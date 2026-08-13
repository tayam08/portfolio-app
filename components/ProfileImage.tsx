"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  size?: number;
  className?: string;
}

export default function ProfileImage({ size = 208, className = "" }: ProfileImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-3xl font-bold text-gray-400">엄</span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="엄태빈 프로필 사진"
      width={size}
      height={size}
      className={`w-full h-full object-cover ${className}`}
      priority
      onError={() => setError(true)}
    />
  );
}
