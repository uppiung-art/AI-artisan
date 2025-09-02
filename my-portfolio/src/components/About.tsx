'use client';

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-mobile-title sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-mobile-body sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            구성원 중심의 조직문화를 만드는 것이 저의 목표입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* 소개 텍스트 */}
          <div className="space-y-4 sm:space-y-6 mobile-padding sm:p-0">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                전문 분야
              </h3>
              <p className="text-mobile-body sm:text-base text-muted-foreground leading-relaxed">
                조직문화 혁신과 구성원 경험 개선을 전문으로 합니다. 
                HR 정책 수립, 조직 진단, 문화 변화 관리를 통해 
                더 나은 조직을 만들어가는 일에 집중하고 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                업무 철학
              </h3>
              <p className="text-mobile-body sm:text-base text-muted-foreground leading-relaxed">
                구성원 개개인의 성장과 조직의 발전이 함께 이루어질 수 있는 
                환경을 만드는 것이 중요하다고 생각합니다. 데이터 기반의 
                의사결정과 지속적인 피드백을 통해 조직문화를 개선해나갑니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                관심 분야
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  '조직문화 진단',
                  '구성원 경험(EX)',
                  '리더십 개발',
                  '성과 관리',
                  '조직 변화 관리',
                  '워라밸 정책'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 통계 및 하이라이트 */}
          <div className="space-y-6 sm:space-y-8 mobile-padding sm:p-0">
            <div className="bg-card rounded-lg p-4 sm:p-6 card-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3 sm:mb-4">
                업무 현황
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">경력 년수</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">20+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">조직문화 프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">구성원 인터뷰</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">85%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">만족도 점수</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 sm:p-6 card-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3 sm:mb-4">
                최근 성과
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-mobile-body sm:text-sm text-muted-foreground">
                    구성원 만족도 25% 향상 (70% → 87%)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-mobile-body sm:text-sm text-muted-foreground">
                    조직문화 진단 체계 구축으로 이직률 30% 감소
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-mobile-body sm:text-sm text-muted-foreground">
                    리더십 교육 프로그램 도입으로 팀 성과 20% 개선
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
