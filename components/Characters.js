import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Modal, ScrollView } from 'react-native';
import { charactersData } from '../data/charactersData';

const Characters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setSelectedCharacter(item)}
        >
            <Image source={item.icon} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const CharacterDetailModal = () => {
        if (!selectedCharacter) {
            return null;
        }

        return (
            <Modal
                visible={!!selectedCharacter}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setSelectedCharacter(null)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{selectedCharacter.name}</Text>
                        <Text style={styles.modalDescription}>{selectedCharacter.description}</Text>
                        <Text style={styles.modalSkillsTitle}>Навыки:</Text>
                        {selectedCharacter.skills.map((skill, index) => (
                            <Text key={index} style={styles.modalSkillText}>{skill}</Text>
                        ))}
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => setSelectedCharacter(null)}
                        >
                            <Text style={styles.modalCloseButtonText}>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={charactersData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
            <CharacterDetailModal />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        padding: 10,
    },
    itemIcon: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    itemText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        color: '#eee',
        marginBottom: 10,
    },
    modalSkillsTitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
    modalSkillText: {
        fontSize: 14,
        color: '#ddd',
    },
    modalCloseButton: {
        backgroundColor: '#555',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    modalCloseButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Characters;
