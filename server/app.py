from flask import Flask, request, abort
from flask.json import jsonify
from flask_cors import CORS

from helpers.fetch_sentiment import fetch_sentiment
from helpers.parse_input import parse_input

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return '<h1>Hello World</h1>'

@app.route('/api/v1/sentiment', methods=['POST'])
def handle_sentiment():
    try:
        input = request.json
        parsed_input = parse_input(input)
    except KeyError as e:
        abort(500, e)
    text_sentiment = fetch_sentiment(parsed_input)
    print(text_sentiment)
    return jsonify(text_sentiment)
