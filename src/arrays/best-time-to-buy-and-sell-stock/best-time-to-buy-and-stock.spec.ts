import { bestTimeToBuyAndStocks } from './best-time-to-buy-and-stock';

describe('bestTimeToBuyAndStocks', () => {

    const verify = (input: number[], expectedOutput: number) => {
        expect(bestTimeToBuyAndStocks(input)).toBe(expectedOutput);
    };

    // --- EDGE CASES ---

    it('1. should handle an empty array of stock prices', () => {
        verify([], 0);
    });

    it('2. should handle a single price (no transaction possible)', () => {
        verify([5], 0);
    });

    it('3. should handle a two-day decreasing trend (no profit possible)', () => {
        verify([5, 2], 0);
    });

    it('4. should handle a two-day increasing trend', () => {
        verify([2, 5], 3);
    });

    // --- UNIFORM / STATIC PRICES ---

    it('5. should handle flat/constant stock prices', () => {
        verify([3, 3, 3, 3, 3], 0);
    });

    // --- STANDARD CASES ---

    it('6. should handle standard fluctuating prices where buy is mid-way and sell is later (Example 1)', () => {
        verify([7, 1, 5, 3, 6, 4], 5);
    });

    it('7. should handle strictly decreasing prices (Example 2)', () => {
        verify([7, 6, 4, 3, 1], 0);
    });

    it('8. should identify max profit when the lowest price happens late and cannot be sold for profit', () => {
        verify([3, 2, 6, 5, 0, 3], 4);
    });

    it('9. should handle cases where the max profit occurs early in the array', () => {
        verify([1, 10, 2, 3, 1, 2], 9);
    });

    it('10. should handle price drops before a major increase', () => {
        verify([5, 4, 3, 1, 10], 9);
    });

});
