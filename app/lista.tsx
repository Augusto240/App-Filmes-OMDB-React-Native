import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

const API_KEY = '24167e9b';

export default function BuscaListaScreen() {
  const [titulo, setTitulo] = useState('');
  const [filmes, setFilmes] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleBuscarLista = async () => {
    if (titulo === '') {
      setErro('Por favor, digite um título.');
      return;
    }
    
    setLoading(true);
    setFilmes([]);
    setErro('');

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setFilmes(data.Search); 
      } else {
        setErro(data.Error);
      }
    } catch (error) {
      setErro('Ocorreu um erro ao buscar a lista. Tente novamente.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Buscar por Título:</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Ex: Batman"
      />
      <Button title="Buscar Lista" onPress={handleBuscarLista} />

      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}
      
      {erro && <Text style={styles.erro}>{erro}</Text>}
      
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.imdbID} 
        renderItem={({ item }) => ( 
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <View style={styles.textoContainer}>
              <Text style={styles.tituloFilme}>{item.Title}</Text>
              <Text>{item.Year}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 8 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 },
  loading: { marginTop: 20 },
  erro: { color: 'red', textAlign: 'center', marginVertical: 10 },
  itemContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  poster: { width: 50, height: 75 },
  textoContainer: { flex: 1, marginLeft: 10 },
  tituloFilme: { fontSize: 16, fontWeight: 'bold' }
});