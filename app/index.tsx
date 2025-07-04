import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';

const API_KEY = '24167e9b';

export default function BuscaFilmeScreen() {
  const [titulo, setTitulo] = useState('');
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleBuscarFilme = async () => {
    if (titulo === '') {
      setErro('Por favor, digite um título.');
      return;
    }
    
    setLoading(true);
    setFilme(null);
    setErro('');

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${titulo}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setFilme(data);
      } else {
        setErro(data.Error); 
      }
    } catch (error) {
      setErro('Ocorreu um erro ao buscar o filme. Tente novamente.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Filme:</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Ex: The Matrix"
      />
      <Button title="Buscar Filme" onPress={handleBuscarFilme} />

      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}
      
      {erro && <Text style={styles.erro}>{erro}</Text>}
      
      {filme && (
        <View style={styles.resultadoContainer}>
          <Image source={{ uri: filme.Poster }} style={styles.poster} />
          <Text style={styles.tituloFilme}>{filme.Title} ({filme.Year})</Text>
          <Text style={styles.plot}>{filme.Plot}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 8 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 },
  loading: { marginTop: 20 },
  erro: { color: 'red', textAlign: 'center', marginTop: 20 },
  resultadoContainer: { marginTop: 20, alignItems: 'center' },
  poster: { width: 200, height: 300, resizeMode: 'contain' },
  tituloFilme: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  plot: { textAlign: 'justify' }
});