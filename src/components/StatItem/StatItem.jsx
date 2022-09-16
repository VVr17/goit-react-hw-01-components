import PropTypes from 'prop-types';
import { StatElement } from './StatItem.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatItem = ({label, percentage}) => {
  return (
    <StatElement style={{
      backgroundColor:  getRandomHexColor(),
    }}>
      <span>{label}</span>
      <span>{percentage}</span>
    </StatElement>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}