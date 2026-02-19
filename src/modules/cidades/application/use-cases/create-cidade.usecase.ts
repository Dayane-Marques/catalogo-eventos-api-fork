import { DomainLogger, NoopDomainLogger } from "@/core/logger/domain-logger";
import { CidadeEntity } from "../../domain/entities/cidade.entity";
import { CreateCidadeRepository } from "../../domain/repositories/create-cidade.repository";
import { CreateCidadeDTO } from "../dto";
import { AppError } from "@/core/errors-app-error";
import sequelize from "@/core/database";
import { FindCidadeByNameRepository } from "../../domain/repositories";

export class CreateCidadeUseCase {
  constructor(
    private createCidadeRepository: CreateCidadeRepository,
    private readonly findCidadeByNameRepository: FindCidadeByNameRepository,
    private readonly logger: DomainLogger = new NoopDomainLogger(),
  ) {}

  async execute(dto: CreateCidadeDTO): Promise<CidadeEntity> {
    this.logger.info("Iniciando CreateCidadeUseCase", {
      nome: dto.nome,
      uf: dto.uf,
    });

    const existing = await this.findCidadeByNameRepository.findByName(dto.nome);

    if (existing) {
      throw new AppError({
        code: "CITY_ALREADY_EXISTS",
        message: `A cidade ${dto.nome} já está cadastrada`,
        statusCode: 409,
        details: { nome: dto.nome },
      });
    }
    const transaction = await sequelize.transaction();

    try {
      const cidade = new CidadeEntity({
        id: 0,
        nome: dto.nome,
        uf: dto.uf,
        desc: dto.desc
      });

      const created = await this.createCidadeRepository.create(cidade, transaction);

      await transaction.commit();

      this.logger.info("Cidade criada com sucesso", {
        cidadeId: created.id,
        nome: created.nome,
        uf: created.uf,
      });
      return created;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
