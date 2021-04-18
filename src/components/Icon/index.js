import theme from './../../theme';

// ICONS
import Email from './icons/Email';
import LeftRow from './icons/LeftRow';
import Tick from './icons/Tick';
import TickRound from './icons/TickRound';
import No from './icons/No';

const Icon = (props) => {
  const { icon, color } = props;

  const IconMap = {
    email: Email,
    leftRow: LeftRow,
    tick: Tick,
    tickRound: TickRound,
    no: No,
  };

  const StyledIcon = IconMap[icon];

  return (
    <StyledIcon
      {...props}
      color={theme.colors[color] || color || 'currentColor'}
    />
  );
};

export default Icon;
