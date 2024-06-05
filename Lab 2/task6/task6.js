var selection = confirm("Do you Fly ?");

if (selection == true) {
  selection = confirm("Are you wild ?");
  if (selection == true) {
    document.writeln('<div class="result">You are an Eagle</div>');
  } else {
    document.writeln('<div class="result">You are a Parrot</div>');
  }
} else {
  selection = confirm("Do you live under the sea ?");
  if (selection == true) {
    selection = confirm("Are you wild ?");
    if (selection == true) {
      document.writeln('<div class="result">You are a Shark</div>');
    } else {
      document.writeln('<div class="result">You are a Dolphin</div>');
    }
  } else {
    selection = confirm("Are you wild ?");
    if (selection == true) {
      document.writeln('<div class="result">You are a Lion</div>');
    } else {
      document.writeln('<div class="result">You are a Cat</div>');
    }
  }
}
