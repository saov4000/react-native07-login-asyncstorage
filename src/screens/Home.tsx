import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from './Styles';

export function Home({ navigation }: any) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (name.trim() === "saov" && password.trim() === "123") {
            await AsyncStorage.setItem("user", name);
            navigation.navigate("welcome");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Digite seu nome"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
}