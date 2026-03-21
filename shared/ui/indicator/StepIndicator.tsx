interface StepIndicatorProps {
  steps: StepItem[];
  activeStep: number;
}

export interface StepItem {
  title: string;
  desc?: string;
}

export default function StepIndicator({ steps, activeStep }: StepIndicatorProps) {

  const current = steps[activeStep - 1];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-600">
            {current?.title ?? ""}
          </p>
          {current?.desc && (
            <p className="mt-1 text-xs text-zinc-500">{current.desc}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: steps.length }).map((_, idx) =>
            <div
              key={idx}
              className={`grid h-6 w-6 place-items-center rounded-full text-xs font-semibold transition-all duration-300 ${idx+1 <= activeStep ? "bg-emerald-500 text-white border border-emerald-200" : "border border-zinc-200 bg-white text-zinc-500"}`}
            >
              {idx+1}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}