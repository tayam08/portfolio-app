"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProfileImageModal() {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
        aria-label="프로필 사진 크게 보기"
      >
        {imgError ? (
          <span className="text-4xl font-bold text-gray-400">엄</span>
        ) : (
          <Image
            src="/profile.jpg"
            alt="엄태빈 프로필 사진"
            width={208}
            height={208}
            className="w-full h-full object-cover"
            priority
            onError={() => setImgError(true)}
          />
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <X size={16} /> 닫기
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm">
              {imgError ? (
                <div className="w-72 h-72 bg-gray-100 flex items-center justify-center">
                  <span className="text-8xl font-bold text-gray-400">엄</span>
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt="엄태빈 프로필 사진"
                  width={480}
                  height={480}
                  className="w-full h-auto object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <p className="text-center text-white/60 text-xs mt-3">클릭하면 닫힙니다</p>
          </div>
        </div>
      )}
    </>
  );
}
