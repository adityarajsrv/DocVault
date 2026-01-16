import api from "./axios";

export const fetchDocuments = (params = {}) =>
  api.get("/documents", { params });

export const uploadDocument = (data) =>
  api.post("/documents", data);

export const toggleStar = (id) =>
  api.patch(`/documents/${id}/star`);

export const deleteDocument = (id) =>
  api.delete(`/documents/${id}`);

export const restoreDocument = (id) =>
  api.patch(`/documents/${id}/restore`);

export const uploadVersion = (id, data) =>
  api.post(`/documents/${id}/version`, data);
