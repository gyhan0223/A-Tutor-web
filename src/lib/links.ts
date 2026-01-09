/**
 * A+ Tutor 외부/내부 링크 관리
 * - 신청 폼
 * - 문의 채널
 * - 정책 페이지 등
 *
 * 👉 나중에 구글폼 → 자체 페이지로 바뀌어도
 *    여기만 수정하면 전체 반영됨
 */

export const LINKS = {
  /** 학생 튜터 매칭 신청 */
  studentApply: "https://example.com/student-form", // TODO: 학생 구글폼 링크로 교체

  /** 튜터 지원 */
  tutorApply: "https://example.com/tutor-form", // TODO: 튜터 구글폼 링크로 교체

  /** 운영 정책 */
  policy: "/policy",

  /** 문의 이메일 */
  email: "support@aplustutor.kr", // TODO: 실제 이메일로 교체

  /** 카카오채널 (없으면 빈 문자열 유지) */
  kakaoChannel: "",

  /** 메인 홈 */
  home: "/",
} as const;
