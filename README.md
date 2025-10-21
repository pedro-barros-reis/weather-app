![Weather App_page-0001](https://github.com/user-attachments/assets/91efe226-4394-439f-9792-d7ffbf3b5e9b)


# Weather App - Desafio Técnico

## Overview

Este projeto é um aplicativo de previsão do tempo desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor Front-End. O objetivo principal era construir uma página web que consome uma API de previsão do tempo gratuita e exibe os dados de forma dinâmica, interativa e visualmente atraente.

A interface foi desenvolvida com foco em um design moderno, limpo e totalmente responsivo, garantindo uma experiência de usuário fluida tanto em desktops quanto em dispositivos móveis.

## ✨ Funcionalidades Principais

  * **Busca de Cidades:** Um campo de busca inteligente com funcionalidade de *autocomplete* permite ao usuário pesquisar facilmente por qualquer cidade ao redor do mundo.
  * **Clima em Tempo Real:** Ao selecionar uma cidade, um card principal é carregado dinamicamente com as informações essenciais:
      * Temperatura atual em Graus Celsius (°C).
      * Data e horário local da cidade consultada.
      * Nome da cidade, estado e país.
  * **Painel de Detalhes:** Seis cards adicionais fornecem informações completas sobre as condições atuais:
      * Velocidade do Vento (km/h)
      * Umidade do Ar (%)
      * Pressão Atmosférica (mb)
      * Visibilidade (km)
      * Índice UV
      * Precipitação (mm)
  * **Tooltips Interativos:** Ao clicar em cada um dos cards de detalhes, um *tooltip* é exibido com uma breve descrição do que aquele dado representa, melhorando a usabilidade.
  * * **Alternador de Tema (Dark/Light Mode):** Um botão no cabeçalho permite ao usuário alternar instantaneamente entre um tema claro e um escuro, adaptando a interface à sua preferência de visualização.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando um *stack* moderno focado em performance e na melhor experiência de desenvolvimento:

  * **Next.js 15:** Utilizado como o framework principal para renderização (SSR/SSG) e estrutura do projeto.
  * **React 19:** Biblioteca base para a construção da interface de usuário.
  * **TypeScript:** Para adicionar tipagem estática e garantir um código mais robusto e livre de bugs.
  * **Tailwind CSS 4:** Framework CSS *utility-first* para a estilização rápida e responsiva.
  * **Shadcn/ui:** Coleção de componentes de UI (como `Popover` e `Dialog`) construídos sobre Radix UI e Tailwind, garantindo acessibilidade e customização.
  * **Lucide React:** Biblioteca de ícones leve e de fácil implementação.
  * **Axios:** Cliente HTTP para realizar as requisições à API de previsão do tempo.
  * **ESLint & Prettier:** Ferramentas para *linting* e formatação de código, mantendo o padrão e a qualidade do projeto.

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### 1\. Pré-requisitos

  * **Node.js:** Versão 20 ou superior (conforme `package.json`).
  * **Gerenciador de Pacotes:** `npm`, `yarn` ou `pnpm`.
  * **Chave de API:** Você precisará de uma chave de API do serviço de previsão do tempo ([WeatherAPI](httpsa://www.weatherapi.com/)).

### 2\. Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/pedro-barros-reis/weather-app.git
    cd weather-app
    ```

2.  Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

### 3\. Configuração do Ambiente

1.  Este projeto requer variáveis de ambiente para se conectar à API. Crie um arquivo chamado `.env.local` na raiz do projeto.

2.  Adicione a seguinte variável a este arquivo, substituindo pelos valores da sua API:

    ```env
    # Exemplo para WeatherAPI
    NEXT_PUBLIC_WEATHER_API_KEY=c0e7beba7a3241c68f3174131252010
    ```

### 4\. Executando a Aplicação

Com as dependências instaladas e as variáveis de ambiente configuradas, rode o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação funcionando.


## 5\. 🌐 Deploy na Vercel

Uma versão *live* deste projeto está publicada na Vercel para demonstração.

Você pode acessá-la através do link disponível na descrição principal deste repositório no GitHub.
-----

Desenvolvido por **Pedro Barros Reis** 👋
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/93685196?v=4" width="100px;" alt="Pedro Barros Reis"/><br>
        <sub>
          <b>Pedro Barros Reis</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
