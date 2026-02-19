import { DeleteCidadeRepository } from "../../domain/repositories/delete-cidade.repository";

export class DeleteCidadeUseCase {
  constructor(
    private deleteCidadeRepository: DeleteCidadeRepository
  ) {}

  async execute(id: number): Promise<boolean> {
    return await this.deleteCidadeRepository.delete(id);
  }
}