export const formatTemp = (temp) => {
  // console.log(typeof temp);
  
  const kelvin = 273.15;
  return Math.round(temp - kelvin);
}