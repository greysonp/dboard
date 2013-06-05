(function()
{
	Class.design('DBoard.MajorNode',
	{
		initialize: function(leftSet, $leftSelector, rightSet, $rightSelector, keyCode, leftCode, rightCode, $selector, $common)
		{
			this.leftChild = new DBoard.MinorNode(leftSet, $leftSelector);
			this.rightChild = new DBoard.MinorNode(rightSet, $rightSelector);
			this.keyCode = keyCode;
			this.leftCode = leftCode;
			this.rightCode = rightCode;
			this.$selector = $selector;
			this.$common = $common;
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
		},

		updateCommon: function()
		{
			this.$common.text(this.leftChild.getChar(DBoard.Vals.UP));
		}
	});
})();