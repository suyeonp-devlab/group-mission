"use client";
// TODO: 화면 UI만 확인. 전체 수정 필요
import { useMemo, useState } from "react";

type MemberStatus = "SUCCESS" | "FAIL";

interface MissionMember {
  id: string;
  nickname: string;
  status: MemberStatus;
}

interface MissionHistory {
  id: string;
  round: number;
  period: string;
  achievementRate: number;
  participantCount: number;
  successCount: number;
  failCount: number;
  status: "COMPLETED" | "ENDED_EARLY";
  myResult: "SUCCESS" | "FAIL" | "NOT_PARTICIPATED";
}

export default function GroupStatusTab() {
  const [openedMemberStatus, setOpenedMemberStatus] = useState<MemberStatus | null>(null);

  const currentMission = {
    title: "매일 물 2L 마시기",
    period: "2026.03.18 - 2026.03.24",
    achievementRate: 67,
    participantCount: 18,
    successCount: 12,
    failCount: 6,
    myStatus: "COMPLETED" as const
  };

  const members: MissionMember[] = [
    { id: "1", nickname: "물마시는수연", status: "SUCCESS" },
    { id: "2", nickname: "아침루틴민지", status: "SUCCESS" },
    { id: "3", nickname: "꾸준한지훈", status: "SUCCESS" },
    { id: "4", nickname: "오늘도서윤", status: "SUCCESS" },
    { id: "5", nickname: "차분한예린", status: "SUCCESS" },
    { id: "6", nickname: "헬시현우", status: "SUCCESS" },
    { id: "7", nickname: "다은의기록", status: "SUCCESS" },
    { id: "8", nickname: "태민챌린저", status: "SUCCESS" },
    { id: "9", nickname: "성실한소희", status: "SUCCESS" },
    { id: "10", nickname: "유진의습관", status: "SUCCESS" },
    { id: "11", nickname: "준호루틴러", status: "SUCCESS" },
    { id: "12", nickname: "매일하는하린", status: "SUCCESS" },

    { id: "13", nickname: "도윤의오늘", status: "FAIL" },
    { id: "14", nickname: "가은로그", status: "FAIL" },
    { id: "15", nickname: "민석플랜", status: "FAIL" },
    { id: "16", nickname: "나연챌린지", status: "FAIL" },
    { id: "17", nickname: "천천히지아", status: "FAIL" },
    { id: "18", nickname: "건우스텝", status: "FAIL" }
  ];

  const histories: MissionHistory[] = [
    {
      id: "1",
      round: 3,
      period: "2026.03.10 - 2026.03.16",
      achievementRate: 82,
      participantCount: 22,
      successCount: 18,
      failCount: 4,
      status: "COMPLETED",
      myResult: "SUCCESS"
    },
    {
      id: "2",
      round: 2,
      period: "2026.03.01 - 2026.03.07",
      achievementRate: 64,
      participantCount: 19,
      successCount: 12,
      failCount: 7,
      status: "COMPLETED",
      myResult: "FAIL"
    },
    {
      id: "3",
      round: 1,
      period: "2026.02.20 - 2026.02.26",
      achievementRate: 48,
      participantCount: 15,
      successCount: 7,
      failCount: 8,
      status: "ENDED_EARLY",
      myResult: "NOT_PARTICIPATED"
    }
  ];

  const successMembers = useMemo(
    () => members.filter((member) => member.status === "SUCCESS"),
    [members]
  );

  const failMembers = useMemo(
    () => members.filter((member) => member.status === "FAIL"),
    [members]
  );

  const openedMembers = openedMemberStatus === "SUCCESS" ? successMembers : failMembers;

  const modalTitle =
    openedMemberStatus === "SUCCESS" ? "미션 성공 인원" : "미션 미성공 인원";

  const myStatusLabel =
    currentMission.myStatus === "COMPLETED"
      ? "완료"
      : currentMission.myStatus === "IN_PROGRESS"
        ? "진행중"
        : "미참여";

  const getHistoryStatusLabel = (status: MissionHistory["status"]) => {
    return status === "COMPLETED" ? "완료" : "조기 종료";
  };

  const getMyResultLabel = (result: MissionHistory["myResult"]) => {
    if (result === "SUCCESS") return "나는 성공";
    if (result === "FAIL") return "나는 미성공";
    return "나는 미참여";
  };

  const getMyResultClass = (result: MissionHistory["myResult"]) => {
    if (result === "SUCCESS") {
      return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100";
    }

    if (result === "FAIL") {
      return "bg-rose-50 text-rose-700 ring-1 ring-rose-100";
    }

    return "bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200";
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return "🏆";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return null;
  };

  return (
    <>
      <div className="space-y-6 bg-zinc-50 px-4 py-5">
        <section>
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-zinc-100">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 px-5 py-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                    CURRENT MISSION
                  </p>
                  <h2 className="mt-2 text-xl font-bold leading-tight">
                    {currentMission.title}
                  </h2>
                  <p className="mt-2 text-xs text-white/70">{currentMission.period}</p>
                </div>

                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  진행중
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-2xl bg-white/10 px-3 py-3 backdrop-blur">
                  <p className="text-[11px] text-white/60">달성률</p>
                  <p className="mt-1 text-lg font-bold">{currentMission.achievementRate}%</p>
                </div>

                <div className="rounded-2xl bg-white/10 px-3 py-3 backdrop-blur">
                  <p className="text-[11px] text-white/60">성공 인원</p>
                  <p className="mt-1 text-lg font-bold">{currentMission.successCount}명</p>
                </div>

                <div className="rounded-2xl bg-white/10 px-3 py-3 backdrop-blur">
                  <p className="text-[11px] text-white/60">내 상태</p>
                  <p className="mt-1 text-lg font-bold">{myStatusLabel}</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-700">전체 진행 현황</span>
                  <span className="font-semibold text-zinc-900">
                    {currentMission.successCount} / {currentMission.participantCount}명 성공
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-400"
                    style={{ width: `${currentMission.achievementRate}%` }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
                  <span>성공 {currentMission.successCount}명</span>
                  <span>미성공 {currentMission.failCount}명</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOpenedMemberStatus("SUCCESS")}
                  className="rounded-2xl bg-emerald-50 px-4 py-4 text-left ring-1 ring-emerald-100 transition active:scale-[0.99]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-emerald-800">미션 성공 인원</p>
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      {currentMission.successCount}명
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-emerald-700/80">
                    눌러서 닉네임 전체 보기
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setOpenedMemberStatus("FAIL")}
                  className="rounded-2xl bg-rose-50 px-4 py-4 text-left ring-1 ring-rose-100 transition active:scale-[0.99]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-rose-800">미션 미성공 인원</p>
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200">
                      {currentMission.failCount}명
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-rose-700/80">
                    눌러서 닉네임 전체 보기
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-zinc-900">이전 미션 이력</h3>
            <p className="mt-1 text-xs text-zinc-500">지난 회차별 결과를 확인할 수 있어요</p>
          </div>

          <ul className="space-y-3">
            {histories.map((history) => (
              <li
                key={history.id}
                className="rounded-2xl bg-white px-4 py-4 ring-1 ring-zinc-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-500">{history.round}회차</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">{history.period}</p>
                  </div>

                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
                    {getHistoryStatusLabel(history.status)}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
                    성공 {history.successCount}명
                  </span>

                  <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-100">
                    미성공 {history.failCount}명
                  </span>

                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200">
                    참여 {history.participantCount}명
                  </span>

                  <span
                    className={`ml-auto rounded-full px-2.5 py-1 text-xs font-medium ${getMyResultClass(history.myResult)}`}
                  >
                    {getMyResultLabel(history.myResult)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {openedMemberStatus && (
        <div className="fixed inset-0 z-50 bg-black/45">
          <button
            type="button"
            aria-label="닫기"
            className="absolute inset-0"
            onClick={() => setOpenedMemberStatus(null)}
          />

          <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-white px-5 pb-8 pt-5 shadow-[0_-16px_40px_rgba(0,0,0,0.16)]">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-zinc-200" />

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="text-base font-semibold text-zinc-900">{modalTitle}</h4>
                <p className="mt-1 text-xs text-zinc-500">
                  총 {openedMembers.length}명
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenedMemberStatus(null)}
                className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 active:bg-zinc-200"
              >
                닫기
              </button>
            </div>

            <ul className="mt-5 max-h-[50vh] space-y-2 overflow-y-auto">
              {openedMembers.map((member, index) => {
                const rankIcon = getRankIcon(index);

                return (
                  <li
                    key={member.id}
                    className="flex items-center gap-3 rounded-xl bg-zinc-50 px-4 py-3"
                  >
                    <div className="flex w-8 shrink-0 items-center justify-center">
                      {rankIcon ? (
                        <span className="text-lg">{rankIcon}</span>
                      ) : (
                        <span className="text-xs font-semibold text-zinc-400">
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <span className="min-w-0 break-all text-sm font-medium text-zinc-800">
                      {member.nickname}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}