import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/rotas';

Reactotron.configure().useReactNative().connect();

export default function App() {
  Reactotron.log({
    curso: 'Alura'
  });

  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
