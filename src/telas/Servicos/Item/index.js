import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import ItemPadrao from '../../../componentes/ItemPadrao';
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

import estilos from './estilos';

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuanitadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    };

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    };

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuanitadeTotal(1);
    };

    return (
        <>
            <TouchableOpacity
                style={estilos.informacao}
                onPress={inverteExpandir}
            >
                <ItemPadrao
                    nome={nome}
                    preco={preco}
                    descricao={descricao}
                >
                {expandir &&
                    <View style={estilos.carrinho}>
                        <View>
                            <View style={estilos.valor}>
                                <Text style={estilos.descricao}>Quantidade:</Text>
                                <CampoInteiro
                                    estilos={estilos.quantidade}
                                    valor={quantidade}
                                    acao={atualizaQuanitadeTotal}
                                />
                            </View>
                            <View style={estilos.valor}>
                                <Text style={estilos.descricao}>Total:</Text>
                                <Text style={estilos.preco}>
                                    {
                                        Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(total)
                                    }
                                </Text>
                            </View>
                        </View>
                        <Botao
                            valor='Adicionar ao Carrinho'
                            acao={() => { }}
                        />
                    </View>
                }
                </ItemPadrao>
            </TouchableOpacity>
            <View style={estilos.divisor} />
        </>
    );
}