"use server";

import { prisma } from "@/lib/db";

export const cretePost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title) {
    return;
  }

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
};

export const getAppPost = async () => {
  const post = await prisma.post.findMany({
    orderBy: {
      updatedAt: "asc",
    },
  });
  return post;
};

export const getPostById = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return post;
};

export const updateById = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  if (!title) return;

  const updatedPost = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title,
      content,
    },
  });
  return updatedPost;
};

export const deleteById = async (id: string) => {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
};
