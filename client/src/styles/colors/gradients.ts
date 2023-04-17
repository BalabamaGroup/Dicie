import colors from './colors';

const gradients = {
  no_gradient_page_bg_light: {
    value: 'linear-gradient(120deg, #ECEEFE 10%, #ECEEFE 25%, #ECEEFE 80%);',
    angle: '120deg',
    colorsNum: 3,
    colors: ['#ECEEFE', '#ECEEFE', '#ECEEFE'],
    points: ['10%', '25%', '80%'],
  },

  no_gradient_page_bg_dark: {
    value: 'linear-gradient(120deg, #141414 10%, #141414 25%, #141414 80%);',
    angle: '120deg',
    colorsNum: 3,
    colors: ['#141414', '#141414', '#141414'],
    points: ['10%', '25%', '80%'],
  },

  home_page_dark: {
    value: `linear-gradient(90deg, ${colors.lime[80]} 0%,  ${colors.indigo[80]} 100%);`,
    angle: '90deg',
    colorsNum: 2,
    colors: [colors.lime[80], colors.indigo[80]],
    points: ['0%', '100%'],
  },

  home_page_light: {
    value: `linear-gradient(90deg, ${colors.lime[10]} 0%,  ${colors.indigo[10]} 100%);`,
    angle: '90deg',
    colorsNum: 2,
    colors: [colors.lime[10], colors.indigo[10]],
    points: ['0%', '100%'],
  },

  lime_green_dark: {
    value: 'linear-gradient(135deg, #F2F586 12.5%, #B0F586 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#F2F586', '#B0F586'],
    points: ['12.5%', '87.5%'],
  },

  lime_green_light: {
    value: 'linear-gradient(135deg, #DEFFCD 12.5%, #FFFCCF 87.5%);',
    angle: '135deg',
    colorsNum: 2,
    colors: ['#DEFFCD', '#FFFCCF'],
    points: ['12.5%', '87.5%'],
  },

  indigo_purple_dark: {
    value: 'linear-gradient(180deg, #8986F5 12.5%, #BE86F5 87.5%);',
    angle: '180deg',
    colorsNum: 2,
    colors: ['#8986F5', '#BE86F5'],
    points: ['12.5%', '87.5%'],
  },

  indigo_purple_light: {
    value: 'linear-gradient(180deg, #C5C3FA 12.5%, #DEC3FA 87.5%);',
    angle: '180deg',
    colorsNum: 2,
    colors: ['#C5C3FA', '#DEC3FA'],
    points: ['12.5%', '87.5%'],
  },
};

export default gradients;
