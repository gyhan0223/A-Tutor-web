import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export default function Apply() {
  return (
    <section className="mt-16" id="apply">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
          <header className="max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
              지금 신청하면, 24시간 내에 매칭 안내를 드립니다
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              초기 버전은 신청 기반으로 운영됩니다. 아래 폼을 작성하면 운영팀이
              확인 후 튜터 후보와 함께 안내드립니다.
            </p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* 학생 신청 */}
            <ApplyCard
              badge="학생"
              title="튜터 매칭 신청"
              desc="과목·목표·기간을 남기면 가능한 튜터 후보를 제안드립니다."
              steps={[
                "신청 폼 작성",
                "운영팀 확인(최대 24시간)",
                "튜터 후보 제안 & 목표 합의",
                "선결제 후 튜터링 시작",
              ]}
              primary={{
                label: "학생 신청 폼 열기",
                href: LINKS.studentApply,
              }}
              secondary={{
                label: "운영 정책 보기",
                href: LINKS.policy,
              }}
            />

            {/* 튜터 지원 */}
            <ApplyCard
              badge="튜터"
              title="튜터로 지원하기"
              desc="전공/가능 과목/가능 시간을 남기면 검증 후 연결해드립니다."
              steps={[
                "지원 폼 작성",
                "기본 검증/확인",
                "매칭 요청 전달",
                "성적 확정 후 일괄 정산",
              ]}
              primary={{
                label: "튜터 지원 폼 열기",
                href: LINKS.tutorApply,
              }}
              secondary={{
                label: "정산 원칙 보기",
                href: LINKS.policy,
              }}
            />
          </div>

          <div className="mt-8 rounded-2xl bg-zinc-50 p-5 text-xs leading-6 text-zinc-600">
            <div className="font-semibold text-zinc-900">안내</div>
            <ul className="mt-2 space-y-1">
              <li>
                • 매칭/합의 과정에서 목표 성적 및 운영 기준을 안내드립니다.
              </li>
              <li>
                • 외부 폼(구글폼/타입폼)으로 연결될 수 있으며, 제출 후 운영팀이
                연락드립니다.
              </li>
              <li>
                • 성과형 모델 특성상 이행 기준(출석/과제/응답)이 포함될 수
                있습니다.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --- 내부 컴포넌트 --- */

function ApplyCard({
  badge,
  title,
  desc,
  steps,
  primary,
  secondary,
}: {
  badge: string;
  title: string;
  desc: string;
  steps: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-7">
      <div className="inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
        {badge}
      </div>

      <h3 className="mt-4 text-base font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-zinc-600">{desc}</p>

      <ol className="mt-5 space-y-2 text-sm text-zinc-700">
        {steps.map((s, idx) => (
          <li key={s} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
              {idx + 1}
            </span>
            <span className="leading-7">{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button
          href={primary.href}
          variant="primary"
          className="w-full sm:w-auto"
        >
          {primary.label}
        </Button>
        <Button
          href={secondary.href}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {secondary.label}
        </Button>
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        * 제출 후 운영팀이 연락드립니다.
      </div>
    </div>
  );
}
