function spaceWeights(planetA, weight, planetB) {
    const planetsF = {
        'Mercury': 3.7,
        'Venus': 8.87,
        'Earth': 9.81,
        'Mars': 3.711,
        'Jupiter': 24.79,
        'Saturn': 10.44,
        'Uranus': 8.69,
        'Neptune': 11.15
    }
    return (weight / planetsF[planetA] *  planetsF[planetB]).toFixed(2)
}

module.exports = spaceWeights



