import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Post, Comment } from '../types';

interface PostsState {
  posts: Post[];
  addPost: (userId: string, content: string, media?: string[]) => void;
  deletePost: (postId: string) => void;
  likePost: (postId: string, userId: string) => void;
  addComment: (postId: string, userId: string, content: string) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  addPost: (userId, content, media) => {
    const newPost: Post = {
      id: uuidv4(),
      userId,
      content,
      media,
      createdAt: new Date(),
      likes: [],
      comments: [],
    };
    set((state) => ({ posts: [newPost, ...state.posts] }));
  },
  deletePost: (postId) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    }));
  },
  likePost: (postId, userId) => {
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          const likes = post.likes.includes(userId)
            ? post.likes.filter((id) => id !== userId)
            : [...post.likes, userId];
          return { ...post, likes };
        }
        return post;
      }),
    }));
  },
  addComment: (postId, userId, content) => {
    const newComment: Comment = {
      id: uuidv4(),
      userId,
      content,
      createdAt: new Date(),
      likes: [],
      replies: [],
    };
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      }),
    }));
  },
}));