// Game elements
        const playerScoreElement = document.getElementById('player-score');
        const computerScoreElement = document.getElementById('computer-score');
        const playerChoiceElement = document.getElementById('player-choice');
        const computerChoiceElement = document.getElementById('computer-choice');
        const resultElement = document.getElementById('result');
        const playAgainButton = document.getElementById('play-again');
        const resetButton = document.getElementById('reset');
        const historyList = document.getElementById('history-list');
        
        // Game variables
        let playerScore = 0;
        let computerScore = 0;
        let gameHistory = [];
        const choices = ['rock', 'paper', 'scissors'];
        const emojis = {
            rock: '✊',
            paper: '✋',
            scissors: '✌️'
        };
        
        // Event listeners for player choices
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                if (playerScore >= 5 || computerScore >= 5) return;
                
                const playerChoice = this.getAttribute('data-choice');
                playRound(playerChoice);
            });
        });
        
        // Play a round of the game
        function playRound(playerChoice) {
            
            // Reset animation classes
            playerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
            computerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
            resultElement.classList.remove('win', 'lose');
            
            // Show player choice with animation
            playerChoiceElement.textContent = emojis[playerChoice];
            playerChoiceElement.classList.add('bounce');
            
            // Computer makes random choice
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            
            // Show computer choice with delay and animation
            setTimeout(() => {
                computerChoiceElement.textContent = emojis[computerChoice];
                computerChoiceElement.classList.add('bounce');
                
                // Determine winner
                determineWinner(playerChoice, computerChoice);
            }, 500);
        }
        
        // Determine the winner of a round
        function determineWinner(playerChoice, computerChoice) {
            let result;
            
            if (playerChoice === computerChoice) {
                result = "It's a tie!";
                resultElement.textContent = result;
                resultElement.classList.add('pulse');
                
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                // Player wins
                playerScore++;
                playerScoreElement.textContent = playerScore;
                result = `You win! ${capitalizeFirst(playerChoice)} beats ${capitalizeFirst(computerChoice)}`;
                resultElement.textContent = result;
                resultElement.classList.add('win');
                playerChoiceElement.classList.add('winning-emoji');
                
            } else {
                // Computer wins
                computerScore++;
                computerScoreElement.textContent = computerScore;
                result = `You lose! ${capitalizeFirst(computerChoice)} beats ${capitalizeFirst(playerChoice)}`;
                resultElement.textContent = result;
                resultElement.classList.add('lose');
                computerChoiceElement.classList.add('winning-emoji');
                
            }
            
            // Add to history
            addToHistory(playerChoice, computerChoice, result);
            
            // Check for game winner
            checkGameWinner();
        }
        
        // Check if someone has won the game
        function checkGameWinner() {
            if (playerScore >= 5) {
                resultElement.textContent = "🎉 Congratulations! You won the game! 🎉";
                resultElement.classList.add('win');
                
            } else if (computerScore >= 5) {
                resultElement.textContent = "😞 Game Over! Computer won the game!";
                resultElement.classList.add('lose');
                
            }
        }
        
        // Add round to history
        function addToHistory(playerChoice, computerChoice, result) {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const playerEmoji = emojis[playerChoice];
            const computerEmoji = emojis[computerChoice];
            
            historyItem.innerHTML = `
                <span class="history-emoji">${playerEmoji}</span>
                <span>vs</span>
                <span class="history-emoji">${computerEmoji}</span>
                <span> - ${result}</span>
            `;
            
            historyList.prepend(historyItem);
            
            // Keep only last 10 history items
            if (historyList.children.length > 10) {
                historyList.removeChild(historyList.lastChild);
            }
            
            gameHistory.push({ playerChoice, computerChoice, result });
        }
        
        // Play again button
        playAgainButton.addEventListener('click', function() {
            // Reset choices
            playerChoiceElement.textContent = '❔';
            computerChoiceElement.textContent = '❔';
            
            // Reset result
            resultElement.textContent = 'Make your move!';
            resultElement.classList.remove('win', 'lose');
            
            // Reset animations
            playerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
            computerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
        });
        
        // Reset game button
        resetButton.addEventListener('click', function() {
            // Reset scores
            playerScore = 0;
            computerScore = 0;
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
            
            // Reset choices
            playerChoiceElement.textContent = '❔';
            computerChoiceElement.textContent = '❔';
            
            // Reset result
            resultElement.textContent = 'Make your move!';
            resultElement.classList.remove('win', 'lose');
            
            // Reset animations
            playerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
            computerChoiceElement.classList.remove('bounce', 'shake', 'pulse', 'winning-emoji');
            
            // Clear history
            historyList.innerHTML = '';
            gameHistory = [];
        });
        
        // Helper function to capitalize first letter
        function capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }