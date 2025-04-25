export const pinoLoggerOptions = { 
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          singleLine: true,
          colorize: true,
          translateTime: 'SYS:standard',
        },
      },
    }
  };