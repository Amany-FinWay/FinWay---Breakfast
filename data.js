var myData = {
	"Employees": {}
}
/* Start Amany's Order*/
let sandwichesNameAmany = document.getElementsByClassName("sandwichesNameAmany"),
	quantityNumberAmany = document.getElementsByClassName("quantityNumberAmany");
function create_trAmany(tableAmany_id) {
	let table_bodyAmany = document.getElementById(tableAmany_id),
		first_trAmany = table_bodyAmany.firstElementChild
	tr_cloneAmany = first_trAmany.cloneNode(true);

	table_bodyAmany.append(tr_cloneAmany);

	clean_first_trAmany(table_bodyAmany.firstElementChild);
}
function clean_first_trAmany(firstTrAmany) {
	let childrenAmany = firstTrAmany.children;
	childrenAmany = Array.isArray(childrenAmany) ? childrenAmany : Object.values(childrenAmany);
	childrenAmany.forEach(x => {
		if (x !== firstTrAmany.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trAmany(This) {
	myData.Employees.Amany = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddAmanyOrder() {
	var title = [];
	for (var i = 0; i < sandwichesNameAmany.length; i++) {
		for (var i = 0; i < quantityNumberAmany.length; i++) {
			title[i] = {
				sandwiches: sandwichesNameAmany[i].value,
				quantity: Number(quantityNumberAmany[i].value)
			};
		}

	}

	myData.Employees.Amany = Object.assign(title, myData.Employees.Amany);
	console.log(myData);
}
/* End Amany's Order*/

/* Start Norhan's Order */

let sandwichesNameNorhan = document.getElementsByClassName("sandwichesNameNorhan"),
	quantityNumberNorhan = document.getElementsByClassName("quantityNumberNorhan");

function create_trNorhan(tableNorhan_id) {
	let table_bodyNorhan = document.getElementById(tableNorhan_id),
		first_trNorhan = table_bodyNorhan.firstElementChild
	tr_cloneNorhan = first_trNorhan.cloneNode(true);

	table_bodyNorhan.append(tr_cloneNorhan);

	clean_first_trNorhan(table_bodyNorhan.firstElementChild);
}
function clean_first_trNorhan(firstTrNorhan) {
	let childrenNorhan = firstTrNorhan.children;
	childrenNorhan = Array.isArray(childrenNorhan) ? childrenNorhan : Object.values(childrenNorhan);
	childrenNorhan.forEach(x => {
		if (x !== firstTrNorhan.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trNorhan(This) {
	myData.Employees.Norhan = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddNorhanOrder() {
	var titlen = [];
	for (var i = 0; i < sandwichesNameNorhan.length; i++) {
		for (var i = 0; i < quantityNumberNorhan.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameNorhan[i].value,
				quantity: Number(quantityNumberNorhan[i].value)
			};
		}

	}

	myData.Employees.Norhan = Object.assign(titlen, myData.Employees.Norhan);
	console.log(myData);
}
/* End Norhan's Order */

/* Start Hady's Order */
let sandwichesNameHady = document.getElementsByClassName("sandwichesNameHady"),
	quantityNumberHady = document.getElementsByClassName("quantityNumberHady");

function create_trHady(tableHady_id) {
	let table_bodyHady = document.getElementById(tableHady_id),
		first_trHady = table_bodyHady.firstElementChild
	tr_cloneHady = first_trHady.cloneNode(true);

	table_bodyHady.append(tr_cloneHady);

	clean_first_trHady(table_bodyHady.firstElementChild);
}
function clean_first_trHady(firstTrHady) {
	let childrenHady = firstTrHady.children;
	childrenHady = Array.isArray(childrenHady) ? childrenHady : Object.values(childrenHady);
	childrenHady.forEach(x => {
		if (x !== firstTrHady.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trHady(This) {
	myData.Employees.Hady = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddHadyOrder() {
	var titlen = [];
	for (var i = 0; i < sandwichesNameHady.length; i++) {
		for (var i = 0; i < quantityNumberHady.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameHady[i].value,
				quantity: Number(quantityNumberHady[i].value)
			};
		}

	}

	myData.Employees.Hady = Object.assign(titlen, myData.Employees.Hady);
	console.log(myData);
}
/* End Hady's Order */

/* Start Abduallah's Order */
	let sandwichesNameAbduallah = document.getElementsByClassName("sandwichesNameAbduallah"),
	quantityNumberAbduallah = document.getElementsByClassName("quantityNumberAbduallah");

function create_trAbduallah(tableAbduallah_id) {
	let table_bodyAbduallah = document.getElementById(tableAbduallah_id),
		first_trAbduallah = table_bodyAbduallah.firstElementChild
	tr_cloneAbduallah = first_trAbduallah.cloneNode(true);

	table_bodyAbduallah.append(tr_cloneAbduallah);

	clean_first_trAbduallah(table_bodyAbduallah.firstElementChild);
}
function clean_first_trAbduallah(firstTrAbduallah) {
	let childrenAbduallah = firstTrAbduallah.children;
	childrenAbduallah = Array.isArray(childrenAbduallah) ? childrenAbduallah : Object.values(childrenAbduallah);
	childrenAbduallah.forEach(x => {
		if (x !== firstTrAbduallah.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trAbduallah(This) {
	myData.Employees.Abduallah = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddAbduallahOrder() {
	var titlen = [];
	for (var i = 0; i < sandwichesNameAbduallah.length; i++) {
		for (var i = 0; i < quantityNumberAbduallah.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameAbduallah[i].value,
				quantity: Number(quantityNumberAbduallah[i].value)
			};
		}

	myData.Employees.Abduallah = Object.assign(titlen, myData.Employees.Abduallah);
	console.log(myData);
}
}
/* End Start Abduallah's Order */
/* Start Maysarah's Order */
	let sandwichesNameMaysarah = document.getElementsByClassName("sandwichesNameMaysarah"),
	quantityNumberMaysarah = document.getElementsByClassName("quantityNumberMaysarah");

function create_trMaysarah(tableMaysarah_id) {
	let table_bodyMaysarah = document.getElementById(tableMaysarah_id),
		first_trMaysarah = table_bodyMaysarah.firstElementChild
	tr_cloneMaysarah = first_trMaysarah.cloneNode(true);

	table_bodyMaysarah.append(tr_cloneMaysarah);

	clean_first_trMaysarah(table_bodyMaysarah.firstElementChild);
}
function clean_first_trMaysarah(firstTrMaysarah) {
	let childrenMaysarah = firstTrMaysarah.children;
	childrenMaysarah = Array.isArray(childrenMaysarah) ? childrenMaysarah : Object.values(childrenMaysarah);
	childrenMaysarah.forEach(x => {
		if (x !== firstTrMaysarah.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trMaysarah(This) {
	myData.Employees.Maysarah = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddMaysarahOrder() {
	var titlen = [];
	for (var i = 0; i < sandwichesNameMaysarah.length; i++) {
		for (var i = 0; i < quantityNumberMaysarah.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameMaysarah[i].value,
				quantity: Number(quantityNumberMaysarah[i].value)
			};
		}

	myData.Employees.Maysarah = Object.assign(titlen, myData.Employees.Maysarah);
	console.log(myData);
}
}
/* End Maysarah's Order */
/* Start Elshreif's Order */
	let sandwichesNameElshreif = document.getElementsByClassName("sandwichesNameElshreif"),
	quantityNumberElshreif = document.getElementsByClassName("quantityNumberElshreif");

function create_trElshreif(tableElshreif_id) {
	let table_bodyElshreif = document.getElementById(tableElshreif_id),
		first_trElshreif = table_bodyElshreif.firstElementChild
	tr_cloneElshreif = first_trElshreif.cloneNode(true);

	table_bodyElshreif.append(tr_cloneElshreif);

	clean_first_trElshreif(table_bodyElshreif.firstElementChild);
}
function clean_first_trElshreif(firstTrElshreif) {
	let childrenElshreif = firstTrElshreif.children;
	childrenElshreif = Array.isArray(childrenElshreif) ? childrenElshreif : Object.values(childrenElshreif);
	childrenElshreif.forEach(x => {
		if (x !== firstTrElshreif.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}
function remove_trElshreif(This) {
	myData.Employees.Elshreif = [];
	if (This.closest('tbody').childElementCount == 1) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "You don't have permission to delete This",
		})
	} else {
		This.closest('tr').remove();
	}
}
function AddElshreifOrder() {
	var titlen = [];
	for (var i = 0; i < sandwichesNameElshreif.length; i++) {
		for (var i = 0; i < quantityNumberElshreif.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameElshreif[i].value,
				quantity: Number(quantityNumberElshreif[i].value)
			};
		}

	myData.Employees.Elshreif = Object.assign(titlen, myData.Employees.Elshreif);
	console.log(myData);
}
}
/* End Elshreif's Order */
function GetFinalOrder(){
	document.getElementById("OrderParent").classList.remove("d-none");
		let names = [],
		sandwiches = [],
		quantity = [],
		FinalOrder = [],
		FinalOrderTable;
	for (var make in myData.Employees) {
		names.push(make);
		for (var i = 0; i < myData.Employees[make].length; i++) {
			sandwiches.push(myData.Employees[make][i].sandwiches);
			quantity.push(myData.Employees[make][i].quantity);
			FinalOrder.push(
				{ "sandwiches": myData.Employees[make][i].sandwiches, "quantity": myData.Employees[make][i].quantity }
			)
		}
	}
	var holder = {};

	FinalOrder.forEach(function (d) {
		if (holder.hasOwnProperty(d.sandwiches)) {
			holder[d.sandwiches] = holder[d.sandwiches] + d.quantity;
		} else {
			holder[d.sandwiches] = d.quantity;
		}
	});

	var obj2 = [];

	for (var prop in holder) {
		obj2.push({ sandwiches: prop, quantity: holder[prop] });
	}
	console.log(obj2);
	FinalOrderTable = "<table id='OrderTable'><tr><th>Sandwiches</th><th>#</th></tr>";
    for (var i = 0; i < obj2.length; i++) {
        FinalOrderTable+="<tr>";
        FinalOrderTable+="<td>"+obj2[i].sandwiches+"</td>";
        FinalOrderTable+="<td>"+obj2[i].quantity+"</td>";
        FinalOrderTable+="</tr>";

    }
    FinalOrderTable+="</table>";
document.getElementById("Finalorder-container").innerHTML = FinalOrderTable;
}
