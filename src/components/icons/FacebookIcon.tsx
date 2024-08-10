interface Props{
   color?:string;
}
const facebook = ({color = "white"}:Props) => {
   return (
      <svg
         width="14"
         height="14"
         viewBox="0 0 14 14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="facebook">
            <path
               id="Vector"
               d="M10.2935 1.51001H8.64643C7.91838 1.51001 7.22016 1.79922 6.70535 2.31403C6.19055 2.82884 5.90133 3.52706 5.90133 4.25511V5.90217H4.25427V8.09825H5.90133V12.4904H8.09741V8.09825H9.74447L10.2935 5.90217H8.09741V4.25511C8.09741 4.1095 8.15525 3.96985 8.25821 3.86689C8.36118 3.76393 8.50082 3.70609 8.64643 3.70609H10.2935V1.51001Z"
               stroke={color}
               strokeWidth="0.878049"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
      </svg>
   );
};

export default facebook;
