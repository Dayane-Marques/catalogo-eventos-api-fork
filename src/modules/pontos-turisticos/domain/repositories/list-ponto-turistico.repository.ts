import { PontoTuristicoEntity } from "../entities/ponto-turistico.entity";

export interface ListPontoTuristicoRepository {
    list (): Promise<PontoTuristicoEntity[]>;
}