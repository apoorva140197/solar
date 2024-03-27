export function calculateTotalEnergy(data) {
    let totalEnergy = 0;
    data.forEach(panel => {
      const energyValue = parseFloat(panel.energy.replace(',', '').replace('kWh', ''));
      totalEnergy += energyValue;
    });
  
    return totalEnergy.toFixed(3);
  }

  export function calculateSummary(data){
    const weakPanels = data.filter(
      (panel) => panel.voltage < 10 && panel.wattage < 200
    );
    const healthyPanels = data.length - weakPanels.length;
    return { healthy: healthyPanels, weak: weakPanels.length };
  };


 export function random(min,max){
    return (Math.random()*(max-min+1)+min).toFixed(2);
}