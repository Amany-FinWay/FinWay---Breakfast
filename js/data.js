var myData = {
	"Employees": {}
}
/* Start Amany's Order*/
let sandwichesNameAmany = document.getElementsByClassName("sandwichesNameAmany"),
	quantityNumberAmany = document.getElementsByClassName("quantityNumberAmany");
for (let kkk = 0; kkk < sandwichesNameAmany.length; kkk++) {
	sandwichesNameAmany[kkk].onkeyup = function () {
		console.log(sandwichesNameAmany[kkk].value);
		if (sandwichesNameAmany[kkk].value == "اومليت رومي") {
			document.getElementById("PayAmount").innerHTML = Number(11);
		} else if (sandwichesNameAmany[kkk].value == "بطاطس كاتشب مايونيز") {
			let total = 0;
			var span_number = parseFloat(Number(8) + Number(2) + Number(document.getElementById("PayAmount").textContent));
			total += span_number;
			document.getElementById("PayAmount").textContent = total
		}
	}
}

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
	myData.Employees.Amany = [];
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

/* Start Donia's Order */

let sandwichesNameDonia = document.getElementsByClassName("sandwichesNameDonia"),
	quantityNumberDonia = document.getElementsByClassName("quantityNumberDonia");

function create_trDonia(tableDonia_id) {
	let table_bodyDonia = document.getElementById(tableDonia_id),
		first_trDonia = table_bodyDonia.firstElementChild
	tr_cloneDonia = first_trDonia.cloneNode(true);

	table_bodyDonia.append(tr_cloneDonia);

	clean_first_trDonia(table_bodyDonia.firstElementChild);
}

function clean_first_trDonia(firstTrDonia) {
	let childrenDonia = firstTrDonia.children;
	childrenDonia = Array.isArray(childrenDonia) ? childrenDonia : Object.values(childrenDonia);
	childrenDonia.forEach(x => {
		if (x !== firstTrDonia.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trDonia(This) {
	myData.Employees.Donia = [];
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

function AddDoniaOrder() {
	myData.Employees.Donia = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameDonia.length; i++) {
		for (var i = 0; i < quantityNumberDonia.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameDonia[i].value,
				quantity: Number(quantityNumberDonia[i].value)
			};
		}

	}

	myData.Employees.Donia = Object.assign(titlen, myData.Employees.Donia);
	console.log(myData);
}
/* End Donia's Order */

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
	myData.Employees.Abduallah = [];
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
	myData.Employees.Maysarah = [];
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
	myData.Employees.Elshreif = [];
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
/* Start Menecy's Order */
let sandwichesNameMenecy = document.getElementsByClassName("sandwichesNameMenecy"),
	quantityNumberMenecy = document.getElementsByClassName("quantityNumberMenecy");

function create_trMenecy(tableMenecy_id) {
	let table_bodyMenecy = document.getElementById(tableMenecy_id),
		first_trMenecy = table_bodyMenecy.firstElementChild
	tr_cloneMenecy = first_trMenecy.cloneNode(true);

	table_bodyMenecy.append(tr_cloneMenecy);

	clean_first_trMenecy(table_bodyMenecy.firstElementChild);
}

function clean_first_trMenecy(firstTrMenecy) {
	let childrenMenecy = firstTrMenecy.children;
	childrenMenecy = Array.isArray(childrenMenecy) ? childrenMenecy : Object.values(childrenMenecy);
	childrenMenecy.forEach(x => {
		if (x !== firstTrMenecy.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trMenecy(This) {
	myData.Employees.Menecy = [];
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

function AddMenecyOrder() {
	myData.Employees.Menecy = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameMenecy.length; i++) {
		for (var i = 0; i < quantityNumberMenecy.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameMenecy[i].value,
				quantity: Number(quantityNumberMenecy[i].value)
			};
		}

		myData.Employees.Menecy = Object.assign(titlen, myData.Employees.Menecy);
		console.log(myData);
	}
}
/* End Menecy's Order */
/* Start Khaled's Order */
let sandwichesNameKhaled = document.getElementsByClassName("sandwichesNameKhaled"),
	quantityNumberKhaled = document.getElementsByClassName("quantityNumberKhaled");

function create_trKhaled(tableKhaled_id) {
	let table_bodyKhaled = document.getElementById(tableKhaled_id),
		first_trKhaled = table_bodyKhaled.firstElementChild
	tr_cloneKhaled = first_trKhaled.cloneNode(true);

	table_bodyKhaled.append(tr_cloneKhaled);

	clean_first_trKhaled(table_bodyKhaled.firstElementChild);
}

function clean_first_trKhaled(firstTrKhaled) {
	let childrenKhaled = firstTrKhaled.children;
	childrenKhaled = Array.isArray(childrenKhaled) ? childrenKhaled : Object.values(childrenKhaled);
	childrenKhaled.forEach(x => {
		if (x !== firstTrKhaled.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trKhaled(This) {
	myData.Employees.Khaled = [];
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

function AddKhaledOrder() {
	myData.Employees.Khaled = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameKhaled.length; i++) {
		for (var i = 0; i < quantityNumberKhaled.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameKhaled[i].value,
				quantity: Number(quantityNumberKhaled[i].value)
			};
		}

		myData.Employees.Khaled = Object.assign(titlen, myData.Employees.Khaled);
		console.log(myData);
	}
}
/* End Khaled's Order */
/* Start Shehab's Order */
let sandwichesNameShehab = document.getElementsByClassName("sandwichesNameShehab"),
	quantityNumberShehab = document.getElementsByClassName("quantityNumberShehab");

function create_trShehab(tableShehab_id) {
	let table_bodyShehab = document.getElementById(tableShehab_id),
		first_trShehab = table_bodyShehab.firstElementChild
	tr_cloneShehab = first_trShehab.cloneNode(true);

	table_bodyShehab.append(tr_cloneShehab);

	clean_first_trShehab(table_bodyShehab.firstElementChild);
}

function clean_first_trShehab(firstTrShehab) {
	let childrenShehab = firstTrShehab.children;
	childrenShehab = Array.isArray(childrenShehab) ? childrenShehab : Object.values(childrenShehab);
	childrenShehab.forEach(x => {
		if (x !== firstTrShehab.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trShehab(This) {
	myData.Employees.Shehab = [];
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

function AddShehabOrder() {
	myData.Employees.Shehab = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameShehab.length; i++) {
		for (var i = 0; i < quantityNumberShehab.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameShehab[i].value,
				quantity: Number(quantityNumberShehab[i].value)
			};
		}

		myData.Employees.Shehab = Object.assign(titlen, myData.Employees.Shehab);
		console.log(myData);
	}
}
/* End Shehab's Order */
/* Start Pola's Order */
let sandwichesNamePola = document.getElementsByClassName("sandwichesNamePola"),
	quantityNumberPola = document.getElementsByClassName("quantityNumberPola");

function create_trPola(tablePola_id) {
	let table_bodyPola = document.getElementById(tablePola_id),
		first_trPola = table_bodyPola.firstElementChild
	tr_clonePola = first_trPola.cloneNode(true);

	table_bodyPola.append(tr_clonePola);

	clean_first_trPola(table_bodyPola.firstElementChild);
}

function clean_first_trPola(firstTrPola) {
	let childrenPola = firstTrPola.children;
	childrenPola = Array.isArray(childrenPola) ? childrenPola : Object.values(childrenPola);
	childrenPola.forEach(x => {
		if (x !== firstTrPola.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trPola(This) {
	myData.Employees.Pola = [];
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

function AddPolaOrder() {
	myData.Employees.Pola = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNamePola.length; i++) {
		for (var i = 0; i < quantityNumberPola.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNamePola[i].value,
				quantity: Number(quantityNumberPola[i].value)
			};
		}

		myData.Employees.Pola = Object.assign(titlen, myData.Employees.Pola);
		console.log(myData);
	}
}
/* End Pola's Order */
/* Start Ragab's Order */
let sandwichesNameRagab = document.getElementsByClassName("sandwichesNameRagab"),
	quantityNumberRagab = document.getElementsByClassName("quantityNumberRagab");

function create_trRagab(tableRagab_id) {
	let table_bodyRagab = document.getElementById(tableRagab_id),
		first_trRagab = table_bodyRagab.firstElementChild
	tr_cloneRagab = first_trRagab.cloneNode(true);

	table_bodyRagab.append(tr_cloneRagab);

	clean_first_trRagab(table_bodyRagab.firstElementChild);
}

function clean_first_trRagab(firstTrRagab) {
	let childrenRagab = firstTrRagab.children;
	childrenRagab = Array.isArray(childrenRagab) ? childrenRagab : Object.values(childrenRagab);
	childrenRagab.forEach(x => {
		if (x !== firstTrRagab.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trRagab(This) {
	myData.Employees.Ragab = [];
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

function AddRagabOrder() {
	myData.Employees.Ragab = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameRagab.length; i++) {
		for (var i = 0; i < quantityNumberRagab.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameRagab[i].value,
				quantity: Number(quantityNumberRagab[i].value)
			};
		}

		myData.Employees.Ragab = Object.assign(titlen, myData.Employees.Ragab);
		console.log(myData);
	}
}
/* End Ragab's Order */
/* Start Soliman's Order */
let sandwichesNameSoliman = document.getElementsByClassName("sandwichesNameSoliman"),
	quantityNumberSoliman = document.getElementsByClassName("quantityNumberSoliman");

function create_trSoliman(tableSoliman_id) {
	let table_bodySoliman = document.getElementById(tableSoliman_id),
		first_trSoliman = table_bodySoliman.firstElementChild
	tr_cloneSoliman = first_trSoliman.cloneNode(true);

	table_bodySoliman.append(tr_cloneSoliman);

	clean_first_trSoliman(table_bodySoliman.firstElementChild);
}

function clean_first_trSoliman(firstTrSoliman) {
	let childrenSoliman = firstTrSoliman.children;
	childrenSoliman = Array.isArray(childrenSoliman) ? childrenSoliman : Object.values(childrenSoliman);
	childrenSoliman.forEach(x => {
		if (x !== firstTrSoliman.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trSoliman(This) {
	myData.Employees.Soliman = [];
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

function AddSolimanOrder() {
	myData.Employees.Soliman = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameSoliman.length; i++) {
		for (var i = 0; i < quantityNumberSoliman.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameSoliman[i].value,
				quantity: Number(quantityNumberSoliman[i].value)
			};
		}

		myData.Employees.Soliman = Object.assign(titlen, myData.Employees.Soliman);
		console.log(myData);
	}
}
/* End Soliman's Order */
/* Start Saeed's Order */
let sandwichesNameSaeed = document.getElementsByClassName("sandwichesNameSaeed"),
	quantityNumberSaeed = document.getElementsByClassName("quantityNumberSaeed");

function create_trSaeed(tableSaeed_id) {
	let table_bodySaeed = document.getElementById(tableSaeed_id),
		first_trSaeed = table_bodySaeed.firstElementChild
	tr_cloneSaeed = first_trSaeed.cloneNode(true);

	table_bodySaeed.append(tr_cloneSaeed);

	clean_first_trSaeed(table_bodySaeed.firstElementChild);
}

function clean_first_trSaeed(firstTrSaeed) {
	let childrenSaeed = firstTrSaeed.children;
	childrenSaeed = Array.isArray(childrenSaeed) ? childrenSaeed : Object.values(childrenSaeed);
	childrenSaeed.forEach(x => {
		if (x !== firstTrSaeed.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trSaeed(This) {
	myData.Employees.Saeed = [];
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

function AddSaeedOrder() {
	myData.Employees.Saeed = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameSaeed.length; i++) {
		for (var i = 0; i < quantityNumberSaeed.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameSaeed[i].value,
				quantity: Number(quantityNumberSaeed[i].value)
			};
		}

		myData.Employees.Saeed = Object.assign(titlen, myData.Employees.Saeed);
		console.log(myData);
	}
}
/* End Saeed's Order */
/* Start Islam's Order */
let sandwichesNameIslam = document.getElementsByClassName("sandwichesNameIslam"),
	quantityNumberIslam = document.getElementsByClassName("quantityNumberIslam");

function create_trIslam(tableIslam_id) {
	let table_bodyIslam = document.getElementById(tableIslam_id),
		first_trIslam = table_bodyIslam.firstElementChild
	tr_cloneIslam = first_trIslam.cloneNode(true);

	table_bodyIslam.append(tr_cloneIslam);

	clean_first_trIslam(table_bodyIslam.firstElementChild);
}

function clean_first_trIslam(firstTrIslam) {
	let childrenIslam = firstTrIslam.children;
	childrenIslam = Array.isArray(childrenIslam) ? childrenIslam : Object.values(childrenIslam);
	childrenIslam.forEach(x => {
		if (x !== firstTrIslam.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trIslam(This) {
	myData.Employees.Islam = [];
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

function AddIslamOrder() {
	myData.Employees.Islam = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameIslam.length; i++) {
		for (var i = 0; i < quantityNumberIslam.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameIslam[i].value,
				quantity: Number(quantityNumberIslam[i].value)
			};
		}

		myData.Employees.Islam = Object.assign(titlen, myData.Employees.Islam);
		console.log(myData);
	}
}
/* End Islam's Order */
/* Start Waleed's Order */
let sandwichesNameWaleed = document.getElementsByClassName("sandwichesNameWaleed"),
	quantityNumberWaleed = document.getElementsByClassName("quantityNumberWaleed");

function create_trWaleed(tableWaleed_id) {
	let table_bodyWaleed = document.getElementById(tableWaleed_id),
		first_trWaleed = table_bodyWaleed.firstElementChild
	tr_cloneWaleed = first_trWaleed.cloneNode(true);

	table_bodyWaleed.append(tr_cloneWaleed);

	clean_first_trWaleed(table_bodyWaleed.firstElementChild);
}

function clean_first_trWaleed(firstTrWaleed) {
	let childrenWaleed = firstTrWaleed.children;
	childrenWaleed = Array.isArray(childrenWaleed) ? childrenWaleed : Object.values(childrenWaleed);
	childrenWaleed.forEach(x => {
		if (x !== firstTrWaleed.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trWaleed(This) {
	myData.Employees.Waleed = [];
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

function AddWaleedOrder() {
	myData.Employees.Waleed = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameWaleed.length; i++) {
		for (var i = 0; i < quantityNumberWaleed.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameWaleed[i].value,
				quantity: Number(quantityNumberWaleed[i].value)
			};
		}

		myData.Employees.Waleed = Object.assign(titlen, myData.Employees.Waleed);
		console.log(myData);
	}
}
/* End Waleed's Order */
/* Start Gamal's Order */
let sandwichesNameGamal = document.getElementsByClassName("sandwichesNameGamal"),
	quantityNumberGamal = document.getElementsByClassName("quantityNumberGamal");

function create_trGamal(tableGamal_id) {
	let table_bodyGamal = document.getElementById(tableGamal_id),
		first_trGamal = table_bodyGamal.firstElementChild
	tr_cloneGamal = first_trGamal.cloneNode(true);

	table_bodyGamal.append(tr_cloneGamal);

	clean_first_trGamal(table_bodyGamal.firstElementChild);
}

function clean_first_trGamal(firstTrGamal) {
	let childrenGamal = firstTrGamal.children;
	childrenGamal = Array.isArray(childrenGamal) ? childrenGamal : Object.values(childrenGamal);
	childrenGamal.forEach(x => {
		if (x !== firstTrGamal.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trGamal(This) {
	myData.Employees.Gamal = [];
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

function AddGamalOrder() {
	myData.Employees.Gamal = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameGamal.length; i++) {
		for (var i = 0; i < quantityNumberGamal.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameGamal[i].value,
				quantity: Number(quantityNumberGamal[i].value)
			};
		}

		myData.Employees.Gamal = Object.assign(titlen, myData.Employees.Gamal);
		console.log(myData);
	}
}
/* End Gamal's Order */
/* Start Gamal's Order */
let sandwichesNameElGammal = document.getElementsByClassName("sandwichesNameElGammal"),
	quantityNumberElGammal = document.getElementsByClassName("quantityNumberElGammal");

function create_trGamal(tableElGammal_id) {
	let table_bodyElGammal = document.getElementById(tableElGammal_id),
		first_trElGammal = table_bodyElGammal.firstElementChild
	tr_cloneElGammal = first_trElGammal.cloneNode(true);

	table_bodyElGammal.append(tr_cloneElGammal);

	clean_first_trElGammal(table_bodyElGammal.firstElementChild);
}

function clean_first_trElGammal(firstTrElGammal) {
	let childrenElGammal = firstTrElGammal.children;
	childrenElGammal = Array.isArray(childrenElGammal) ? childrenElGammal : Object.values(childrenElGammal);
	childrenElGammal.forEach(x => {
		if (x !== firstTrElGammal.lastElementChild) {
			x.firstElementChild.value = '';
		}
	});
}

function remove_trElGammal(This) {
	myData.Employees.ElGammal = [];
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

function AddElGammalOrder() {
	myData.Employees.ElGammal = [];
	var titlen = [];
	for (var i = 0; i < sandwichesNameElGammal.length; i++) {
		for (var i = 0; i < quantityNumberElGammal.length; i++) {
			titlen[i] = {
				sandwiches: sandwichesNameElGammal[i].value,
				quantity: Number(quantityNumberElGammal[i].value)
			};
		}

		myData.Employees.ElGammal = Object.assign(titlen, myData.Employees.ElGammal);
		console.log(myData);
	}
}
/* End Gamal's Order */
function GetFinalOrder() {
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
			FinalOrder.push({
				"sandwiches": myData.Employees[make][i].sandwiches,
				"quantity": myData.Employees[make][i].quantity
			})
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
		obj2.push({
			sandwiches: prop,
			quantity: holder[prop]
		});
	}
	console.log(obj2);
	FinalOrderTable = "<table id='OrderTable'><tr><th>Sandwiches</th><th>#</th></tr>";
	for (var i = 0; i < obj2.length; i++) {
		FinalOrderTable += "<tr>";
		FinalOrderTable += "<td>" + obj2[i].sandwiches + "</td>";
		FinalOrderTable += "<td>" + obj2[i].quantity + "</td>";
		FinalOrderTable += "</tr>";

	}
	FinalOrderTable += "</table>";
	document.getElementById("Finalorder-container").innerHTML = FinalOrderTable;
}