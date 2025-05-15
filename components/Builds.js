import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { buildsData } from '../data/buildsData';

const Builds = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const renderCharacterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.characterItem}
      onPress={() => setSelectedCharacter(item.character)}
    >
      <Text style={styles.characterText}>{item.character}</Text>
    </TouchableOpacity>
  );

  const renderBuildItem = ({ item }) => (
    <View style={styles.buildItem}>
      <Text style={styles.buildName}>{item.name}</Text>
      <Text style={styles.buildDescription}>{item.description}</Text>
      <Text style={styles.buildItemsTitle}>Предметы:</Text>
      {item.items.map((item, index) => (
        <Text key={index} style={styles.buildItemText}>{item}</Text>
      ))}
      <Text style={styles.buildPlaystyleTitle}>Стиль игры:</Text>
      <Text style={styles.buildPlaystyleText}>{item.playstyle}</Text>
    </View>
  );

  const renderBuilds = () => {
    if (!selectedCharacter) {
      return <Text style={styles.selectCharacterText}>Выберите персонажа для просмотра сборок</Text>;
    }

    const characterBuilds = buildsData.find(item => item.character === selectedCharacter)?.builds || [];

    return (
      <FlatList
        data={characterBuilds}
        renderItem={renderBuildItem}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={buildsData}
        renderItem={renderCharacterItem}
        keyExtractor={item => item.character}
        horizontal={true}
        style={styles.characterList}
      />
      <ScrollView style={styles.buildListContainer}>
        {renderBuilds()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  characterList: {
    marginBottom: 10,
  },
  characterItem: {
    backgroundColor: '#333',
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
  },
  characterText: {
    color: '#fff',
    fontSize: 16,
  },
  buildListContainer: {
    flex: 1,
  },
  buildItem: {
    backgroundColor: '#222',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  buildName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  buildDescription: {
    fontSize: 14,
    color: '#eee',
    marginBottom: 10,
  },
  buildItemsTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  buildItemText: {
    fontSize: 14,
    color: '#ddd',
  },
  buildPlaystyleTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  buildPlaystyleText: {
    fontSize: 14,
    color: '#ddd',
  },
  selectCharacterText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Builds;
