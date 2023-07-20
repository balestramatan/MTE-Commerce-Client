export enum EnvKeys {
    REACT_APP_ENV = 'REACT_APP_ENV',
    REACT_APP_VERSION = 'REACT_APP_VERSION',
    FavIcon = 'REACT_APP_FAVICON',
    ____CUSTOM_KEY____ = '____CUSTOM_KEY____',
}

export default class EnvUtils {
    public static getEnvVariable = (key: string): any => process.env[key];
}
