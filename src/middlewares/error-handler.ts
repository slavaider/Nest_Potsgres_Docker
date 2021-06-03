import { log } from './winston-logger';
import { NextFunction,Response,Request } from 'express';


export function customErrorHandler(err: Error, errorType:string | Promise<never>): void{
 if(errorType instanceof Promise){
   log.error(`[unhandledRejection] ${err}`);
 }else{
    log.error(`[${errorType}] ${err.message}`);
 }
}

export function errorHandler(err:Error,_req:Request, res:Response, _next:NextFunction):void {
  log.error(`[${err.name}] ${err.message}`);
  res.status(500).render('error',{err});
}
