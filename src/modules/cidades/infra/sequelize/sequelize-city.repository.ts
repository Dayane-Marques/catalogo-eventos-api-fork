import { Transaction } from "sequelize";
import { CidadeEntity } from "../../domain/entities/cidade.entity";
import { CidadeModel } from "../models/cidade-model";
import {
  CreateCidadeRepository,
  DeleteCidadeRepository,
  EditCidadeRepository,
  FindCidadeByIdRepository,
  ListCidadeRepository,
  FindCidadeByNameRepository,
} from "../../domain/repositories";

export class SequelizeCidadeRepository
  implements
    CreateCidadeRepository,
    ListCidadeRepository,
    FindCidadeByIdRepository,
    EditCidadeRepository,
    DeleteCidadeRepository,
    FindCidadeByNameRepository
{
  constructor() {}
  async findByName(nome: string): Promise<CidadeEntity | null> {
    const cidade = await CidadeModel.findOne({ where: { nome } });
    if (!cidade) return null;
    return new CidadeEntity({
      id: cidade.id,
      nome: cidade.nome,
      desc: cidade.desc,
      uf: cidade.uf,
    });
  }

  async create(cidade: CidadeEntity, t?: Transaction): Promise<CidadeEntity> {
    const created = await CidadeModel.create(
      {
        id: 0, // Substitua pelo ID gerado pelo banco de dados
        nome: cidade.nome,
        desc: cidade.desc,
        uf: cidade.uf,
      },
      { transaction: t },
    );
    await CidadeModel.sync();
    return new CidadeEntity({
      id: created.id,
      nome: created.nome,
      desc: created.desc,
      uf: created.uf,
    });
  }

  async list(): Promise<CidadeEntity[]> {
    const cidades = await CidadeModel.findAll();
    return cidades.map(
      (cidade) =>
        new CidadeEntity({
          id: cidade.id,
          nome: cidade.nome,
          desc: cidade.desc,
          uf: cidade.uf,
        }),
    );
  }

  async findById(id: number): Promise<CidadeEntity | null> {
    const cidade = await CidadeModel.findByPk(id);
    if (!cidade) return null;

    return new CidadeEntity({
      id: cidade.id,
      nome: cidade.nome,
      desc: cidade.desc,
      uf: cidade.uf,
    });
  }

  async edit(
    id: number,
    cidade: Partial<CidadeEntity>,
    t?: Transaction,
  ): Promise<CidadeEntity | null> {
    // Implementação do método de edição usando Sequelize
    const cidadeUpdated = await CidadeModel.update(cidade, {
      where: { id },
      transaction: t,
    });
    await CidadeModel.sync();
    if (cidadeUpdated[0] === 0) return null;
    return this.findById(id);
  }

  async delete(id: number, t?: Transaction): Promise<boolean> {
    const deleted = await CidadeModel.destroy({
      where: { id },
      transaction: t,
    });
    await CidadeModel.sync();
    return deleted > 0;
  }
}
