import { Transaction } from "sequelize";
import { PontoTuristicoEntity } from "../entities/ponto-turistico.entity";

export interface FindPontoTuristicoByCidadeIdRepository {
    findById(idCidade: number) : Promise<PontoTuristicoEntity | null>;
}












