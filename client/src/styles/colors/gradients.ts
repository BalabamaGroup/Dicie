import colors from './colors';

type Gradient = {
  value: string;
  angle: string;
  colorsNum: number;
  colors: string[];
  points: string[];
};

const gradients = {
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

  wait_light: {
    value: `linear-gradient(120deg, #CAE9FF 0%, #E2CBFF 100%);`,
    angle: '120deg',
    colorsNum: 2,
    colors: ['#CAE9FF', '#E2CBFF'],
    points: ['0%', '100%'],
  },

  wait_dark: {
    value: `linear-gradient(120deg, #86C6F5 0%, #B786F5 100%);`,
    angle: '120deg',
    colorsNum: 2,
    colors: ['#86C6F5', '#B786F5'],
    points: ['0%', '100%'],
  },

  go_light: {
    value: `linear-gradient(120deg, #E8FFCB 0%, #FFECBA 100%);`,
    angle: '120deg',
    colorsNum: 2,
    colors: ['#E8FFCB', '#FFECBA'],
    points: ['0%', '100%'],
  },

  go_dark: {
    value: `linear-gradient(120deg, #CBF586 0%, #F5D686 100%);`,
    angle: '120deg',
    colorsNum: 2,
    colors: ['#CBF586', '#F5D686'],
    points: ['0%', '100%'],
  },

  // lime_green_dark: {
  //   value: 'linear-gradient(135deg, #F2F586 12.5%, #B0F586 87.5%);',
  //   angle: '135deg',
  //   colorsNum: 2,
  //   colors: ['#F2F586', '#B0F586'],
  //   points: ['12.5%', '87.5%'],
  // },

  // lime_green_light: {
  //   value: 'linear-gradient(135deg, #DEFFCD 12.5%, #FFFCCF 87.5%);',
  //   angle: '135deg',
  //   colorsNum: 2,
  //   colors: ['#DEFFCD', '#FFFCCF'],
  //   points: ['12.5%', '87.5%'],
  // },

  // indigo_purple_dark: {
  //   value: 'linear-gradient(180deg, #8986F5 12.5%, #BE86F5 87.5%);',
  //   angle: '180deg',
  //   colorsNum: 2,
  //   colors: ['#8986F5', '#BE86F5'],
  //   points: ['12.5%', '87.5%'],
  // },

  // indigo_purple_light: {
  //   value: 'linear-gradient(180deg, #C5C3FA 12.5%, #DEC3FA 87.5%);',
  //   angle: '180deg',
  //   colorsNum: 2,
  //   colors: ['#C5C3FA', '#DEC3FA'],
  //   points: ['12.5%', '87.5%'],
  // },
};

export default gradients;
