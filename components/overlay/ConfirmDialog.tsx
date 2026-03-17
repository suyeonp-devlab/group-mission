import { ConfirmOptions } from "@/features/overlay/overlay.type";

interface ConfirmDialogProps extends ConfirmOptions {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  confirmVariant = "default",
  onConfirm,
  onCancel
}: ConfirmDialogProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/35 px-5 backdrop-blur-[2px]">
      <div className="w-full max-w-sm rounded-xl bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <div className="text-center">
          <h2 className={`tracking-[-0.02em] ${description ? "font-semibold text-zinc-900 text-[17px]" : "font-medium text-zinc-800 text-[15px]"}`}>
            {title}
          </h2>

          {description && (
            <p className="mt-3 text-sm leading-6 text-zinc-600 whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

        <div className="mt-6 flex gap-2.5">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-2xl bg-zinc-100 px-4 py-3.5 text-sm font-semibold text-zinc-700 transition active:scale-[0.99]"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={`flex-1 rounded-2xl  px-4 py-3.5 text-sm font-semibold text-white transition active:scale-[0.99] ${confirmVariant === "danger" ? "bg-red-600 active:bg-red-700" : "bg-emerald-600 active:bg-emerald-700"}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}