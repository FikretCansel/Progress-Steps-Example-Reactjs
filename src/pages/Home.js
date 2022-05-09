import React, { useState } from "react";
import SelectCustomerType from "../components/Step-2-SelectCustomerType/SelectCustomerType";
import SelectSector from "../components/Step1-SelectSector/SelectSector";
import "../css/home.css";
import "../js/home.js";

export default function Home() {
  const stepCount=3;
  const [stepNum, setStepNum] = useState(3);

  const getprogressValue = () => {
    let stepSize = 100 / (stepCount - 1);
    console.log("ss");
    if (stepNum == 1) {
      return 0;
    } else {
      console.log(stepNum * stepSize);
      return (stepNum-1) * stepSize;
    }
  };

  return (
    <section>
      <div class="container">
        <div class="accordion" id="accordionExample">
          <div class="steps">
            <progress
              id="progress"
              value={getprogressValue()}
              max="100"
            ></progress>
            <div class="step-item">
              <button
                onClick={() => setStepNum(1)}
                className={`step-button text-center collapsed ${stepNum>=1&& "done"}`}
                type="button"
              >
                1
              </button>
              <div class="step-title">Sektör Seç</div>
            </div>

            <div class="step-item">
              <button
                onClick={() => setStepNum(2)}
                className={`step-button text-center ${stepNum>=2&& "done"}`}
                type="button"
              >
                2
              </button>
              <div class="step-title">Müşteri Tipi</div>
            </div>

            <div class="step-item">
              <button
                onClick={() => setStepNum(3)}
                className={`step-button text-center collapsed ${stepNum==3&& "done"}`}
                type="button"
              >
                3
              </button>
              <div class="step-title">İhtiyaç Tipi belirle</div>
            </div>
          </div>
          {
            stepNum===1&&<SelectSector/>
          }
          {
            stepNum===2&&<SelectCustomerType/>
          }
          
        </div>
      </div>
    </section>
  );
}
