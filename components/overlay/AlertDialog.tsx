import { AlertOptions } from "@/features/overlay/overlay.type";

interface AlertDialogProps extends AlertOptions {
  open: boolean;
  onClose: () => void;
}

export default function AlertDialog({
  open,
  title,
  description,
  confirmText = "확인",
  onClose
}: AlertDialogProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/35 px-5 backdrop-blur-[2px]">
      <div className="w-full max-w-sm rounded-xl bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

        <div className="text-center space-y-3">
          <h2 className={`tracking-[-0.02em] ${description ? "font-semibold text-zinc-900 text-[17px]" : "font-medium text-zinc-800 text-[15px]"}`}>
            {title}
          </h2>

          {description && (
            <p className="mt-3 text-sm leading-6 text-zinc-600 whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-semibold text-white transition active:scale-[0.99]"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}