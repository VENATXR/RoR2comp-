import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { locationsData } from '../data/locationsData'; // Укажите правильный путь

const LocationsScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const openLocationDetails = (location) => {
    setSelectedLocation(location);
  };

  const closeLocationDetails = () => {
    setSelectedLocation(null);
  };

  return (
    <ScrollView style={styles.container}>
      {locationsData.map((location) => (
        <TouchableOpacity
          key={location.id}
          style={styles.locationContainer}
          onPress={() => openLocationDetails(location)}
        >
          <Image source={location.image} style={styles.locationImage} />
          <Text style={styles.locationName}>{location.name}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        visible={selectedLocation !== null}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedLocation && (
              <ScrollView>
                <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                <Image
                  source={selectedLocation.image}
                  style={styles.modalImage}
                />
                <Text style={styles.modalDescription}>
                  {selectedLocation.description}
                </Text>
                <Text style={styles.modalSubtitle}>Враги:</Text>
                {selectedLocation.enemies.map((enemy, index) => (
                  <Text key={index} style={styles.modalText}>
                    - {enemy}
                  </Text>
                ))}
                <Text style={styles.modalSubtitle}>Места интереса:</Text>
                {selectedLocation.interestPoints.map((point, index) => (
                  <Text key={index} style={styles.modalText}>
                    - {point}
                  </Text>
                ))}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeLocationDetails}
                >
                  <Text style={styles.closeButtonText}>Закрыть</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  locationContainer: {
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  locationImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#333',
    width: '90%',
    maxHeight: '80%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#eee',
    marginBottom: 15,
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  modalText: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#2AABEE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationsScreen;
