# data_preprocessing.py
import pandas as pd

def load_data():
    resources_df = pd.read_csv('sustainable_resources.csv')
    interactions_df = pd.read_csv('user_interactions.csv')

    # Combine weather and air quality conditions into a single feature
    resources_df['features'] = resources_df['weather_condition'] + ' ' + resources_df['air_quality_condition']
    
    return resources_df, interactions_df

def create_user_resource_matrix(interactions_df):
    # Aggregate duplicate entries by averaging ratings
    interactions_df = interactions_df.groupby(['user_id', 'resource_id']).rating.mean().reset_index()
    return interactions_df.pivot(index='user_id', columns='resource_id', values='rating').fillna(0)

if __name__ == "__main__":
    resources_df, interactions_df = load_data()
    user_resource_matrix = create_user_resource_matrix(interactions_df)
    print(resources_df.head())
    print(interactions_df.head())
    print(user_resource_matrix.head())
