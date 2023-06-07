'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%'
  },
  heading: {
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
    fontSize: 43,
  },
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  splashImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
  },
  splashText: {
    fontFamily: 'Nunito-Light',
    color: 'white',
    fontSize: 20,
  },
  addNote: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 5,
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: '#3B3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    marginBottom: '5%',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    color: 'black',
    fontSize: 25,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#252525',
    borderRadius: 20,
    padding: 30,
    width: '80%',
  },
  modalText: {
    fontSize: 15,
    color: '#CFCFCF',
    lineHeight: 25,
  },
});
