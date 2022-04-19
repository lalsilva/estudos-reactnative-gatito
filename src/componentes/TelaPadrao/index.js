import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

/**
 * Possível correção para quando a rolagem dos itens ficam
 * comprometidas por conta da abertura do teclado
    import { KeyboardAvoidingView, Platform } from 'react-native';
 */

/**
 * Após a StatusBar adicionar o código abaixo
 * 
    <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={estilosGlobal.preencher}
    >
        {children}
    </KeyboardAvoidingView>
*/

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