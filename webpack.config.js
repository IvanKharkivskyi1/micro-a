new ModuleFederationPlugin({
    name: 'microA',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
    },
  });
  