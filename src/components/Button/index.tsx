import React, { FC } from 'react';
import { Wrapper, ButtonBase } from './styles';

type Props = {
  label: string;
  icon?: string;
  loading?: boolean;
  color?: string;
  onPress?: () => void;
};

const Button: FC<Props> = ({
  label,
  icon = '',
  loading = false,
  color,
  onPress,
}) => {
  return (
    <Wrapper>
      <ButtonBase
        loading={loading}
        icon={icon}
        onPress={onPress}
        color={color || '#5296dd'}
      >
        {label}
      </ButtonBase>
    </Wrapper>
  );
};

export default Button;
