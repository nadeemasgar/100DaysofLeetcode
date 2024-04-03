/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length;
    const col = board[0].length;
    const visited = new Array(row).fill(false).map(() => new Array(col).fill(false));

    let res = false;
    const firstChar = word.charAt(0);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === firstChar) {
                res = BFS(board, word, visited, i, j, 0);

                if (res === true) return res;
            }
        }
    }

    return false;
};

function BFS(board, word, visited, row, col, idx) {
    if (idx === word.length) return true;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false;

    let res = false;

    if (word.charAt(idx) === board[row][col] && visited[row][col] === false) {
        visited[row][col] = true;
        res = res || BFS(board, word, visited, row + 1, col, idx + 1);
        res = res || BFS(board, word, visited, row, col + 1, idx + 1);
        res = res || BFS(board, word, visited, row - 1, col, idx + 1);
        res = res || BFS(board, word, visited, row, col - 1, idx + 1);
        visited[row][col] = false;
    }

    return res;
}