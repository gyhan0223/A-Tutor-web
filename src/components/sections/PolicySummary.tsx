import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export default function PolicySummary() {
  return (
    <section className="mt-16" id="how">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-sm backdrop-blur sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-zinc-900">
                성과 기반 운영 원칙
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                목표 합의 → 선결제 → 성적 확정 후 일괄 처리
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                A+ Tutor는 “시간”이 아니라 “결과”를 중심으로 운영됩니다.{" "}
                <span className="font-semibold text-zinc-900">
                  환급/인센티브는 목표 달성 수준과 이행 기준
                </span>
                에 따라 적용될 수 있으며, 구체 기준은 매칭/합의 과정에서
                안내됩니다.
              </p>
            </div>

            <div className="flex gap-2">
              <Button href={LINKS.policy} variant="secondary" size="sm">
                정책 자세히 보기
              </Button>
              <Button href={LINKS.studentApply} variant="primary" size="sm">
                매칭 신청
              </Button>
            </div>
          </div>

          {/* 3-step */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StepCard
              step="01"
              title="목표 합의"
              desc="과목·기간·목표 성적을 튜터와 합의합니다. 튜터가 수락해야 계약이 성립합니다."
            />
            <StepCard
              step="02"
              title="선결제 & 진행"
              desc="합의된 금액을 선결제하고, 튜터링이 진행됩니다. 진행 중에는 계획/피드백/관리로 실행을 돕습니다."
            />
            <StepCard
              step="03"
              title="결과 확정 & 정산"
              desc="공식 성적이 확정되면 환급/튜터 정산이 한 번에 처리됩니다."
            />
          </div>

          {/* 핵심 원칙 */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Rule
              title="합의 기준 우선"
              desc="구체 비율/조건은 튜터와의 합의 기준이 우선 적용됩니다."
            />
            <Rule
              title="이행 기준 포함 가능"
              desc="출석·과제·응답 등 최소 이행 기준이 결과 판정에 포함될 수 있습니다."
            />
            <Rule
              title="투명한 절차"
              desc="정책 페이지에 운영 원칙과 분쟁 처리 기준을 공개합니다."
            />
          </div>

          <div className="mt-6 text-xs leading-6 text-zinc-500">
            * 초기 버전은 신청 기반으로 운영되며, 매칭 가능 튜터 풀 내에서 우선
            연결됩니다.
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --- 내부 컴포넌트 --- */

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="text-xs font-semibold text-zinc-500">{step}</div>
      <div className="mt-2 text-sm font-semibold text-zinc-900">{title}</div>
      <div className="mt-2 text-xs leading-6 text-zinc-600">{desc}</div>
    </div>
  );
}

function Rule({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <div className="mt-2 text-xs leading-6 text-zinc-600">{desc}</div>
    </div>
  );
}
