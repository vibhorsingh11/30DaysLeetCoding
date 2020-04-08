/**
 Say you have an array for which the ith element is the price of a given stock on day i.

    Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

    Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Setting initial buying price to first value
    let buy = prices[0];
    let profit = 0;
    for(let i=1; i< prices.length;i++) {
        // If buying price greater than next day price, then make it the new buying price
        if(buy > prices[i]) {
            // Change the new buying price to current day stock price
            buy = prices[i];
            continue;
        }
        // If next day stock price is not null and next day stock price is less than the current stock price
        else if(prices[i+1] != null && prices[i+1] < prices[i]) {
            // Calculate the profit 
            profit += (prices[i] - buy);
            // Change the new buying price to next day stock price
            buy = prices[i+1];
            
        }
        // If next day stock price is not present 
        else if(!prices[i+1]) {
            // Calculate the profit 
            profit += (prices[i] - buy);
        }
        
    }
    // Return the profit
    return profit;
};