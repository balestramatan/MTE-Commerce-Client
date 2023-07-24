import EnvUtils, {EnvKeys} from '../utils/envUtils';

const env = EnvUtils.getEnvVariable(EnvKeys.REACT_APP_ENV);

interface IConfigEnvironment {
    apiBaseHost: string;
}

export interface IClientConfig extends IConfigEnvironment {
}

const PROD_SERVER = 'https://mte-commerce-server.vercel.app';
const LOCAL_PORT = '4000';

const local: IConfigEnvironment = {
    apiBaseHost: `http://localhost:${LOCAL_PORT}/api`,
};

const prod: IConfigEnvironment = {
    apiBaseHost: `https://${PROD_SERVER}/api`,
};

const envConfigs = {
    local,
    prod,
};

if (env !== 'prod') console.debug('Client started with env', env);

const ClientConfig: IClientConfig = {
    // Get all environment configurations
    ...envConfigs[env as keyof typeof envConfigs],
};

export default ClientConfig;
