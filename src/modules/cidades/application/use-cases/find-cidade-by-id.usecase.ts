import { CidadeEntity } from "../../domain/entities/cidade.entity";
import { FindCidadeByIdRepository } from "../../domain/repositories/find-cidade-by-id.repository";

export class FindCidadeByIdUseCase {
  constructor(
    private findCidadeByIdRepository: FindCidadeByIdRepository
  ) {}

  async execute(id: number): Promise<CidadeEntity | null> {
    return await this.findCidadeByIdRepository.findById(id);
  }
}