db.people.aggregate
([
  {
    $addFields:
    {
      bmi:
      {
        $divide:
        [
          {$toDouble: "$weight"},
          {$divide:[{$multiply:[{$toDouble:"$height"},{$toDouble:"$height"}]},10000]}
        ]
      }
    }
  },
  {
    $group:
    {
      _id: {nationality: "$nationality"},
      MinBMI: {$min: "$bmi"},
      AverageBMI: {$avg: "$bmi"},
      MaxBMI: {$max: "$bmi"}
    }
  }
])