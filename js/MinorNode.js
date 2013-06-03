Class.design('DBoard.MinorNode',
{
	initialize: function(charSet)
	{
		this.charSet = charSet;
	},

	getChar: function(keyCode)
	{
		switch(keyCode)
		{
			case DBoard.Vals.UP: return this.charSet[0]; break;
			case DBoard.Vals.RIGHT: return this.charSet[1]; break;
			case DBoard.Vals.DOWN: return this.charSet[2]; break;
			case DBoard.Vals.LEFT: return this.charSet[3]; break;
		}
		return null;
	}
});