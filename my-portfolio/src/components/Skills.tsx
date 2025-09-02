'use client';

import { useState } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const SkillBar = ({ skill }: { skill: { name: string; level: number; experience: string } }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.experience}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} 숙련도 ${skill.level}%`}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            다양한 기술 스택으로 완성도 높은 웹 서비스를 구현합니다
          </p>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-ring ${
                  activeCategory === category.category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* 스킬 표시 */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData
            .find(category => category.category === activeCategory)
            ?.skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillBar skill={skill} />
              </div>
            ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 card-shadow max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              지속적인 학습과 성장
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              빠르게 변화하는 웹 기술 트렌드에 발맞춰 지속적으로 학습하고 있습니다. 
              새로운 기술을 적극적으로 탐구하며, 실제 프로젝트에 적용해보는 것을 즐깁니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Next.js 14',
                'React Server Components',
                'Tailwind CSS',
                'TypeScript 5.0',
                'Prisma',
                'tRPC',
                'Framer Motion',
                'Zustand'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium 
                           hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
