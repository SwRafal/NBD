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
    return Array.sum(values);
  },
  { out: 'zad2_output'}
)

db.zad2_output.find();