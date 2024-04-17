import random
from flask import Flask, request, jsonify
from flask_cors import CORS
from collections import defaultdict 

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

user_score = 0
ai_score = 0
sequence = []

# Hardcoded username and password
username = 'admin'
password = 'password'

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if 'username' in data and 'password' in data:
        if data['username'] == username and data['password'] == password:
            return jsonify({'success': True, 'message': 'Login successful'})
    return jsonify({'success': False, 'message': 'Invalid username or password'})


@app.route('/play', methods=['POST'])
def play():
    global user_score, ai_score, sequence
    data = request.json
    user_choice = data.get('option')
    
    # Generate computer's choice randomly
    computer_choice = rps(user_choice, sequence)

    # Determine the winner
    winner = determine_winner(user_choice, computer_choice)
    
    # Update scores
    if winner == 'You win!':
        user_score += 1
    elif winner == 'Computer wins!':
        ai_score += 1
    
    # Return the winner, computer's choice, and updated scores as JSON
    return jsonify({'winner': winner, 'computer_choice': computer_choice, 'user_score': user_score, 'ai_score': ai_score})

def rps(user_move, sequence):
    prediction = random.choice([0, 1, 2])
    prediction = predict_next_element(sequence)
    sequence.append(user_move)
    return prediction 

import random

def predict_next_element(sequence): 
    # Map input strings to integers
    sequence_mapping = {"rock": 0, "paper": 1, "scissors": 2}
    inverse_sequence_mapping = {0: "Rock", 1: "Paper", 2: "Scissors"}
    
    # Convert sequence to integers
    sequence = [sequence_mapping[move] for move in sequence]
    
    # Count transitions from one element to the next
    if not sequence:
        return inverse_sequence_mapping[random.randint(0, 2)]  # Return a random choice if sequence is empty
    
    transitions = defaultdict(lambda: defaultdict(int))
    for i in range(len(sequence) - 1):
        transitions[sequence[i]][sequence[i + 1]] += 1

    # Calculate probabilities of transitioning from each element to the next
    probabilities = defaultdict(dict)
    for current_element, next_elements in transitions.items():
        total_transitions = sum(next_elements.values())
        for next_element, count in next_elements.items():
            probabilities[current_element][next_element] = count / total_transitions

    # Predict the next element based on the highest probability transition
    last_element = sequence[-1]
    if last_element not in probabilities:
        return inverse_sequence_mapping[random.randint(0, 2)]  # Return a random choice if no probabilities available
    predicted_element = max(probabilities[last_element], key=probabilities[last_element].get)
    
    # Map predicted integer back to its respective string
    predicted_element_string=win[predicted_element]
    predicted_move = inverse_sequence_mapping[predicted_element_string]
    return predicted_move

win = {0:1,1:2,2:0}
def determine_winner(user_choice, computer_choice):
    user_choice = user_choice.capitalize()
    # Rock beats scissors, scissors beats paper, paper beats rock
    #return user_choice + " " + computer_choice
    if user_choice == computer_choice:
        return 'It\'s a tie!'
    elif (user_choice == 'Rock' and computer_choice == 'Scissors') or \
         (user_choice == 'Scissors' and computer_choice == 'Paper') or \
         (user_choice == 'Paper' and computer_choice == 'Rock'):
        return 'You win!'
    else:
        return "Computer wins!"

if __name__ == '__main__':
    app.run(debug=True)
