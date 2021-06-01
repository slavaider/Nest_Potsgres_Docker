import { NextFunction, Request, Response } from 'express';

export const logger = (req: Request, _res: Response, next: NextFunction): void => {
  console.log('URL', req.url);
  console.log('STATUS_CODE', req.statusCode);
  console.log('QUERY PARAMS', req.query);
  console.log('BODY', req.body);
  console.log('--------------');
  next();
};
