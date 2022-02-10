import { AliucordSectionID, registerCommands } from "aliucord-api/dist/modules/commands";
import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Argument, Command } from "aliucord-api/dist/types/commands";
import { Message } from "aliucord-api/dist/types/common";
import owofire from "owofire";


const owo: Command = {
  id: "owo-command",
  applicationId: AliucordSectionID,
  name: "owo",
  description: "OwO What's this",
  type: ApplicationCommandType.Chat,
  inputType: ApplicationCommandInputType.BuiltInText,
  
  options: [{
    name: "text",
    description: "text to owoify",
    type: ApplicationCommandOptionType.String,
    required: true
  }],

  execute: function (args: Argument[], message?: Message) {
    const text = args[0].value;

    return {
      content: owofire(text)
    };
  }
}

registerCommands("owo", [owo]);