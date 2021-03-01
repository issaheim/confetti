const chooseParticleColor = (groupName) => {
  let colors = ['#FA7693', '#E34930','#2C26FA', '#A1FAD1', '#FFC233'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const bang = (addConfettiParticles) => {
  addConfettiParticles({
    groupName: 'confettiLetti',  
    particleAmount: 2000, 
    xPosition: 50,
    yPosition: 50,
    xVelocity: 0,
    yVelocity: 2,
    xSpread: 290,
    ySpread: 130
  })
}


// Här exporterar vi funktionerna så att de kan användas i
// confetti-creator-filen som du inte behöver bry dig om
export {
  chooseParticleColor,
  bang
}