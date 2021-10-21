// src/middleware/not-found.middleware.ts

import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
    requeste: Request,

    response: Response,

    next: NextFunction

) => {

    const message ="Resource not found";

    response.status(404).send(message);

};