interface LoadingProps {
  open: boolean;
}

export default function LoadingOverlay({ open }: LoadingProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-zinc-900/35 backdrop-blur-[2px]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-100/60 border-t-emerald-500" />
    </div>
  );
}