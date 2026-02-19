import { Transaction } from "sequelize";

export interface DeleteCidadeRepository {
    delete(id: number, t?: Transaction): Promise<boolean>;
}