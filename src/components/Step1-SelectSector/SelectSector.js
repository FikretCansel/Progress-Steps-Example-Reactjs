import React from "react";
import "./selectSector.css";


function SelectSector() {
  return (
    <div class="card d-flex justify-content-center">

        
      <div></div>
      <div>
        <div id="sectors" class="card-body">
            <div className="btn" style={{backgroundColor:"coral"}}>Otomative</div>
            <div className="btn" style={{backgroundColor:"lightblue"}}>Gıda</div>
            <div className="btn" style={{backgroundColor:"khaki"}}>Teksil</div>
            <div className="btn" style={{backgroundColor:"pink"}}>Elektrik Elektronik</div>
            <div className="btn" style={{backgroundColor:"lightgrey"}}>Mobilya</div>
          {/* Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS. */}
        </div>
      </div>
    </div>
  );
}

export default SelectSector;
