'use strict';

goog.provide('Blockly.DataRule.texts');

goog.require('Blockly.DataRule');

goog.provide('Blockly.Blocks.texts'); // Deprecated
goog.provide('Blockly.Constants.Text');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Text.HUE = 160;
/** @deprecated Use Blockly.Constants.Text.HUE */
Blockly.Blocks.texts.HUE = Blockly.Constants.Text.HUE;

/* ##################################################
		###################	Block Definitions ###################
		##################################################
*/

Blockly.Blocks['variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("variable"), "variable");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['ifthen'] = {
    init: function () {
        this.appendValueInput("Condition")
            .setCheck("Boolean")
            .appendField("IF");
        this.appendValueInput("Action")
            .setCheck("Boolean")
            .appendField("THEN");
        this.gradient = new ColourGradient();
        this.setColour("#74A55B");
        this.setTooltip("");
        this.setHelpUrl("");
    }
    , onchange: function () {
        /* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, {
                "start": "#5BA58C"
                , "stop": this.getColour()
            }, ["Action"]
        );
    }
};

Blockly.Blocks['ifthenelse'] = {
    init: function () {
        this.appendValueInput("Condition")
            .setCheck("Boolean")
            .appendField("IF");
        this.appendValueInput("Action")
            .setCheck("Boolean")
            .appendField("THEN");
        this.appendValueInput("AlternateAction")
            .setCheck("Boolean")
            .appendField("ELSE");
        this.gradient = new ColourGradient();
        this.setColour("#74A55B");
        this.setTooltip("");
        this.setHelpUrl("");
    }, onchange: function () {
        /* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, {
                "start": "#5BA58C"
                , "stop": this.getColour()
            }, ["Action"]
        );
    }
};

Blockly.Blocks['and'] = {
    init: function () {
        this.appendValueInput("Condition1")
            .setCheck("Boolean");
        this.appendValueInput("Condition2")
            .setCheck("Boolean")
            .appendField("AND");
        this.setOutput(true, "Boolean");
        this.setColour(202);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['or'] = {
    init: function () {
        this.appendValueInput("Condition1")
            .setCheck("Boolean");
        this.appendValueInput("Condition2")
            .setCheck("Boolean")
            .appendField("OR");
        this.setOutput(true, "Boolean");
        this.setColour(202);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['not'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Boolean")
            .appendField("NOT");
        this.setOutput(true, "Boolean");
        this.setColour(202);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['stringliteral'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("'");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("val"), "stringInput")
            .appendField("'");
        this.setInputsInline(true);
        this.setOutput(true, "string");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['numericliteral'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "numericInput");
        this.setOutput(true, "numeric");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}

var yyyy = today.getFullYear();

Blockly.Blocks['dateliteral'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('date:')
            .appendField(new Blockly.FieldDate(yyyy + '-' + mm + '-' + dd), 'dateInput');
        this.setOutput(true, "date");
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['addition'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("+");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['subtraction'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("-");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['multiplication'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("*");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['division'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("/");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['power'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("^");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['modulo'] = {
    init: function () {
        this.appendValueInput("operand1")
            .setCheck(["numeric"]);
        this.appendValueInput("operand2")
            .setCheck(["numeric"])
            .appendField("modulo");
        this.setInputsInline(true);
        this.setOutput(true, "numeric");
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};







/* ##################################################
		###################	Block Code Generations ###################
		##################################################
*/

Blockly.DataRule['variable'] = function (block) {
    var text_variable = block.getFieldValue('variable');
    var code = text_variable;
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['ifthen'] = function (block) {
    var condition = Blockly.DataRule.valueToCode(block, 'Condition', Blockly.DataRule.ORDER_ATOMIC);
    var action = Blockly.DataRule.valueToCode(block, 'Action', Blockly.DataRule.ORDER_ATOMIC);
    var code = 'IF ' + condition + ' THEN ' + action;
    return code;
};

Blockly.DataRule['ifthenelse'] = function (block) {
    var condition = Blockly.DataRule.valueToCode(block, 'Condition', Blockly.DataRule.ORDER_ATOMIC);
    var action = Blockly.DataRule.valueToCode(block, 'Action', Blockly.DataRule.ORDER_ATOMIC);
    var alternate_action = Blockly.DataRule.valueToCode(block, 'AlternateAction', Blockly.DataRule.ORDER_ATOMIC);
    var code = 'IF ' + condition + ' THEN ' + action + ' ELSE ' + alternate_action;
    return code;
};

Blockly.DataRule['and'] = function (block) {
    var value_name1 = Blockly.DataRule.valueToCode(block, 'Condition1', Blockly.DataRule.ORDER_ATOMIC);
    var value_name2 = Blockly.DataRule.valueToCode(block, 'Condition2', Blockly.DataRule.ORDER_ATOMIC);
    var code = value_name1 + ' AND ' + value_name2;
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['or'] = function (block) {
    var value_name1 = Blockly.DataRule.valueToCode(block, 'Condition1', Blockly.DataRule.ORDER_ATOMIC);
    var value_name2 = Blockly.DataRule.valueToCode(block, 'Condition2', Blockly.DataRule.ORDER_ATOMIC);
    var code = value_name1 + ' OR ' + value_name2;
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['not'] = function (block) {
    var value_name = Blockly.DataRule.valueToCode(block, 'NAME', Blockly.DataRule.ORDER_ATOMIC);
    var code = 'NOT ' + value_name + ' ';
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['stringliteral'] = function (block) {
    var text_stringinput = block.getFieldValue('stringInput');
    // TODO: Assemble DataRule into code variable.
    var code = "'" + text_stringinput + "'";
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['numericliteral'] = function (block) {
    var number_numericinput = block.getFieldValue('numericInput');
    // TODO: Assemble DataRule into code variable.
    var code = number_numericinput;
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['dateliteral'] = function (block) {
    var date_dateinput = block.getFieldValue('dateInput');
    // TODO: Assemble DataRule into code variable.
    var code = date_dateinput;
    return [code, Blockly.DataRule.ORDER_ATOMIC];
};

Blockly.DataRule['addition'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_ADDITION);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_ADDITION);
    var code = value_operand1 + '+' + value_operand2;
    return [code, Blockly.DataRule.ORDER_ADDITION];
};

Blockly.DataRule['subtraction'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_SUBTRACTION);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_SUBTRACTION);
    var code = value_operand1 + '-' + value_operand2;
    return [code, Blockly.DataRule.ORDER_SUBTRACTION];
};

Blockly.DataRule['multiplication'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_MULTIPLICATION);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_MULTIPLICATION);
    var code = value_operand1 + '*' + value_operand2;
    return [code, Blockly.DataRule.ORDER_MULTIPLICATION];
};

Blockly.DataRule['division'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_DIVISION);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_DIVISION);
    var code = value_operand1 + '/' + value_operand2;
    return [code, Blockly.DataRule.ORDER_DIVISION];
};

Blockly.DataRule['power'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_ATOMIC);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_ATOMIC);
    var code = value_operand1 + '^' + value_operand2;
    return [code, Blockly.DataRule.ORDER_NONE];
};

Blockly.DataRule['modulo'] = function (block) {
    var value_operand1 = Blockly.DataRule.valueToCode(block, 'operand1', Blockly.DataRule.ORDER_MODULUS);
    var value_operand2 = Blockly.DataRule.valueToCode(block, 'operand2', Blockly.DataRule.ORDER_MODULUS);
    var code = value_operand1 + '%' + value_operand2;
    return [code, Blockly.DataRule.ORDER_MODULUS];
};