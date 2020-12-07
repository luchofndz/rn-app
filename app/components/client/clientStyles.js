import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  userImagecontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  userImage:{
    borderRadius: 150,
    height: '160px',
    width: '160px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});