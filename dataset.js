// an interface
class inter_dataset{
	constructor(props){
		this.setTable = this.setTable.bind(this);
		this.userName = '';
		this.testId = 0;
		this.picLeft = '';
		this.picRight = '';
		this.chosen = '';
	}

	setTable = function(data){
		var obj = {
			userName: data.userName,
			testId: data.testId,
			picLeft: data.picLeft,
			picRight: data.picRight,
			chosen: data.chosen
		}
    this.userName = obj.userName;
		this.testId = obj.testId;
		this.picLeft = obj.picLeft;
		this.picRight = obj.picRight;
		this.chosen = obj.chosen;

		var json = {table: []};
		json.table.push({
			userName : obj.userName,
			testId : obj.testId,
			picLeft : obj.picLeft,
			tpicRight : obj.picRight,
			tchosen : obj.chosen
		});
		//console.log(this.userName + " " + this.testId + " " + this.picLeft + " " + this.picRight + " " + this.chosen);
	}

	getTable = function(){
		var table = {
			userName: this.userName,
			testId: this.testId,
			picLeft: this.picLeft,
			picRight: this.picRight,
			chosen: this.chosen
		}
		//console.log(table.userName + " " + table.testId + " " + table.picLeft + " " + table.picRight + " " + table.chosen);
		return table;
	}
}
export {inter_dataset}
