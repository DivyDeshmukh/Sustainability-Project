const config = {
  appwrite_url: import.meta.env.VITE_APPWRITE_URL,
  appwrite_project_Id: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwrite_api_key: import.meta.env.VITE_APPWRITE_API_KEY,
  appwrite_database_Id: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwrite_collection_users_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_USERS_ID,
  appwrite_collection_tasks_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_TASKS_ID,
  appwrite_collection_events_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_EVENTS_ID,
  appwrite_collection_donation_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_DONATION_ID,
  appwrite_collection_bookmarks_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_BOOKMARKS_ID,
  appwrite_collection_posts_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_COMMENTS_ID,
  appwrite_collection_likes_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_LIKES_ID,
  appwrite_bucket_tweets_Id: import.meta.env.VITE_APPWRITE_BUCKET_POST_ID,
  appwrite_bucket_profile_Id: import.meta.env.VITE_APPWRITE_BUCKET_PROFILE_ID,
  appwrite_collection_comments_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_COMMENTS_ID,
  appwrite_bucket_default_profile_Id: import.meta.env
    .VITE_APPWRITE_BUCKET_DEFAULT_PROFILE_ID,
  appwrite_collection_joinEvents_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_JOINEVENTS_ID,
  appwrite_collection_tasksAssigned_Id: import.meta.env
    .VITE_APPWRITE_COLLECTION_TASKSASSIGNED_ID,
};

export default config;
