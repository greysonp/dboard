(function()
{
	Class.design('DBoard.AutoComplete', 
	{
		initialize: function(callback)
		{
			this.dictionary = new Array();
			this.currDictionary = new Array();
			this.charCount = new Array();

			// Parse our dictionary and store it in an array
			var that = this;
			$.get('dictionary.txt', function(content)
			{
				that.dictionary = content.split('\n');
				for (var i = 0; i < that.dictionary.length; i++)
					that.dictionary[i] = that.dictionary[i].toLowerCase();
				that.currDictionary = that.dictionary;
				callback();
			});
		},

		update: function(currWord)
		{
			var newDictionary = new Array();

			// Find the index at which we need to start copying
			var i = 0;
			while (this.currDictionary[i] < currWord && i < this.currDictionary.length)
				i++;

			// Copy over all of the values that start with our currWord
			while (this.currDictionary[i].indexOf(currWord) == 0 && i < this.currDictionary.length)
			{
				newDictionary.push(this.currDictionary[i]);
				i++;
			}
			console.log("new: " + newDictionary);

			// Now lets update our character counts
			this.charCount = new Array();
			for (var i = 0; i < newDictionary.length; i++)
			{
				var c = newDictionary[i].charAt(currWord.length);
				if (this.charCount[c])
					this.charCount[c]++;
				else
					this.charCount[c] = 1;
			}
			console.log(this.charCount);

			// Copy over our new dictionary
			this.currDictionary = newDictionary;
		},

		getCommon: function (set1, set2)
		{
			var set = set1.concat(set2);

			var winner = set[0];
			for (var i = 1; i < set.length; i++)
			{
				if (this.charCount[set[i]] && this.charCount[set[i]] > this.charCount[winner])
						winner = set[i];
			}
			return winner;
		},

		reset: function()
		{
			this.currDictionary == this.dictionary;
			this.charCount = new Array();
		}
	});
})();