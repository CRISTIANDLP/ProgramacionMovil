import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo A',
            data: [
              { key: '1A', name: 'Cristian David' },
              { key: '2A', name: 'Alan' },
              { key: '3A', name: 'Aldair' },
              { key: '4A', name: 'Carlos' },
              { key: '5A', name: 'Josue' },
              { key: '6A', name: 'Moyeras' },
              { key: '7A', name: 'Daniela' },
            ],
          },
          {
            title: 'Grupo B',
            data: [
              { key: '1B', name: 'Daniel' },
              { key: '2B', name: 'Jorge' },
              { key: '3B', name: 'Isai' },
              { key: '4B', name: 'Elias' },
              { key: '5B', name: 'Diego' },
              { key: '6B', name: 'Mariana' },
              { key: '7B', name: 'Gerardo' },
            ],
          },
          {
            title: 'Grupo C',
            data: [
              { key: '1C', name: 'Cristian' },
              { key: '2C', name: 'Mnnuela' },
              { key: '3C', name: 'Kross' },
              { key: '4C', name: 'Messi' },
              { key: '5C', name: 'Paredes' },
              { key: '6C', name: 'Marcelo' },
              { key: '7C', name: 'Xd' },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'green',
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    paddingBottom: 4,
    paddingTop: 4,
  },
});
