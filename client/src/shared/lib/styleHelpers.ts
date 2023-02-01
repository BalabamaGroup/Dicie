import { css } from 'styled-components';

export const createGradientTransition = ({
  id = '',
  gradient = {
    value: 'linear-gradient(0deg, transparent 0%, transparent 100%);',
    angle: '0deg',
    colorsNum: 2,
    colors: ['transparent', 'transparent'],
    points: ['0%', '100%'],
  },
}: {
  gradient?: any;
  id?: string;
}) => {
  // if (
  //   navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ||
  //   navigator.userAgent.toLowerCase().indexOf('safari/') > -1
  // ) {
  //   return css`
  //     background: ${gradient.value};
  //   `;
  // }

  switch (gradient.colorsNum) {
    case 2:
      return css`
        @property ${`--angle${id}`} {
          syntax: '<angle>';
          initial-value: ${gradient.angle || '0deg'};
          inherits: false;
        }

        @property ${`--color1${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[0]};
          inherits: false;
        }

        @property ${`--color2${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[1]};
          inherits: false;
        }

        @property ${`--color3${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[1]};
          inherits: false;
        }

        @property ${`--point1${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[0] || '0%'};
          inherits: false;
        }

        @property ${`--point2${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[1] || '100%'};
          inherits: false;
        }

        @property ${`--point3${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[2] || '100%'};
          inherits: false;
        }

        background: ${`linear-gradient(
            var(${`--angle${id}`}),
            var(${`--color1${id}`}) var(${`--point1${id}`}), 
            var(${`--color2${id}`}) var(${`--point2${id}`}),
            var(${`--color3${id}`}) var(${`--point3${id}`})
        );`};

        transition: all 0.3s cubic-bezier(0.5, 0.25, 0, 1),
          ${`--color1${id}`} 0.3s, ${`--color2${id}`} 0.3s,
          ${`--color3${id}`} 0.3s;
      `;

    case 3:
      return css`
        @property ${`--angle${id}`} {
          syntax: '<angle>';
          initial-value: ${gradient.angle || '0deg'};
          inherits: false;
        }

        @property ${`--color1${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[0]};
          inherits: false;
        }

        @property ${`--color2${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[1]};
          inherits: false;
        }

        @property ${`--color3${id}`} {
          syntax: '<color>';
          initial-value: ${gradient.colors[2]};
          inherits: false;
        }

        @property ${`--point1${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[0] || '0%'};
          inherits: false;
        }

        @property ${`--point2${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[1] || '50%'};
          inherits: false;
        }

        @property ${`--point3${id}`} {
          syntax: '<percentage>';
          initial-value: ${gradient.points[2] || '100%'};
          inherits: false;
        }

        background: ${`linear-gradient(
            var(${`--angle${id}`}),
            var(${`--color1${id}`}) var(${`--point1${id}`}), 
            var(${`--color2${id}`}) var(${`--point2${id}`}),
            var(${`--color3${id}`}) var(${`--point3${id}`})
        );`};

        transition: all 0.3s cubic-bezier(0.5, 0.25, 0, 1),
          ${`--color1${id}`} 0.3s, ${`--color2${id}`} 0.3s,
          ${`--color3${id}`} 0.3s;
      `;

    default:
      return css`
        background: ${gradient.value};
      `;
  }
};

export const transitionGradient = ({
  id = '',
  gradient,
  color,
}: {
  id?: string;
  gradient?: any;
  color?: string;
}) => {
  if (color) {
    return css`
      ${`--color1${id}: ${color};`}
      ${`--color2${id}: ${color};`}
      ${`--color3${id}: ${color};`}
      ${`--point1${id}: 0%;`};
      ${`--point2${id}: 50%;`};
      ${`--point3${id}: 100%;`};
    `;
  }

  if (!gradient) return css``;

  switch (gradient.colorsNum) {
    case 2:
      return css`
        ${`--angle${id}: ${gradient.angle};`}

        ${`--color1${id}: ${gradient.colors[0]};`}
        ${`--point1${id}: ${gradient.points[0]};`}

        ${`--color2${id}: ${gradient.colors[1]};`}
        ${`--point2${id}: ${gradient.points[1]};`}

        ${`--color3${id}: ${gradient.colors[1]};`}
        ${`--point3${id}: ${gradient.points[1]};`}
      `;

    case 3:
      return css`
        ${`--angle${id}: ${gradient.angle};`}

        ${`--color1${id}: ${gradient.colors[0]};`}
        ${`--point1${id}: ${gradient.points[0]};`}

        ${`--color2${id}: ${gradient.colors[1]};`}
        ${`--point2${id}: ${gradient.points[1]};`}

        ${`--color3${id}: ${gradient.colors[2]};`}
        ${`--point3${id}: ${gradient.points[2]};`}
      `;

    default:
      return css`
        background: ${gradient.value};
      `;
  }
};
