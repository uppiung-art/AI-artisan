'use client';

import { useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'culture', label: '조직문화' },
    { id: 'leadership', label: '리더십' },
    { id: 'education', label: '교육' },
    { id: 'policy', label: '정책' },
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.tags.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
    <div className="bg-card rounded-lg card-shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* 프로젝트 썸네일 (이미지 없이 그라데이션으로 대체) */}
      <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {project.role}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          {project.period}
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.summary}
        </p>

        {/* 주요 성과 */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-card-foreground mb-2">주요 성과</h4>
          <ul className="space-y-1">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                <div className="w-1 h-1 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 기술 스택 */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 링크 버튼 */}
        <div className="flex space-x-3">
          {project.links.demo !== '#' && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground text-center text-sm 
                       font-medium rounded-lg hover:bg-primary/90 transition-colors focus-ring"
            >
              라이브 데모
            </a>
          )}
          {project.links.repo !== '#' && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border border-border text-foreground text-center text-sm 
                       font-medium rounded-lg hover:bg-accent transition-colors focus-ring"
            >
              코드 보기
            </a>
          )}
        </div>

        {/* 성과 지표 */}
        {project.metrics && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-semibold text-primary">{value}{key === 'satisfaction' || key === 'improvement' || key === 'efficiency' || key === 'adoption' ? '%' : key === 'participants' ? '명' : ''}</div>
                  <div className="text-muted-foreground text-xs">
                    {key === 'satisfaction' ? '만족도' : 
                     key === 'improvement' ? '개선율' : 
                     key === 'efficiency' ? '효율성' : 
                     key === 'participants' ? '참여자' : 
                     key === 'adoption' ? '도입률' : key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            다양한 기술과 창의적인 아이디어로 완성한 프로젝트들입니다
          </p>
        </div>

        {/* 필터 및 검색 */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* 필터 탭 */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                    filter === filterItem.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {filterItem.label}
                </button>
              ))}
            </div>

            {/* 검색 */}
            <div className="relative">
              <input
                type="text"
                placeholder="프로젝트 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                         text-foreground placeholder-muted-foreground"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* 결과 없음 메시지 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">
              검색 조건에 맞는 프로젝트가 없습니다.
            </div>
            <button
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg 
                       hover:bg-primary/90 transition-colors focus-ring"
            >
              필터 초기화
            </button>
          </div>
        )}

        {/* 더 많은 프로젝트 */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 card-shadow max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              더 많은 프로젝트
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GitHub에서 더 많은 프로젝트와 오픈소스 기여 내역을 확인하실 수 있습니다. 
              다양한 실험적 프로젝트와 학습 과정도 공유하고 있습니다.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background 
                       rounded-lg font-medium hover:bg-foreground/90 transition-colors focus-ring"
            >
              GitHub 방문하기
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
