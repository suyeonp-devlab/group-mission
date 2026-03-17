import Image from "next/image";

interface ImageRowProps {
  showCount: number;
  imageUrls: string[];
}

export default function ImageRow({
  showCount,
  imageUrls
} : ImageRowProps){

  const visible = imageUrls.slice(0, showCount);
  const extraCount = Math.max(0, imageUrls.length - showCount);

  return (
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {visible.map((src, index) => (
        <div key={index} className="relative h-42 w-42 shrink-0 snap-start overflow-hidden rounded-lg bg-zinc-100">
          <Image src={src} alt="" fill className="object-cover" />

          {/* Display +N if additional images exist */}
          {index === showCount - 1 && extraCount > 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xl font-semibold text-white">
              + {extraCount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}