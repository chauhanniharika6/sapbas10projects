sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("NE.nmallpro.controller.vacc.Vacc", {
		onInit: function(){
			var myVaccModel = new JSONModel("./model/vacc.json");
			this.getView().setModel(myVaccModel,"VaccModel");
		
		let myViewConfig = {
			"table":true,
			"calender":false	
			};
		let myViewModel = new JSONModel(myViewConfig);
			this.getView().setModel(myViewModel,"view");
		},
		formatDate:function(input){
			return new Date(input);
		}
	});
});