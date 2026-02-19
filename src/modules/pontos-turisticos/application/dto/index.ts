import z from "zod";
import {
    createPontoTuristicoschema,
    deletePontoTuristicoParamsSchema,
    getPontoTuristicoParamsSchema,
    listPontosTuristicosQuerySchema,
    updatePontoTuristicoSchema,
} from "../../presentation/http/validators/ponto-turistico-schemas";

export type CreatePontoTuristicoDTO = z.infer<typeof createPontoTuristicoschema>;
export type UpdatePontoTuristicoDTO = z.infer<typeof updatePontoTuristicoSchema>;
export type getPontoTuristicoParamsDTO = z.infer<typeof getPontoTuristicoParamsSchema>;
export type deletePontoTuristicoParamsDTO = z.infer<typeof deletePontoTuristicoParamsSchema>;
export type listPontosTuristicosQueryDTO = z.infer<typeof listPontosTuristicosQuerySchema>;

export interface PontoTuristicoViewModel {
    id: number;
    nome: string;
    tipo: string;
    horario: string;
    img: string;
    desc: string;
}



