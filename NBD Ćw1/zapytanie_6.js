db.people.insert(
{
        sex: "Male",
        first_name: "Rafal",
        last_name: "Swiader",
        job: "ServiceDesk",
        email: "s26276@pjwstk.edu.pl",
        location:
		{
            city: "Warszawa",
            address:
			{streetname: "Uliczna", streetnumber: "123"	}
        },
        description: "Si non potest aliquid fieri, nescio, ut veniam et faciam",
        height: "182.00",
        weight: "76.30",
        birth_date: "1998-08-14T12:00:00Z",
        nationality: "Poland",
        credit:	
		[
		{
            type: "mastercard",
            number: "123456789123456789",
            currency: "PLN",
            balance: "30000.99"
        }
		]
})