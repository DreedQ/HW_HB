const isProduction = process.env.NODE_ENV === 'production';

const paths = {
  views: {
    // src: './src/views/pages/*.pug',
    src: './src/ajax_homework/index.html',
    dist: './dist/',
    // watch: ['./src/views/**/*.pug', './src/components/**/*.pug'],
    watch: './src/ajax_homework/index.html',
  },
  styles: {
    // src: './src/styles/main.{scss,sass}',
    src: './src/ajax_homework/style.css',
    dist: './dist/assets/styles/',
    watch: [
      './src/ajax_homework/style.css',
      // './src/components/**/*.{scss,sass}',
      // './src/styles/**/*.{scss,sass}',
    ],
  },
  scripts: {
    // src: './src/js/index.js',
    src: './src/ajax_homework/scripts.js',
    dist: './dist/assets/js/',
    watch: './src/ajax_homework/*.js',
    // watch: ['./src/js/index.js', './src/components/**/*.js'],
  },
  images: {
    src: ['./src/assets/images/**/*.{jpg,jpeg,png,gif,svg}'],
    dist: './dist/assets/images/',
    watch: './src/assets/images/**/*.{jpg,jpeg,png,gif,svg}',
  },
  fonts: {
    src: './src/assets/fonts/**/*.{ttf,woff,woff2}',
    dist: './dist/assets/fonts/',
    watch: './src/assets/fonts/**/*.{ttf,woff,woff2}',
  },
  sprites: {
    src: './src/sprite/*.svg',
    dist: './dist/assets/images/',
    watch: './src/sprite/*.svg',
  },
};

module.exports = {
  isProduction,
  paths,
};
