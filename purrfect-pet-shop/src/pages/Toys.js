// import * as React from "react";
// import * as ReactDOM from "react-dom";
// export default class ReactApp extends React.Component {
//   render() {
//     return (
//       <div className="e-card">
//         <div className="e-card-image">
//           <div className="e-card-title">JavaScript </div>
//         </div>
//         <div className="e-card-content">
//           JavaScript Succinctly was written to give readers an accurate, concise
//           examination of JavaScript objects and their supporting nuances, such
//           as complex values, primitive values, scope, inheritance, the head
//           object, and more.{" "}
//         </div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<ReactApp />, document.getElementById("element"));

function Toys() {
  return (
    <section>
      <div className="e-card">
        <div className="e-card-image">
          <div className="e-card-title">Lasers</div>
        </div>
        <div className="e-card-content"></div>
      </div>
      <div className="e-card">
        <div className="e-card-image">
          <div className="e-card-title">Mice</div>
        </div>
        <div className="e-card-content"></div>
      </div>
      <div className="e-card">
        <div className="e-card-image">
          <div className="e-card-title">Strings</div>
        </div>
        <div className="e-card-content"></div>
      </div>
    </section>
  );
}

export default Toys;
