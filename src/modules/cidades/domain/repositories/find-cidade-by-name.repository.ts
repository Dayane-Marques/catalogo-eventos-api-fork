import { CidadeEntity } from "../entities/cidade.entity";

export interface FindCidadeByNameRepository {
  findByName(nome: string): Promise<CidadeEntity | null>;
}