"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const STORAGE_KEY = "gm_saved_userid";

const loginSchema = z.object({
  userId: z.string().trim().min(1, "아이디를 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
  rememberId: z.boolean().optional(),
});

type LoginFormType = z.infer<typeof loginSchema>;

export default function LoginForm() {

  const [showPw, setShowPw] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors, isValid, isSubmitting } } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: { userId: "", password: "", rememberId: false }
  });

  // Saved userid mapping
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setValue("userId", saved);
      setValue("rememberId", true);
    }
  }, [setValue]);

  const onLoginSubmit = async (data: LoginFormType) => {
    if(data.rememberId) localStorage.setItem(STORAGE_KEY, data.userId);
    else localStorage.removeItem(STORAGE_KEY);

    console.log("로그인 데이터:", data);
    // TODO 서버 연동
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
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
            {...register("password")}
            placeholder="비밀번호 입력"
            type={showPw ? "text" : "password"}
            autoComplete="current-password"
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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between pt-1">
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
          <input
            {...register("rememberId")}
            type="checkbox"
            className="h-4 w-4 rounded border-zinc-300 text-emerald-500 focus:ring-emerald-200"
          />
          아이디 저장
        </label>

        <Link href="/auth/change-password" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          비밀번호 찾기
        </Link>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-2 cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-300 font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        로그인
      </button>
    </form>
  );
}