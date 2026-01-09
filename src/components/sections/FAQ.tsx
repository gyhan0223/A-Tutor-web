import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

type FAQItem = {
  q: string;
  a: string;
  cta?: {
    label: string;
    href: string;
  };
};

const FAQS: FAQItem[] = [
  {
    q: "성적이 안 나오면 무조건 환급되나요?",
    a: "환급/인센티브는 ‘목표 달성 수준’과 ‘이행 기준(출석/과제/응답 등)’을 함께 고려해 적용될 수 있습니다. 구체 기준은 매칭/합의 과정에서 안내됩니다.",
  },
  {
    q: "목표 성적은 누가 정하나요?",
    a: "학생이 목표를 제안하고, 튜터가 수락(또는 조정 제안)해야 계약이 성립합니다. 튜터가 수락한 목표가 성과 판정 기준이 됩니다.",
  },
  {
    q: "튜터 정산은 언제 되나요?",
    a: "성적이 확정된 후 한 번에 정산됩니다. 기본 정산 + 성과 인센티브 구조로 운영될 수 있습니다.",
  },
  {
    q: "학생이 과제를 안 하거나 연락이 안 되면 어떻게 되나요?",
    a: "성과형 모델에서는 실행이 중요합니다. 무단 결석/장기 미응답/자료 미제출 등 중대한 미이행이 발생하면 환급 제한 등 기준이 적용될 수 있습니다. 이행 기준은 합의 단계에서 안내됩니다.",
  },
  {
    q: "전공/과목이 다양한데, 매칭이 되나요?",
    a: "인문·자연·예체능 전공군을 지원하며, 초기에는 신청 기반으로 가능한 튜터 풀에서 우선 매칭합니다.",
  },
  {
    q: "정책과 기준을 더 자세히 확인하고 싶어요.",
    a: "운영 정책 페이지에서 환급/정산 원칙과 분쟁 처리 기준을 확인할 수 있습니다.",
    cta: { label: "정책 자세히 보기", href: LINKS.policy },
  },
] as const;

export default function FAQ() {
  return (
    <section className="mt-16" id="faq">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                자주 묻는 질문
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
                성과 기반 모델에서 많이 궁금해하는 기준을 정리했습니다.
              </p>
            </div>

            <div className="flex gap-2">
              <Button href={LINKS.policy} variant="secondary" size="sm">
                운영 정책
              </Button>
              <Button href={LINKS.studentApply} variant="primary" size="sm">
                매칭 신청
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} cta={item.cta} />
            ))}
          </div>

          <div className="mt-6 text-xs leading-6 text-zinc-500">
            * 초기 버전은 신청 기반으로 운영되며, 안내 기준은 운영 과정에서
            업데이트될 수 있습니다.
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqItem({
  q,
  a,
  cta,
}: {
  q: string;
  a: string;
  cta?: { label: string; href: string };
}) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 open:bg-white">
      <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
        {q}
        <span className="float-right select-none text-zinc-400 transition group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="mt-3 text-sm leading-7 text-zinc-600">
        {a}
        {cta ? (
          <div className="mt-4">
            <a
              href={cta.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              {cta.label} <span aria-hidden>→</span>
            </a>
          </div>
        ) : null}
      </div>
    </details>
  );
}
