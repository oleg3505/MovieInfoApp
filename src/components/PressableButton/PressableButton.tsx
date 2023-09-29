import React from 'react';
import {Pressable, PressableProps, Text, TextStyle} from 'react-native';

interface IPressableButtonProps extends PressableProps {
  title: string;
  textStyle?: TextStyle;
}

export function PressableButton({
  title,
  textStyle,
  ...props
}: IPressableButtonProps) {
  return (
    <Pressable hitSlop={10} {...props}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
