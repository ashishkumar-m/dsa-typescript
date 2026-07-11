export function bestTimeToBuyAndStocks(stocks: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < stocks.length; i++) {
        minPrice = Math.min(stocks[i]!, minPrice);
        maxProfit = Math.max(stocks[i]! - minPrice, maxProfit);
    }
    return maxProfit;
}