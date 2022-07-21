declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CONNECTION_STRING: string;
      }
    }
}

export {}