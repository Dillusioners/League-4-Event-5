function headtail(ai_first, player_first) {
  var ch, choice, heta, i;

  function batball(ai_first, player_first) {
    var bell;

    while (true) {
      bell = prompt("You have won!\nWould you like to bat first or field first? (f for field, b for bat): ");

      if (bell[0] === "f") {
        ai_first = true;
        player_first = false;
        console.log("Ok. I am batting first then.");
        break;
      } else {
        if (bell[0] === "b") {
          player_first = true;
          ai_first = false;
          console.log("Ok. You are batting first then.");
          break;
        } else {
          console.log("Invalid Keyword Try again!\n");
        }
      }
    }

    return {
      "AI": ai_first,
      "PLAYER": player_first
    };
  }

  function ai_batball(ai_first, player_first, ch) {
    while (true) {
      console.log("Alas! I have won!");

      if (ch === "bat") {
        ai_first = true;
        player_first = false;
        console.log("I choose bat. So start bowling up.");
        break;
      } else {
        player_first = true;
        ai_first = false;
        console.log("I choose to field. So you better bat up.");
        break;
      }
    }

    return {
      "AI": ai_first,
      "PLAYER": player_first
    };
  }

  ch = Math.random(["bat", "field"]);

  while (true) {
    heta = prompt("Head or Tail?(h/t): ");

    if (heta[0] === "h") {
      i = random.randint(1, 10);

      if (i % 2 !== 0) {
        choice = batball(ai_first, player_first);
        break;
      } else {
        choice = ai_batball(ai_first, player_first, ch);
        break;
      }
    } else {
      if (heta[0] === "t") {
        i = random.randint(1, 10);

        if (i % 2 === 0) {
          choice = batball(ai_first, player_first);
          break;
        } else {
          choice = ai_batball(ai_first, player_first, ch);
          break;
        }
      } else {
        console.log("Invalid keyword try again!\n");
      }
    }
  }

  return choice;
}

function playerScore(player_score, ai_score, target) {
  var i, zp;

  while (true) {
    zp = Number.parseInt(input("Enter your value(1-6): "));

    if (0 < zp && zp < 7) {
      i = random.randint(1, 6);

      if (target === false) {
        if (zp !== i) {
          player_score = player_score + zp;
          console.log(`Your choice: ${zp}
My choice: ${i}
Your Total Score: ${player_score}
`);
        } else {
          console.log(`My choice: ${i}
You are OUT! Your total score : ${player_score}
`);
          break;
        }
      } else {
        if (zp !== i) {
          player_score = player_score + zp;
          console.log(`Your choice: ${zp}
My choice: ${i}
Your Total Score: ${player_score}
Run Left: ${ai_score - player_score}
`);

          if (ai_score - player_score < 0) {
            console.log(`You have won!
Your Final score: ${player_score}
My Final score: ${ai_score}
`);
            break;
          }
        } else {
          console.log(`My choice: ${i}
You are OUT! I WIN!
Your total score: ${player_score}
My total score: ${ai_score}
Score Difference: ${ai_score - player_score}
`);
          break;
        }
      }
    } else {
      console.log(`Error! ${zp} is either too high or too low. Value must be between 1 to 6!
`);
    }
  }

  return player_score;
}

function aiScore(player_score, ai_score, target) {
  var i, zp;

  while (true) {
    zp = Number.parseInt(input("Enter your value(1-6): "));

    if (0 < zp && zp < 7) {
      i = random.randint(1, 6);

      if (target === false) {
        if (zp !== i) {
          ai_score = ai_score + i;
          console.log(`My choice: ${i}
Your choice: ${zp}
My Total Score: ${ai_score}
`);
        } else {
          console.log(`Your choice: ${zp}
I am OUT! My total score : ${ai_score}
`);
          break;
        }
      } else {
        if (zp !== i) {
          ai_score = ai_score + i;
          console.log(`My choice: ${i}
Your choice: ${zp}
My Total Score: ${ai_score}
Run Left: ${player_score - ai_score}
`);

          if (player_score - ai_score < 0) {
            console.log(`I have won!
Your Final score: ${player_score}
My Final score: ${ai_score}
`);
            break;
          }
        } else {
          console.log(`Your choice: ${i}
I am OUT! You WON!
My total score: ${ai_score}
Your total score: ${player_score}
Score Difference: ${player_score - ai_score}
`);
          break;
        }
      }
    } else {
      console.log(`Error! ${zp} is either too high or too low. Value must be between 1 to 6!
`);
    }
  }

  return ai_score;
}

function main() {
  var ai_first, ai_score, choice, player_first, player_score;
  ai_first = player_first = false;
  player_score = ai_score = 0;
  choice = headtail(ai_first, player_first);

  if (choice["PLAYER"] === true) {
    console.log("\nYou are batting now!\n");
    player_score = playerScore(player_score, ai_score, false);
    console.log("\nYou are bowling now!\n");
    ai_score = aiScore(player_score, ai_score, true);
  } else {
    if (choice["AI"] === true) {
      console.log("\nYou are bowling now!\n");
      ai_score = aiScore(player_score, ai_score, false);
      console.log("\nYou are batting now!\n");
      player_score = playerScore(player_score, ai_score, true);
    }
  }
}

main();
