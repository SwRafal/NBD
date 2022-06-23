db.people.aggregate([{
	$group:
	{
		_id:{sex: "$sex"},
		AverageWeight:{$avg:{$toDouble:"$weight"}},
		AverageHeight:{$avg:{$toDouble:"$height"}}
	}
}])