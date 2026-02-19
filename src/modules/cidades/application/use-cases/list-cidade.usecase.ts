import { CidadeEntity } from "../../domain/entities/cidade.entity";
import { ListCidadeRepository } from "../../domain/repositories/list-cidade.repository";

export class ListCidadeUseCase {
  constructor(private listCidadeRepository: ListCidadeRepository) {}

  async execute(): Promise<CidadeEntity[]> {
    return await this.listCidadeRepository.list();
  }
}