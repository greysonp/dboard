$(document).ready(init);

var KEY_UP_LEFT = ['a', 'b', 'c', 'd'];
var KEY_UP_RIGHT = ['e', 'f', 'g', 'h'];

var KEY_RIGHT_UP = ['i', 'j', 'k', 'l'];
var KEY_RIGHT_DOWN = ['m', 'n', 'o', 'p'];

var KEY_DOWN_LEFT = ['u', 'v', 'w', 'x'];
var KEY_DOWN_RIGHT = ['q', 'r', 's', 't'];

var KEY_LEFT_UP = ['3', '4', '5', ' '];
var KEY_LEFT_DOWN = ['y', 'z', '1', '2'];

// Makes drawing out the visual way easier
var keyList = [KEY_UP_LEFT, KEY_UP_RIGHT, KEY_RIGHT_UP, KEY_RIGHT_DOWN, KEY_DOWN_RIGHT, KEY_DOWN_LEFT, KEY_LEFT_DOWN, KEY_LEFT_UP];

var majorNodes = new Array();

var currentMajor = null;
var currentMinor = null;

function init()
{
	initNodes();
	$(document).keydown(keyDown);
	drawCharacters();
}

function initNodes()
{
	// Creates all of our major nodes
	majorNodes.push(new DBoard.MajorNode(KEY_UP_LEFT, $('#tl-node'), KEY_UP_RIGHT, $('#tr-node'), DBoard.Vals.UP, DBoard.Vals.LEFT, DBoard.Vals.RIGHT, $('#top-node'), $('#common-top')));			// Top
	majorNodes.push(new DBoard.MajorNode(KEY_RIGHT_UP, $('#rt-node'), KEY_RIGHT_DOWN, $('#rb-node'), DBoard.Vals.RIGHT, DBoard.Vals.UP, DBoard.Vals.DOWN, $('#right-node'), $("#common-right")));		// Right
	majorNodes.push(new DBoard.MajorNode(KEY_DOWN_LEFT, $('#bl-node'), KEY_DOWN_RIGHT, $('#br-node'), DBoard.Vals.DOWN, DBoard.Vals.LEFT, DBoard.Vals.RIGHT, $('#bottom-node'), $("#common-bottom")));	// Bottom
	majorNodes.push(new DBoard.MajorNode(KEY_LEFT_UP, $('#lt-node'), KEY_LEFT_DOWN, $('#lb-node'), DBoard.Vals.LEFT, DBoard.Vals.UP, DBoard.Vals.DOWN, $('#left-node'), $("#common-left")));			// Left
}

function keyDown(e)
{	
	var code = e.keyCode;
	
	// If we have no major node (i.e. we are at the root)
	if (currentMajor == null)
	{
		// Go through the list of major nodes
		for (var i = 0; i < majorNodes.length; i++)
		{
			// If we find one whose keycode matches the key pressed, select it
			if (majorNodes[i].keyCode == code)
			{
				selectMajor(majorNodes[i])
				break;
			}
		}
	}
	// If we have no minor node (i.e. we are at a major node)
	else if (currentMinor == null)
	{
		// If we press the key that is the same direction as the major node,
		// we want the common char
		if (code == currentMajor.keyCode)
		{
			input(currentMajor.getCommonChar());
			reset();
		}
		// Otherwise, see if the key press matches a minor node direction and grab that
		else
		{
			currentMinor = currentMajor.getMinor(code);
			currentMinor.select();
		}
	}
	else if (currentMinor != null)
	{
		input(currentMinor.getChar(code));
		reset();
	}
}

function selectMajor(major)
{
	// Strip the highlights from everyone
	for (var i = 0; i < majorNodes.length; i++)
		majorNodes[i].unselect();

	// Highlight the correct one
	major.select();

	currentMajor = major;
}

function reset()
{
	// Unselect everything
	for (var i = 0; i < majorNodes.length; i++)
		majorNodes[i].unselect();
	currentMinor.unselect();

	// Clear out majors and minors
	currentMajor = null;
	currentMinor = null;
}

function updateCommon(s)
{
	// if it's not a major state, just clear out the box and leave
	if (s > 100)
	{
		// $('#c-option').val("");
		return;
	}

	// Otherwise, let's pick the common letter.
	// TODO: Actually do this intelligently
	// $('#c-option').val(key1[0]);
}

function input(c)
{
	$('#input').val($('#input').val() + c);
}

function drawCharacters()
{
	var merged = new Array();
	for (var i = 0; i < keyList.length; i++)
		for (var j = 0; j < keyList[i].length; j++)
			merged.push(keyList[i][j]);

	for (var i = 0; i < 32; i++)
		$('#c' + i).text(merged[i]);	

	for (var i = 0; i < majorNodes.length; i++)
		majorNodes[i].updateCommon();
}