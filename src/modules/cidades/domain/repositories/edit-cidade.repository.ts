import { Transaction } from "sequelize";
import { CidadeEntity } from "../entities/cidade.entity";

export interface EditCidadeRepository {
    edit(id: number, cidade: Partial<CidadeEntity>, t?: Transaction): Promise<CidadeEntity | null>;
}