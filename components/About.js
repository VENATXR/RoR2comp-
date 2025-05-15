import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
    const appName = 'Risk of Rain 2 Companion';
    const developer = 'VENATXR';
    const telegramLink = "https://t.me/N7Joker"; // Ссылка разработчика
    const githubLink = "https://github.com/VENATXR"; // Ссылка GitHub

    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Не удалось открыть URL:", err));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{appName}</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>О приложении</Text>
                <Text style={styles.description}>
                    Это приложение-компаньон для игры Risk of Rain 2, созданное с целью предоставить игрокам быстрый и удобный доступ к информации о персонажах, предметах, локациях и советах.
                    Разработка приложения продолжается, и в будущем планируется добавление новых функций и улучшений.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Разработчик</Text>
                <Text style={styles.description}>
                    Приложение разработано {developer}. Если у вас есть вопросы, предложения или вы хотите поддержать разработку, свяжитесь со мной:
                </Text>
                
                <TouchableOpacity onPress={() => openLink(telegramLink)} accessible={true} accessibilityLabel="Telegram: @N7Joker">
                    <Text style={styles.link}>Telegram: @N7Joker</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink(githubLink)} accessible={true} accessibilityLabel="GitHub: VENATXR">
                    <Text style={styles.link}>GitHub: VENATXR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Благодарности</Text>
                <Text style={styles.description}>
                    Выражаю благодарность сообществу Risk of Rain 2 за поддержку и вдохновение.
                </Text>
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
    description: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 10,
    },
    link: {
        fontSize: 16,
        color: '#2AABEE',
        marginBottom: 5,
    },
});

export default AboutScreen;