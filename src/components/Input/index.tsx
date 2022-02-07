import React, { FC } from 'react';
import { Wrapper, TextInputBase, Hint } from './styles';

type Props = {
  value: string;
  label: string;
  isFocused?: boolean;
  hasContent?: boolean;
  isPassword?: boolean;
  error?: boolean;
  errorHint?: string;
  onChangeText(e: string): void;
};

const Input: FC<Props> = ({
  value,
  label,
  error,
  errorHint,
  isPassword = false,
  onChangeText,
  ...rest
}) => {
  return (
    <Wrapper>
      <TextInputBase
        label={label}
        error={error}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        {...rest}
      />
      {error ? <Hint>{errorHint}</Hint> : null}
    </Wrapper>
  );
};

export default Input;
