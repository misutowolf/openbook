Meteor.startup (function() {

	if (Prefixes.find().count() == 0) {

		prefixes = [
			{
				"prefix": "ADNR"
			},
			{
				"prefix": "AHNR"
			},
			{
				"prefix": "ANTH"
			},
			{
				"prefix": "ARTG"
			},
			{
				"prefix": "ARTH"
			},
			{
				"prefix": "ARTP"
			},
			{
				"prefix": "ARTS"
			},
			{
				"prefix": "BIOL"
			},
			{
				"prefix": "BSNR"
			},
			{
				"prefix": "BUAC"
			},
			{
				"prefix": "BUBA"
			},
			{
				"prefix": "BUFI"
			},
			{
				"prefix": "BUHE"
			},
			{
				"prefix": "BUIS"
			},
			{
				"prefix": "BULA"
			},
			{
				"prefix": "BULW"
			},
			{
				"prefix": "BUMG"
			},
			{
				"prefix": "BUMK"
			},
			{
				"prefix": "BUOA"
			},
			{
				"prefix": "BURE"
			},
			{
				"prefix": "CHEM"
			},
			{
				"prefix": "COMM"
			},
			{
				"prefix": "DTHY"
			},
			{
				"prefix": "ECON"
			},
			{
				"prefix": "EDAE"
			},
			{
				"prefix": "EDCI"
			},
			{
				"prefix": "EDEC"
			},
			{
				"prefix": "EDIS"
			},
			{
				"prefix": "EDME"
			},
			{
				"prefix": "EDRE"
			},
			{
				"prefix": "EDUC"
			},
			{
				"prefix": "EDVA"
			},
			{
				"prefix": "ETMP"
			},
			{
				"prefix": "ENGL"
			},
			{
				"prefix": "ETCA"
			},
			{
				"prefix": "ETCO"
			},
			{
				"prefix": "ETEC"
			},
			{
				"prefix": "ETEM"
			},
			{
				"prefix": "ETEV"
			},
			{
				"prefix": "ETGG"
			},
			{
				"prefix": "ETPL"
			},
			{
				"prefix": "ETRO"
			},
			{
				"prefix": "FREN"
			},
			{
				"prefix": "GEOG"
			},
			{
				"prefix": "GEOL"
			},
			{
				"prefix": "GOVT"
			},
			{
				"prefix": "HIST"
			},
			{
				"prefix": "IDST"
			},
			{
				"prefix": "LING"
			},
			{
				"prefix": "MATH"
			},
			{
				"prefix": "MTLC"
			},
			{
				"prefix": "MOT"
			},
			{
				"prefix": "MUSI"
			},
			{
				"prefix": "NTSC"
			},
			{
				"prefix": "OTAT"
			},
			{
				"prefix": "PHIL"
			},
			{
				"prefix": "PHYS"
			},
			{
				"prefix": "PSCI"
			},
			{
				"prefix": "PSYC"
			},
			{
				"prefix": "PTAT"
			},
			{
				"prefix": "RDLT"
			},
			{
				"prefix": "ROCI"
			},
			{
				"prefix": "RPTT"
			},
			{
				"prefix": "SIGN"
			},
			{
				"prefix": "SOCI"
			},
			{
				"prefix": "SOSC"
			},
			{
				"prefix": "SPAN"
			},
			{
				"prefix": "SSAT"
			},
			{
				"prefix": "SSES"
			},
			{
				"prefix": "SSPE"
			},
			{
				"prefix": "SSSM"
			},
			{
				"prefix": "THAR"
			},
			{
				"prefix": "UNIV"
			}
		];

		// Insert array into prefixes collection as documents.
		for (prefix in prefixes) {
			console.log(JSON.stringify(prefixes[prefix]));
			Prefixes.insert(prefixes[prefix]);
		}

		// Show output in console.
		pNum = Prefixes.find().count();
		console.log(pNum + " prefixes now exist in the database!");
	}

});