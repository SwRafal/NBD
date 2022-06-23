db.people.mapReduce
(
  function()
  { emit(this.sex, {weight: this.weight, height: this.height});  },
  function(key, values)
  {
    let avgWeight=0.0;
    let avgHeight=0.0;
    for(var i=0;i<values.length;i++)
    {
      avgWeight+=parseFloat(values[i].weight);
      avgHeight+=parseFloat(values[i].height);
    }
    avgWeight/=values.length;
    avgHeight/=values.length;
    return{
      AverageWeight: avgWeight,
      AverageHeight: avgHeight
    };
  },
  {out: 'zad1_output'}
);

db.zad1_output.find().pretty();