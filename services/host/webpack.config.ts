import path from "path";

import { EnvVariables, BuildPaths, buildWebpack } from '@packages/build-config'
import webpack from "webpack";
import PackageJson from './package.json'

interface EnvVariablesHost extends EnvVariables {
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariablesHost) => {
    console.log('env', env)

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? "http://localhost:5001"
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? "http://localhost:5002"

    const isDev = env.mode === "development";
    const isProd = env.mode === "production";


    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }


    const config = buildWebpack({
      port: env.port ?? 5000,
      mode: env.mode ?? "production",
      paths,
      analyzer: env.analyzer,
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',


      remotes: {
        shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
        admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
      },
      shared: {
        ...PackageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: PackageJson.dependencies['react']
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: PackageJson.dependencies['react-router-dom']
        },
        'react-dom': {
          eager: true,
          requiredVersion: PackageJson.dependencies['react-dom']
        }
      }
    }))

    return config
}
