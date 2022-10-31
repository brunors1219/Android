import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View> 
                <Text>Email:</Text>
                <TextInput
                placeholder= 'Email'
                keyboardType='text'/>
                
                <Text>Senha:</Text>
                <TextInput
                placeholder= 'Senha'
                keyboardType='numeric'
                />
                <Button title= 'Entrar'/>
            </View>
        </View>
    )
}