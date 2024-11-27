//icon/svg  components


interface IconProps {
  fill?: string;
  size?: number;
  height?: number | string;
  width?: number | string;
  [propName: string]: any;   //this is a index signature: typescript concept  dynamic shape of the component
}



export const FooterCloud = ({ fill, size, height, width, ...rest }: IconProps) => {

  return (

    <svg viewBox="0 0 1557 213" width={width ? width : "100%"} height={height ? height : "100%"} fill={fill ? fill : "none"} xmlns="http://www.w3.org/2000/svg" stroke={"#ffffff"} preserveAspectRatio="meet" strokeOpacity={"40%"} className="wfzqr02" style={{ transform: "rotateX(180deg)" }}><path d="M1331 165.5C1320.5 162.5 1311 112 1221.5 92.4999C1132 72.9999 1104.5 114 1093.5 112C1082.5 110 1052 6.04351 903.5 1.00011C771 -3.49989 732.5 90 722.5 92.4999C712.5 94.9998 647.5 54.0001 535.5 73.9999C423.5 93.9997 421.5 165.5 411.5 165.5C401.5 165.5 359 58.5001 203.5 49.4999C48 40.4998 0.5 136 0.5 209.5C0.5 283 62.5 309.5 62.5 309.5H100.5L1556.5 304.5V232.5C1556.5 215.5 1542.5 159.009 1464 145.5C1368.81 129.118 1341.5 168.5 1331 165.5Z"></path></svg>

  )
}




// export const purpleUnderline = () => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 7" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-9 emUNaq"><path strokeLinecap="round" strokeWidth="2" d="M1 3.409S50.376-.539 85 1.673c13.942.891 16.501 3.618 30.5 3.472 12.647-.133 19.355-3.662 32-3.472 11.105.168 14.5 6.596 28 3.472C189 2.02 191 3.409 191 3.409"></path></svg>
//   )
// }

// export const purpleUnderlineWithTangle = () => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259 52" fill="none" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-11 bMlIsG"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 43s55.023-5.907 92.5-3c22.307 1.73 34.426 13.151 56.5 9.5 13-2.15 23.086-8.766 25-21.5 2.401-15.98-6.5-23.5-25-26s-32.5 8.72-32.5 23.5c0 9.5 1.5 22.969 29 19 25.058-3.616 34.199-8.29 56.5-4.5 33.5 5.694 54.5 0 54.5 0"></path></svg>
//   )
// }

// export const yellowNagmodi= ()=>{
//   return(
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 114 7" preserveAspectRatio="none" style="--stroke-color:hsl(50deg 100% 50%)" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-10 kEZTrz"><path strokeLinecap="round" strokeWidth="2" d="M1 2l4.935 1.763c1.261.45 2.669.133 3.615-.813v0a3.464 3.464 0 014.9 0l.8.8a4.596 4.596 0 006.5 0v0a4.596 4.596 0 016.5 0l.75.75a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0l.285-.285a3.938 3.938 0 014.872-.555l1.988 1.243A6.885 6.885 0 0098 5.157l2.454-1.291a11.712 11.712 0 017.49-1.17l4.555.804"></path></svg>
//   )
// }

// export  const redUnderline=()=>{
//   return(
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 6" fill="none" preserveAspectRatio="none" style="--stroke-color:hsl(345deg 100% 60%)" class="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-15 jNYgmM"><path strokeLinecap="round" strokeWidth="2" d="M1 4.034c8 .5 15.05-2.66 25-3 8.836-.302 22.5 1.5 22.5 1.5"></path></svg>
//   )
// }

export const YellowStar1 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16" fill="none" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-12 ldYAtM"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#FFFF8A" d="M8.807 9.217c.909-1.526 3.179-2.201 3.179-2.201s-2.437.353-4.072-.528c-2.019-1.09-3.458-4.796-3.458-4.796s1.135 3.806.15 5.878c-.799 1.677-3.08 2.866-3.08 2.866s2.55-.9 4.185-.207c1.997.848 3.001 4.48 3.001 4.48s-1.015-3.628.095-5.492z"></path></svg>
  )
}

export const YellowStar2 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16" fill="none" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-13 wItmK"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.807 9.217c.909-1.526 3.179-2.201 3.179-2.201s-2.437.353-4.072-.528c-2.019-1.09-3.458-4.796-3.458-4.796s1.135 3.806.15 5.878c-.799 1.677-3.08 2.866-3.08 2.866s2.55-.9 4.185-.207c1.997.848 3.001 4.48 3.001 4.48s-1.015-3.628.095-5.492z"></path></svg>
  )
}


export const YellowStar3 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16" fill="none" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-14 hMgXHt"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#FAD02C" d="M8.807 9.217c.909-1.526 3.179-2.201 3.179-2.201s-2.437.353-4.072-.528c-2.019-1.09-3.458-4.796-3.458-4.796s1.135 3.806.15 5.878c-.799 1.677-3.08 2.866-3.08 2.866s2.55-.9 4.185-.207c1.997.848 3.001 4.48 3.001 4.48s-1.015-3.628.095-5.492z"></path></svg>
  )
}

// export const waves = () => {
//   return (
//     <svg viewBox="0 0 1000 195" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="sc-c611d025-2 jIzOke"><g clip-path="url(#clip-path-:R38j6:)"><path d="M988.5 34C943 52.5 917.269 16.6372 867 9.99992C739.481 -6.837 791.5 68.9999 534 68.9999C308.5 68.9999 290.854 15.9393 197 21.4998C103.146 27.0604 87.5 81.9999 10 61.4999" stroke="#8F7DE8" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" transform="translate(0 69.28662366927809)" className="sc-c611d025-3 gjqpxr"></path><path d="M413.722 46.7526C306.531 36.2559 248.691 97.3741 141.222 90.2526C81.726 86.31 -8.77783 53.7526 -8.77783 53.7526V305.753H1071.22C1071.22 305.753 1169.22 69.7527 1071.22 101.753C973.222 133.752 1036.05 13.135 990.222 8.25257C944.728 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.453 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526Z" fill="#0d0f12" stroke="#0d0f12" strokeWidth="10" strokeLinecap="round" transform="translate(0 35.97452200142441)" className="sc-c611d025-3 gjqpxr"></path><path d="M990 8.25257C944.506 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.452 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526C306.531 36.2559 248.691 96.3741 141.222 89.2526C81.726 85.31 10 60.7526 10 60.7526" stroke="#77F6AA" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" transform="translate(0 35.97452200142441)" className="sc-c611d025-3 gjqpxr"></path><path d="M447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 30.4999 176.753 2.99994 121.753C-24.5001 66.7526 -31.7778 318.253 -31.7778 318.253H1085.72C1085.72 318.253 1117.5 112.5 1026.5 99C935.5 85.5 970.5 70.0607 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.896 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753Z" fill="#0d0f12" stroke="#0d0f12" strokeWidth="10" strokeLinecap="round"></path><path d="M990 93.5C958.778 87.2474 955.5 69.2026 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.897 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 43 153.253 10 134.5" stroke="#FFE666" strokeWidth="3" strokeLinecap="round"></path></g><defs><clipPath id="clip-path-:R38j6:"><rect width="1000" height="195" fill="white"></rect></clipPath></defs></svg>
//   )
// }


// export const redWavyUnderline = () => {
//   return (
//     <svg viewBox="0 0 550 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="sc-2c52ec5e-5 sc-2c52ec5e-7 dLJZDL jHPbnA"><path d="M2.00024 1.5C14.5002 19.5 34.5 21 60.5 10C102.864 -7.92334 154.649 17.7997 200 17.5C267.5 17.0539 294.186 7.58925 337 5C379.814 2.41075 402.484 20.6688 445 15C482.5 10 495 10 510.5 13.5C526 17 545.5 15 548.5 2" stroke="#FF006A" strokeWidth="3" strokeLinecap="round"></path></svg>
//   )
// }

// stroke="#ffb3d9"
export const LinedBorder = () => {
  return (
    <svg viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-72f52bf5-0 sc-72f52bf5-3 eQlxGv ibgipe" width={"full"} height={"full"}><path d="M37.4 1C14.0667 1 1 12.6074 1 32.6712C1 52.7351 10.3333 69 33.6667 69C57 69 71 57.8583 71 37.7945C71 17.7307 60.7333 1 37.4 1Z" stroke=' #ffff80
' strokeWidth="1" strokeOpacity={0.7} strokeLinecap="round" strokeDasharray="5 10.45"></path>

    </svg>
  )
}


export const OrangeCircle = () => {

  return (

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFA500" viewBox="0 0 85 49" preserveAspectRatio="none" className="sc-bad4ffde-0 dgrCFv sc-d7d2f56e-4 kYevhj"><path strokeLinecap="round" strokeWidth="2" d="M43.276 47.002s-39.06-.82-42-18.5c-3.217-19.34 22.395-27.374 42-27.5 17.922-.115 40.766 4.594 40 22.5-.788 18.404-44 17-44 17"></path></svg>
  )
}
