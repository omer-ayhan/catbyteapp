import React from 'react';
import {Box, Button, Center, HStack, Image, Text, VStack} from 'native-base';
import {InterfaceImageProps} from 'native-base/lib/typescript/components/primitives/Image/types';
import {Pressable} from 'react-native';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {deleteUser} from '@store/slices/usersSlice';

interface Props {
  imageProps: InterfaceImageProps;
  name: string;
  age: number;
  id: number;
  onPress?: () => void;
}

export default function UserCard({onPress, id, name, age, imageProps}: Props) {
  const dispatch = useAppDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUser({id}));
  };

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
        <Button
          onPress={handleDeleteUser}
          variant="unstyled"
          _text={{color: 'red.700', fontSize: 'p1', fontWeight: 'bold'}}
          position="absolute"
          top={0}
          zIndex={1}
          right={0}>
          X
        </Button>
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
