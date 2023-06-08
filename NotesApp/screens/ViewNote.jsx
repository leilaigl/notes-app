import React, {useContext, useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../assets/Styles';
import NoteContext from '../context/NoteContext';

export default function ViewNote({navigation, route}) {
  const {id, title, content, editOn} = route.params;
  const {notes, setNotes} = useContext(NoteContext);
  const [isEditMode, setIsEditMode] = useState(editOn);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [showModal, setShowModal] = useState(false);
  const [confirmType, setConfirmType] = useState('edit');

  const handleConfirmPress = () => {
    setShowModal(false);
    if (confirmType === 'edit') {
      const updatedNotes = [...notes];
      const noteIndex = updatedNotes.findIndex(note => note.id === id);
      if (noteIndex !== -1) {
        updatedNotes[noteIndex].title = editedTitle;
        updatedNotes[noteIndex].content = editedContent;
      } else {
        const newNote = {
          id: id,
          title: editedTitle,
          content: editedContent,
        };
        updatedNotes.push(newNote);
      }
      setNotes(updatedNotes);
      setIsEditMode(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (isEditMode === true) {
              setConfirmType('back');
              setShowModal(true);
            } else {
              navigation.navigate('Home');
            }
          }}>
          <View style={styles.headerBtn}>
            <Icon name="chevron-left" size={40} color="white" />
          </View>
        </TouchableOpacity>
        <View style={{flex: 1}} />
        {!isEditMode ? (
          <TouchableOpacity
            onPress={() => {
              setIsEditMode(true);
              setConfirmType('edit');
            }}>
            <View style={styles.headerBtn}>
              <Icon name="edit" size={24} color="white" />
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={() => setIsEditMode(false)}>
              <View style={[styles.headerBtn, {marginRight: '5%'}]}>
                <Icon name="remove-red-eye" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <View style={styles.headerBtn}>
                <Icon name="save" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
      <ScrollView>
        {!isEditMode ? (
          <>
            <Text
              style={[
                styles.text,
                {fontSize: 35, color: 'white', marginBottom: '10%'},
              ]}>
              {editedTitle}
            </Text>
            <Text style={[styles.text, {fontSize: 23, color: 'white'}]}>
              {editedContent}
            </Text>
          </>
        ) : (
          <>
            <TextInput
              style={[
                styles.text,
                {padding: 0, fontSize: 35, color: 'white', marginBottom: '10%'},
              ]}
              placeholder="Title"
              placeholderTextColor="#9A9A9A"
              value={editedTitle}
              onChangeText={setEditedTitle}
              multiline={true}
            />
            <TextInput
              style={[styles.text, {padding: 0, fontSize: 23, color: 'white'}]}
              placeholder="Type something..."
              placeholderTextColor="#9A9A9A"
              value={editedContent}
              onChangeText={setEditedContent}
              multiline={true}
            />
          </>
        )}
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={styles.modalBackground} activeOpacity={1}>
          <View
            style={[
              styles.modalContainer,
              {alignItems: 'center', justifyContent: 'space-around'},
            ]}>
            <Icon name="info" size={30} color="#606060" />
            {confirmType === 'edit' ? (
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'center',
                    fontSize: 23,
                    color: '#CFCFCF',
                    marginVertical: '10%',
                  },
                ]}>
                Save changes?
              </Text>
            ) : (
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'center',
                    fontSize: 23,
                    color: '#CFCFCF',
                    marginVertical: '10%',
                  },
                ]}>
                Are you sure you want to discard your changes?
              </Text>
            )}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                  if (confirmType !== 'edit') navigation.navigate('Home');
                }}>
                <View style={styles.modalBtn}>
                  <Text style={[styles.text, {fontSize: 18, color: 'white'}]}>
                    Discard
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <TouchableOpacity onPress={handleConfirmPress}>
                <View style={[styles.modalBtn, {backgroundColor: '#30BE71'}]}>
                  {confirmType === 'edit' ? (
                    <Text style={[styles.text, {fontSize: 18, color: 'white'}]}>
                      Save
                    </Text>
                  ) : (
                    <Text style={[styles.text, {fontSize: 18, color: 'white'}]}>
                      Keep
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
