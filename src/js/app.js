const damageLevel = (data = {}) => {
  if (data.health > 50) {
    return 'healthy';
  }
  if (data.health > 0 && data.health < 15) {
    return 'critical';
  }
  return 'wounded';
};

console.log('wow!');

export default damageLevel;
