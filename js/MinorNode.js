(function()
{
	Class.design('DBoard.MinorNode',
	{
		initialize: function(charSet, $selector)
		{
			this.charSet = charSet;
			this.$selector = $selector;
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
		},

		select: function()
		{
			this.$selector.addClass('minor-selected');
		},

		unselect: function()
		{
			this.$selector.removeClass('minor-selected');
		}
	});
})();
