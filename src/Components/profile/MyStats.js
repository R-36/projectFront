import React from "react";

const statsConfig = [
  {
    name: 'programming',
    label: 'Программирование',
  },
  {
    name: 'design',
    label: 'Дизайн',
  },
  {
    name: 'social',
    label: 'Общение',
  }
];
export default function MyStats(props) {
  const {stats = {}} = props;
  return(
    <div className={'my-stats'}>
      <div className={'my-stats__title'}>Мои навыки</div>
      <div className={'my-stats__levels-list'}>
        {statsConfig.map( (stat, index) =>
          <div key={index} className={'my-stats__stat'}>
            <div className={'my-stats__level my-stats__level--' + stat.name}>
              {stats[stat.name + '_skills'] ? stats[stat.name + '_skills'] : '0'}
            </div>
            <div className={'my-stats__stat-title'}>
              {stat.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}