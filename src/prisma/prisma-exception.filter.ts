import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { translate } from '../utils/translate';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.code === 'P2025') {
      return response.status(404).json({
        message: exception.meta?.cause ?? exception.message,
      });
    }

    if (exception.code === 'P2003') {
      return response.status(422).json({
        message: translate(
          `${String(exception.meta.field_name)} não cadastrado`,
        ),
      });
    }

    if (exception.code === 'P2002') {
      return response.status(422).json({
        messsage: `${exception.meta.target[0].toUpperCase()} já foi cadastrado.`,
      });
    }

    Logger.error(exception);

    return response.status(500).json({
      message: 'Internal server error',
      statusCode: 500,
    });
  }
}
