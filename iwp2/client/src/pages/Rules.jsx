import React from 'react'

export default function Rules() {
  return (
    <div className="px-12 py-7 mx-12 my-7 text-lg tracking-wider leading-10">      
      <ul className="pl-5">
        <li>Our AI Rock-Paper-Agent will start off as a mere random response generator, but it gets smarter the more you play against it!</li>
        <li><strong>Select Your Gesture</strong>: Start by choosing your gesture from the options provided — Rock, Paper, or Scissors.</li>
        <li><strong>Click on Your Choice</strong>: Click the button corresponding to your chosen gesture.</li>
        <li><strong>AI Makes Its Move</strong>: Once you've selected your gesture, the AI will select its own gesture in response, analyzing your patterns to predict your move.</li>
        <li><strong>View Round Result</strong>: After both choices are made, the result of the round will be displayed on the screen.</li>
        <li><strong>See Who Wins</strong>: The game will determine whether you've won, lost, or tied against the AI based on the gestures chosen.</li>
        <li><strong>Keep Track of the Score</strong>: The game keeps track of the score as you play, allowing you to see how well you're doing against the AI.</li>
        <li><strong>Continue Playing</strong>: Keep playing rounds, and attempt you outsmart the AI as it learns your moves, and learns to read your mind!</li>
      </ul>
</div>
  )
}
