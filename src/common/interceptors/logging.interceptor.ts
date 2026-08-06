import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';

import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor
  implements NestInterceptor
{
  private readonly logger = new Logger(
    LoggingInterceptor.name,
  );

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `Tempo: ${Date.now() - now}ms`,
        );
      }),
    );
  }
}