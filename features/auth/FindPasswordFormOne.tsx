"use client";

import { Controller, useFormContext } from "react-hook-form";
import CodeInput from "@/components/form/CodeInput";
import type { FindPasswordFormType } from "@/features/auth/FindPasswordForm";

interface FindPasswordFormOneProps {
  onNext: () => void;
}

export default function FindPasswordFormOne({ onNext } : FindPasswordFormOneProps) {

  const { register, control, watch, formState: { errors } } = useFormContext<FindPasswordFormType>();

  const userId = watch("userId");
  const pinCode = watch("pinCode");

  const isStep1Valid = userId?.trim().length > 0 && /^\d{6}$/.test(pinCode ?? "");

  return (
    <div className="space-y-4">
      {/* userId */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">아이디</label>
        <input
          {...register("userId")}
          placeholder="아이디 입력"
          autoComplete="username"
          className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
        />
        {errors.userId && <p className="mt-2 text-xs text-red-500">{errors.userId.message}</p>}
      </div>

      {/* pinCode */}
      <Controller
        name="pinCode"
        control={control}
        render={({ field }) => (
          <CodeInput value={field.value ?? ""} onChange={field.onChange} onBlur={field.onBlur} />
        )}
      />

      <button
        type="button"
        onClick={onNext}
        disabled={!isStep1Valid}
        className="mt-2 cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-300 font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        다음
      </button>
    </div>
  );
}