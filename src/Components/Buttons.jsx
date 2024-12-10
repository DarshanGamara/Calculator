import "./Buttons.css";

   function Buttons(props) {
     const buttonsName = [
       "C",
       "1",
       "2",
       "3",
       "+",
       "4",
       "5",
       "6",
       "-",
       "7",
       "8",
       "9",
       "*",
       "/",
       "=",
       "0",
       "00",
       ".",
     ];

     return (
       <div className="button-container">
         {buttonsName.map((button) => (
           <button
             key={button}
             className="button"
             onClick={() => props.onBtnClick(button)}
           >
             {button}
           </button>
         ))}
       </div>
     );
   }

   export default Buttons;