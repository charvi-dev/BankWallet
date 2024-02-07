import { Dialect } from "sequelize"

interface IENV extends Record<string, unknown> {
    DB_USERNAME: string
    DB_PASSWORD: string
    DB_DATABASE: string
    DB_HOST: string
    DB_DIALECT: Dialect
    LOGGING: boolean
}

export const { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME, LOGGING } = process.env as unknown as IENV