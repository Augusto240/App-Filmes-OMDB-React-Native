# 🎬 App de Consulta de Filmes (OMDB API)

Este é um aplicativo de estudo, desenvolvido em **React Native com Expo**, que demonstra como consumir uma API REST (a [OMDB API](http.www.omdbapi.com/)) para buscar e exibir informações sobre filmes.

O projeto é intencionalmente simples, focado nos fundamentos do React Native para iniciantes.

---

### ✅ Funcionalidades Principais

O aplicativo é dividido em duas telas principais, acessíveis por abas:

1.  **Busca por Filme:**
    * Permite ao usuário digitar o título de um filme específico.
    * Exibe os detalhes do filme encontrado, como pôster, título, ano e enredo.

2.  **Busca por Lista:**
    * Permite ao usuário digitar um termo de busca.
    * Exibe uma lista rolável com todos os filmes que correspondem ao termo.

---

### 🛠️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Expo Router](https://expo.github.io/router/docs/) para a navegação por abas.
* JavaScript `fetch` para as requisições à API.
* [OMDB API](http.www.omdbapi.com/) como fonte dos dados.

---

### 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina.

**1. Clone o repositório:**
```bash
git clone https://github.com/Augusto240/App-Filmes-OMDB-React-Native
```

**2. Navegue até a pasta do projeto:**
```bash
cd App-Filmes-OMDB-React-Native
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Execute o aplicativo:**
```bash
npx expo start
```

Após executar o último comando, o Expo Dev Client será aberto no seu navegador. Você pode usar o aplicativo Expo Go no seu celular para escanear o QR Code e abrir o app.