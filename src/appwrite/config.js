import config from "../config/config";
import { Client, Databases, Storage, ID, Query } from "appwrite";

class AppwriteService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_Id);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createTask({ content, username, points }) {
    try {
      const task = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        ID.unique(),
        {
          username,
          content,
          points,
          status,
        }
      );
      return task;
    } catch (error) {
      console.log("Appwrite Service :: posts :: Error: ", error);
    }
  }

  async updateTask({ content, username, points }) {
    try {
      const updatedProfile = await this.databases.updateDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        userId,
        {
          content,
          username,
          points,
          status,
        }
      );
      // console.log(updatedProfile);
      if (updatedProfile) return updatedProfile;
    } catch (error) {
      console.log("Appwrite Service :: updateUserProfile :: Error: ", error);
    }
  }

  async getTasks() {
    try {
      const tasks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_posts_Id,
        [Query.orderDesc("$createdAt")]
      );

      if (tasks) return tasks.documents;
    } catch (error) {
      console.log("Appwrite Service :: getTasks :: Error: ", error);
    }
  }

  async getTasksByUsername(username) {
    try {
      const tasks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        [Query.equal("username", username)]
      );
      // console.log("specific tweets");
      return tasks.documents;
    } catch (error) {
      console.log("Appwrite Service :: getTasksByUsername :: Error: ", error);
    }
  }

  async deleteTask(taskId) {
    try {
      await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        taskId
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteTask :: Error: ", error);
    }
  }

  async getTaskById(taskId) {
    try {
      const task = await this.databases.getDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        taskId
      );
      return task;
    } catch (error) {
      console.log("Appwrite Service :: getTaskById :: Error: ", error);
    }
  }

  async getUserDetails(username) {
    try {
      const userDetails = await this.databaseslistDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        [Query.equal("username", username)]
      );
      // console.log(userDetails);
      return userDetails.documents[0];
    } catch (error) {
      console.log("Appwrite Service :: getUserDetails ::Error: ", error);
    }
  }

  async getUserDetailsById(userId) {
    try {
      const userData = await this.databases.getDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        userId
      );
      if (userData) return userData;
    } catch (error) {
      console.log("Appwrite Service :: getUserDetailsById :: Error: ", error);
    }
  }

  async checkUsernameAvaialable(username) {
    try {
      const usernameDoc = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        [Query.equal("username", username)]
      );
      // console.log(usernameDoc, usernameDoc.documents);
      return usernameDoc.documents;
    } catch (error) {
      console.log(
        "Appwrite Service :: checkUsernameAvaialable :: Error: ",
        error
      );
    }
  }

  async getUserTasks(username) {
    try {
      const tasks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        [Query.equal("username", username), Query.orderDesc("$createdAt")]
      );
      return tasks.documents;
    } catch (error) {
      console.log("Appwrite Service :: getUserPosts :: Error: ", error);
    }
  }

  async userProfile({ userId, username, user_profile_id, fullName, email }) {
    console.log(userId);
    try {
      const profile = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        userId,
        {
          username,
          user_profile_id,
          fullName,
          email,
        }
      );
      return profile;
    } catch (error) {
      console.log("Appwrite Service :: userProfile :: Error: ", error);
    }
  }
  async getUserDetailsById(userId) {
    try {
      console.log("chala");
      const userData = await this.databases.getDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        userId
      );
      console.log(userData);
      if (userData) return userData;
    } catch (error) {
      console.log("Appwrite Service :: getUserDetailsById :: Error: ", error);
    }
  }

  async updateUserProfile({
    username,
    user_profile_id,
    fullName,
    email,
    bio,
    state,
    country,
    location,
  }) {
    // console.log("Followers: ", Followers, "Following: ", Following);
    try {
      const updatedProfile = await this.databases.updateDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        userId,
        {
          username,
          user_profile_id,
          fullName,
          email,
          bio,
          state,
          country,
          location,
        }
      );
      // console.log(updatedProfile);
      if (updatedProfile) return updatedProfile;
    } catch (error) {
      console.log("Appwrite Service :: updateUserProfile :: Error: ", error);
    }
  }

  async uploadPostFile(file) {
    // console.log(file);
    try {
      const fileUploaded = await this.storage.createFile(
        config.appwrite_bucket_tweets_Id,
        ID.unique(),
        file
      );

      return fileUploaded;
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: Error: ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(
        config.appwrite_bucket_tweets_Id,
        fileId
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: Error: ", error);
    }
  }

  async deletePost(postId) {
    // console.log(postId);
    try {
      await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_posts_Id,
        postId
      );
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: Error: ", error);
    }
  }

  async getFilePreview(fileId) {
    const file = await this.storage.getFilePreview(
      config.appwrite_bucket_tweets_Id,
      fileId
    );

    return file;
  }

  async getFileData(fileId) {
    try {
      const file = await this.storage.getFile(
        config.appwrite_bucket_tweets_Id,
        fileId
      );
      return file;
    } catch (error) {
      console.log("Appwrite Service :: getFileData :: Error: ", error);
    }
  }

  async uploadProfileImage(file) {
    try {
      const uploadedFile = await this.storage.createFile(
        config.appwrite_bucket_profile_Id,
        ID.unique(),
        file
      );
      return uploadedFile;
    } catch (error) {
      console.log("Appwrite Service :: uploadProfileImage :: Error: ", error);
    }
  }

  async getProfileFileData(fileId) {
    try {
      const file = await this.storage.getFile(
        config.appwrite_bucket_profile_Id,
        fileId
      );
      return file;
    } catch (error) {
      console.log("Appwrite Service :: getProfileFileData :: Error: ", error);
    }
  }

  async getProfileImage(fileId) {
    // console.log("Profile Image: ", fileId);
    const profile = this.storage.getFilePreview(
      config.appwrite_bucket_profile_Id,
      fileId
    );

    return profile;
  }

  async deleteProfileImage(fileId) {
    try {
      return await this.storage.deleteFile(
        config.appwrite_bucket_profile_Id,
        fileId
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteProfileImage :: Error: ", error);
    }
  }

  async likePost({ tweetId, commentId, username }) {
    try {
      const liked = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_likes_Id,
        ID.unique(),
        {
          tweetId,
          commentId,
          username,
        }
      );
      return liked;
    } catch (error) {
      console.log("Appwrite Service :: likePost :: Error: ", error);
    }
  }

  async removeLike(likeId) {
    try {
      const deleted = await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_likes_Id,
        likeId
      );
      return deleted;
    } catch (error) {
      console.log("Appwrite Service :: removeLike :: Error: ", error);
    }
  }

  async getTweetLikes(tweetId) {
    // console.log(tweetId);
    try {
      const likes = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_likes_Id,
        [Query.equal("tweetId", tweetId)]
      );

      return likes.documents;
    } catch (error) {
      console.log("Appwrite Service :: getTweetLikes :: Error: ", error);
    }
  }

  async getCommentLikes(commentId) {
    try {
      const likes = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_likes_Id,
        [Query.equal("commentId", commentId)]
      );

      return likes.documents;
    } catch (error) {
      console.log("Appwrite Service :: getCommentLikes :: Error: ", error);
    }
  }

  async getLikedPostsByUser(username) {
    try {
      const likedPosts = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_likes_Id,
        [Query.equal("username", username)]
      );

      if (likedPosts) {
        return likedPosts.documents;
      }
    } catch (error) {
      console.log("Appwrite Service :: getLikedPostsByUser :: Error: ", error);
    }
  }

  async postComment({ username, text, tweetId }) {
    try {
      const comment = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        ID.unique(),
        {
          username,
          text,
          tweetId,
        }
      );
      return comment;
    } catch (error) {
      console.log("Appwrite Service :: postComment :: Error: ", error);
    }
  }

  async getCommentDetails(commentId) {
    try {
      const comment = await this.databases.getDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        commentId
      );
      if (comment) {
        return comment;
      }
    } catch (error) {
      console.log("Appwrite Service :: getCommentDetails :: Error: ", error);
    }
  }

  async getCommentByUsername(username) {
    try {
      const comments = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        [Query.equal("username", username)]
      );

      return comments.documents;
    } catch (error) {
      console.log("Appwrite Service :: getCommentByUsername :: Error: ", error);
    }
  }

  async getComments(commentId) {
    try {
      const comments = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        [Query.equal("commentId", commentId)]
      );

      return comments.documents;
    } catch (error) {
      console.log("Appwrite Service :: getComments :: Error: ", error);
    }
  }

  async getPostComments(postId) {
    try {
      const postComments = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        [Query.equal("tweetId", postId)]
      );

      const onlyPostComments = postComments?.documents?.filter(
        (tweetComment) => tweetComment.commentId === ""
      );

      return onlyPostComments;
    } catch (error) {
      console.log("Appwrite Service :: getPostComments :: Error: ", error);
    }
  }

  async deleteComment(commentId) {
    try {
      const deleted = await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_comments_Id,
        commentId
      );

      if (deleted) {
        return deleted;
      }
    } catch (error) {
      console.log("Appwrite Service :: deleteComment :: Error: ", error);
    }
  }

  async bookmarkPost({ tweetId, commentId, username }) {
    try {
      const bookmark = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_bookmarks_Id,
        ID.unique(),
        {
          tweetId,
          commentId,
          username,
        }
      );
      if (bookmark) return bookmark;
    } catch (error) {
      console.log("Appwrite Service :: bookmarkPost :: Error: ", error);
    }
  }

  async deleteBookmark(bookmarkId) {
    try {
      const deleted = await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_bookmarks_Id,
        bookmarkId
      );

      return deleted;
    } catch (error) {
      console.log("Appwrite Service :: deleteBookmark :: Error: ", error);
    }
  }

  async getBookmarks(username) {
    try {
      const bookmarks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_bookmarks_id,
        [Query.equal("username", username), Query.orderDesc("$createdAt")]
      );

      return bookmarks.documents;
    } catch (error) {
      console.log("Appwrite Service :: getBookmarks :: Error: ", error);
    }
  }

  async getBookmarksByTweetId(tweetId) {
    try {
      const tweetBookmarks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_bookmarks_Id,
        [Query.equal("tweetId", tweetId)]
      );
      // console.log("method1: ", tweetBookmarks.documents);
      return tweetBookmarks.documents;
    } catch (error) {
      console.log(
        "Appwrite Service :: getBookmarksByTweetId :: Error: ",
        error
      );
    }
  }

  async getBookmarksByCommentId(commentId) {
    try {
      const commentBookmarks = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_bookmarks_Id,
        [Query.equal("commentId", commentId)]
      );
      // console.log("method2: ", commentBookmarks.documents);
      return commentBookmarks.documents;
    } catch (error) {
      console.log(
        "Appwrite Service :: getBookmarksByTweetId :: Error: ",
        error
      );
    }
  }

  async searchUser(username) {
    // console.log(username);
    try {
      const users = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_users_Id,
        [Query.search("username", username)]
      );
      // console.log("Users: ", users.documents);
      return users.documents;
    } catch (error) {
      console.log("Appwrite Service :: searchUser :: Error: ", error);
    }
  }

  async addDonation({ username, money }) {
    try {
      const donation = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasks_Id,
        ID.unique(),
        {
          username,
          money,
        }
      );
      console.log(donation);
    } catch (error) {
      console.log("Appwrite Service :: addDonation :: Error: ", error);
    }
  }

  async getDonations({ username }) {
    try {
      const donations = await this.databases.listDocuments(
        config.appwrite_database_Id,
        config.appwrite_collection_posts_Id,
        [Query.orderDesc("$createdAt")]
      );

      if (donations) return donations.documents;
      console.log(donations);
    } catch (error) {
      console.log("Appwrite Service :: getDonations :: Error: ", error);
    }
  }

  async addEvents({ username, description, title, imageId, content, address }) {
    try {
      const event = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_events_Id,
        ID.unique(),
        {
          username,
          address,
          content,
          description,
          title,
          imageId,
        }
      );

      return event;
    } catch (error) {
      console.log("Appwrite Service :: event :: Error: ", error);
    }
  }

  async deleteEvents({ username }) {
    try {
      await this.databases.deleteDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_posts_Id,
        username
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteEvents :: Error: ", error);
    }
  }

  async joinEvent(username) {
    try {
      const addEvent = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_events_Id,
        ID.unique(),
        {
          username,
        }
      );

      console.log(addEvent);
      return addEvent;
    } catch (error) {
      console.log("Appwrite Service :: joinEvent :: Error: ", error);
    }
  }

  async taskAssigned({ username, taskId, status = "pending" }) {
    try {
      const assign = await this.databases.createDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasksAssigned_Id,
        ID.unique(),
        {
          username,
          taskId,
          status,
        }
      );

      return assign;
    } catch (error) {
      console.log("Appwrite Service :: taskAssigned :: Error: ", error);
    }
  }

  async updateTaskAssignedStatus({ status }) {
    try {
      const updateTask = await this.databases.updateDocument(
        config.appwrite_database_Id,
        config.appwrite_collection_tasksAssigned_Id,
        {
          status,
        }
      );
      return updateTask;
    } catch (error) {
      console.log(
        "Appwrite Service :: updateTaskAssignedStatus :: Error: ",
        error
      );
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
