class BowlingGame {
    private totalScore = 0;

    roll(pins: number) {
        this.totalScore += pins;
    }

    score(): number {
        return this.totalScore;
    }
}

describe('Bowling Game', () => {
    test('should knocked down one pin with a score of one', () => {
        let bowlingGame = new BowlingGame();
        bowlingGame.roll(1)
        expect(bowlingGame.score()).toBe(1)
    })

    test('should knocked down two pins with a total score of two', () => {
        let bowlingGame = new BowlingGame();
        bowlingGame.roll(2)
        expect(bowlingGame.score()).toBe(2)
    })
});

