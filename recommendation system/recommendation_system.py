# # recommendation_system.py
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# from data_preprocessing import load_data, create_user_resource_matrix

# # Load data
# resources_df, interactions_df = load_data()
# user_resource_matrix = create_user_resource_matrix(interactions_df)

# # Combine weather and air quality conditions into a single feature
# resources_df['features'] = resources_df['weather_condition'] + ' ' + resources_df['air_quality_condition']

# # Create TF-IDF vectors
# tfidf_vectorizer = TfidfVectorizer()
# tfidf_matrix = tfidf_vectorizer.fit_transform(resources_df['features'])

# def recommend_content_based(user_id, top_n=5):
#     user_interactions = interactions_df[interactions_df['user_id'] == user_id]
#     interacted_resources = resources_df[resources_df['resource_id'].isin(user_interactions['resource_id'])]

#     user_features = ' '.join(interacted_resources['features'])
#     user_vector = tfidf_vectorizer.transform([user_features])
#     cosine_sim = cosine_similarity(user_vector, tfidf_matrix).flatten()

#     recommendations = resources_df.copy()
#     recommendations['score'] = cosine_sim
#     recommendations = recommendations.sort_values(by='score', ascending=False)
#     return recommendations.head(top_n)

# def recommend_collaborative(user_id, top_n=5):
#     user_index = user_resource_matrix.index.get_loc(user_id)
#     user_vector = user_resource_matrix.iloc[user_index].values.reshape(1, -1)
#     cosine_sim = cosine_similarity(user_vector, user_resource_matrix).flatten()

#     recommendations = pd.Series(cosine_sim, index=user_resource_matrix.index)
#     recommendations = recommendations.sort_values(ascending=False)
#     recommendations = recommendations.drop(user_id)  # Remove the current user from recommendations
#     return recommendations.head(top_n)

# def recommend_hybrid(user_id, top_n=5):
#     content_based_recommendations = recommend_content_based(user_id, top_n * 2)
#     collaborative_recommendations = recommend_collaborative(user_id, top_n * 2)

#     hybrid_scores = {}

#     for idx, row in content_based_recommendations.iterrows():
#         resource_id = row['resource_id']
#         hybrid_scores[resource_id] = hybrid_scores.get(resource_id, 0) + row['score']

#     for user_id, score in collaborative_recommendations.items():
#         hybrid_scores[user_id] = hybrid_scores.get(user_id, 0) + score

#     hybrid_scores = sorted(hybrid_scores.items(), key=lambda x: x[1], reverse=True)[:top_n]
    
#     recommendations = []
#     for resource_id, score in hybrid_scores:
#         resource_details = resources_df[resources_df['resource_id'] == resource_id].iloc[0].to_dict()
#         resource_details['hybrid_score'] = score
#         recommendations.append(resource_details)

#     return recommendations

import requests
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from data_preprocessing import load_data, create_user_resource_matrix

# Load data
resources_df, interactions_df = load_data()
user_resource_matrix = create_user_resource_matrix(interactions_df)

# Combine weather and air quality conditions into a single feature
resources_df['features'] = resources_df['weather_condition'] + ' ' + resources_df['air_quality_condition']

# Create TF-IDF vectors
tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix = tfidf_vectorizer.fit_transform(resources_df['features'])

# Weather and Air Quality API functions
def get_weather_data(api_key, location):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}"
    response = requests.get(url)
    return response.json()

def get_air_quality_data(api_key, lat, lon):
    url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={api_key}"
    response = requests.get(url)
    return response.json()

def process_weather_data(data):
    temperature_kelvin = data['main']['temp']
    temperature_celsius = temperature_kelvin - 273.15
    weather_condition = data['weather'][0]['main']
    return temperature_celsius, weather_condition

def process_air_quality_data(data):
    air_quality_index = data['list'][0]['main']['aqi']
    return air_quality_index

# Fetch and process weather and air quality data
weather_api_key = '8458c177c7f5488b6e8915e5ccbaaf7f'
air_quality_api_key = '8458c177c7f5488b6e8915e5ccbaaf7f'
location = 'jaipur'
latitude = '26.9124'
longitude = '75.7873'

weather_data = get_weather_data(weather_api_key, location)
air_quality_data = get_air_quality_data(air_quality_api_key, latitude, longitude)

temperature_celsius, weather_condition = process_weather_data(weather_data)
air_quality_index = process_air_quality_data(air_quality_data)

def recommend_content_based(user_id, top_n=5):
    user_interactions = interactions_df[interactions_df['user_id'] == user_id]
    interacted_resources = resources_df[resources_df['resource_id'].isin(user_interactions['resource_id'])]

    user_features = ' '.join(interacted_resources['features'])
    user_vector = tfidf_vectorizer.transform([user_features])
    cosine_sim = cosine_similarity(user_vector, tfidf_matrix).flatten()

    recommendations = resources_df.copy()
    recommendations['score'] = cosine_sim
    recommendations = recommendations.sort_values(by='score', ascending=False)
    return recommendations.head(top_n)

def recommend_collaborative(user_id, top_n=5):
    user_index = user_resource_matrix.index.get_loc(user_id)
    user_vector = user_resource_matrix.iloc[user_index].values.reshape(1, -1)
    cosine_sim = cosine_similarity(user_vector, user_resource_matrix).flatten()

    recommendations = pd.Series(cosine_sim, index=user_resource_matrix.index)
    recommendations = recommendations.sort_values(ascending=False)
    recommendations = recommendations.drop(user_id)  # Remove the current user from recommendations
    return recommendations.head(top_n)

def recommend_hybrid(user_id, top_n=5):
    content_based_recommendations = recommend_content_based(user_id, top_n * 2)
    collaborative_recommendations = recommend_collaborative(user_id, top_n * 2)

    hybrid_scores = {}

    for idx, row in content_based_recommendations.iterrows():
        resource_id = row['resource_id']
        hybrid_scores[resource_id] = hybrid_scores.get(resource_id, 0) + row['score']

    for user_id, score in collaborative_recommendations.items():
        hybrid_scores[user_id] = hybrid_scores.get(user_id, 0) + score

    hybrid_scores = sorted(hybrid_scores.items(), key=lambda x: x[1], reverse=True)[:top_n]
    
    recommendations = []
    for resource_id, score in hybrid_scores:
        resource_details = resources_df[resources_df['resource_id'] == resource_id].iloc[0].to_dict()
        resource_details['hybrid_score'] = score
        recommendations.append(resource_details)

    return recommendations

def filter_resources_by_conditions(resources, weather_condition='', air_quality_condition=''):
    filtered_resources = resources

    if weather_condition:
        filtered_resources = [
            res for res in filtered_resources
            if weather_condition.lower() in res.get('weather_condition', '').lower()
        ]

    if air_quality_condition:
        try:
            #air_quality = float(air_quality)
            #print(f"Filtering with air quality: {air_quality}")  # Debugging
            filtered_resources = [
                res for res in filtered_resources
                if air_quality_condition.lower() in res.get('air_quality_condition', '').lower()
            ]
        except ValueError:
            print("Invalid air quality value")  # Debugging
            pass

    return filtered_resources




