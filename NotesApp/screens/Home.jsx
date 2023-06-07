import React, {useState} from 'react';
import {Button, View, Image, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import styles from '../assets/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}) {
  const notes = [
    {title: 'UI concepts worth existing', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {
      title: 'Book Review: The Design of Everyday Things by Don Norman',
      content:
        'The Design of Everyday Things is required reading for anyone who is interested in the user experience. I personally like to reread it every year or two. Norman is aware of the durability of his work and the applicability of his principles to multiple disciplines. If you know the basics of design better than anyone else, you can apply them flawlessly anywhere.',
    },
    {title: 'Animes produced by UFOTable', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: 'Mangas planned to read', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: 'Awesome tweets collection', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: 'List of free & open source apps', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sapien faucibus et molestie ac. Egestas pretium aenean pharetra magna ac placerat. Sem et tortor consequat id porta. Velit egestas dui id ornare arcu odio ut sem. Condimentum lacinia quis vel eros donec ac odio. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Velit euismod in pellentesque massa. Aliquet sagittis id consectetur purus.'},
  ];

  const cardColors = [
    '#FD99FF',
    '#FF9E9E',
    '#91F48F',
    '#FFF599',
    '#9EFFFF',
    '#B69CFF',
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Notes</Text>
        <View style={{flex: 1}} />
        <TouchableOpacity>
          <View style={[styles.headerBtn, {marginRight: '5%'}]}>
            <Icon name="search" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.headerBtn}>
            <Icon name="info-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ViewNote', {title: note.title, description: note.content})}>
            <View
              style={[
                styles.card,
                {backgroundColor: cardColors[index % cardColors.length]},
              ]}>
              <Text style={styles.text}>{note.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <View style={styles.splash}>
        <Image
          style={styles.splashImg}
          source={require('../assets/images/create-note.png')}
        />
        <Text style={styles.splashText}>Create your first note!</Text>
      </View> */}
      <View style={styles.addNote}>
        <TouchableOpacity>
          <Icon name="add" size={48} color="white" />
        </TouchableOpacity>
      </View>

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
              Designed by - Figma Community{'\n'}
              Redesigned by - Divya Kelaskar{'\n'}
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
