function take_val(val) {
	var last_sym = document.getElementById('field').value.slice(-1);
	var oper = ['+','-','*','/'];
	if(oper.indexOf(val)!=-1 && oper.indexOf(last_sym)!=-1){           
		back()
	}
	if(!(
	((last_sym=='' || last_sym=='.') && (oper.indexOf(val)!=-1 ||val=='.' ))||  
	(val=='.' && (oper.indexOf(last_sym)!=-1 || last_sym=='.')) ||              
	((val=='.' && last_num_contain_point())                                     
	)))
	{	                                                                                                 
	document.getElementById('field').value = document.getElementById('field').value + val;
	}
}

function equal() {
    var v = document.getElementById('field').value;
    document.getElementById('field').value = eval(v);
}

function clean() {
    document.getElementById('field').value = "";
}

function back() {
    var v = document.getElementById('field').value;
    document.getElementById('field').value = v.substring(0,v.length-1);
}

function last_num_contain_point() {
	var str = document.getElementById('field').value;
	var last_sym = str.slice(-1);
	if(['+','-','*','/','.',''].indexOf(last_sym)==-1) {
		while(['+','-','*','/',''].indexOf(last_sym)==-1)
		{
			str=str.substring(0, str.length-1);
		    last_sym = str.slice(-1);
			console.log(str);
			if(last_sym=='.') { 
				return true;
		    }
		}
	}
	return false;
}