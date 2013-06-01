$(document).ready(init);

var SPACE_CODE = 32;

var STATE_UP = 38;
var STATE_UP_LEFT = 101;
var STATE_UP_RIGHT = 102;
var KEY_UP_LEFT = ['a', 'b', 'c', 'd'];
var KEY_UP_RIGHT = ['e', 'f', 'g', 'h'];

var STATE_RIGHT = 39;
var STATE_RIGHT_UP = 201;
var STATE_RIGHT_DOWN = 202;
var KEY_RIGHT_UP = ['i', 'j', 'k', 'l'];
var KEY_RIGHT_DOWN = ['m', 'n', 'o', 'p'];

var STATE_DOWN = 40;
var STATE_DOWN_LEFT = 301;
var STATE_DOWN_RIGHT = 302;
var KEY_DOWN_LEFT = ['u', 'v', 'w', 'x'];
var KEY_DOWN_RIGHT = ['q', 'r', 's', 't'];

var STATE_LEFT = 37;
var STATE_LEFT_UP = 401;
var STATE_LEFT_DOWN = 402;
var KEY_LEFT_UP = ['3', '4', '5', '6'];
var KEY_LEFT_DOWN = ['y', 'z', '1', '2'];

var STATE_ROOT = 1000;

var KEY_MAP = new Array();
KEY_MAP[STATE_UP] = [KEY_UP_LEFT, KEY_UP_RIGHT];
KEY_MAP[STATE_RIGHT] = [KEY_RIGHT_UP, KEY_RIGHT_DOWN];
KEY_MAP[STATE_DOWN] = [KEY_DOWN_LEFT, KEY_DOWN_RIGHT];
KEY_MAP[STATE_LEFT] = [KEY_LEFT_UP, KEY_LEFT_DOWN];

var key1 = null;
var key2 = null;
var state = STATE_ROOT;

function init()
{
	$(document).keydown(keyDown);
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
		// If the key pres is in the same direction as the major state, they are inputting the common character
		if (code == state)
		{
			input($('#c-option').val());
			updateOptions(STATE_ROOT);
			state = STATE_ROOT;
		}
		
		// one of the major verticals
		if (state == STATE_UP || state == STATE_DOWN)
		{
			
			
		}
		// one of the major horizontals
		else
		{
			// if they're moving in the same direction as the major, then they're selecting the 'most common' item
			if (code == state)
			{

			}
		}
	}
	// if we're in one of the eight minor states
	else
	{
	
	}
}

function updateOptions(s)
{
	// if it is one of the four major directions
	if (s < 100)
	{
		key1 = KEY_MAP[s][0];
		key2 = KEY_MAP[s][1];

		// We have structured our list and state numbers such that this will always work
		$('#l-option').val(makeOptionToString(key1));
		$('#r-option').val(makeOptionToString(key2));

		// Update "common" letter
		updateCommon(s);
	}
	if (s == STATE_ROOT)
	{
		key1 = null;
		key2 = null;
		$('#l-option').val("");
		$('#r-option').val("");
		updateCommon(STATE_ROOT);
	}
}

function updateCommon(s)
{
	// if it's not a major state, just clear out the box and leave
	if (s > 100)
	{
		$('#c-option').val("");
		return;
	}

	// Otherwise, let's pick the common letter.
	// TODO: Actually do this intelligently
	$('#c-option').val(key1[0]);
}

function input(c)
{
	$('#input').val($('#input').val() + c);
}

function makeOptionToString(a)
{
	return a[0] + ' ' + a[1] + ' ' + a[2] + ' ' + a[3];
}