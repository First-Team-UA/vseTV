import * as express from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // Замените 'any' на более конкретный тип, если он известен
  }
}