import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  RectButton,
  Swipeable,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../assets/Styles';
import NoteContext from '../context/NoteContext';

export default function Home({navigation}) {
  const cardColors = [
    '#FD99FF',
    '#FF9E9E',
    '#91F48F',
    '#FFF599',
    '#9EFFFF',
    '#B69CFF',
  ];

  const {notes, setNotes} = useContext(NoteContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const generateId = () => {
    if (notes.length !== 0) {
      const lastNote = notes[notes.length - 1];
      return lastNote.id + 1;
    } else {
      return 0;
    }
  };

  const deleteItem = id => {
    setNotes(prevItems => prevItems.filter(item => item.id !== id));
  };

  const renderRightActions = id => () => {
    return (
      <RectButton
        style={[
          styles.card,
          {
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        onPress={() => deleteItem(id)}>
        <Icon name="delete" size={30} color="white" />
      </RectButton>
    );
  };

  useEffect(() => {
    const filtered = notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredNotes(filtered);
  }, [searchTerm, notes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!searchActive && <Text style={styles.heading}>Notes</Text>}
        <View style={{flex: 1}} />
        <TouchableOpacity onPress={() => setSearchActive(true)}>
          <View
            style={[
              styles.headerBtn,
              {
                marginRight: '5%',
                width: searchActive ? Dimensions.get('window').width * 0.9 : 50,
              },
            ]}>
            {searchActive ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                }}>
                <TextInput
                  placeholder="Search by the keyword..."
                  placeholderTextColor="#CCCCCC"
                  onChangeText={text => setSearchTerm(text)}
                  style={[
                    styles.splashText,
                    {flex: 1, fontSize: 20, color: '#CCCCCC'},
                  ]}
                />
                <TouchableOpacity
                  onPress={() => {
                    setSearchTerm('');
                    setSearchActive(false);
                  }}>
                  <Icon name="close" size={24} color="#CCCCCC" />
                </TouchableOpacity>
              </View>
            ) : (
              <Icon name="search" size={24} color="white" />
            )}
          </View>
        </TouchableOpacity>
        {!searchActive && (
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.headerBtn}>
              <Icon name="info-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      {notes.length !== 0 ? (
        filteredNotes.length !== 0 ? (
          <ScrollView>
            <GestureHandlerRootView>
              {filteredNotes.map((note, index) => (
                <Swipeable
                  key={note.id}
                  renderRightActions={renderRightActions(note.id)}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ViewNote', {
                        id: note.id,
                        title: note.title,
                        content: note.content,
                        editOn: false,
                      })
                    }>
                    <View
                      style={[
                        styles.card,
                        {
                          backgroundColor:
                            cardColors[index % cardColors.length],
                        },
                      ]}>
                      <Text style={styles.text}>{note.title}</Text>
                    </View>
                  </TouchableOpacity>
                </Swipeable>
              ))}
            </GestureHandlerRootView>
          </ScrollView>
        ) : (
          <View style={styles.splash}>
            <Image
              style={styles.splashImg}
              source={require('../assets/images/search-not-found.png')}
            />
            <Text style={styles.splashText}>
              File not found. Try searching again.
            </Text>
          </View>
        )
      ) : (
        <View style={styles.splash}>
          <Image
            style={styles.splashImg}
            source={require('../assets/images/create-note.png')}
          />
          <Text style={styles.splashText}>Create your first note!</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.addNote}
        onPress={() => {
          const currId = generateId();
          navigation.navigate('ViewNote', {
            id: currId,
            title: '',
            content: '',
            editOn: true,
          });
        }}>
        <View>
          <Icon name="add" size={48} color="white" />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={toggleModal}
          activeOpacity={1}>
          <View style={styles.modalContainer}>
            <Text style={[styles.text, styles.modalText]}>
              Designed by - Divya Kelaskar{'\n'}
              Redesigned by - Figma Community{'\n'}
              Illustrations - Storyset{'\n'}
              Icons - Material Icons{'\n'}
              Font - Nunito
            </Text>
            <Text
              style={[
                styles.text,
                styles.modalText,
                {marginTop: '5%', textAlign: 'center'},
              ]}>
              Made by Leila
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
