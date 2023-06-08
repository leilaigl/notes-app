import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ViewNote from './screens/ViewNote';
import NoteContext from './context/NoteContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'UI concepts worth existing',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 2,
      title: 'Book Review: The Design of Everyday Things by Don Norman',
      content:
        'The Design of Everyday Things is required reading for anyone who is interested in the user experience. I personally like to reread it every year or two. Norman is aware of the durability of his work and the applicability of his principles to multiple disciplines. If you know the basics of design better than anyone else, you can apply them flawlessly anywhere.',
    },
    {
      id: 3,
      title: 'Animes produced by UFOTable',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      title: 'Mangas planned to read',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 5,
      title: 'Awesome tweets collection',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 6,
      title: 'List of free & open source apps',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 7,
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sapien faucibus et molestie ac. Egestas pretium aenean pharetra magna ac placerat. Sem et tortor consequat id porta. Velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Velit euismod in pellentesque massa. Aliquet sagittis id consectetur purus.',
    },
  ]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewNote" component={ViewNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteContext.Provider>
  );
}
