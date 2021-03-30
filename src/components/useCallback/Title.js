import React  from "react";

function Title() {
   

  console.log("rendering title");
  return (
    <div>
      <h2>Call back Hook</h2>
    </div>
  );
}

export default React.memo(Title);
