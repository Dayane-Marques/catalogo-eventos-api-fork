import sequelize from "@/core/database";
import { DataTypes, Model } from "sequelize";

export class CidadeModel extends Model {
  id!: number;
  nome!: string;
  uf!: string;
  desc!: string;
}

CidadeModel.init(
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
    uf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "cidades",
  }
);

export default CidadeModel;