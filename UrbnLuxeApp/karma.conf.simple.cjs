module.exports = function(config) {
  config.set({
    // 1. Frameworks
    frameworks: ['jasmine'],
    
    // 2. Archivos de prueba
    files: [
      'src/tests/unit/math.spec.js'
    ],
    
    // 3. Preprocesadores
    preprocessors: {
      'src/tests/unit/math.spec.js': ['webpack']
    },
    
    // 4. Webpack corregido
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { 
                    targets: { 
                      browsers: ['last 2 versions', 'ie >= 11'] 
                    } 
                  }],
                  ['@babel/preset-react', { 
                    runtime: 'automatic' 
                  }]
                ]
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
    
    // 8. PLUGINS EXPLÍCITOS - ESTO ES IMPORTANTE
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher'
    ]
  });
};