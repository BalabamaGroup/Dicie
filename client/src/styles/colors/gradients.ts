const gradients = {
  dark: {
    value: 'linear-gradient(120deg, #27272A 10%, #1F252A 25%, #110619 80%);',
    angle: '120deg',
    colorsNum: 3,
    colors: ['#27272A', '#1F252A', '#110619'],
    points: ['10%', '25%', '80%'],
  },

  dark_separated: {
    left: {
      value: 'linear-gradient(90deg, #27272A 10%, #21262A 50%, #1B1B25 100%);',
      angle: '90deg',
      colorsNum: 3,
      colors: ['#27272A', '#21262A', '#1B1B25'],
      points: ['10%', '50%', '100%'],
    },
    right: {
      value: 'linear-gradient(90deg, #1B1B25 0%, #110619 100%);',
      angle: '90deg',
      colorsNum: 2,
      colors: ['#1B1B25', '#110619'],
      points: ['0%', '100%'],
    },
  },

  light: {
    value: 'linear-gradient(120deg, #EEEEFF 10%, #E4F3FF 25%, #F7EBFF 80%);',
    angle: '120deg',
    colorsNum: 3,
    colors: ['#EEEEFF', '#E4F3FF', '#F7EBFF'],
    points: ['10%', '25%', '80%'],
  },

  yellow_green_light: {
    value: 'linear-gradient(135deg, #FEFFD7 12.5%, #DDFCCA 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#FEFFD7', '#DDFCCA'],
    points: ['12.5%', '87.5%'],
  },

  yellow_green_dark: {
    value: 'linear-gradient(135deg, #F2F586 12.5%, #B0F586 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#F2F586', '#B0F586'],
    points: ['12.5%', '87.5%'],
  },

  indigo_purple_light: {
    value: 'linear-gradient(135deg, #DAD9FF 12.5%, #E8D0FF 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#DAD9FF', '#E8D0FF'],
    points: ['12.5%', '87.5%'],
  },

  indigo_purple_dark: {
    value: 'linear-gradient(135deg, #8986F5 12.5%, #BD86F5 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#8986F5', '#BD86F5'],
    points: ['12.5%', '87.5%'],
  },
};

export default gradients;
