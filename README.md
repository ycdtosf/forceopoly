# Forceopoly

Object Model

> Property X
> Game Property X
> Card X
> Player X
> Dice
> Transaction?
> Game X

Future Stuff
> Color Picker Component
> Build Salesforce in salesforce


Chance Cards
    > Move to [Specific Property / Go To Jail]
    > Move to Nearest/Relative [Railroad / Utility / Back X Spaces]
    > Get Money from Bank
    > Get Money from Players
    > Pay Money to "Bank" (Free Parking)
    > Pay Players
    > Get Out of Jail

    B_Rye64: You could have actions be flows specified on cards/properties that take in the entire game state and mutate it (ex. Pay bank money = subtract money from player, add to bank), with dynamic variables coming from the cause (chance card, tax, etc)

    B_Rye64: The compact layout could be the scoreboard / standings, users can peek on other peoples games and see whos winning

    B_Rye64: Should game store active player and then formula on player to check against the game?

# Turn Effects

> Buy (if not owned) DONE
> Pay Rent (if owned)
> Go To Jail DONE
> Get Paid on Land Go DONE
> Get Paid on Pass Go DONE
> Get Paid on Free Parking
> Draw Card
> Stay in Jail

Next Time:

> "New Game" = Flow
> <canvas> + LWC?

# INVENTORY

* Flow (Screen) - Create New Game - creates a new game
* Flow (Subflow) - Get Next Player
* Flow (Subflow) - Pay Rent - subtract Money from one Player, add Money to another Player
* Flow (Subflow) - Roll - math.random, pass in "sides", returns "value" - weird flow looping stuff
* Flow (Subflow) - Shuffle Game Cards - creates a new shuffled deck of chance or comm chest cards
* Flow (Subflow) - Evaluate Game Property Monopoly - determines if player is owner of all properties in a color set
* Flow - Take Run - 
    * takes Turn SFID as input parameter


# BUGS

* Create New Game created one full game and one empty
* does card shuffle take away get out of jail card?
* Create New Game needs to check "Current Turn" box on first turn
* Take Turn should query where = "Current Turn" = true OR userId (new param) = Player related to current turn
* Take Turn - what does Eval Monopoly do???
* Take Turn - Get Next Player - pass GameId... or... get from player record???
* Take Turn - populate merge fields
* Take Turn - Game Property Property Color is nul???
* Take Turn - we bought chance??????
* Take Turn - set the current player on the next turn...

* Take Turn Phases
    * Evaluate Roll Phase
    * Position Land Phase
        * Free Parking
        * Go To Jail
        * Just Visiting
        * Land On Go
        * Pass Go
    * Evaluate Property Phase
        * Purchase
        * Auction
        * Pay Rent
    * Evaluate Cards Phase
        * Purchase
        * Auction
        * Pay Rent
    * End Turn Phase
