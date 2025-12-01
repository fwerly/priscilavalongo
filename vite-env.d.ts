// Types for vite/client are missing in this environment
// Manually declaring process.env for API_KEY usage

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
