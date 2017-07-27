# tictactoe
TicTacToe PHP Game 

MYSQL DATABASE

name: tictactoe

add in SQL:

            CREATE TABLE `result` (
              `id` int(11) NOT NULL primary key AUTO_INCREMENT,
              `winner` varchar(32) NOT NULL,
              `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
            )

