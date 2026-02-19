import { Transaction } from "sequelize";
import { CidadeEntity } from "../entities/cidade.entity";

export interface CreateCidadeRepository {
    create(cidade: CidadeEntity, t?: Transaction): Promise<CidadeEntity>;
}