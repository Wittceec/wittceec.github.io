import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# Load CSV data
data = pd.read_csv('locations.csv')

# Function to query location or address information
def query_data(query_string):
    # Find matches for location or address (case insensitive)
    result = data[(data['Location'].str.contains(query_string, case=False)) |
                  (data['Address'].str.contains(query_string, case=False))]
    if not result.empty:
        return result.to_dict(orient='records')
    return None

# Set up Flask app
app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

@app.route('/query', methods=['GET'])
def query():
    # Get query string from request arguments
    query_string = request.args.get('query')
    if query_string:
        result = query_data(query_string)
        if result:
            return jsonify(result)
        return jsonify({"error": "No matching records found"}), 404
    else:
        return jsonify({"error": "Please provide a query string (location or address)"}), 400

if __name__ == "__main__":
    app.run(debug=True)