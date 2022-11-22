import React, {useEffect, useState} from 'react';
import {Center, Image, Text, VStack} from 'native-base';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InitialState, UserType} from '@store/slices/usersSlice';
import axios from 'axios';
import usersApi from '@services/usersApi';
import {ActivityIndicator} from 'react-native';
import {useAppSelector} from '@hooks/useAppSelector';
import Routes from '@constants/routes';
import {ParamList} from '@constants/types';

export default function UserDetailsScreen() {
  const route = useRoute<RouteProp<ParamList, 'UserDetails'>>();
  const {users} = useAppSelector(state => state.users);
  const [user, setUser] = useState<InitialState['users'][number] | null>(null);

  useEffect(() => {
    setUser(users.find(user => user.id === route.params.id) as UserType);
  }, []);

  return (
    <VStack px="5" space={3} flex={1} bg="white" alignItems="flex-start">
      <Image
        alignSelf="center"
        source={{uri: user?.image}}
        alt={"User's image"}
        width={200}
        height={200}
        resizeMode="cover"
      />
      <Text alignSelf="center" fontSize="p1" fontWeight="bold">
        {user?.firstName} {user?.lastName} ({user?.age})
      </Text>
      <Text fontSize="h3">Company Details:</Text>

      <Text fontSize="p1">Adress: {user?.address.address}</Text>
      <Text fontSize="p1">Postal Code: {user?.address.postalCode}</Text>
      <Text fontSize="p1">State: {user?.address.state}</Text>
    </VStack>
  );
}
