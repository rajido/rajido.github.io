/**
 * shamy.gss
 *
 * Retrieves data from a public Google spreadsheet following a specific template.
 * It maps nodes from the X to the Y axis using RACI relationships.
 *
 * @author Rafael C Jimenez
 * @version 0.9.0
 */

var shamy = shamy || {};
shamy.gss = shamy.gss || {};

    shamy.gss.getProcessedData = function(gssData,raciDataLoc){
        var labelsLoc = shamy.gss._getLabelsLoc(raciDataLoc);
        var mapping = shamy.gss._getMapping(gssData);
        var xLabels = shamy.gss._getXLabels(mapping,labelsLoc.xLabelsLoc);
        var yLabels = shamy.gss._getYLabels(mapping,labelsLoc.yLabelsLoc);
        var shamyXinputData = shamy.gss._getShamyXinputData(raciDataLoc,xLabels,yLabels,mapping);
        var shamyYinputData = shamy.gss._getShamyYinputData(yLabels);
        var shamyInputData = shamyXinputData.concat(shamyYinputData);
        return shamyInputData; // [{"name":"PT.P2","size":3812,"imports":[{"C":"Compute.T1"}]}
    }



    shamy.gss._getShamyXinputData = function(raciDataLoc,xLabels,yLabels,mapping){
        var data = [];
        for(var x=raciDataLoc.start.col; x<=raciDataLoc.end.col; x++) {
            var xNodeLabel = xLabels[x];
            var yNodeLabels = [];
            var rows = mapping.cols2rows[x];
            for (var y in rows) { // y = row number
                if(y >= raciDataLoc.start.row && y <= raciDataLoc.end.row ){
                    var raciValue = "";
                    var yLabel = "";
                    if (rows.hasOwnProperty(y)) {
                        raciValue = rows[y];
                    }
                    if(y in yLabels){
                        yLabel = yLabels[y];
                    }
                    var yNodeLabel = {};
                    yNodeLabel[raciValue] = yLabel;
                    yNodeLabels.push(yNodeLabel);
                }
            }
            data.push({"name":xNodeLabel,"size":3000,"imports":yNodeLabels});
        }
        return data;
    }

    shamy.gss._getShamyYinputData = function(yLabels){
        var data = [];
         for (var y in yLabels){
            var label = yLabels[y];
            var imports = [];
            data.push({"name":label,"size":3000,"imports":imports});
        }
        return data;
    }

    shamy.gss._getYLabels = function(mapping,yLabelsLoc){
        var yLabels = {}; // row:label
        for(var y=yLabelsLoc.start.row; y<=yLabelsLoc.end.row; y++){
            var cols = mapping.rows2cols[y];
            var yLabel = "";
            for(var x=yLabelsLoc.start.col; x<=yLabelsLoc.end.col; x++) {
                if(x in cols){
                    yLabel += cols[x] + ".";
                }
            }
            yLabel = yLabel.slice(0, -1);
            yLabels[y] = yLabel;
        }
        return yLabels;
    }

    shamy.gss._getXLabels = function(mapping,xLabelsLoc){
        var xLabels = {}; // col:label
        for(var x=xLabelsLoc.start.col; x<=xLabelsLoc.end.col; x++){
            var rows = mapping.cols2rows[x];
            var xLabel = "";
            for(var y=xLabelsLoc.start.row; y<=xLabelsLoc.end.row; y++) {
                if(y in rows){
                    xLabel += rows[y] + ".";
                }
            }
            xLabel = xLabel.slice(0, -1);
            xLabels[x] = xLabel;
        }
        return xLabels;
    }


    shamy.gss._getMapping = function(gssData) {
        var rows2cols = {};
        var cols2rows = {};

        for(var r=0; r<gssData.length; r++) {
            var cell = gssData[r]["gs$cell"];
            var val = cell["$t"];
            /** ROWs **/ //Object {row: "1", col: "4", $t: "CZ"}
            if (!(cell.row in rows2cols)){
                rows2cols[cell.row] = {};
            }
            rows2cols[cell.row][cell.col] = val;
            /** COLs **/
            if (!(cell.col in cols2rows)){
                cols2rows[cell.col] = {};
            }
            cols2rows[cell.col][cell.row] = val;
        }
        return {"rows2cols":rows2cols, "cols2rows":cols2rows};
    }




    shamy.gss._getLabelsLoc = function(raciDataLoc){
        /** TeCG **/
        var xLabelsLoc = {
            start: {
                col: raciDataLoc.start.col,
                row: 1
            },
            end: {
                col: raciDataLoc.end.col,
                row: raciDataLoc.start.row - 1
            }
        };
        /** activitites **/
        var yLabelsLoc = {
            start: {
                col: 1,
                row: raciDataLoc.start.row
            },
            end: {
               col:raciDataLoc.start.col - 1,
               row:raciDataLoc.end.row
           }
        };
        return {"xLabelsLoc":xLabelsLoc, "yLabelsLoc":yLabelsLoc};
    }
