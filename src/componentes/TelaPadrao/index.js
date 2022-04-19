import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import estilosGlobal from '../../estilos';

export default function TelaPadrao({ children }) {
    return (
        <SafeAreaView style={estilosGlobal.preencher}>
            <StatusBar />
            {children}
        </SafeAreaView>
    )
}