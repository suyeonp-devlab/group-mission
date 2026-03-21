import Image from "next/image";

export default function AuthLoadingScreen() {

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#355748] px-6 text-white">
      <div className="flex flex-col items-center">
        <Image src="/logo-icon-stroke.png" alt="Group Mission" width={120} height={120} priority className="select-none" />

        <p className="mt-6 text-sm text-white/75 font-semibold">우리들의 작은 모임</p>
        <h1 className="mt-1.5 text-2xl font-semibold">Group Mission</h1>

        <div className="mt-12 flex items-center gap-2" aria-label="LoadingOverlay">
          <span className="loading-dot loading-dot-1" />
          <span className="loading-dot loading-dot-2" />
          <span className="loading-dot loading-dot-3" />
          <span className="loading-dot loading-dot-4" />
          <span className="loading-dot loading-dot-5" />
        </div>
      </div>
    </div>
  );
}