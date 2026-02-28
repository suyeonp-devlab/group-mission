import FindPasswordForm from "@/features/auth/FindPasswordForm";

export default function FindPasswordPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Background (below everything) */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-emerald-50 via-sky-50 to-white" />

      {/* Content */}
      <div className="mx-auto flex min-h-dvh max-w-md flex-col px-6 pb-10 pt-10 text-center">
        {/* Top bar */}
        <div className="py-8 text-center">
          <h1 className="text-2xl font-semibold tracking-wider text-zinc-900">
            비밀번호 찾기
          </h1>
        </div>

        {/* Card */}
        <section className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-zinc-200 backdrop-blur">
          <FindPasswordForm />
        </section>
      </div>
    </main>
  );
}