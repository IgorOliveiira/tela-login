import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 40,
    backgroundColor: '#00816F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'relative', 
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -30, // Ajusta a posição vertical do logo 
  },
  starContainer: {
    flexDirection: 'row', // Alinha as estrelas horizontalmente
    alignItems: 'center',
  },
  star: {
    fontSize: 25, // Tamanho da estrela 
    color: 'white',
    marginHorizontal: 1, // Espaçamento horizontal entre as estrelas
    marginBottom: 5, //  verticalmente
  },
  centerStar: {
    fontSize: 35, // Tamanho da estrela central 
    color: 'white',
    marginHorizontal: 1, // Espaçamento horizontal entre as estrelas
    marginBottom: 20, //  verticalmente
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginTop: -10, // mover subtitulo
  },
  bottomSection: {
    flex: 60,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  description: {
    fontSize: 25,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'column', // Alinhe os botões verticalmente
  },
  buttonResponsavel: {
    backgroundColor: '#07689F',
    paddingVertical: 18, // Aumentar o tamanho das letras dos botões
    borderRadius: 5,
    marginBottom: 22,
  },
  buttonProfissional: {
    backgroundColor: 'white',
    borderColor: '#07689F',
    borderWidth: 3,
    paddingVertical: 18, // Aumentar o tamanho das letras dos botões
    borderRadius: 5,
  },
  buttonText: {
    color: '#07689F',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20, 
  },
  buttonTextWhite: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20, // 
  },
});

export default styles;