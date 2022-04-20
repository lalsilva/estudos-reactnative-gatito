import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import estilos from './estilos';

export default function Item({ nome, preco, descricao, children }) {
    return (
        <>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(preco)
                }
            </Text>
            {children}
        </>
    );
}