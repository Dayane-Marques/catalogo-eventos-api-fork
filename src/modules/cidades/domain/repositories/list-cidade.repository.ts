import { CidadeEntity } from "../entities/cidade.entity";

export interface ListCidadeRepository {
    list(): Promise<CidadeEntity[]>;
}