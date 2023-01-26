export const GasPlanets = () => {
  const Planets = [
    { planet: "Uranus", gas: false },
    { planet: "Earth", gas: true },
    { planet: "Mars", gas: false },
  ];

  return (
    <div>
      {Planets.map((planet) => {
        return planet.gas ? <h2>{planet.planet}</h2> : null;
      })}
    </div>
  );
};
