import PropTypes from 'prop-types';
import { Section, StatisticList } from './Statistics.styled';
import { StatItem } from '../StatItem/StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage}/>
        ))}
      </StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
