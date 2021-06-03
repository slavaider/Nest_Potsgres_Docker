import { NextFunction, Request, Response } from 'express';
import { log } from './winston-logger';



export const logger = (req: Request, res: Response, next: NextFunction): void => {
  log.info(JSON.stringify({
    URL: req.url,
    STATUS: res.statusCode,
    QUERY: req.query,
    PARAMS: req.params,
    BODY: req.body
  }));
  next();
};
