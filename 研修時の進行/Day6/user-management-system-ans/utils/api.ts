// utils/api.ts

import { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("/api/users");

  if (!response.ok) {
    throw new Error(`ユーザーの取得に失敗しました (status: ${response.status})`);
  }

  return response.json();
};

export const fetchUserById = async (id: number): Promise<User | null> => {
  const response = await fetch(`/api/users/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`ユーザーの取得に失敗しました (status: ${response.status})`);
  }

  return response.json();
};

export const createUser = async (
  user: Omit<User, "id" | "deleted">
): Promise<User> => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`ユーザーの登録に失敗しました (status: ${response.status})`);
  }

  return response.json();
};

export const updateUser = async (
  id: number,
  user: Partial<User>
): Promise<User> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`ユーザーの更新に失敗しました (status: ${response.status})`);
  }

  return response.json();
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`ユーザーの削除に失敗しました (status: ${response.status})`);
  }
};

export const softDeleteUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`ユーザーの削除に失敗しました (status: ${response.status})`);
  }

  return response.json();
};
