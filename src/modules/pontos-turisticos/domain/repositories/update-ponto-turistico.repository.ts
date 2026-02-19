import { Transaction } from "sequelize";
import { PontoTuristicoEntity } from "../entities/ponto-turistico.entity";

export interface EditPontoTuristicoRepository {
    edit (id: number, pontoTuristico : Partial<PontoTuristicoEntity>, t? : Transaction) : Promise<PontoTuristicoEntity | null>;
}