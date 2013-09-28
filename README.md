# D-Board
A keyboard for those times you only have four directions.

## What is it?
It's a keyboard that is operated purely using the directional keys.

## How do I use it?
There's eight clusters of letters on the board.

1. Pressing a direction narrows it down to the two clusters located in that direction - let's call them A and B.
2. Pressing the key in the direction of A will select A, and the opposite key will select B.
3. Now, within the cluster, press the direction of the letter you want.

So, the worst case scenario is that it takes three presses to get a letter. But, we can do better!

You'll notice there's a big letter between each pair of clusters. That letter is the most likely letter to occur next out of those two clusters. Right now, I use a dictionary of the most common dictionary words to figure out this letter, but I don't do a very good job of it. However, if the keyboard guesses right, it will lower your keystrokes to two! And if it can guess right most of the time, then it can have 2-2.5 keystrokes as the average seek time!

## Why would I use it?
TV! Smart TV's are becoming more popular, and a lot of them still only have four-directional remotes. This could be a great input method.

===

### Excuse me, what about capital letters, numbers, and puctuation?
Yeah, not everything has been implemented yet. It would pretty much require a fifth button, which thankfully most remotes have. Using that, you could toggle the states of the buttons to grab the rest of the characters.
