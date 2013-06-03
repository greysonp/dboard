$(document).ready(init);

var KEY_UP_LEFT = ['a', 'b', 'c', 'd'];
var KEY_UP_RIGHT = ['e', 'f', 'g', 'h'];

var KEY_RIGHT_UP = ['i', 'j', 'k', 'l'];
var KEY_RIGHT_DOWN = ['m', 'n', 'o', 'p'];

var KEY_DOWN_LEFT = ['u', 'v', 'w', 'x'];
var KEY_DOWN_RIGHT = ['q', 'r', 's', 't'];

var KEY_LEFT_UP = ['3', '4', '5', '6'];
var KEY_LEFT_DOWN = ['y', 'z', '1', '2'];

var keyList = [KEY_UP_LEFT, KEY_UP_RIGHT, KEY_RIGHT_UP, KEY_RIGHT_DOWN, KEY_DOWN_RIGHT, KEY_DOWN_LEFT, KEY_LEFT_DOWN, KEY_LEFT_UP];

function init()
{
	$(document).keydown(keyDown);
	drawCharacters();
}

function keyDown(e)
{	
	var code = e.keyCode;
	
	// if we're at the root state
	if (state == STATE_ROOT && (code >= STATE_LEFT && code <= STATE_DOWN))
	{
		updateOptions(code);
		state = code;
		console.log("STATE: " + state);
	}
	// center key pressed
	else if (state == STATE_ROOT && code == SPACE_CODE)
	{

	}
	// if we're at one of the four major states
	else if (state < 100)
	{
		// If the key press is in the same direction as the major state, they are inputting the common character
		if (code == state)
		{
			input(key1[0]);
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
		
		// one of the major verticals
		if (state == STATE_UP || state == STATE_DOWN)
		{
			if (code == STATE_LEFT)
			{
				updateOptions(STATE_MAP[state][0]);
				state = STATE_MAP[state][0];
			}
			else if (code == STATE_RIGHT)
			{
				updateOptions(STATE_MAP[state][1]);
				state = STATE_MAP[state][1];
			}
		}
		// one of the major horizontals
		else if (state == STATE_LEFT || state == STATE_RIGHT)
		{
			if (code == STATE_UP)
			{
				updateOptions(STATE_MAP[state][0]);
				state = STATE_MAP[state][0];
			}
			else if (code == STATE_DOWN)
			{
				updateOptions(STATE_MAP[state][1]);
				state = STATE_MAP[state][1];
			}
		}
	}
	// if we're in one of the eight minor states
	else
	{
		if (code == STATE_UP)
		{
			input(MINOR_MAP[state][0]);
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
		else if (code == STATE_RIGHT)
		{
			input(MINOR_MAP[state][1]);
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
		else if (code == STATE_DOWN)
		{
			input(MINOR_MAP[state][2]);
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
		else if (code == STATE_LEFT)
		{
			input(MINOR_MAP[state][3]);
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
	}
}

function updateOptions(s)
{
	// if it is one of the four major directions
	if (s < 100)
	{
		key1 = KEY_MAP[s][0];
		key2 = KEY_MAP[s][1];

		highlightMajor(s);

		// Update "common" letter
		updateCommon(s);
	}
	// if we are entering the root state
	else if (s == STATE_ROOT)
	{
		key1 = null;
		key2 = null;
		$('#top-node').removeClass('major-selected');
		$('#right-node').removeClass('major-selected');
		$('#bottom-node').removeClass('major-selected');
		$('#left-node').removeClass('major-selected');
		updateCommon(STATE_ROOT);
	}
	// if we are entering one of the minor states
	else
	{
		
	}
}

function highlightMajor(s)
{
	// Strip the highlights from everyone
	$('#top-node').removeClass('major-selected');
	$('#right-node').removeClass('major-selected');
	$('#bottom-node').removeClass('major-selected');
	$('#left-node').removeClass('major-selected');

	// Highlight the correct one
	if (s == STATE_UP)
		$('#top-node').addClass('major-selected');
	else if (s == STATE_RIGHT)
		$('#right-node').addClass('major-selected');
	else if (s == STATE_DOWN)
		$('#bottom-node').addClass('major-selected');
	else if (s == STATE_LEFT)
		$('#left-node').addClass('major-selected');
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
}