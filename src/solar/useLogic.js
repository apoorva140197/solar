import {data as initialData} from "./data";
import {calculateTotalEnergy,calculateSummary,random} from './utils';
import { useEffect, useState } from 'react';

const useLogic = ()=>{
    const [panelData,setPanelData]=useState([]);
    const [totalEnergy,setTotalEnergy] = useState('');
    const [summary,setSummary]=useState({});

    useEffect(()=>{
        const fetchData = () => {
                const moment = require('moment')
                const freshData = []
                initialData.forEach(panel => {
                    freshData.push({
                    ...panel,
                    time: moment().toISOString(),
                    wattage: random(0, 400),
                    voltage: random(0,20)
                    })
                    })
                setPanelData(freshData)
                setTotalEnergy(calculateTotalEnergy(freshData))
                setSummary(calculateSummary(freshData))
            
          };
      
          fetchData();
          const interval = setInterval(fetchData, 5000);
          return () => clearInterval(interval);
    },[])

    return {
        panelData,
        totalEnergy,
        summary
    }
};

export {useLogic}