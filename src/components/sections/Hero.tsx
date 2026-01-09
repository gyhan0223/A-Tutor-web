import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="pt-16 sm:pt-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-sm backdrop-blur sm:p-12">
          {/* 상단 배지 */}
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
            성과 기반 · 프리미엄 튜터링
          </div>

          {/* 메인 카피 */}
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1]">
            성적이 결과인 튜터링,
            <br />
            <span className="text-zinc-900">A+ Tutor</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-[15px]">
            학생과 튜터가 목표를 합의하고, 성적 결과에 따라{" "}
            <span className="font-semibold text-zinc-900">
              환급 또는 인센티브
            </span>
            가 적용됩니다.
            <br className="hidden sm:block" />
            전국 어디서든 온라인으로 진행됩니다.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={LINKS.studentApply} variant="primary">
              튜터 매칭 신청하기
            </Button>
            <Button href={LINKS.tutorApply} variant="secondary">
              튜터로 지원하기
            </Button>
            <a
              href="/policy"
              className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 sm:ml-2"
            >
              운영 정책 보기 →
            </a>
          </div>

          {/* 신뢰 포인트 */}
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <MiniCard
              title="목표 합의"
              desc="과목·기간·목표 성적을 합의하고 시작합니다."
            />
            <MiniCard
              title="선결제"
              desc="합의된 금액을 선결제한 뒤 튜터링이 진행됩니다."
            />
            <MiniCard
              title="결과 확정 정산"
              desc="성적 확정 후 환급/정산이 한 번에 처리됩니다."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --- 내부 컴포넌트 --- */

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <div className="mt-2 text-xs leading-6 text-zinc-600">{desc}</div>
    </div>
  );
}
