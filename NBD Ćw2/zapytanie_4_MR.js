var finalizFunc = function(key,reducedVal)
{
  reducedVal.avgBmi/=reducedVal.counter;
  return{
    MinimalBMI: reducedVal.minBmi,
    AverageBMI: reducedVal.avgBmi,
    MaximumBMI: reducedVal.maxBmi
  };
}

db.people.mapReduce
(
  function()
  {
    emit(this.nationality, {count:1, weight: this.weight, height: this.height})
  },
  function(key, values)
  {
    let counter=0;
    let minBmi=999;
    let avgBmi=0;
    let maxBmi=0;
    for(var i=0;i<values.length;i++)
    {
      bmi=parseFloat(values[i].weight)/parseFloat(values[i].height)/(parseFloat(values[i].height));
      bmi*=10000;
      counter+=values[i].count;
      avgBmi += bmi;
      if(bmi > maxBmi)
        maxBmi=bmi;
      if(bmi < minBmi)
        minBmi=bmi;
    }
    return{
      counter,
      minBmi,
      avgBmi,
      maxBmi
    }
  },
  {
     out: 'zad4_output',
     finalize: finalizFunc
  }
);

db.zad4_output.find();