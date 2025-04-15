import { Request } from "express";

export type ExtendedRequest = Request & {
    UserEmail: string
}