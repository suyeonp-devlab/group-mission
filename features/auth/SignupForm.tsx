"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CodeInput from "@/components/form/CodeInput";

const signupSchema = z.object({
  userId: z.string().trim().min(1, "아이디를 입력해주세요."),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  passwordConfirm: z.string(),
  nickname: z.string().trim()
      .min(2, "닉네임은 2자 이상이어야 합니다.")
      .max(10, "닉네임은 10자 이하로 입력해주세요."),
  pinCode: z.string().trim().regex(/^\d{6}$/, "PIN 코드는 숫자 6자리입니다."),
})
.refine((v) => v.password.length < 6 || v.password === v.passwordConfirm, {
  // Skip password confirmation check until the password is valid (min 6 chars)
  message: "비밀번호가 일치하지 않습니다.",
  path: ["passwordConfirm"],
});

type SignupFormType = z.infer<typeof signupSchema>;

export default function SignupForm() {

  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);

  const { register, handleSubmit, control, formState: { errors, isValid, isSubmitting } } = useForm<SignupFormType>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: { userId: "", password: "", passwordConfirm: "", nickname: "", pinCode: "" },
  });

  const onSignupSubmit = async (data: SignupFormType) => {
    console.log("회원가입 데이터:", data);
    // TODO 서버 연동
  };

  return (
    <form onSubmit={handleSubmit(onSignupSubmit)} className="space-y-4">
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

      {/* password */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">비밀번호</label>
        <div className="relative">
          <input
            {...register("password", {deps: ["passwordConfirm"]})}
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
        {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
      </div>

      {/* passwordConfirm */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">비밀번호 확인</label>
        <div className="relative">
          <input
            {...register("passwordConfirm")}
            placeholder="비밀번호 확인 입력"
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
        {errors.passwordConfirm && <p className="mt-2 text-xs text-red-500">{errors.passwordConfirm.message}</p>}
      </div>

      {/* nickname */}
      <div className="text-left">
        <label className="block mb-1.5 text-sm font-medium text-zinc-800">닉네임</label>
        <input
          {...register("nickname")}
          placeholder="닉네임 입력 (2~10자)"
          maxLength={10}
          autoComplete="nickname"
          className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
        />
        {errors.nickname && <p className="mt-2 text-xs text-red-500">{errors.nickname.message}</p>}
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
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-2 cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-300 font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        회원가입
      </button>
    </form>
  );
}