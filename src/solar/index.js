import '../App.css';
import { useLogic } from './useLogic';

function Solar() {
const {panelData,totalEnergy,summary}=useLogic();
  return (
    <div className="solar">
        <p className='solar-text'>Total energy produced by the farm : {totalEnergy}kWh</p>
        <p className='solar-text'>
            Summary : (Healthy/ Weak) {summary.healthy}/{summary.weak}
        </p>
        <div className='solar-container'>
            {panelData.map((dt)=>{
                return <div className='solar-grid' style={dt.voltage < 10 && dt.wattage <200 ? {background:'red'}:{background:'green'}} key={dt.id}>
                    <p className='solar-text'>Voltage : {dt.voltage}</p>
                    <p className='solar-text'>Wattage : {dt.wattage}</p>
                </div>
            })}
        </div>
    </div>
  );
}

export default Solar;
