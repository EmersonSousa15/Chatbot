# Chatbot em Python

## Introdução
Como construir um chatbot simples utilizando o framework Flask para a criação da API e a API do Google Generative AI para gerar respostas. Este chatbot receberá mensagens do usuário, enviará para a API de IA e retornará uma resposta gerada.

---

## Requisitos
Antes de começar, certifique-se de ter o seguinte:
- Python 3.x instalado
- Um editor de código (como VS Code ou PyCharm)
- Uma conta com acesso à API do Google Generative AI (gemini-1.5-flash)
- Pacotes necessários instalados (Flask e Google Generative AI)

---

## Passo 1: Baixar os arquivos do frontend

Os arquivos de frontend necessários para a interface do chatbot já estão disponíveis no repositório do GitHub. Siga os passos abaixo para baixá-los e configurá-los no projeto.

### 1. Clonar o repositório do GitHub
Para obter os arquivos de frontend e backend, basta clonar o repositório no diretório do seu projeto. No terminal, execute o comando abaixo:

```bash
git clone https://github.com/EmersonSousa15/Chatbot.git
```

## Passo 2: Instalar as dependências
Precisamos instalar o Flask e a biblioteca da API do Google Generative AI.

### Instalar o Flask:
Abra o terminal e execute o seguinte comando:

```bash
pip install Flask
```

### Instalar o SDK da API Gemini:
Abra o terminal e execute o seguinte comando:

```bash
pip install -q -U google-generativeai
```

## Passo 3: Obter uma chave de API
Precisamos obter uma chave da API do Google Generative AI.

### Obter chave: [API KEY](https://aistudio.google.com/app/apikey)

## Passo 4: Programar API

