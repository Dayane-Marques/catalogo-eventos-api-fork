import { CidadeEntity } from "../entities/cidade.entity";

export interface FindCidadeByIdRepository {
    findById(id: number): Promise<CidadeEntity | null>;
}