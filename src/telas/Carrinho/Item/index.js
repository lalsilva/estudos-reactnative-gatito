import React, { useState } from 'react';
import { View, Text } from 'react-native';

import ItemPadrao from '../../../componentes/ItemPadrao';
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

import estilos from './estilos';

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuanitadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    };

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    };

    return (
        <>
            <View style={estilos.informacao}>
                <ItemPadrao
                    nome={nome}
                    preco={preco}
                    descricao={descricao}
                />
            </View>
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
                    valor='Remover do Carrinho'
                    acao={() => { }}
                />
            </View>
            <View style={estilos.divisor} />
        </>
    );
}