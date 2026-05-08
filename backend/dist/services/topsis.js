export const rankBuses = (buses, weights) => {
    if (!buses || buses.length === 0)
        return [];
    if (buses.length === 1)
        return [{ ...buses[0], score: 1.0 }];
    const criteria = ['totalJourneyTime', 'cost', 'walkingDistance', 'transfers'];
    const normalizedMatrix = criteria.map(criterion => {
        const values = buses.map(bus => bus[criterion]);
        const denominator = Math.sqrt(values.reduce((sum, val) => sum + val * val, 0));
        if (denominator === 0)
            return values.map(() => 0);
        return values.map(val => val / denominator);
    });
    const weightedMatrix = criteria.map((criterion, idx) => normalizedMatrix[idx].map(val => val * weights[criterion]));
    const idealSolution = criteria.map((_, idx) => Math.min(...weightedMatrix[idx]));
    const negativeIdealSolution = criteria.map((_, idx) => Math.max(...weightedMatrix[idx]));
    const distances = buses.map((_, busIdx) => {
        let dPlus = 0, dMinus = 0;
        criteria.forEach((_, cIdx) => {
            const v = weightedMatrix[cIdx][busIdx];
            dPlus += Math.pow(v - idealSolution[cIdx], 2);
            dMinus += Math.pow(v - negativeIdealSolution[cIdx], 2);
        });
        return {
            distanceToIdeal: Math.sqrt(dPlus),
            distanceToNegative: Math.sqrt(dMinus),
        };
    });
    return buses
        .map((bus, idx) => {
        const { distanceToIdeal, distanceToNegative } = distances[idx];
        const denom = distanceToIdeal + distanceToNegative;
        return {
            ...bus,
            score: Math.round((denom === 0 ? 0 : distanceToNegative / denom) * 100) / 100
        };
    })
        .sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
};
//# sourceMappingURL=topsis.js.map