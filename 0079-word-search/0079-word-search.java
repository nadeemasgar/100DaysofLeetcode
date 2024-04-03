class Solution {
    public boolean exist(char[][] board, String word) {
        int row = board.length;
        int col = board[0].length;
        boolean[][] visited = new boolean[row][col];
        
        boolean res = false;
        char firstChar = word.charAt(0);
        
        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                  if(board[i][j] == firstChar) {
                      res = BFS(board, word, visited, i, j, 0);
                      
                      if(res == true) return res;
                  }
            }
        }
        
        return false;
    }
    
    public boolean BFS(char[][] board, String word, boolean[][] visited, int row, int col, int idx) {
        if(idx == word.length()) return true;
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false;
        
        boolean res = false;
        
        if(word.charAt(idx) == board[row][col] && visited[row][col] == false) {
            visited[row][col] = true;
            res = res || BFS(board, word, visited, row + 1, col, idx + 1);
            res = res || BFS(board, word, visited, row, col + 1, idx + 1);
            res = res || BFS(board, word, visited, row - 1, col, idx + 1);
            res = res || BFS(board, word, visited, row, col - 1, idx + 1);
            visited[row][col] = false;
        }
        
        return res;
    }
}