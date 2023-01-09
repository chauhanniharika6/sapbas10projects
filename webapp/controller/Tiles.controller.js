sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function(Controller, MessageBox, JSONModel) {
	"use strict";

	return Controller.extend("NE.nmallpro.controller.Tiles", {
		onInit: function(){
			var myTilesModel = new JSONModel("./model/tiles.json");
			this.getView().setModel(myTilesModel,"tiles");
		},
		
/*		press: function(oRoute) {
			debugger;
			alert("Hello");
		},*/
		
		onTilePress: function(oRoute) {
			this.getOwnerComponent().getRouter().navTo(oRoute);
		}
	});
});
