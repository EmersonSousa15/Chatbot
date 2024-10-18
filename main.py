from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configurando a API do Google Generative AI
chave_api = "AIzaSyAsxSdKB73aPq_EL5d03XV9bGpo4klACSM"
genai.configure(api_key=chave_api)
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/')
def home():
    return render_template('./index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    mensagem = data['message']
    lista_mensagens = data['message_history']

    lista_mensagens.append(mensagem)
    resposta = model.generate_content(lista_mensagens)
    
    return jsonify({'response': resposta.text})

if __name__ == '__main__':
    app.run(debug=True)
