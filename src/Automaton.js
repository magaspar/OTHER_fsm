export default class Automaton {
  constructor(props) {
    this.state = "q1";
  }


  readCommands(commands) {
    for (var i = 0; i < commands.length; i++) {
     	if (this.state == "q1") {
     		if (commands[i] == "1") {
     			this.state = "q2";
     		}
     		else {
     			continue;
     		}
     	}
     	else if (this.state == "q2") {
     		if (commands[i] == "0") {
     			this.state = "q3";
     		}
     		else {
     			continue;
     		}
     	}
     	else if (this.state == "q3") {
     		if (commands) {
     			this.state = "q2";
     		}
     	}
     }
     if (this.state == "q2") {
     	return true;
     } else {
     	return false;
     }
  }
}