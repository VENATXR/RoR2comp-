import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TipsScreen = () => {
  const [showCharacterTips, setShowCharacterTips] = useState(false);

  const universalTips = [
    'Изучайте карту: Знание расположения сундуков, порталов и секретов поможет вам быстро развиваться.',
    'Приоритезируйте мобильность: Предметы, увеличивающие скорость передвижения и уклонение, значительно повышают вашу выживаемость.',
    'Собирайте лут: Чем больше предметов вы соберете, тем сильнее станете. Не игнорируйте маленькие сундуки.',
    'Командная работа: В многопользовательской игре координируйте свои действия с товарищами по команде для достижения лучших результатов.',
    'Следите за временем: Чем дольше вы находитесь на уровне, тем сложнее становятся враги. Не затягивайте прохождение уровней.',
  ];

  const characterTips = {
    Commando: [
      'Используйте двойной выстрел для нанесения стабильного урона.',
      'Тактический слайд позволяет быстро уклоняться от атак.',
      'FMJ пробивает броню врагов, что особенно полезно против элиты.',
    ],
    Huntress: [
      'Мерцающий шквал позволяет быстро перемещаться по полю боя.',
      'Опустошение — мощная способность для нанесения урона по области.',
      'Используйте метку для увеличения урона по приоритетным целям.',
    ],
    Loader: [
      'Силовой кулак наносит огромный урон одиночным целям.',
      'Трос позволяет быстро перемещаться и оглушать врагов.',
      'Гравитационный импульс притягивает врагов, делая их уязвимыми.',
    ],
    // Добавьте советы для других персонажей
  };

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const toggleCharacterTips = (character) => {
    setSelectedCharacter(character === selectedCharacter ? null : character);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Полезные советы</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Универсальные советы</Text>
        {universalTips.map((tip, index) => (
          <Text key={index} style={styles.tip}>
            - {tip}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Советы по персонажам</Text>
        {Object.keys(characterTips).map((character) => (
          <View key={character}>
            <TouchableOpacity
              style={styles.characterButton}
              onPress={() => toggleCharacterTips(character)}
            >
              <Text style={styles.characterButtonText}>{character}</Text>
            </TouchableOpacity>
            {selectedCharacter === character && (
              <View style={styles.characterTipsContainer}>
                {characterTips[character].map((tip, index) => (
                  <Text key={index} style={styles.tip}>
                    - {tip}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tip: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  characterButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  characterButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  characterTipsContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default TipsScreen;
