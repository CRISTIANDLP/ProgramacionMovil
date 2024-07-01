import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

const moviesList = [
  { id: 1, title: 'El Laberinto del Fauno' },
  { id: 2, title: 'Amores Perros' },
  { id: 3, title: 'Mar adentro' },
  { id: 4, title: 'Y Tu Mamá También' },
  { id: 5, title: 'El Secreto de sus Ojos' },
  { id: 6, title: 'Rec' },
  { id: 7, title: 'Los Amantes del Círculo Polar' },
  { id: 8, title: 'Abre los Ojos' },
  { id: 9, title: 'Nueve Reinas' },
  { id: 10, title: 'El Aura' },
  { id: 11, title: 'El Hijo de la Novia' },
  { id: 12, title: 'Biutiful' },
  { id: 13, title: 'Tesis' },
  { id: 14, title: 'El Orfanato' },
  { id: 15, title: 'Relatos Salvajes' },
  { id: 16, title: 'El Crimen del Padre Amaro' },
  { id: 17, title: 'La Historia Oficial' },
  { id: 18, title: 'El Espinazo del Diablo' },
  { id: 19, title: 'Cronos' },
  { id: 20, title: 'El Día de la Bestia' },
  { id: 21, title: 'La Ley de Herodes' },
  { id: 22, title: 'Volver' },
  { id: 23, title: 'Mujeres al Borde de un Ataque de Nervios' },
  { id: 24, title: 'Todo sobre mi madre' },
  { id: 25, title: 'El Bonaerense' },
  { id: 26, title: 'Celda 211' },
  { id: 27, title: 'El Viaje de Carol' },
  { id: 28, title: 'Los lunes al sol' },
  { id: 29, title: 'Lucía y el sexo' },
  { id: 30, title: 'El Secreto de la Tumba' },
  { id: 31, title: 'Torrente, el brazo tonto de la ley' },
  { id: 32, title: 'El Embrujo de Shanghai' },
  { id: 33, title: 'El Club de los Poetas Muertos' },
  { id: 34, title: 'La Teta Asustada' },
  { id: 35, title: 'El Perro' },
];

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredMovies(moviesList);
      setShowAlert(false);
      return;
    }

    const filtered = moviesList.filter(movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filtered.length === 0) {
      setShowAlert(true);
      setFilteredMovies([]);
    } else {
      setFilteredMovies(filtered);
      setShowAlert(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <ImageBackground source={require('./assets/IMAGEN.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="Buscar películas..."
        />
        <Button title="Buscar" onPress={handleSearch} />
        {showAlert && (
          <Alert
            title='Película no encontrada'
            message='No se encontraron películas que coincidan con la búsqueda.'
            onClose={handleAlertClose}
          />
        )}
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
