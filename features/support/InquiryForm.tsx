"use client";

import { ImagePlus } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { INQUIRY_MAX_SIZE, INQUIRY_MAX_SIZE_MB } from "@/constants/commonConstant";
import Code from "@/features/common/common.type";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import BaseSelect from "@/components/form/BaseSelect";
import React, { useRef } from "react";
import { useWatch } from "react-hook-form";
import { useOverlay } from "@/features/overlay/OverlayContext";

interface InquiryFormProps {
  inquiryTypes: Code[];
}

const inquirySchema = z.object({
  inquiryType: z.string().min(1, "문의 유형을 선택해주세요."),
  title: z.string().trim().min(1, "문의 제목을 입력해주세요."),
  content: z.string().trim().min(1, "문의 내용을 입력해주세요."),
  file: z.instanceof(File)
    .nullable()
    .refine((file) => !file || file.type.startsWith("image/"), {
      message: "이미지 파일만 업로드할 수 있습니다."
    })
    .refine((file) => !file || file.size <= INQUIRY_MAX_SIZE, {
      message: `${INQUIRY_MAX_SIZE_MB}MB 이하 이미지만 업로드할 수 있습니다.`
    })
});

type InquiryFormType = z.infer<typeof inquirySchema>;

export default function InquiryForm({ inquiryTypes } : InquiryFormProps) {

  const router = useRouter();
  const { alert } = useOverlay();

  const { register, handleSubmit, setValue, control, formState: { errors, isValid, isSubmitting } } = useForm<InquiryFormType>({
    resolver: zodResolver(inquirySchema),
    mode: "onChange",
    defaultValues: { inquiryType: "", title: "", content: "", file: null }
  });

  const content = useWatch({ control, name: "content" }) ?? "";
  const file = useWatch({ control, name: "file" }) ?? null;

  const fileRef = useRef<HTMLInputElement>(null);

  const openImagePicker = () => {
    fileRef.current?.click();
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];

    // Reset to allow selecting the same file again
    e.target.value = "";

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      await alert({ title: "파일 업로드", description: "이미지 파일만 선택할 수 있어요." });
      return;
    }

    if (file.size > INQUIRY_MAX_SIZE) {
      await alert({ title: "파일 업로드", description: `${INQUIRY_MAX_SIZE_MB}MB 이하 이미지만 업로드할 수 있어요` });
      return;
    }

    setValue("file", file, { shouldValidate: true, shouldDirty: true });
  };

  const onInquirySubmit = async (data: InquiryFormType) => {
    console.log("고객센터 문의 데이터:", data);

    // TODO 서버 연동
    await alert( {title: "문의 접수", description: "문의가 접수되었습니다.\n확인 후 빠른 시일 내에 답변드리겠습니다."});
    router.back();
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onInquirySubmit)} className="space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <div className="mt-2 flex flex-col gap-5">
          {/* Inquiry type */}
          <div className="text-left">
            <label className="mb-2 block text-sm font-semibold text-zinc-800">
              문의 유형
            </label>

            <Controller
              name="inquiryType"
              control={control}
              render={({ field }) => (
                <BaseSelect
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  options={inquiryTypes}
                  ariaLabel="문의유형"
                  placeholder="선택"
                />
              )}
            />
            {errors.inquiryType && <p className="mt-2 text-xs text-red-500">{errors.inquiryType.message}</p>}
          </div>

          {/* Title */}
          <div className="text-left">
            <label className="mb-2 block text-sm font-semibold text-zinc-800">
              문의 제목
            </label>
            <input
              {...register("title")}
              placeholder="제목을 입력해주세요"
              className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
            {errors.title && <p className="mt-2 text-xs text-red-500">{errors.title.message}</p>}
          </div>

          {/* Content */}
          <div className="text-left">
            <label className="mb-2 block text-sm font-semibold text-zinc-800">
              문의 내용
            </label>
            <textarea
              {...register("content")}
              placeholder={`문의하실 내용을 자세히 입력해주세요.\n예) 어떤 화면에서 문제가 발생했는지`}
              rows={8}
              maxLength={1000}
              className="w-full resize-none rounded-lg border border-zinc-200 px-4 py-3 text-sm leading-6 text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
            <div className="mt-0.5 text-right text-xs text-zinc-400 pr-1 flex justify-between">
              <span className="text-xs text-red-500">{errors.content?.message ?? ""}</span>
              <span>{content.length} / 1000</span>
            </div>
          </div>

          {/* File */}
          <div className="text-left">
            <label className="mb-2 block text-sm font-semibold text-zinc-800">
              첨부파일
            </label>

            <input
              ref={fileRef}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              className="hidden"
              onChange={handleChangeFile}
            />

            {/* Not Attach file */}
            {!file && (
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-600 active:bg-zinc-100"
                onClick={openImagePicker}
              >
                <ImagePlus size={16} />
                이미지 첨부
              </button>
            )}

            {/* Attach file */}
            {file && (
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-800">
                    {file.name}
                  </p>
                </div>

                <button
                  type="button"
                  className="ml-3 shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-rose-500 active:bg-rose-50"
                  onClick={() => setValue("file", null, { shouldValidate: true, shouldDirty: true })}
                >
                  삭제
                </button>
              </div>
            )}

            <p className="mt-2 text-xs leading-5 text-zinc-400 mb-1">
              스크린샷을 첨부하면 문제를 더 빠르게 확인할 수 있어요.
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-2 cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-300 font-semibold text-emerald-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        문의 접수하기
      </button>
    </form>
  );
}