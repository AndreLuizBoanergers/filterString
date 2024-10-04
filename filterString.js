class StringFilter {
	constructor(){
		
	}

	comStr(arrayStr, arrayInput){
		return arrayStr.filter(strIn => 
			this.arrayStr.some(str =>
				strIn.toLowerCase().indexOf(str.toLowerCase()) >= 0
			)
		);
	}
	semStr(arrayStr, arrayInput){
		return arrayInput.filter(strIn =>
			this.arrayStr.some(str =>
				strIn.toLowerCase().indexOf(str.toLowerCase()) < 0
			)
		);
	}
}

module.exports = StringFilter; 
