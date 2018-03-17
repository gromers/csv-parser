module.exports = {

  /**
   * Converts content of csv file to an object
   *
   * @param  {String} csv
   * @return {object}
   */
  parse: function(csv) {
    if (csv.length === 0) {
      return { Header : [], Data : [] };
    }

    result = {
      Header : undefined,
      Data   : []
    };

    columns = [];
    columnContent = '';

    var handleColumnSeparator = function() {
      columns.push(columnContent);
      columnContent = '';
    }

    var handleLineMarker = function() {
      if (result.Header === undefined) {
        result.Header = columns;
      }
      else {
        result.Data.push(columns);
      }
      columns = [];
    }


    for(var i = 0; i < csv.length; i++) {
      var charCode = csv.charCodeAt(i);
      switch (charCode) {
        case 0:
          continue;
        case 44:
          handleColumnSeparator();
          break;
        case 10:
          handleColumnSeparator();
          handleLineMarker();
          break;
        default:
          columnContent += String.fromCharCode(charCode);
      }
    }

    columns.push(columnContent);
    handleLineMarker();

    return result;
  }

}
