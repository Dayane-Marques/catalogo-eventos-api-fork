import { DomainLogger } from "@/core/logger";
import { PontoTuristicoEntity } from "../../domain/entities/ponto-turistico.entity";
import { CreatePontoTuristicoRepository } from "../../domain/repositories/create-ponto-turistico.repository";
import { CreatePontoTuristicoDTO } from "../dto";
import { AppError } from "@/core/errors-app-error";
import sequelize from "@/core/database";
import { FindPontoTuristicoByCidadeIdRepository} from "../../domain/repositories/find-ponto-turistico-by-cidade-id.repository";

export class CreatePontoTuristicoUseCase {
    constructor(
        private createPontoTuristicoRepository: CreatePontoTuristicoRepository,
        private findPontoTuristicoByCidadeIdRepository: FindPontoTuristicoByCidadeIdRepository,
        private logger: DomainLogger
    ) {}

    async execute(data: CreatePontoTuristicoDTO): Promise<PontoTuristicoEntity> {
        const transaction = await sequelize.transaction();

        try {
            const pontoExistente = await this.findPontoTuristicoByCidadeIdRepository.findById(data.cidadeId);

            if (pontoExistente) {
                throw new AppError({
                    code: "PONTO_TURISTICO_ALREADY_EXISTS",
                    message: `Já existe um ponto turístico cadastrado para a cidade com ID ${data.cidadeId}`,
                    statusCode: 409,
                    details: { cidadeId: data.cidadeId },
                });
            }

            const pontoTuristico = new PontoTuristicoEntity({
                id: 0,
                nome: data.nome,
                tipo: data.tipo,
                hora : data.hora,
                img: data.img,
                desc: data.desc,
                cidadeId: data.cidadeId,
            });

            const created = await this.createPontoTuristicoRepository.create(pontoTuristico, transaction);

            await transaction.commit();

            this.logger.info("Ponto turístico criado com sucesso", {
                pontoTuristicoId: created.id,
                nome: created.nome,
                cidadeId: created.cidadeId,
            });

            return created;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}   