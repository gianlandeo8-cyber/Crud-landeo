import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const crud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CREAR CRUD</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu dni'
          style={styles.input}
        />
        <TextInput
          placeholder='Coloca tus Nombres'
          style={styles.input}
        />
        <TextInput
          placeholder='Coloca tu Correo Electrónico'
          style={styles.input}
        />
        <TextInput
          placeholder='Coloca tu Celular'
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>READ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default crud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    gap: 12,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',       
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 5,                     
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,                    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  }
});