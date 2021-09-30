let brands = [ [1, "Lada"], [2, "Audi"], [3, "Toyota"] ];
let positions = [ [10, "Директор"], [20, "Инженер"], [30, "Менеджер"] ];
let employees = [
    [1, "Сидоров Иван Петрович", 1, 10],
    [2, "Клюквина Анастасия Викторовна", 1, 30],
    [3, "Yoshimoro Katsumi", 3, 10],
    [4, "Albrecht Wallenstein", 2, 20],
    [5, "Архипов Федот Ярополкович", 1, 20],
    [6, "Синицына Ксения Игоревна", 1, 30],
    [7, "Gustaf Grefberg", 2, 10],
    [8, "Simidzu Koyama", 3, 20],
    [9, "Miura Hirana", 3, 20],
    [10, "Кузьмин Егор Владимирович", 1, 30],
    [11, "Мазурик Алёна Васильевна", 1, 20],
    [12, "Gudrun Ensslin", 2, 30],
    [13, "Ernst Rommel", 2, 20]
];
let posCheckboxes = [];

$(document).ready(function(){
    brandsFilling();
    posFilling();
    $('.positions input').on('click', function(){
        if ($(this).is(':checked')){
            posCheckboxes.push(this.value);
        } else {
            let i = posCheckboxes.indexOf(this.value)
            if(i >= 0) {
               posCheckboxes.splice(i,1);
            }
        }
        employeesFilling();
    })
})



function brandsFilling() {
    for (i=0; i<brands.length; i++){
        for(j=0; j<brands[i].length; j++){
            if (j%2!=0) {
                $('.brands').append("<option value='"+ brands[i][j-1] +"'>" + brands[i][j] + "</option>");
            }
        }
    }
}

function posFilling() {
    for (i=0; i<positions.length; i++){
        for(j=0; j<positions.length-1; j++){
            if (j%2!=0) {
                $('.positions').append("<p><input type='checkbox' value='" + positions[i][j-1] + "'>" + positions[i][j] + "</p>");
            }
        }
    }
}

function employeesFilling() {
    $('.employees').prop('disabled', false);
    let br = $('.brands :selected').val();
    console.log('Выбранный бренд(id): '+$('.brands :selected').val());
    while($('.employees option').length != 1) {
        $('.employees option')[1].remove();
    }
    let employeesChecked = [];
    for (i=0; i<posCheckboxes.length; i++) {
        for (j=0; j<employees.length; j++) {
            if (posCheckboxes[i] == employees[j][3]){
                employeesChecked.push(employees[j])
            }
        }
    }
    for (i=0; i<employeesChecked.length; i++){
        if (br == employeesChecked[i][2]){
            $('.employees').append("<option value='"+ employeesChecked[i][0] +"'>" + employeesChecked[i][1] + "</option>")
        }
    }
}

function outputRender() {
    let outputKey = []
    for (i=0;i<employees.length;i++){
        if ($('.employees').val() == employees[i][0]) {
            outputKey.push(employees[i][1])
        }
    }
    for (i=0; i<brands.length;i++){
        if ($('.brands').val() == brands[i][0]) {
            outputKey.push(brands[i][1])
        }
    }
    for (i=0; i<employees.length;i++){
        if (outputKey[0] == employees[i][1]){
            outputKey.push(employees[i][3])
        }
    }
    for (i=0; i<positions.length;i++){
        if (outputKey[2] == positions[i][0]){
            outputKey.push(positions[i][1])
        }
    }
    outputKey.splice(2,1);
    $('.output').append("<p>" + outputKey[0] + " - " + outputKey[2].toLowerCase() + " (" + outputKey[1] + ")</p>")
}

function outputDelete() {
    $('.output p').remove();
}















