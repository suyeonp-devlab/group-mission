import LayoutConfig from "@/features/layout/LayoutConfig";
import InquiryForm from "@/features/support/InquiryForm";
import { Info } from "lucide-react";
import { getCodes } from "@/features/common/common.api";

export default async function SupportPage() {

  // TODO 서버 연동
  const types = getCodes("inquiryType");

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="고객센터 문의" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <div className="mt-2 flex items-center gap-3 rounded-xl bg-zinc-50 ring-1 ring-zinc-200 px-4 py-3 text-xs text-zinc-700">
        <Info size={16} className="shrink-0 text-zinc-500" />
        <p className="leading-relaxed">
          이용 중 불편한 점이나 궁금한 내용을 남겨주세요.<br />
          확인 후 최대한 빠르게 답변드릴게요.
        </p>
      </div>

      <div className="mt-4">
        <InquiryForm inquiryTypes={types} />
      </div>
    </>
  );
}