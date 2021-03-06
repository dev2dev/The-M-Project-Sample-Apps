// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: FormSample
// Controller: 
// ==========================================================================

FormSample.ApplicationController = M.Controller.extend({

    clearForm: function() {
        var form = M.ViewManager.getView('page1', 'form');
        form.clearForm();
    },

    save: function() {
        var form = M.ViewManager.getView('page1', 'form');

        /* validation */
        form.validate();

        var values = form.getFormValues();
        var n = FormSample.Name.createRecord({
            firstName: values['firstname'] ? values['firstname'] : '',
            lastName: values['lastname'] ? values['lastname'] : ''
        });
        var result = n.save();
        if(result) {
            M.DialogView.alert({
                title: 'Successful',
                message: 'The name pair was successfully saved.'
            })
        } else {
            M.DialogView.alert({
                title: 'Not Successful',
                message: 'The name pair couldn\'t be saved'
            })
        }
    },

    clear: function() {
        var names = FormSample.Name.find();
        _.each(names, function(name){
            name.del();
        });
        M.DialogView.alert({
            title: 'Cleared.',
            message: 'LocalStorage successfully cleared.'
        })
    }

});
