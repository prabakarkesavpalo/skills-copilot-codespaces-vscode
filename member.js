function skillsMember() {
    var member = document.getElementById("member");
    var memberText = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "0") {
        document.getElementById("skillsMember").style.display = "none";
    } else {
        document.getElementById("skillsMember").style.display = "block";
    }
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    if (skillsMemberValue == "0") {
        document.getElementById("skillsMember").style.display = "none";
    } else {
        document.getElementById("skillsMember").style.display = "block";
    }
}