from flask import Flask, request, jsonify, render_template
from recommendation_system import recommend_hybrid, get_weather_data, get_air_quality_data, process_weather_data, process_air_quality_data, filter_resources_by_conditions
import requests
import pandas as pd
app = Flask(__name__)

weather_api_key = '8458c177c7f5488b6e8915e5ccbaaf7f'
air_quality_api_key = '8458c177c7f5488b6e8915e5ccbaaf7f'

# Load resources from CSV
resources_df = pd.read_csv('sustainable_resources.csv')
resources = resources_df.to_dict(orient='records')

def filter_resources_by_conditions(resources, weather_condition='', air_quality_condition=''):
    filtered_resources = resources

    # Debugging print statements
    print(f"Weather condition filter: {weather_condition}")
    print(f"Air quality condition filter: {air_quality_condition}")

    if weather_condition:
        filtered_resources = [
            res for res in filtered_resources
            if weather_condition.lower() in res.get('weather_condition', '').lower()
        ]
    
    if air_quality_condition:
        filtered_resources = [
            res for res in filtered_resources
            if air_quality_condition.lower() in res.get('air_quality_condition', '').lower()
        ]
    
    # Debugging print statement
    print(f"Number of resources after filtering: {len(filtered_resources)}")

    return filtered_resources

@app.route('/', methods=['GET'])
def home():
    return render_template('recommendations.html')

@app.route('/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('user_id')
    if user_id is None:
        return "User ID is required", 400
    
    try:
        user_id = int(user_id)
    except ValueError:
        return "Invalid User ID", 400

    recommendations = recommend_hybrid(user_id)
    return render_template('recommendations.html', resources=recommendations)

@app.route('/filter', methods=['GET'])
def filter_recommendations():
    weather_condition = request.args.get('weather_condition', '')
    air_quality_condition = request.args.get('air_quality', '')

    # Debugging print statement
    print(f"Filter Params - Weather: {weather_condition}, Air Quality: {air_quality_condition}")

    filtered_resources = filter_resources_by_conditions(
        resources,
        weather_condition,
        air_quality_condition
    )

    return render_template(
        'recommendations.html',
        resources=filtered_resources,
        weather_condition=weather_condition,
        air_quality_condition=air_quality_condition
    )

@app.route('/weather', methods=['GET'])
def weather():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    
    weather_data = get_weather_data(weather_api_key, f"{lat},{lon}")
    air_quality_data = get_air_quality_data(air_quality_api_key, lat, lon)

    temperature_celsius, weather_condition = process_weather_data(weather_data)
    air_quality_condition = process_air_quality_data(air_quality_data)

    response_data = {
        'temperature_celsius': temperature_celsius,
        'weather_condition': weather_condition,
        'air_quality_condition': air_quality_condition,
        'location': weather_data['name']
    }
    
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
