define([
    'base/js/namespace',
    'base/js/promises',
    'base/js/utils'
], function(
	Jupyter,
	promises,
	utils
) {
    function load_ipython_extension() {
        promises.app_initialized.then(function (appName) {
    
    	    if (appName !== 'NotebookApp') return;
    	    Jupyter.toolbar.add_buttons_group([
                   {
                   	'label'   : 'publish to nbviewer',
                   	'icon'    : 'fa-picture-o',
                  	'callback': function () {
                            var notebook = Jupyter.notebook;
			    var that     = notebook;
			    var base_url = notebook.base_url;
			    var w        = window.open('', Jupyter._target);
			    var parent   = '/nbviewer';
			    var p;
			    if (notebook.dirty && notebook.writable) {
                                p = notebook.save_notebook(true);
			    } else {
				p = Promise.resolve();
		            }
			    return p.then(function() {
				return that.contents.copy(that.notebook_path, parent).then(
				    function (data) {
					var path_elements = utils.url_path_split(utils.encode_uri_components(data.path));
					var path = utils.url_path_join(
					    '/jupyter', 'services', 'nbviewer', 'localfile',
					    path_elements[path_elements.length - 1]
					);
					w.location = path;
				    },
				    function (error) {
					w.close();
					that.events.trigger('notebook_copy_failed', error);
				    }
				);
			    });
                   	}
                   }
    	    ]);
        });
    }
    
    return {
        load_ipython_extension: load_ipython_extension
    };
});
