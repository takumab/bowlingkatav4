let totalScore = 0;

const score = () => {
    return totalScore
};

const roll = (pins: number): void => {
   totalScore += pins;
};

describe('Bowling Game', () => {
    test('should knocked down one pin with a score of one', () => {
        roll(1)
        roll(0)
        const result = score()
        expect(result).toBe(1)
    })

    test('should knocked down four pins with a total score of five', () => {
        roll(2)
        roll(2)
        const result = score()
        expect(result).toBe(5)
    })

    test('should knocked down four pins with a total score of five', () => {
        roll(3)
        roll(5)
        const result = score()
        expect(result).toBe(13)
    })
});

