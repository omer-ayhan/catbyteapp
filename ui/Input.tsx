import React from 'react';
import {IInputProps, Input as NativeInput, Text, VStack} from 'native-base';

interface Props extends IInputProps {
  errorMessage?: string | false;
}

export default function Input({...props}: Props) {
  return (
    <VStack shadow="2">
      <NativeInput
        bg="white"
        fontSize="p1"
        _focus={{
          borderWidth: 1,
          borderColor: 'primary.500',
        }}
        borderWidth={0}
        p="2"
        {...props}
      />
      {props.errorMessage && (
        <Text color="red.500" fontSize="xs">
          {props.errorMessage}
        </Text>
      )}
    </VStack>
  );
}
