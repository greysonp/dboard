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
		}
	});
})();