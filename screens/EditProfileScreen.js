import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const EditProfileScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tituloUniversitario: '',
    anoGraduacion: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setFormData({
          nombre: userData.nombre,
          email: userData.email,
          tituloUniversitario: userData.tituloUniversitario,
          anoGraduacion: userData.anoGraduacion,
        });
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo cargar la información');
    }
  };

  const handleUpdate = async () => {
    if (!formData.nombre || !formData.tituloUniversitario || !formData.anoGraduacion) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    setLoading(true);
    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        nombre: formData.nombre,
        tituloUniversitario: formData.tituloUniversitario,
        anoGraduacion: formData.anoGraduacion,
      });

      Alert.alert('Éxito', 'Información actualizada correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar la información');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Información</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={formData.nombre}
        onChangeText={(text) => setFormData({...formData, nombre: text})}
      />
      
      <TextInput
        style={[styles.input, styles.disabledInput]}
        placeholder="Correo electrónico"
        value={formData.email}
        editable={false}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Título universitario"
        value={formData.tituloUniversitario}
        onChangeText={(text) => setFormData({...formData, tituloUniversitario: text})}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Año de graduación"
        value={formData.anoGraduacion}
        onChangeText={(text) => setFormData({...formData, anoGraduacion: text})}
        keyboardType="numeric"
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleUpdate}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Actualizando...' : 'Actualizar Información'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.cancelButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#888',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  cancelButton: {
    backgroundColor: '#95A5A6',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditProfileScreen;