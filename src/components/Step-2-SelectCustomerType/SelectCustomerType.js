import React from "react";


function SelectCustomerType() {
  return (
    <div class="card d-flex justify-content-center">
      <div>
        <div id="sectors" class="card-body">
            <div className="btn" style={{backgroundColor:"coral"}}>Bireysel</div>
            <div className="btn" style={{backgroundColor:"lightblue"}}>Kurumsal</div>
            
        </div>
      </div>
    </div>
  );
}

export default SelectCustomerType;
