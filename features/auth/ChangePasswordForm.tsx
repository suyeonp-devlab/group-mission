"use client";

import { useState } from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepIndicator, {StepItem} from "@/components/indicator/StepIndicator";
import ChangePasswordAccountForm from "@/features/auth/ChangePasswordAccountForm";
import ChangePasswordResetForm from "@/features/auth/ChangePasswordResetForm";

/**
 *  Step:
 *  1. Verify user information (ID/PIN)
 *  2: Change user password
 */
type Step = 1 | 2;

const stepInfo: StepItem[] = [
  { title: "가입 정보 확인", desc: "아이디와 PIN 코드를 입력하세요." },
  { title: "비밀번호 재설정", desc: "새 비밀번호를 설정하세요." }
];

const changePasswordSchema = z.object({
  userId: z.string().trim().min(1, "아이디를 입력해주세요."),
  pinCode: z.string().trim().regex(/^\d{6}$/, "PIN 코드는 숫자 6자리입니다."),
  newPassword: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  newPasswordConfirm: z.string(),
})
.refine((v) => v.newPassword.length < 6 || v.newPassword === v.newPasswordConfirm, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["newPasswordConfirm"],
});

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordForm() {

  const [step, setStep] = useState<Step>(1);

  const methods = useForm<ChangePasswordFormType>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    shouldUnregister: false, // Maintain value even when moving step
    defaultValues: { userId: "", pinCode: "", newPassword: "", newPasswordConfirm: "" },
  });

  // Verify only Step1 fields with trigger
  const next = async () => {
    const result = await methods.trigger(["userId", "pinCode"]);
    if (!result) return;

    // TODO 서버 연동
    setStep(2);
  };

  const submit = methods.handleSubmit(async (data) => {
    console.log("비밀번호 변경 데이터:", data);
    // TODO 서버 연동
  });

  return (
    <FormProvider {...methods}>
      <div className="text-left">
        <StepIndicator steps={stepInfo} activeStep={step} />
        {step === 1 && <ChangePasswordAccountForm onNext={next} />}
        {step === 2 && <ChangePasswordResetForm onSubmit={submit} />}
      </div>
    </FormProvider>
  );
}