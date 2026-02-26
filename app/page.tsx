import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Gradient background (below everything) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-white" />
      <Image src="/sparkles.svg" alt="" fill priority className="pointer-events-none -z-10 opacity-35 mix-blend-multiply"/>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <p className="relative z-10 text-lg font-semibold tracking-tight text-zinc-800">
            우리들의 작은 모임
          </p>
          <span className="pointer-events-none absolute left-1/2 top-[1.35em] h-2 w-[170px] -translate-x-1/2 rounded-full bg-yellow-200/80" />
          <Image src="/icons/star.svg" alt="" width={22} height={22} className="pointer-events-none absolute -left-7 -top-3 animate-twinkle"/>
        </div>

        <Image src="/logo.png" alt="GROUP MISSION" width={1536} height={1024} className="w-[90%] max-w-[1200px]" priority/>

        <div className="grid w-full max-w-xs gap-3 mt-24">
          <Link href="/auth/login" className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-300 text-base font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.22)] transition hover:bg-emerald-400 active:scale-[0.99]">
            로그인
          </Link>
          <Link href="/auth/signup" className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-white text-base font-semibold text-zinc-900 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition hover:bg-zinc-50 active:scale-[0.99]">
            회원가입
          </Link>
        </div>

        <div className="mt-10 text-xs text-zinc-400">
          © {new Date().getFullYear()} GROUP MISSION
        </div>
      </div>
    </main>
  );
}