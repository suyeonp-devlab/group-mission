import { Help } from "@/features/support/types/type";

export const MOCK_NOTICES: Help[] = [
  { id: "H202603040010", title: "서비스 업데이트 안내", content: "그룹 상세 화면에서 미션 인증 내역을 조금 더 쉽게 확인할 수 있도록 UI를 개선했어요. 인증 기록 확인이 더 편리해졌어요.", isImportant: true, createdAt: "2026-03-04T14:32:10" },
  { id: "H202603040009", title: "일부 기능 점검 예정 안내", content: "3월 5일 오전 2시부터 4시까지 서버 점검이 진행될 예정이에요. 점검 중에는 일부 기능 이용이 제한될 수 있어요.", isImportant: true, createdAt: "2026-03-03T11:10:22" },
  { id: "H202603040008", title: "이용약관 개정 안내", content: "보다 안정적인 서비스 제공을 위해 이용약관 일부가 개정되었어요.", isImportant: false, createdAt: "2026-03-02T09:20:11" },
  { id: "H202603040007", title: "그룹 추천 기능이 추가되었어요", content: "홈 화면에서 인기 그룹과 추천 그룹을 확인할 수 있는 기능이 추가되었어요. 새로운 미션을 쉽게 찾아보세요.", isImportant: false, createdAt: "2026-02-28T15:45:31" },
  { id: "H202603040006", title: "로그인 안정성 개선 업데이트", content: "일부 환경에서 로그인 상태가 유지되지 않던 문제를 개선했어요. 이제 더 안정적으로 서비스를 이용할 수 있어요.", isImportant: false, createdAt: "2026-02-26T10:02:55" },
  { id: "H202603040005", title: "미션 참여 UX 개선 안내", content: "미션 참여 버튼 위치와 그룹 상세 화면 UI를 개선했어요. 이제 참여 과정이 더 직관적으로 바뀌었어요.", isImportant: true, createdAt: "2026-02-24T18:41:20" },
  { id: "H202603040004", title: "커뮤니티 기능 베타 오픈", content: "그룹 참여자끼리 소통할 수 있는 커뮤니티 기능이 베타로 오픈되었어요. 자유롭게 이야기를 나눠보세요.", isImportant: false, createdAt: "2026-02-22T13:11:09" },
  { id: "H202603040003", title: "일부 사용자 인증 오류 수정", content: "특정 환경에서 미션 인증이 정상적으로 저장되지 않던 문제를 수정했어요. 이용에 불편을 드려 죄송해요.", isImportant: false, createdAt: "2026-02-20T16:08:42" },
  { id: "H202603040002", title: "서비스 이용 가이드 추가 안내", content: "처음 이용하는 사용자를 위한 서비스 이용 가이드가 추가되었어요. 미션 참여 방법을 쉽게 확인할 수 있어요.", isImportant: false, createdAt: "2026-02-18T09:52:17" },
  { id: "H202603040001", title: "시스템 안정화 업데이트", content: "전반적인 서비스 안정성을 높이기 위한 내부 시스템 업데이트가 진행되었어요.", isImportant: false, createdAt: "2026-02-15T12:33:05" }
];

export const MOCK_FAQS: Help[] = [
  { id: "H202603040020", title: "미션은 어떻게 참여하나요?", content: "카테고리 또는 홈 화면의 추천 그룹에서 원하는 그룹을 선택한 뒤 '참여하기' 버튼을 누르면 미션에 참여할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:20:11" },
  { id: "H202603040019", title: "미션 인증은 어디에서 하나요?", content: "참여 중인 그룹 상세 화면에서 오늘의 미션을 확인한 뒤 '인증하기' 버튼을 눌러 인증할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:21:11" },
  { id: "H202603040018", title: "미션을 하루 놓치면 어떻게 되나요?", content: "하루 미션을 놓쳐도 그룹 참여가 바로 종료되지는 않아요. 다만 미션 기록에는 완료되지 않은 날로 표시될 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:22:11" },
  { id: "H202603040017", title: "여러 그룹에 동시에 참여할 수 있나요?", content: "네, 여러 그룹에 동시에 참여할 수 있어요. 다만 너무 많은 그룹에 참여하면 관리가 어려울 수 있으니 적당한 개수로 시작하는 것을 추천해요.", isImportant: false, createdAt: "2026-03-01T10:23:11" },
  { id: "H202603040016", title: "참여한 그룹은 어디에서 확인할 수 있나요?", content: "'내 그룹' 메뉴에서 현재 참여 중인 그룹과 미션 진행 상황을 확인할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:24:11" },
  { id: "H202603040015", title: "그룹 채팅은 누구나 볼 수 있나요?", content: "아니요. 그룹 채팅과 커뮤니티는 해당 그룹에 참여한 사용자만 확인하고 참여할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:25:11" },
  { id: "H202603040014", title: "미션 인증 기록은 어디에서 확인할 수 있나요?", content: "그룹 상세 화면에서 미션 진행 기록과 인증 내역을 확인할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:26:11" },
  { id: "H202603040013", title: "이미 참여한 그룹에서 나갈 수 있나요?", content: "네, 그룹 상세 화면에서 '그룹 나가기' 기능을 통해 언제든지 그룹 참여를 종료할 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:27:11" },
  { id: "H202603040012", title: "닉네임은 변경할 수 있나요?", content: "'마이페이지'에서 닉네임을 변경할 수 있어요. 단, 일정 기간 동안 변경 횟수 제한이 있을 수 있어요.", isImportant: false, createdAt: "2026-03-01T10:28:11" },
  { id: "H202603040011", title: "이용 중 문제가 발생하면 어떻게 하나요?", content: "고객센터 또는 문의 기능을 통해 문제 내용을 보내주시면 확인 후 빠르게 도움을 드릴게요.", isImportant: true, createdAt: "2026-03-01T10:29:11" }
];