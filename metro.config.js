import { getDefaultConfig } from 'metro-config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { resolve as resolveTransformer } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  const config = {
    transformer: {
      babelTransformerPath: resolveTransformer('react-native-babel-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    watchFolders: [
      resolve(__dirname, '/components'),
      resolve(__dirname, '/assets'),
      resolve(__dirname, '/assets/icons'),
      resolve(__dirname, '/assets/images'),
      resolve(__dirname, '/data'),
    ],
    excludeSource: [/node_modules\/.*/],
  };

  return config;
})();
