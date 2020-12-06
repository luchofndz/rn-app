import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  userImagecontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  userImage:{
    borderRadius: '50%',
    height: '160px',
    width: '160px',
    objectFit: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});