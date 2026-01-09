import Container from "@/components/ui/Container";

export default function Categories() {
  return (
    <section className="mt-16" id="categories">
      <Container>
        <header className="mb-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            전공이 달라도, 성적이 오르는 방식은 다릅니다
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
            A+ Tutor는 과목을 나열하지 않습니다.
            <span className="font-semibold text-zinc-900">
              성적을 만드는 핵심 과정
            </span>
            을 기준으로 튜터링을 설계합니다.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          <CategoryCard
            badge="인문학"
            title="논리 · 구조 · 표현"
            desc="리포트와 시험에서 점수가 갈리는 지점은 ‘얼마나 많이 아느냐’가 아니라, 얼마나 논리적으로 정리해내느냐입니다."
            points={[
              "리포트 구조 설계",
              "읽기·요약·논지 정리",
              "서술형/논술형 시험 대비",
              "발표·토론 피드백",
            ]}
          />

          <CategoryCard
            badge="자연계"
            title="이해 · 적용 · 풀이 설계"
            desc="문제를 많이 푼다고 성적이 오르지 않습니다. 핵심은 개념을 ‘어디에 어떻게 쓰는지’를 아는 것입니다."
            points={[
              "수학·통계 개념 정리",
              "문제 접근 전략",
              "계산/증명 과정 피드백",
              "코딩·실습 과제 보조",
            ]}
          />

          <CategoryCard
            badge="예체능"
            title="이론 · 해석 · 설명력"
            desc="작품만 잘 만들어서는 성적이 오르지 않습니다. 평가자는 ‘이해하고 설명할 수 있는지’를 봅니다."
            points={[
              "이론·교양 과목 대비",
              "작품/포트폴리오 설명",
              "리서치·컨셉 정리",
              "발표·구술 대비",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

/* --- 내부 컴포넌트 --- */

function CategoryCard({
  badge,
  title,
  desc,
  points,
}: {
  badge: string;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
        {badge}
      </div>

      <h3 className="mt-4 text-base font-semibold text-zinc-900">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-zinc-600">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
