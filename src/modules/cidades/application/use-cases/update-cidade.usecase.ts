import { CidadeEntity } from "../../domain/entities/cidade.entity";
import { EditCidadeRepository } from "../../domain/repositories/edit-cidade.repository";

export class UpdateCidadeUseCase {
  constructor(private editCidadeRepository: EditCidadeRepository) {}

  async execute(id: number, cidadeData: Partial<CidadeEntity>): Promise<CidadeEntity | null> {
    return await this.editCidadeRepository.edit(id, cidadeData);
  }
}