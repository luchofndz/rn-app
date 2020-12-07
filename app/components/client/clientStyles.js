import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  btn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
    borderColor: '#888',
    borderWidth: 6
  },
});