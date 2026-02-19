 import { AppError } from "@/core/errors-app-error";

export const pontoTuristicoNotFound = (id: number) =>
    new AppError({
        code: "PONTO_TURISTICO_NOT_FOUD",
        message: `ponto turístico com id ${id} não foi encontrado`,
        statusCode: 404,
        details: {id},
    });
    