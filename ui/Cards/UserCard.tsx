import React from 'react';
import {Box, Center, HStack, Image, Text, VStack} from 'native-base';
import {InterfaceImageProps} from 'native-base/lib/typescript/components/primitives/Image/types';
import {Pressable} from 'react-native';

interface Props {
  imageProps: InterfaceImageProps;
  name: string;
  age: number;
  onPress?: () => void;
}

export default function UserCard({onPress, name, age, imageProps}: Props) {
  return (
    <Pressable onPress={onPress}>
      <VStack
        justifyContent="flex-end"
        width={imageProps.width}
        height={imageProps.height}
        bg="white"
        m="2"
        position="relative"
        rounded="md"
        overflow="hidden">
        {imageProps.source ? (
          <Image position="absolute" {...imageProps} />
        ) : (
          <Box
            bg="gray.200"
            width={imageProps.width}
            height={imageProps.height}
          />
        )}
        <VStack
          alignItems="center"
          px="2"
          w={imageProps.width}
          h={(imageProps.height as number) / 2.4}
          bg="dark.1000:alpha.40">
          <Text color="white" fontWeight="bold" fontSize="p3">
            {name}
          </Text>
          <Text color="white" fontWeight="bold" fontSize="p2">
            {age}
          </Text>
        </VStack>
      </VStack>
    </Pressable>
  );
}
