import { Links } from "@/core/http/http-resource";

const API_PREFIX = "/api";

export const cidadeLinks = (id?: number): Links => ({
  self: {
    href: `${API_PREFIX}/cidades/${id}`,
    method: "GET",
  },
  update: {
    href: `${API_PREFIX}/cidades/${id}`,
    method: "PUT",
  },
  delete: {
    href: `${API_PREFIX}/cidades/${id}`,
    method: "DELETE",
  },
  list: {
    href: `${API_PREFIX}/cidades`,
    method: "GET",
  },
});

export const cidadesCollectionLinks = (): Links => ({
  self: {
    href: `${API_PREFIX}/cidades`,
    method: "GET",
  },
  create: {
    href: `${API_PREFIX}/cidades`,
    method: "POST",
  },
});