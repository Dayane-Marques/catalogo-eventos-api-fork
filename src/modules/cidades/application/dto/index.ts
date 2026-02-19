import z from "zod";
import {
  createCidadeSchema,
  deleteCidadeParamsSchema,
  getCidadeParamsSchema,
  listCidadesQuerySchema,
  updateCidadeSchema,
} from "../../presentation/http/validators/cidade-schemas";

export type CreateCidadeDTO = z.infer<typeof createCidadeSchema>;
export type UpdateCidadeDTO = z.infer<typeof updateCidadeSchema>;
export type GetCidadeParamsDTO = z.infer<typeof getCidadeParamsSchema>;
export type DeleteCidadeParamsDTO = z.infer<typeof deleteCidadeParamsSchema>;
export type ListCidadesQueryDTO = z.infer<typeof listCidadesQuerySchema>;

// Tipo básico de cidade “plain”
export interface CidadeViewModel {
  id: number;
  nome: string;
  uf: string;
  desc: string;
  pontos: PontoTuristicoViewModel[];
}

export interface PontoTuristicoViewModel {
    id: number;
    nome: string;
    tipo: string;
    horario: string;
    img: string;
    desc: string;
}
