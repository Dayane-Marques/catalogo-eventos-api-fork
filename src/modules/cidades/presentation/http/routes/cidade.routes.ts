import adaptRoute from "@/core/adapters/express-route-adapter";
import { Router } from "express-serve-static-core";
import {
  CreateCidadeController,
  DeleteCidadeController,
  ListCidadeController,
  UpdateCidadeController,
} from "../controller";
import { FindCidadeByIdController } from "../controller/find-cidade-by-id.controller";

export function registerCidadeRoutes(router: Router): void {
  router.post("/cidades", adaptRoute(new CreateCidadeController()));
  router.get("/cidades", adaptRoute(new ListCidadeController()));
  router.put("/cidades/:id", adaptRoute(new UpdateCidadeController()));
  router.delete("/cidades/:id", adaptRoute(new DeleteCidadeController()));
  router.get("/cidades/:id", adaptRoute(new FindCidadeByIdController()));
}
