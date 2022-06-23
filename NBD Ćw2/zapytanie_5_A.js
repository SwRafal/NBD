db.people.aggregate
([
  {$match: {nationality: "Poland", sex: "Female"}},
  {$unwind: {path: "$credit"}},
  {
    $group:
    {
      _id: "$credit.currency",
      SummaryBalance: {$sum: {$toDouble: "$credit.balance"}},
      AverageBalance: {$avg: {$toDouble: "$credit.balance"}}
    }
  }
]);