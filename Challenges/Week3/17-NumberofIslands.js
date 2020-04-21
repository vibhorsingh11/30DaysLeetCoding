/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // If grid is null or its length is 0 then return 0
    if (grid == null || grid.length == 0) {
            return 0;
        }
        // Number of islands counter
        let count = 0;
        // Looping through the grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    count += dfs(grid, i, j);
                }
            }
        }
        return count;
};

function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
            return 0;
        }
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
        return 1;
    }