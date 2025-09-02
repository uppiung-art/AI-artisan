'use client';

import { useState } from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            다양한 프로젝트를 통해 쌓아온 실무 경험과 성과입니다
          </p>
        </div>

        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
          
          {/* 경력 항목들 */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* 타임라인 점 */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                {/* 경력 카드 */}
                <div className="md:ml-16 bg-card rounded-lg card-shadow overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full p-6 text-left hover:bg-accent/50 transition-colors focus-ring"
                    aria-expanded={expandedIndex === index}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <svg 
                          className={`w-6 h-6 text-muted-foreground transition-transform ${
                            expandedIndex === index ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* 확장 내용 */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-border pt-4">
                        <h4 className="font-medium text-card-foreground mb-3">
                          주요 성과
                        </h4>
                        <ul className="space-y-2">
                          {exp.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* 링크 */}
                        {exp.links.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex flex-wrap gap-2">
                              {exp.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.href}
                                  className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary 
                                           rounded-full text-sm font-medium hover:bg-primary/20 
                                           transition-colors focus-ring"
                                  target={link.href.startsWith('http') ? '_blank' : undefined}
                                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  {link.label}
                                  {link.href.startsWith('http') && (
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  )}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 card-shadow max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              협업과 성장
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              다양한 팀과의 협업을 통해 의사소통 능력을 기르고, 
              코드 리뷰와 멘토링을 통해 함께 성장하는 개발 문화를 만들어가고 있습니다. 
              사용자 중심의 사고와 데이터 기반의 의사결정을 중요하게 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
