import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

import Edit from "./edit";
import save from "./save";

// Contenu de votre fichier custom-icon.svg
const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    height="500"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <metadata>
      <ContainsAiGeneratedContent>Yes</ContainsAiGeneratedContent>
    </metadata>
    <defs>
      <g />
      <clipPath id="02f7f53b99">
        <path
          d="M 17.25 -13.136719 L 360.488281 -13.136719 C 365.0625 -13.136719 369.453125 -11.320312 372.6875 -8.085938 C 375.921875 -4.851562 377.738281 -0.464844 377.738281 4.113281 L 377.738281 377.59375 C 377.738281 382.167969 375.921875 386.554688 372.6875 389.789062 C 369.453125 393.023438 365.0625 394.84375 360.488281 394.84375 L 17.25 394.84375 C 12.675781 394.84375 8.289062 393.023438 5.050781 389.789062 C 1.816406 386.554688 0 382.167969 0 377.59375 L 0 4.113281 C 0 -0.464844 1.816406 -4.851562 5.050781 -8.085938 C 8.289062 -11.320312 12.675781 -13.136719 17.25 -13.136719 Z M 17.25 -13.136719 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <rect
      x="-37.5"
      width="450"
      fill="#ffffff"
      y="-37.499999"
      height="449.999989"
      fill-opacity="1"
    />
    <rect
      x="-37.5"
      width="450"
      fill="#ffffff"
      y="-37.499999"
      height="449.999989"
      fill-opacity="1"
    />
    <g clip-path="url(#02f7f53b99)">
      <rect
        x="-37.5"
        width="450"
        fill="#000000"
        y="-37.499999"
        height="449.999989"
        fill-opacity="1"
      />
    </g>
    <g fill="#ffffff" fill-opacity="1">
      <g transform="translate(134.225112, 207.749986)">
        <g>
          <path d="M 17.453125 -9.890625 C 17.046875 -10.578125 16.703125 -11.285156 16.421875 -12.015625 C 16.140625 -12.753906 15.957031 -13.457031 15.875 -14.125 C 15.789062 -14.800781 15.835938 -15.429688 16.015625 -16.015625 C 16.203125 -16.609375 16.582031 -17.109375 17.15625 -17.515625 C 17.601562 -17.847656 18.109375 -17.972656 18.671875 -17.890625 C 19.242188 -17.804688 19.859375 -17.5625 20.515625 -17.15625 C 20.597656 -17.96875 20.65625 -18.757812 20.6875 -19.53125 C 20.726562 -20.3125 20.75 -20.984375 20.75 -21.546875 C 20.75 -22.648438 20.675781 -23.8125 20.53125 -25.03125 C 20.394531 -26.25 20.164062 -27.375 19.84375 -28.40625 C 19.519531 -29.445312 19.09375 -30.3125 18.5625 -31 C 18.03125 -31.695312 17.359375 -32.046875 16.546875 -32.046875 C 15.773438 -32.046875 15.113281 -31.738281 14.5625 -31.125 C 14.007812 -30.519531 13.550781 -29.71875 13.1875 -28.71875 C 12.820312 -27.726562 12.554688 -26.609375 12.390625 -25.359375 C 12.234375 -24.117188 12.15625 -22.867188 12.15625 -21.609375 C 12.15625 -20.179688 12.242188 -18.753906 12.421875 -17.328125 C 12.609375 -15.910156 12.882812 -14.628906 13.25 -13.484375 C 13.613281 -12.347656 14.070312 -11.429688 14.625 -10.734375 C 15.175781 -10.046875 15.835938 -9.703125 16.609375 -9.703125 C 16.929688 -9.703125 17.210938 -9.765625 17.453125 -9.890625 Z M 29.1875 -7.390625 C 29.59375 -6.816406 30.039062 -6.09375 30.53125 -5.21875 C 31.019531 -4.34375 31.394531 -3.445312 31.65625 -2.53125 C 31.914062 -1.613281 32.023438 -0.75 31.984375 0.0625 C 31.941406 0.875 31.597656 1.523438 30.953125 2.015625 C 30.460938 2.378906 29.929688 2.53125 29.359375 2.46875 C 28.796875 2.40625 28.21875 2.222656 27.625 1.921875 C 27.03125 1.617188 26.425781 1.210938 25.8125 0.703125 C 25.207031 0.191406 24.617188 -0.367188 24.046875 -0.984375 C 22.953125 -0.046875 21.722656 0.6875 20.359375 1.21875 C 18.992188 1.75 17.476562 2.015625 15.8125 2.015625 C 13.332031 2.015625 11.175781 1.394531 9.34375 0.15625 C 7.507812 -1.082031 5.988281 -2.75 4.78125 -4.84375 C 3.582031 -6.945312 2.6875 -9.378906 2.09375 -12.140625 C 1.507812 -14.910156 1.21875 -17.820312 1.21875 -20.875 C 1.21875 -23.726562 1.53125 -26.617188 2.15625 -29.546875 C 2.789062 -32.472656 3.757812 -35.117188 5.0625 -37.484375 C 6.363281 -39.847656 8.007812 -41.78125 10 -43.28125 C 12 -44.789062 14.382812 -45.546875 17.15625 -45.546875 C 19.84375 -45.546875 22.09375 -44.820312 23.90625 -43.375 C 25.71875 -41.925781 27.160156 -40.050781 28.234375 -37.75 C 29.316406 -35.457031 30.09375 -32.882812 30.5625 -30.03125 C 31.03125 -27.1875 31.265625 -24.335938 31.265625 -21.484375 C 31.265625 -18.960938 31.054688 -16.550781 30.640625 -14.25 C 30.234375 -11.957031 29.625 -9.832031 28.8125 -7.875 Z M 29.1875 -7.390625 " />
        </g>
      </g>
    </g>
    <g fill="#ffffff" fill-opacity="1">
      <g transform="translate(167.499665, 207.749986)">
        <g>
          <path d="M 28.8125 -31.078125 C 28.8125 -30.304688 28.71875 -29.488281 28.53125 -28.625 C 28.351562 -27.769531 28.0625 -26.976562 27.65625 -26.25 C 27.25 -25.519531 26.71875 -24.910156 26.0625 -24.421875 C 25.414062 -23.929688 24.625 -23.6875 23.6875 -23.6875 C 22.257812 -23.6875 21.195312 -23.941406 20.5 -24.453125 C 19.8125 -24.960938 19.328125 -25.601562 19.046875 -26.375 C 18.765625 -27.144531 18.613281 -27.96875 18.59375 -28.84375 C 18.570312 -29.71875 18.539062 -30.539062 18.5 -31.3125 C 18.457031 -32.09375 18.320312 -32.734375 18.09375 -33.234375 C 17.875 -33.742188 17.398438 -34 16.671875 -34 C 15.859375 -34 15.144531 -33.703125 14.53125 -33.109375 C 13.914062 -32.523438 13.382812 -31.765625 12.9375 -30.828125 C 12.488281 -29.890625 12.113281 -28.832031 11.8125 -27.65625 C 11.507812 -26.476562 11.265625 -25.304688 11.078125 -24.140625 C 10.898438 -22.984375 10.769531 -21.882812 10.6875 -20.84375 C 10.601562 -19.8125 10.5625 -18.96875 10.5625 -18.3125 C 10.5625 -17.457031 10.59375 -16.4375 10.65625 -15.25 C 10.71875 -14.070312 10.910156 -12.941406 11.234375 -11.859375 C 11.554688 -10.785156 12.039062 -9.875 12.6875 -9.125 C 13.34375 -8.375 14.28125 -8 15.5 -8 C 16.320312 -8 17.117188 -8.097656 17.890625 -8.296875 C 18.660156 -8.503906 19.429688 -8.738281 20.203125 -9 C 20.984375 -9.269531 21.769531 -9.503906 22.5625 -9.703125 C 23.351562 -9.910156 24.15625 -10.015625 24.96875 -10.015625 C 25.90625 -10.015625 26.675781 -9.632812 27.28125 -8.875 C 27.894531 -8.125 28.203125 -7.28125 28.203125 -6.34375 C 28.203125 -5.039062 27.796875 -3.828125 26.984375 -2.703125 C 26.171875 -1.585938 25.160156 -0.601562 23.953125 0.25 C 22.753906 1.101562 21.453125 1.769531 20.046875 2.25 C 18.648438 2.738281 17.378906 2.984375 16.234375 2.984375 C 13.304688 2.984375 10.820312 2.320312 8.78125 1 C 6.75 -0.320312 5.101562 -2.03125 3.84375 -4.125 C 2.582031 -6.21875 1.675781 -8.554688 1.125 -11.140625 C 0.582031 -13.722656 0.3125 -16.296875 0.3125 -18.859375 C 0.3125 -20.566406 0.472656 -22.4375 0.796875 -24.46875 C 1.117188 -26.507812 1.601562 -28.554688 2.25 -30.609375 C 2.90625 -32.671875 3.734375 -34.65625 4.734375 -36.5625 C 5.734375 -38.476562 6.898438 -40.164062 8.234375 -41.625 C 9.578125 -43.09375 11.09375 -44.273438 12.78125 -45.171875 C 14.476562 -46.066406 16.34375 -46.515625 18.375 -46.515625 C 20.375 -46.515625 22.039062 -46.015625 23.375 -45.015625 C 24.71875 -44.023438 25.796875 -42.765625 26.609375 -41.234375 C 27.429688 -39.710938 28.003906 -38.046875 28.328125 -36.234375 C 28.648438 -34.421875 28.8125 -32.703125 28.8125 -31.078125 Z M 28.8125 -31.078125 " />
        </g>
      </g>
    </g>
    <g fill="#ffffff" fill-opacity="1">
      <g transform="translate(196.927801, 207.749986)">
        <g>
          <path d="M 43.59375 -6.65625 C 43.46875 -5.59375 43.289062 -4.550781 43.0625 -3.53125 C 42.84375 -2.519531 42.570312 -1.617188 42.25 -0.828125 C 41.925781 -0.0351562 41.507812 0.59375 41 1.0625 C 40.488281 1.53125 39.90625 1.765625 39.25 1.765625 C 38.601562 1.765625 38.015625 1.265625 37.484375 0.265625 C 36.953125 -0.722656 36.453125 -2.039062 35.984375 -3.6875 C 35.515625 -5.34375 35.085938 -7.207031 34.703125 -9.28125 C 34.316406 -11.351562 33.972656 -13.457031 33.671875 -15.59375 C 33.367188 -17.726562 33.113281 -19.8125 32.90625 -21.84375 C 32.695312 -23.882812 32.535156 -25.660156 32.421875 -27.171875 C 32.171875 -25.617188 31.882812 -23.882812 31.5625 -21.96875 C 31.238281 -20.0625 30.851562 -18.117188 30.40625 -16.140625 C 29.957031 -14.171875 29.46875 -12.238281 28.9375 -10.34375 C 28.40625 -8.457031 27.832031 -6.769531 27.21875 -5.28125 C 26.613281 -3.789062 25.960938 -2.597656 25.265625 -1.703125 C 24.578125 -0.804688 23.847656 -0.359375 23.078125 -0.359375 C 22.390625 -0.359375 21.695312 -0.828125 21 -1.765625 C 20.3125 -2.703125 19.640625 -3.929688 18.984375 -5.453125 C 18.335938 -6.984375 17.726562 -8.6875 17.15625 -10.5625 C 16.582031 -12.4375 16.050781 -14.316406 15.5625 -16.203125 C 15.070312 -18.097656 14.644531 -19.890625 14.28125 -21.578125 C 13.914062 -23.265625 13.632812 -24.679688 13.4375 -25.828125 C 13.4375 -24.972656 13.425781 -24.023438 13.40625 -22.984375 C 13.382812 -21.941406 13.375 -21.195312 13.375 -20.75 C 13.375 -20.550781 13.363281 -19.878906 13.34375 -18.734375 C 13.320312 -17.597656 13.25 -16.234375 13.125 -14.640625 C 13 -13.054688 12.8125 -11.359375 12.5625 -9.546875 C 12.320312 -7.742188 11.96875 -6.066406 11.5 -4.515625 C 11.039062 -2.972656 10.460938 -1.671875 9.765625 -0.609375 C 9.078125 0.453125 8.222656 1.019531 7.203125 1.09375 C 6.390625 0.726562 5.707031 0.109375 5.15625 -0.765625 C 4.601562 -1.640625 4.144531 -2.664062 3.78125 -3.84375 C 3.414062 -5.019531 3.128906 -6.28125 2.921875 -7.625 C 2.722656 -8.96875 2.5625 -10.28125 2.4375 -11.5625 C 2.320312 -12.84375 2.253906 -14.03125 2.234375 -15.125 C 2.210938 -16.226562 2.203125 -17.128906 2.203125 -17.828125 C 2.203125 -19.046875 2.269531 -20.582031 2.40625 -22.4375 C 2.550781 -24.289062 2.785156 -26.234375 3.109375 -28.265625 C 3.441406 -30.296875 3.867188 -32.328125 4.390625 -34.359375 C 4.921875 -36.398438 5.5625 -38.222656 6.3125 -39.828125 C 7.070312 -41.441406 7.945312 -42.753906 8.9375 -43.765625 C 9.9375 -44.785156 11.085938 -45.296875 12.390625 -45.296875 C 13.003906 -45.296875 13.65625 -44.945312 14.34375 -44.25 C 15.039062 -43.5625 15.734375 -42.65625 16.421875 -41.53125 C 17.109375 -40.414062 17.773438 -39.164062 18.421875 -37.78125 C 19.078125 -36.40625 19.703125 -35.015625 20.296875 -33.609375 C 20.890625 -32.203125 21.410156 -30.859375 21.859375 -29.578125 C 22.304688 -28.296875 22.671875 -27.207031 22.953125 -26.3125 C 23.273438 -27.289062 23.679688 -28.429688 24.171875 -29.734375 C 24.660156 -31.035156 25.195312 -32.382812 25.78125 -33.78125 C 26.375 -35.1875 27.023438 -36.570312 27.734375 -37.9375 C 28.453125 -39.300781 29.195312 -40.519531 29.96875 -41.59375 C 30.75 -42.675781 31.535156 -43.550781 32.328125 -44.21875 C 33.117188 -44.894531 33.921875 -45.234375 34.734375 -45.234375 C 36.160156 -45.234375 37.378906 -44.703125 38.390625 -43.640625 C 39.410156 -42.585938 40.265625 -41.21875 40.953125 -39.53125 C 41.648438 -37.84375 42.203125 -35.945312 42.609375 -33.84375 C 43.015625 -31.75 43.328125 -29.675781 43.546875 -27.625 C 43.773438 -25.570312 43.921875 -23.648438 43.984375 -21.859375 C 44.046875 -20.066406 44.078125 -18.617188 44.078125 -17.515625 C 44.078125 -17.066406 44.078125 -16.457031 44.078125 -15.6875 C 44.078125 -14.914062 44.066406 -14.039062 44.046875 -13.0625 C 44.023438 -12.082031 43.972656 -11.039062 43.890625 -9.9375 C 43.804688 -8.84375 43.707031 -7.75 43.59375 -6.65625 Z M 43.59375 -6.65625 " />
        </g>
      </g>
    </g>
  </svg>
);

registerBlockType(metadata.name, {
  title: "QCM",
  description: "Ajouter un QCM à votre page.",
  icon: CustomIcon, // Utilisez votre icône personnalisée
  edit: Edit,
  save,
});
