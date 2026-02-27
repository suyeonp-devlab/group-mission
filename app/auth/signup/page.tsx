import Link from "next/link";
import SignupForm from "@/features/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Background (below everything) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-white" />

      {/* Content */}
      <div className="mx-auto flex min-h-dvh max-w-md flex-col px-6 pb-10 pt-10 text-center">
        {/* Top bar */}
        <div className="py-8 text-center">
          <h1 className="text-2xl font-semibold tracking-wider text-zinc-900">
            회원가입
          </h1>
        </div>

        {/* Card */}
        <section className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-zinc-200 backdrop-blur">
          <h1 className="text-lg font-semibold tracking-tight text-zinc-900">만나서 반가워요</h1>
          <p className="mt-2 text-sm text-zinc-600">가입에 필요한 정보를 입력해주세요.</p>

          <div className="mt-10">
            <SignupForm />
          </div>

          <div className="pt-4 text-center text-sm text-zinc-600">
            이미 계정이 있나요?
            <Link href="/auth/login" className="ml-2 font-semibold text-zinc-900 underline decoration-emerald-200 decoration-2 underline-offset-4 hover:decoration-emerald-300">
              로그인
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}