(function()
{
	Class.design('DBoard.MajorNode',
	{
		initialize: function(leftSet, rightSet, keyCode, leftCode, rightCode)
		{
			this.leftChild = new DBoard.MinorNode(leftSet);
			this.rightChild = new DBoard.MinorNOde(rightSet);
			this.keyCode = keyCode;
			this.leftCode = leftCode;
			this.rightCode = rightCode;
		}
	});
})();