import React from 'react';
import { Award, Trophy, BadgeCheck } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { ACCENT_MAP, getLayoutStyle, getSectionBgClass } from '../utils';

interface AchievementsSectionProps {
  config: PortfolioConfig;
}

export default function AchievementsSection({ config }: AchievementsSectionProps) {
  const { achievements, accent, layout } = config;
  const accentSet = ACCENT_MAP[accent];
  const layoutSet = getLayoutStyle(layout, accent);

  const getIcon = (icon?: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="h-6 w-6" />;
      case 'certificate':
        return <BadgeCheck className="h-6 w-6" />;
      case 'award':
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <section id="achievements" className={`py-14 sm:py-20 ${getSectionBgClass(layout)}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className={layoutSet.sectionHeader}>Recognition</p>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
              layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
            }`}
          >
            Achievements & Certifications
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-mono leading-relaxed">
            Awards, hackathon wins, and industry certifications earned along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {achievements.map((item) => (
            <div key={item.id} className={`p-5 sm:p-6 flex flex-col gap-4 ${layoutSet.container}`}>
              <div className={`${accentSet.primaryText}`}>{getIcon(item.icon)}</div>
              <div>
                <h3
                  className={`text-base font-bold leading-snug mb-2 ${
                    layout === 'brutalist' ? 'uppercase text-zinc-950' : 'text-zinc-900 dark:text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
