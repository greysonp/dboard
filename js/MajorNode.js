(function()
{
	Class.design('DBoard.MajorNode',
	{
		initialize: function(leftSet, rightSet, keyCode, leftCode, rightCode, $selector)
		{
			this.leftChild = new DBoard.MinorNode(leftSet);
			this.rightChild = new DBoard.MinorNode(rightSet);
			this.keyCode = keyCode;
			this.leftCode = leftCode;
			this.rightCode = rightCode;
			this.$selector = $selector;
		},

		select: function()
		{
			this.$selector.addClass('major-selected');
		},

		unselect: function()
		{
			this.$selector.removeClass('major-selected');
		},

		getMinor: function(keyCode)
		{
			if (keyCode == this.leftCode)
				return this.leftChild;
			else if (keyCode == this.rightCode)
				return this.rightChild;
		},

		getCommonChar: function()
		{
			return this.leftChild.getChar(DBoard.Vals.UP);
		}
	});
})();