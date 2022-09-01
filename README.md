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

> Build "Board Step" LWC
> "New Game" = Flow

