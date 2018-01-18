({
    editAccount: function(cmp, event, helper) {
        cmp.set('v.editMode', true);
    },
    handleAccountLoaded: function(cmp, event, helper) {
        // do stuff while loading, like showing a spinner
    },
    handleAccountSubmitted: function(cmp, event, helper) {
        // do stuff while submitting, like showing a spinner
    },
    handleAccountSaved: function(cmp, event, helper) {
        cmp.set('v.editMode', false);
    }
})