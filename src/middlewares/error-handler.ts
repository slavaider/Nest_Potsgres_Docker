import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  process.stderr.write(`Error: ${err.message}\n`);
  if (Object.prototype.hasOwnProperty.call(req, 'url')) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  }
};
