const { getDefaultConfig } = require('metro-config');
const { fileURLToPath } = require('url');
const { dirname, resolve } = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();

  const config = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-babel-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    watchFolders: [
      resolve(__dirname, './components'),
      resolve(__dirname, './assets'),
      resolve(__dirname, './assets/icons'),
      resolve(__dirname, './assets/images'),
      resolve(__dirname, './data'),
      // Добавление .github/workflows не имеет смысла, так как там лежат файлы конфигурации CI/CD, а не код приложения
    ],
    excludeSource: [/node_modules\/.*/],
  };

  return config;
})();
