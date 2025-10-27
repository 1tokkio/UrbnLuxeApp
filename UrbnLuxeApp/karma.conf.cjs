// karma.conf.cjs - CommonJS para Karma
module.exports = function(config) {
  config.set({
    // 1. Framework de testing
    frameworks: ['jasmine'],
    
    // 2. Archivos de prueba
    files: [
      'src/Tests/Unitarias/math.spec.js'
    ],
    
    // 3. Preprocesadores
    preprocessors: {
      'src/Tests/Unitarias/math.spec.js': ['webpack']
    },
    
    // 4. Configuración de Webpack
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    
    // 5. Reporters
    reporters: ['progress'],
    
    // 6. Navegadores
    browsers: ['Chrome'],
    
    // 7. Configuraciones
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    
    // 8. Plugins
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher'
    ]
  });
};