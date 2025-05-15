import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const news = {
        title: "Новый патч для Risk of Rain 2 добавляет балансные изменения и исправления багов",
        description: "Hopoo Games выпустила новый патч для Risk of Rain 2, направленный на улучшение баланса персонажей, исправление багов и оптимизацию производительности. Подробности можно найти на официальном сайте.",
        link: "https://www.google.com", // Замените на источник новости
    };

    const telegramLink = "https://t.me/N7Joker";

    const openURL = async (url) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert("Ошибка", "Не удалось открыть ссылку.");
            }
        } catch (error) {
            Alert.alert("Ошибка", "Произошла ошибка при открытии ссылки.");
        }
    };

    const navigateToTab = (tabName) => {
        navigation.navigate(tabName);
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.telegramButton} onPress={() => openURL(telegramLink)}>
                <Text style={styles.telegramButtonText}>Мой Telegram (@N7Joker)</Text>
            </TouchableOpacity>

            <View style={styles.newsContainer}>
                <Text style={styles.newsTitle}>Последние новости:</Text>
                <Text style={styles.newsHeadline}>{news.title}</Text>
                <Text style={styles.newsDescription}>{news.description}</Text>
                <TouchableOpacity onPress={() => openURL(news.link)}>
                    <Text style={styles.newsLink}>Читать далее</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigateToTab('Characters')}>
                    <Text style={styles.navButtonText}>Персонажи</Text>
                </TouchableOpacity>
                {/* Если есть другие вкладки, они могут быть добавлены здесь */}
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
    telegramButton: {
        backgroundColor: '#2AABEE',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    telegramButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    newsContainer: {
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    newsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    newsHeadline: {
        fontSize: 18,
        color: '#ddd',
        marginBottom: 5,
    },
    newsDescription: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 10,
    },
    newsLink: {
        fontSize: 16,
        color: '#2AABEE',
    },
    navigationContainer: {
        marginTop: 20,
    },
    navButton: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    navButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeScreen;