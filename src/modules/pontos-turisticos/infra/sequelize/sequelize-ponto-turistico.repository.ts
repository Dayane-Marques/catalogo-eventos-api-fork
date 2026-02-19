import { Transaction } from "sequelize";
import { PontoTuristicoEntity } from "../../domain/entities/ponto-turistico.entity";
import { PontoTuristicoModel } from "../model/ponto-turistico-model";
import {
    CreatePontoTuristicoRepository,
    DeletePontoTuristicoRepository,
    EditPontoTuristicoRepository,
    FindPontoTuristicoByIdRepository,
    ListPontoTuristicoRepository,
    FindPontoTuristicoByCidadeIdRepository,
} from "../../domain/repositories";

export class SequelizePontoTuristicoRepository
  implements

    CreatePontoTuristicoRepository,
    ListPontoTuristicoRepository,
    FindPontoTuristicoByIdRepository,
    EditPontoTuristicoRepository,
    DeletePontoTuristicoRepository,
   FindPontoTuristicoByCidadeIdRepository 
{
  constructor() {}
  async findByName(nome: string): Promise<PontoTuristicoEntity | null> {
    const pontoTuristico = await PontoTuristicoModel.findOne({ where: { nome } });
    if (!pontoTuristico) return null;
    return new PontoTuristicoEntity({
        id: pontoTuristico.id,
        nome: pontoTuristico.nome,
        tipo: pontoTuristico.tipo,
        horario: pontoTuristico.horario,
        img: pontoTuristico.img,
        desc: pontoTuristico.desc,
    });
  }

  async create(pontoTuristico: PontoTuristicoEntity, t?: Transaction): Promise<PontoTuristicoEntity> {
    const created = await PontoTuristicoModel.create(
      {
        id: 0, // Substitua pelo ID gerado pelo banco de dados
        nome: pontoTuristico.nome,
        tipo: pontoTuristico.tipo,
        horario: pontoTuristico.horario,
        img: pontoTuristico.img,
        desc: pontoTuristico.desc,
      },
      { transaction: t },
    );
    await PontoTuristicoModel.sync();
    return new PontoTuristicoEntity({
        id: created.id,
        nome: created.nome,
        tipo: created.tipo,
        horario: created.horario,
        img: created.img,
        desc: created.desc,
    });
  }

  async list(): Promise<PontoTuristicoEntity[]> {
    const pontosTuristicos = await PontoTuristicoModel.findAll();
    return pontosTuristicos.map(
      (pontoTuristico) =>
        new PontoTuristicoEntity({
            id: pontoTuristico.id,
            nome: pontoTuristico.nome,
            tipo: pontoTuristico.tipo,
            horario: pontoTuristico.horario,
            img: pontoTuristico.img,
            desc: pontoTuristico.desc,
        }),
    );
  }

  async findById(id: number): Promise<PontoTuristicoEntity | null> {
    const pontoTuristico = await PontoTuristicoModel.findByPk(id);
    if (!pontoTuristico) return null;

    return new PontoTuristicoEntity({
        id: pontoTuristico.id,
        nome: pontoTuristico.nome,
        tipo: pontoTuristico.tipo,
        horario: pontoTuristico.horario,
        img: pontoTuristico.img,
        desc: pontoTuristico.desc,
    });
  }

  async edit(
    id: number,
    pontoTuristico: Partial<PontoTuristicoEntity>,
    t?: Transaction,
  ): Promise<PontoTuristicoEntity | null> {
    const [updated] = await PontoTuristicoModel.update(pontoTuristico, {
      where: { id },
      transaction: t,
    });
    await PontoTuristicoModel.sync();
    if (updated === 0) return null;
    const updatedPontoTuristico = await PontoTuristicoModel.findByPk(id);
    if (!updatedPontoTuristico) return null;
    return new PontoTuristicoEntity({
        id: updatedPontoTuristico.id,
        nome: updatedPontoTuristico.nome,
        tipo: updatedPontoTuristico.tipo,
        horario: updatedPontoTuristico.horario,
        img: updatedPontoTuristico.img,
        desc: updatedPontoTuristico.desc,
    });
  }

  async delete(id: number, t?: Transaction): Promise<boolean> {
    const deleted = await PontoTuristicoModel.destroy({
        where: { id },
        transaction: t,
    });
    return deleted > 0;
  }
}
