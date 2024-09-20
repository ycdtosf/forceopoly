# Forceopoly

## Components

### Custom Objects

#### Card

Represents Chance and Community Cards in Forceopoly.

**Fields**

* Action Type (picklist) - The different actions that result from picking a Card.
* Amount (currency) - Value / cost associated with the Card.
* Description - The text displayed on the Card.
* Property - Property associated with a Card action (ex. move to Broadway).
* Record Type - "Chance" and "Community Chest"
* Spaces - Number of spaces to move associated with a Card action.

#### Game

Represents an instance of a Forceopoly game.

**Fields**

* Free Parking Bank (currency) - Money given to Free Parking (if rule is enabled).
* Hotels Available (currency) - Value / cost associated with the Card.
* Hotels Available (formula) - Hotels Total minus Hotels Purchased.
* Hotels Purchased (rollup) - sum of Hotels on all Game Properties.
* Hotels Total (number) - Total number of hotels in a Forceopoly game.
* Houses Available (formula) - Houses Total minus Hotels Purchased.
* Houses Purchased (rollup) - sum of Houses on all Game Properties.
* Houses Total (number) - Total number of Houses in a Forceopoly game.

#### Game Card

Represents an instance of a Card in a Game.

**Fields**

* Card (lookup) - Lookup to the Card definition.
* Game (MD) - Lookup to the Game.
* Is Discarded? (Boolean) - Indicates if Card has been played.
* Owner (Lookup) - Player holding the card.
* Sequence (number) - How the card deck is shuffled.

#### Game Property

Represents an instance of a Card in a Game.

**Fields**

* Card (lookup) - Lookup to the Card definition.
* Game (MD) - Lookup to the Game.
* Hotel (number) - number of Hotels on the property.
* Houses (number) - number of Houses on the property.
* Is Monopoly? (Boolean) - indicates Owner has all properties in set/color.
* Is Mortgaged? (Boolean) - property is mortgaged.
* Owner (Lookup) - Player owning the Property.
* Property (MD) - Property definition record.
* Property Color (formula)
* Property Position (formula)
* Rent (formula)

#### Player

Represents a Player in a Forceopoly Game.

**Fields**

* Current Property (lookup) - Indicates the current location of the Play on the Game board.
* Game (rollup) - the Game being played.
* In Jail? (Boolean) - Indicates the Player is In Jail.
* Money (currency) - Money on hand.
* Hotels Total (number) - Total number of hotels in a Forceopoly game.
* Piece (Picklist) - the piece that represents the Player.
* Sequence (number) - Defines the turn sequence of the players.
* User (lookup) - The User represented by this Player.

#### Property

Represents a Property card in a Forceopoly game.

* Building Cost (currency) - How much to build a single building (house or hotel).
* Color (text) - property set color
* Position (number) - Property placement around the board.
* Property Cost (currency) - Purchase price.
* Rent - base rent
* Rent (1 House) - rent for 1 house
* Rent (2 House) - rent for 2 house
* Rent (3 House) - rent for 3 house
* Rent (4 House) - rent for 4 house
* Rent (Hotel) - rent for hotel
* Type (text) - type of property

#### Turn

### Flows

#### Create New Game

* 

## Resources

* https://monopoly.fandom.com/wiki/Property#US_version

Represents a Player's Turn in a Forceopoly game.

* Current Turn (Boolean) - is this turn the current turn?
* Game (MD) - the Game being played.
* Game Property (lookup) - final landed Property of Turn.
* Outcome (picklist) - possible outcomes of a Turn (there may be more...)
* Player (MD) - The Player taking the turn.
* Previous Player Turn (lookup) - The previous turn of this Player (change to Player's Previous Turn
* Previous Turn (lookup) - The Turn before this Turn
* Roll (number) - dice roll outcome.
* Roll Double? (Boolean) - did the player roll doubles?


    B_Rye64: You could have actions be flows specified on cards/properties that take in the entire game state and mutate it (ex. Pay bank money = subtract money from player, add to bank), with dynamic variables coming from the cause (chance card, tax, etc)

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
