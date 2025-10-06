import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from './Styles';

export function Welcome() {
    const [nome, setNome] = useState<string | null>("");

    useEffect(() => {
        AsyncStorage.getItem("user").then(setNome);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Screen</Text>
            <Text style={styles.welcome}>Bem-vindo, {nome || "visitante"}!</Text>
        </View>
    );
}