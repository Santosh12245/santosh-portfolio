export function LogoMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M192 256H64v-64h128v64Z M64 192H0V64h64v128Z M192 64H64V0h128v64Z M448 64h-128v64h128v64h-128V0h128v64Z M320 256h-64V0h64v256Z M512 64h-64v64h64V64Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M192 256H64v-64h128v64Z M64 192H0V64h64v128Z M192 64H64V0h128v64Z M448 64h-128v64h128v64h-128V0h128v64Z M320 256h-64V0h64v256Z M512 64h-64v64h64V64Z"/></svg>`;
}
