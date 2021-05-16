module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: ['show-language', 'copy-to-clipboard'],
      },
    ],
  ],
}
