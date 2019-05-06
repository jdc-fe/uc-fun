module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'umd',
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true },
        shippedProposals: true,
        targets: { ie: 9 }
      }
    ],
    'power-assert'
  ]
};
