db.people.mapReduce
(
  function()
  {
    for(var i=0;i<this.credit.length;i++)
    {
      emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
  },
  function(key, values)
  {
    let sumBalance=Array.sum(values);
    let avgBalance=sumBalance/values.length;

    return{
      SummaryBalance: sumBalance,
      AverageBalance: avgBalance
    }
  },
  {
    query:
    {
      sex: "Female",
      nationality: "Poland"
    },
    out: 'zad5_output'
  }
);

db.zad5_output.find();