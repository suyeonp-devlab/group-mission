"use client";

import { useFormContext } from "react-hook-form";
import type { FindPasswordFormType } from "@/features/auth/FindPasswordForm";
import { useState } from "react";

interface FindPasswordFormTwoProps {
  onSubmit: () => void;
}

export default function FindPasswordFormTwo({ onSubmit }: FindPasswordFormTwoProps) {

  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);

  const { register, formState: { errors, isValid, isSubmitting } } = useFormContext<FindPasswordFormType>();

  return (
    <form onSubmit={(e) => {e.preventDefault(); onSubmit();}} className="space-y-4">
      {/* newPassword */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">비밀번호</label>
        <div className="relative">
          <input
            {...register("newPassword", {deps: ["newPasswordConfirm"]})}
            placeholder="비밀번호 입력"
            type={showPw ? "text" : "password"}
            autoComplete="new-password"
            className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 pr-14 text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
          />
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-zinc-900"
            aria-label="비밀번호 보기 토글"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={showPw ? "/icons/eye-off.svg" : "/icons/eye-on.svg"} alt="비밀번호 보기 토글" className="h-5 w-5"/>
          </button>
        </div>
        {errors.newPassword && <p className="mt-2 text-xs text-red-500">{errors.newPassword.message}</p>}
      </div>

      {/* newPasswordConfirm */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">비밀번호 확인</label>
        <div className="relative">
          <input
            {...register("newPasswordConfirm")}
            placeholder="비밀번호 확인"
            type={showPwConfirm ? "text" : "password"}
            autoComplete="new-password"
            className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 pr-14 text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
          />
          <button
            type="button"
            onClick={() => setShowPwConfirm((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-zinc-900"
            aria-label="비밀번호 확인 보기 토글"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={showPwConfirm ? "/icons/eye-off.svg" : "/icons/eye-on.svg"} alt="비밀번호 확인 보기 토글" className="h-5 w-5"/>
          </button>
        </div>
        {errors.newPasswordConfirm && <p className="mt-2 text-xs text-red-500">{errors.newPasswordConfirm.message}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-2 cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-300 font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        비밀번호 변경
      </button>
    </form>
  );
}