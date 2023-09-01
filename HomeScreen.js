import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyles'; // Importe os estilos

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* Estrelas representadas como texto ★ */}
        <View style={styles.starContainer}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.centerStar}>★</Text>
          <Text style={styles.star}>★</Text>
        </View>
        {/* Nome Esther */}
        <Text style={styles.logoText}>Esther</Text>
        <Text style={styles.subtitle}>Home Care</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.description}>
          Selecione seu perfil abaixo para acessar sua conta:
        </Text>
        <View style={styles.buttonContainer}>
          {/* Botão Responsável */}
          <TouchableOpacity style={styles.buttonResponsavel}>
            <Text style={styles.buttonTextWhite}>Responsável</Text>
          </TouchableOpacity>
          {/* Botão Profissional */}
          <TouchableOpacity style={styles.buttonProfissional}>
            <Text style={styles.buttonText}>Profissional</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
