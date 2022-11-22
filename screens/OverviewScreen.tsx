import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useAppSelector} from '@hooks/useAppSelector';
import {Box, Center, Fab, FlatList, Image} from 'native-base';
import {device} from '@constants/config';
import UserCard from '@ui/Cards/UserCard';
import {useNavigation} from '@react-navigation/native';
import Routes from '@constants/routes';
import {Navigate} from '@constants/types';

export default function OverviewScreen() {
  const {users, isUsersLoading} = useAppSelector(state => state.users);
  const navigation = useNavigation<Navigate>();

  return (
    <Center flex={1} bg="white">
      {isUsersLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <FlatList
          data={users}
          numColumns={3}
          renderItem={({item}) => (
            <UserCard
              id={item.id}
              onPress={() =>
                navigation.navigate(Routes.UserDetails, {id: item.id})
              }
              name={`${item.firstName} ${item.lastName}`}
              age={item.age}
              imageProps={{
                source: {uri: item.image},
                width: device.width / 3.5,
                height: device.width / 3.5,
                alt: item.firstName,
              }}
            />
          )}
        />
      )}
      <Fab
        onPress={() => navigation.navigate(Routes.AddUser)}
        renderInPortal={false}
        shadow={2}
        size="xs"
        icon={
          <Image
            source={require('@assets/add.png')}
            alt="Add user"
            resizeMode="contain"
          />
        }
      />
    </Center>
  );
}
