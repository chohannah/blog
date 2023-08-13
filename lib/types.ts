import { Blog as TBlog } from 'contentlayer/generated'

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>

export type Post = TBlog

export type ReducedPost = Omit<Omit<Omit<Post, 'body'>, '_raw'>, '_id'>
