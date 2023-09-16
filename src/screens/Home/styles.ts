import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    
  },
  eventName: {
    fontSize: 24,
    color: '#FDFCFE',
    marginTop: 48
  },
  eventDate: {
    fontSize: 16,
    color: '#6B6B6B'
  },
  eventInput: {
    color: '#fff',
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  eventButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#32FC67',

    justifyContent: 'center',
    alignItems: 'center'

    
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 36,
    marginBottom: 42,
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 28,
    color: '#fff',
    lineHeight: 35,
  },
  listSubtitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ddd',
  }
});