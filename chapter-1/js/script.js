function radioButtonExploration() {
    var checkedValue = $('input:radio[name="some-radio-group"]:checked').val();
    $('#result').html(checkedValue);
}