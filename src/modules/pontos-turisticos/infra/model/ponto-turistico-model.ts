import sequelize from "@/core/database";
import CidadeModel from "@/modules/cidades/infra/models/cidade-model";
import { DataTypes, Model } from "sequelize";

export class PontoTuristicoModel extends Model {
    id! : number;
    nome! : string;
    tipo! : string;
    horario! : string;
    img! : string;
    desc! : string;
    cidadeId! : number;
    cidade!: CidadeModel;
}

PontoTuristicoModel.init(
    {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },  
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cidadeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cidade",
          key: "id",
        },
      },
  },
  {
    sequelize,
    modelName: "pontos_turisticos",
  },
 
)

PontoTuristicoModel.hasOne(CidadeModel, { foreignKey: "cidadeId", as: "cidade" });
export default PontoTuristicoModel;