import { StyleSheet } from 'react-native';

import { cores } from '../../estilos';

export default StyleSheet.create({
    informacao: {
        padding: 24
    },
    nome: {
        color: cores.laranja,
        fontWeight: 'bold',
        fontSize: 16,
    },
    descricao: {
        color: cores.escuro,
        fontSize: 16,
        marginRight: 8,
    },
    preco: {
        color: cores.roxo,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    }
});