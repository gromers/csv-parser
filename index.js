module.exports = function (csv) {
  var result = {
    Header : [],
    Data   : []
  };

  if (csv.length === 0)
    return result;

  var isHeader = true;
  var array = [];
  var value = '';

  for(var i = 0; i < csv.length; i++) {
    var currentCharacter = csv.charAt(i);
    switch (currentCharacter) {
      case ',':
        array.push(value);
        value = '';
        break;
      case '\n':
        if (isHeader) {
          result.Header = array;
          isHeader = false;
        }
        else {
          result.Data.push(array);
        }
        break;
      default:
        value += currentCharacter;
    }
  }

  array.push(value);
  if (isHeader) {
    result.Header = array;
  }
  else {
    result.Data.push(array);
  }

  return result;
}
