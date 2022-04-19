import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import estilosGlobal, { cores } from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({ children }) {
    return (
        <>
            <SafeAreaView style={estilos.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo} />
                {children}
            </SafeAreaView>
            <SafeAreaView style={estilos.ajusteTelaBaixo} />
        </>
    )
}