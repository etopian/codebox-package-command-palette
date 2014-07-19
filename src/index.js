define([
    "text!src/templates/command.html"
], function(commandTemplate) {
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");

    commands.register({
        id: "palette.open",
        title: "Open Command Palette",
        shortcuts: [
            "mod+shift+p"
        ],
        run: function() {
            return dialogs.list(commands, {
                template: commandTemplate,
                filter: function(command) {
                    return command.get("palette") !== false && command.isValidContext();
                }
            })
            .then(function(command) {
                return command.run();
            });
        }
    });
});