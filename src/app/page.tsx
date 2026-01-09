import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import PolicySummary from "@/components/sections/PolicySummary";
import FAQ from "@/components/sections/FAQ";
import Apply from "@/components/sections/Apply";

export default function Home() {
  return (
    <main className="pb-20">
      {/* 히어로: 핵심 가치 + CTA */}
      <Hero />

      {/* 과목군: 인문 / 자연 / 예체능 */}
      <Categories />

      {/* 성과 기반 정책 요약 */}
      <PolicySummary />

      {/* 자주 묻는 질문 */}
      <FAQ />

      {/* 학생 / 튜터 신청 */}
      <Apply />
    </main>
  );
}
