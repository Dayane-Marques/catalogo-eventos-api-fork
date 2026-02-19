import { Transaction } from "sequelize";
import { PontoTuristicoEntity } from "../entities/ponto-turistico.entity";

export interface CreatePontoTuristicoRepository {
    create(pontoTuristico: PontoTuristicoEntity, t?: Transaction): Promise<PontoTuristicoEntity>;
}